import { ChakraProvider } from "@chakra-ui/react";
// Functions allow Chakra ui to be used throughout the application.
export default function App ({Component,pageProps}){
  return(
    <ChakraProvider>
      <Component {...pageProps}/>
    </ChakraProvider>
  )
}