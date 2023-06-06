import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
  } from 'react-icons/fc';
  
  interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href: string;
  }
  
  const Card = ({ heading, description, icon, href }: CardProps) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default function Features() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Secure Your Digital Assets with Decentralized Protocol
          </Heading>
          {/* <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
          </Text> */}
        </Stack>
        <Container maxW={'9xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={50} justify="center">
            <Card
              heading={'Asset Management'}
              icon={<Icon as={FcAssistant} w={10} h={10}  />}
              description={
                'Asset management feature allows businesses to mint, manage, and track digital assets on the platform.'
              }
              href={'#'}
            />
            <Card
              heading={'Dashboard & Analytics'}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                'Dashboard and Analytics feature to show key metrics and analytics to help businesses make informed decisions.'
              }
              href={'#'}
            />
            <Card
              heading={'Smart Contract Automation'}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                'Smart contract automation and external integrations feature for compliance and process efficiency'
              }
              href={'#'}
            />
            <Card
              heading={'Interoperable Protocol'}
              icon={<Icon as={FcManager} w={10} h={10} />}
              description={
                'Permissioned and Interoperable protocol that allows for the verification of a digital asset'
              }
              href={'#'}
            />
          </Flex>
        </Container>
      </Box>
    );
  }