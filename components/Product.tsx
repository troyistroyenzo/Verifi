import { ReactNode } from 'react';
import "@fontsource/inter"
import "@fontsource/heebo"
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';

export default function StatsGridWithImage() {
  return (
    <Box position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        color={'black'}
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'6xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'column' }}>
          <Stack
            flex={1}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Heading
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}
                textAlign={'center'}
                letterSpacing={-2.25}
                fontFamily={'inter'}>
                What businesses can do with VeriFi
              </Heading>
              {/* <Text fontSize={'1xl'} fontWeight={400} fontFamily={'inter'}>
              Secure Digital Assets with an L3 Decentralized Protocol
              </Text> */}
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pd={10} >
              {stats.map((stat) => (
                <Box key={stat.title} 
                    fontWeight={700}
                    letterSpacing={-1.0} 
                    borderRadius='10' 
                    borderWidth="1px" 
                    p="4"
                    w={'75%'} 
                    boxShadow="lg" 
                    m="4">
                  <Text
                    fontSize={'3xl'}
                    mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={500} >
    {children}
  </Text>
);

const stats = [
  {
    title: 'Vat-Payment Integration',
    content: (
      <>
        <StatsText>Automate transactions and ensure compliance</StatsText>

      </>
    ),
  },
  {
    title: 'Trust-based Consensus algorithm',
    content: (
      <>
        <StatsText>Ensure secure and accurate digitization of digital assets</StatsText>
      </>
    ),
  },
  {
    title: 'Immutable Inventory Tracking',
    content: (
      <>
        <StatsText>Digitize assets, customize invoicing on an immutable inventory tracker</StatsText>
        </>
    ),
  },
  {
    title: 'Streamlined & Automated Invoice Processing',
    content: (
      <>
        <StatsText> Faster and more efficient transactions</StatsText> 
      </>
    ),
  },
  {
    title: 'Anti-fraud measures',
    content: (
      <>
        <StatsText>validation and verification to prevent fraudulent transactions</StatsText>
      </>
    ),
  },
  {
    title: 'Transparency & Traceability',
    content: (
      <>
        <StatsText>Verified users can view blockchain transactions to ensure transparency</StatsText> 
      </>
    ),
  },
];