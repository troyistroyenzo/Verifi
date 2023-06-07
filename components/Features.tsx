import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
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
        maxW={{ base: 'full', md: '500px' }}
        w={'full'}
        fontWeight={500}
        borderRadius="lg"
        overflow="hidden"
        textAlign={'center'}
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={'full'}
            h={'full'}
            align={'center'}
            justify={'center'}
            color={'white'}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading fontFamily={'inter'} size="lg" padding={2} fontWeight={700} letterSpacing={-1}>{heading}</Heading>
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
      <Box p={25}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} >
        </Stack>
        <Container maxW={'1xl'} mt={5}>
          <Flex flexWrap="wrap" gridGap={50} justify="center">
            <Card
              heading={'Decentralized Protocol'}  
              icon={<Icon as={Image} src="https://res.cloudinary.com/dlgyqy69b/image/upload/v1686124341/2_ivfsda.png" w={'75%'} h={'full'}/>}
              description={
                'Asset management feature allows businesses to mint, manage, and track digital assets on the platform.'
              }
              href={'#'}
            />
            <Card
              heading={'Dashboard & Analytics'}
              icon={<Icon as={Image} src="https://res.cloudinary.com/dlgyqy69b/image/upload/v1686124341/2_ivfsda.png" w={'75%'} h={'full'}/>}
              description={
                'Dashboard and Analytics feature to show key metrics and analytics to help businesses make informed decisions.'
              }
              href={'#'}
            />
            <Card
              heading={'Smart Contract Automation'}
              icon={<Icon as={Image} src="https://res.cloudinary.com/dlgyqy69b/image/upload/v1686124341/2_ivfsda.png" w={'75%'} h={'full'}/>}
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