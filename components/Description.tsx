import Spline from '@splinetool/react-spline';

import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';

  import { motion } from 'framer-motion';
  
  export default function Statement() {
    return (
      <Flex
        w={'full'}
        minH={'30vh'}
        letterSpacing={-2.25}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}>
          <Stack maxW={'4xl'} align={'flex-start'} spacing={6} >
          {/* <Spline scene="https://prod.spline.design/LkpzLXd2fHTVJN-Y/scene.splinecode" /> */}
          <Text
              backgroundImage= 'linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)'
              backgroundClip= 'text'
              fontWeight={700}
              textAlign={'center'}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Supercharge your business with VeriFi
            </Text>
            <Text
              fontWeight={400}
              textAlign={'center'}
              fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}>
              Transactions get complicated, it
                doesn’t have to be that way
                VeriFi brings a solution wherein businesses can streamline
                their financial operations, such as invoice processing and
                payment, while ensuring the accuracy and security of their
                records. With VeriFi you no longer have to deal with the
                accuracy of your records, we do that for you.
            </Text>
            {/* <Spline scene="https://prod.spline.design/gnyqc3ySDrrHrQWs/scene.splinecode" /> */}
            <Text
              backgroundImage= 'linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)'
              backgroundClip= 'text'
              fontWeight={700}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Cross-industry metrics
            </Text>
            <Text
              fontWeight={400}
              textAlign={'center'}
              fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}>
              A platform where businesses share transactional and consumer
            purchasing habits across each other helps build better experiences
            for consumers while providing businesses better insights into what
            they need, so they can personalize and improve on what they offer.
            </Text>

            <Stack direction={'column'}>
            </Stack>
          </Stack>
          
  
        </VStack>
      </Flex>
    );
  }