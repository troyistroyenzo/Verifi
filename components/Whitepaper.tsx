import React from 'react';
import { Stack, Text, Button } from '@chakra-ui/react';
import { FcLock } from 'react-icons/fc';

export default function SimpleCookiePreference() {
  return (
    <Stack p="5" boxShadow="5xl" m="4" borderRadius="xl" 
            backgroundImage= 'linear-gradient(78deg, rgba(159, 122, 234, 1) 0%, rgb(255, 97, 218) 100%)'
            alignItems={'center'}
            color={'white'}>
      <Stack direction="row" alignItems="center">
        <Text fontWeight={900} fontSize={"2xl"}>Start Scaling</Text>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'lg' }} fontWeight={600} textAlign={'left'} maxW={'4xl'}>
          VeriFi is the decentralized ecosystem for businesses looking to scale and enter web3
        </Text>
      </Stack>
      <Stack direction={{ base: 'column', md: 'row' }} p={5}>
          <Button variant="outline" colorScheme="cyan" color={'white'}>
            Whitepaper
          </Button>
          <Button colorScheme="pink">Docs</Button>
        </Stack>
    </Stack>
  );
}