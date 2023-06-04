import { ChakraProvider } from '@chakra-ui/react'
import { useCallback, useEffect, useId, useRef, useState } from "react";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;