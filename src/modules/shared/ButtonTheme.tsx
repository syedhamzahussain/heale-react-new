import { Button } from '@chakra-ui/react';
import React from 'react';
import { ButtonThemeType } from 'type';

const ButtonTheme = ({
  btnText,
  chakraProps,
  primary,
  invert,
  small,
  isLoading,
  isDisabled
}: ButtonThemeType) => {
  return (
    <Button
      isLoading={isLoading}
      type='submit'
      isDisabled={isDisabled}
      h={small ? 8 : 10}
      bg={
        invert
          ? 'white'
          : primary
            ? 'Primary.Blue'
            : 'Neutral.100'
      }
      color={primary ? 'white' : 'Primary.Blue'}
      borderRadius={'40px'}
      px={small ? 3 : 6}
      py={2}
      borderWidth={'1px'}
      borderColor={invert ? 'Neutral.200' : ''}
      transition={'all .35s ease-in-out'}
      fontSize={small ? "xs" : "md"}
      fontWeight={'500'}
      _hover={{
        transform: 'translateY(-2px)',
      }}
      {...chakraProps}
    >
      {btnText}
    </Button>
  );
};

export default ButtonTheme;
