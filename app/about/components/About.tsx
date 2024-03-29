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
    SimpleGrid,
    Avatar,
  } from '@chakra-ui/react';
  import Statement from '@/app/about/components/Statement';
  import "@fontsource/inter"
  
  export default function WithBackgroundImage() {
    return (
      
      <Flex
        w={'full'}
        fontFamily={'Inter'}
        minH={'150vh'}
        p={35}>
        <VStack
          p={10}
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
              fontWeight={600}
              color={'#7d7d7d'}
              letterSpacing={-2.25}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              We want to make it easier for businesses to deal with their transactions
            </Text>
            </Stack>
            <Text
              fontWeight={400}
              lineHeight={1.85}
              color={'black'}
              fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
              Does your company value time, resources and money? 
              We do too. That&apos;s why we&apos;re building VeriFi, to help businesses save time, resources and money. 
              With our platform, 
              businesses can supercharge their day-to-day operations by leveraging the power of blockchain technology.
            </Text>

            <Text
              fontWeight={600}
              color={'#7d7d7d'}
              letterSpacing={-2.25}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              The Story
            </Text>
            <Text
              fontWeight={400}
              lineHeight={1.85}
              color={'black'}
              fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
              While buying a cup of coffee, I had a thought: Why not use QR codes instead of paper receipts? It turns out some companies already do that. But then a bigger idea hit me: What if these receipts could be stored on a blockchain, giving customers true ownership? And what if businesses could issue these receipts and have ownership rights too? These simple problems sparked my imagination, leading me to envision a platform where users and businesses can utilize blockchain technology to streamline digital assets.
            </Text>
              <Text
              fontWeight={600}
              lineHeight={1.2}
              color={'#7d7d7d'}
              letterSpacing={-2.25}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              The Why
            </Text>
            <Text
              fontWeight={400}
              lineHeight={1.85}
              color={'black'}
              fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}>
                It is personal to me. I want to help people, businesses, and the world. By utilizing decentralized technologies, I believe I can empower businesses and their employees to work more efficiently and effectively. 
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
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={100}>
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
                    px={3}
                    minH={100}>
                    Web3 Builder & Entrepreneur. Building scalable things that will help the world, through decentralized technologies{' '}
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
                    'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686274837/316411901_5936139283076015_8090366788801441779_n_mpizqe.jpg'}
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
                    Gino Araullo
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                    Chief Design 3 Officer (CP3O)
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}
                    minH={100}>
                    Web Developer, Graphic Designer, and Brand Strategist{' '}
                </Text>
                <Stack mt={10} direction={'column'} spacing={4}>
                    <a href='http://portfolio.dayone.media' target='_blank' rel='noopener noreferrer'>
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
             </SimpleGrid>
        </VStack>
      </Flex>
    );
  }
