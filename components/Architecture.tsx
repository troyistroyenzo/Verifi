import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  
  export default function Simple() {
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 20 }} py={{ base: 18, md: 24 }}>
          <Stack  p={15}>
            <Box as={'header'}>
              <Heading
                fontFamily={'inter'}
                lineHeight={1.1}
                fontWeight={700}
                letterSpacing={'-2.25'}
                backgroundImage= 'linear-gradient(78deg, rgb(59,178,200) 0%, rgb(106,107,206) 100%)'
                backgroundClip= 'text'
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                VeriFi Architecture
              </Heading>
              <br/>
              <Text
                fontFamily={'inter'}
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={500}
                fontSize={'1xl'}>
                VeriFi utilizes ZK-Rollups and ZK-Proofs to provide a scalable, secure, and private solution for verifying the authenticity of products.
              </Text>
            </Box>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                'https://res.cloudinary.com/dlgyqy69b/image/upload/v1686285794/Group_1_1_lnpkjb.png'
              }
              align={'center'}
            w={'full'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }