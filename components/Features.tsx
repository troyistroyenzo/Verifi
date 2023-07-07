
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
              heading={'Decentralized Protocol'}  
              icon={<Image src={'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686124340/5_epvch7.png'}/>}
              description={
                'Asset management allowing businesses to mint, manage, and track digital assets on a decentralized platform.'
              }
              href={'#'}
            />
            <Card
              heading={'Highly Scalable'}
              icon={<Image src={'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686049883/VeriFi_dtnzcz.png'}/>}
              description={
                'Scalable platform with an immutable inventory tracking system, customizable invoicing, efficient management and seamless integration of digital assets.'
              }
              href={'#'}
            />
            <Card
              heading={'More secure, than ever'}
              icon={<Image src={'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686124340/3_co6vpe.png'} />}
              description={
                'A tamper-proof system that builds trust and confidence in the ecosystem.'
              }
              href={'#'}
            />
            <Card
              heading={'Integrated With IPFS & ZK Proofs'}
              icon={<Image src={'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686124340/4_ry3m55.png'}/>}
              description={
                'Secure data, prove business logic, and enable self-sovereign data with integrated IPFS and ZK Proofs.'
              }
              href={'#'}
            />
          </Flex>
        </Container>
      </Box>
    );
  }