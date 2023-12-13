import { Box, FormControl, Text } from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
const HeroForm =() =>{
//    Destructure use form data
   const{
    register,
    handleSubmit,
    formState:{errors}
   } =useForm();
//    Form submission currently logs to console
   const onSubmit =(data)=>console.log(data);


    return(
// Form Input section
     <Box
     width="100%"
     padding="2rem"
     borderRadius="sm"
     backgroundColor="white"
     color="gray.700"
     >

        <Text fontSize="xl" fontWeight="bold">
            Free PDF Guide
        </Text>
        <Text fontSize="lg">Complete thye form below to download your guide</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Add FormControl from chakra ui */}
            <FormControl>
                <input marginTop="1.3rem" id="name" type="text" placeholder="Name"{...register('name')}/>
            </FormControl>
        </form>
     </Box>       
    
    );
};
export default HeroForm;