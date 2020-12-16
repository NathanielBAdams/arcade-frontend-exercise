import React from 'react';
import { Box, Text, Avatar } from '@chakra-ui/react';
import { Person } from '../../types';

export type Props = Pick<Person, 'name' | 'teamName' | "imageUrl" >;

export const PeopleListItem = React.memo(function PeopleListItem({
  name,
  teamName,
  imageUrl
}: Props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      paddingY={4}
    >
      <Box marginLeft={2}>
        <Text fontSize="sm">{name}</Text>
        <Text fontSize="xs">{teamName}</Text>
      </Box>
      <Box flex="100" />
      <Avatar size="sm" name={name} src={imageUrl} alt={`${name} image`}/>
    </Box>
  );
});

