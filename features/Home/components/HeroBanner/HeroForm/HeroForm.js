import { Box, FormControl, Text, Flex, Checkbox, Button, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
const HeroForm = () => {
  //    Destructure use form data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //    Form submission currently logs to console
  const onSubmit = (data) => console.log(data);

  return (
    // Form Input section
    <Box
      width="100%"
      padding="2rem"
      borderRadius="sm"
      backgroundColor="white"
      color="gray.900"
      border="0.2rem solid black"
    >
      <Text fontSize="xl" fontWeight="bold">
        Free PDF Guide
      </Text>
      <Text fontSize="lg">Complete the form below to download your guide</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Add FormControl from chakra ui */}
        {/* Name Input field */}
        <FormControl>
          <Input
            id="name"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
            marginTop='1.3rem'
           
           
         />
          {errors.name && (
            <Text fontSize="xs" color="red.400">
              {errors.name.type}
            </Text>
          )}
          <Flex
            marginTop="1rem"
            gap={{ base: "0", sm: "1rem" }}
            flexDirection={{ base: "column", sm: "row" }}
          >
            {/* Email input field */}
            <Input
              id="email"
              type="email"
              placeholder="Email"
              marginTop="1.3rem"
              {...register("email", { required: true })}
              
              
            />
            {errors.email && (
              <Text fontSize="xs" color="red.400">
                {errors.email.type}
              </Text>
            )}
            {/* Input field for Phone number */}
            <Input
            
              id="phone"
              type="text"
              placeholder="Phone Number"
              marginTop="1.3rem"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <Text fontSize="cs" color="red.400">
                {errors.phone.type}
              </Text>
            )}
          </Flex>
          <Checkbox marginTop='1.3rem' id='gdpr' type='checkbox' placeholder="GDPR" {...register("gdpr",{required:true})}>
            I consent to having this website store my submitted info.
          </Checkbox>
          {errors.gdpr &&(
              <Text fontSize="cs" color="red.400">
                {errors.gdpr.type}
              </Text>
            ) }
        </FormControl>
        {/* Add submit button to form */}
        <Button 
        type="submit"
        marginTop="2rem"
        fontSize="xl"
        padding="2rem"
        backgroundColor='green.300'
        width="100%"
        color='white'
        
        >Download Now</Button>
      </form>
    </Box>
  );
};
export default HeroForm;
