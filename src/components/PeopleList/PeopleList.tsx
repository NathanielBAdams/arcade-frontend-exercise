import React, { useState, useMemo }  from 'react';
import { Box } from '@chakra-ui/react';

import { Person } from '../../types';

import { PeopleListItem } from './PeopleListItem';
import { PeopleListSearch } from './PeopleListSearch';

export interface Props {
  people: Person[];
}

export function PeopleList({
  people,
}: Props) {
  const [searchValue, setSearchValue] = useState('');
  // might be name or a team name

  const sortedPeople = useMemo(() => {
    if (!searchValue) return people;
     const filteredPeople = people.filter((person) => {
      // additional check if team names matches search value
      return person.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      person.teamName.toLowerCase().includes(searchValue.toLowerCase())
    })
  
    const sortedPeople = filteredPeople.sort((personA, personB) => {
      if (personA.name === personB.name) {
        return 0;
      }

    return personA.name > personB.name ? 1 : -1;
  });
    return sortedPeople;
  } , [searchValue, people])
  // const sortedPeople = useMemo(() => createPeopleList(searchValue), [searchValue])


  function handleSearch(value) {
    setSearchValue(value);
  }

  return (
    <Box>
      <PeopleListSearch
        onSearch={handleSearch}
      />

      {sortedPeople.map((person) => (
        <PeopleListItem
          key={person.id}
          {...person}
        />
      ))}
    </Box>
  );
}
