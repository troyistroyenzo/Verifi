
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

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
import { Fa500Px } from 'react-icons/fa';
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
            Learn More
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
          <Flex flexWrap="wrap" gridGap={25} justify="center">
          <Card
              heading={'Zero Knowledge First'}
              icon={<Image src={'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686124340/4_ry3m55.png'}/>}
              description={
                'We use zero-knowledges proofs to protect your data and manage large amounts of receipts.'
              }
              href={'#'}
            />
            <Card
              heading={'Receipts Management'}  
              icon={<Image src={'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686124340/5_epvch7.png'}/>}
              description={
                'Easily store, manage and track receipts on our simplified interface'
              }
              href={'#'}
            />
            <Card
              heading={'Tamper Proof'}
              icon={<Image src={'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686049883/VeriFi_dtnzcz.png'}/>}
              description={
                'Protocol that ensures no data is modified or deleted.'
              }
              href={'#'}
            />
            <Card
              heading={'Interoperable-ready'}
              icon={<Image src={'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686124340/3_co6vpe.png'} />}
              description={
                'Highly scalable platform that can be integrated with different APIs and technologies'
              }
              href={'#'}
            />
            
          </Flex>
        </Container>
      </Box>
    );
  }