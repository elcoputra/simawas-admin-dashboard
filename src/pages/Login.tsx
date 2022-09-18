/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
  Flex,
  WrapItem,
  Button,
} from '@chakra-ui/react';

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('email')); // watch input value by passing the name of it
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Flex
      align="center"
      justify="center"
      direction="column"
      height="100vh"
      width="100vw"
      bgGradient="linear(#ffc62b -29.09%, #4ade80 51.77%, #1bace3 129.35%)"
    >
      <Flex
        align="center"
        justify="center"
        direction="column"
        background="white"
        rounded="25"
        boxShadow="lg"
        padding={30}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            paddingBottom: 25,
          }}
        >
          <img
            width="200"
            alt="icon"
            src="https://simawas.jabarprov.go.id/logo_simawas_pagi_detail_long.svg"
          />
        </div>
        <FormControl width={['95%', 350, 425]}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          {/* <FormHelperText>Masukin email.</FormHelperText> */}
          <FormLabel>Password</FormLabel>
          <Input type="password" />
          {/* <FormHelperText>Kalo ini password</FormHelperText> */}
          <Flex direction="column" background="white" rounded="25">
            <Button mt={10} paddingLeft="auto" colorScheme="whatsapp">
              Login
            </Button>
          </Flex>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Login;
