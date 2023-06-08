"use client"
import {
    Heading,
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    Center,
    Box,
    useBreakpointValue,
    useColorModeValue,
    Avatar,
  } from '@chakra-ui/react';
  
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={'full'}
        h={'120vh'}
        p={90}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              fontWeight={700}
              lineHeight={'53px'}
              color={'black'}
              letterSpacing={-2.25}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              About VeriFi
            </Text>
            <Stack direction={'row'}>
            <Text
              fontWeight={700}
              lineHeight={1.2}
              color={'#7d7d7d'}
              letterSpacing={-2.25}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              We want to make it easier for businsess to deal with their transactions
            </Text>
            </Stack>
            <Text
              fontWeight={400}
              lineHeight={1.2}
              color={'black'}
              fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
              We want to make it easier for businsess to deal with their transactions
            </Text>
            <Text
              paddingTop={90}
              fontWeight={700}
              lineHeight={'53px'}
              color={'black'}
              letterSpacing={-2.25}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Leadership
            </Text>
           
          </Stack>
          <Center py={100}>
                <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                    size={'xl'}
                    src={
                    'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686235762/troy-expanded-dp_joim54.png'}
                    mb={4}
                    pos={'relative'}
                    _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                    }}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    Troy Enzo
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                    Chief Builder Officer (CBO)
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    Web3 Builder & Entrepreneur. Building things that will help the world, through decentralized technologies{' '}
                </Text>
                <Stack mt={10} direction={'column'} spacing={4}>
                    <a href='https://beacons.ai/troyenzo' target='_blank' rel='noopener noreferrer'>
                    <Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                        bg: 'blue.500',
                    }}
                    _focus={{
                        bg: 'blue.500',
                    }}>
                    👉 More about me
                    </Button>
                    </a>
                </Stack>
                </Box>
             </Center>
        </VStack>
      </Flex>
    );
  }