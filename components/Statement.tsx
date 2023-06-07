import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function Statement() {
    return (
      <Flex
        w={'full'}
        h={'50vh'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}>
          <Stack maxW={'4xl'} align={'flex-start'} spacing={6}>
            <Text
              backgroundImage= 'linear-gradient(78deg, rgb(56,128,255) 0%, rgb(25,234,141) 100%)'
              backgroundClip= 'text'
              fontFamily={'inter'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Our mission is to secure and onboard businesses through Web3.
            </Text>
            <br/>
            <Text
              backgroundImage= 'linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)'
              backgroundClip= 'text'
              fontFamily={'inter'}
              fontWeight={700}
              lineHeight={1.2}
              textAlign={'right'}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Our vision is to see 1 million businesses adopt blockhain technology
            </Text>
            <Stack direction={'column'}>
            </Stack>
          </Stack>
          <Button
                bg='linear-gradient(78deg, rgb(56,128,255) 0%, rgb(25,234,141) 100%)'
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'linear-gradient(78deg, rgb(56,128,255) 10%, rgb(25,234,141) 60%)' }}>
                Show me more
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Show me more
              </Button>
        </VStack>
      </Flex>
    );
  }