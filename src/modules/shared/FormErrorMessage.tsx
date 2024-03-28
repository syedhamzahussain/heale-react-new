import { Text } from '@chakra-ui/react';
import React from 'react';

const FormErrorMessage = ({ message }: any) => {
  return <>{message && <Text color={"Secondary.Red"} fontSize={"xs"}>{`${message}`}</Text>}</>;
};

export default FormErrorMessage;
