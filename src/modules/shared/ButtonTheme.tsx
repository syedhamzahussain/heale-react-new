import { Button } from '@chakra-ui/react';
import React from 'react';
import { ButtonThemeType } from 'type';

const ButtonTheme = ({
  btnText,
  chakraProps,
  primary,
  invert,
  isLoading,
  isDisabled
}: ButtonThemeType) => {
  return (
    <Button
      isLoading={isLoading}
      type='submit'
      isDisabled={isDisabled}
      //   type={type || 'button'}
      {...chakraProps}
      bg={
        invert
          ? 'white'
          : primary
            ? 'Primary.Blue'
            : 'Neutral.100'
      }
      color={primary ? 'white' : 'Primary.Blue'}
      borderRadius={'40px'}
      p={'8px 24px'}
      borderWidth={'1px'}
      borderColor={invert ? 'Neutral.200' : ''}
      transition={'all .35s ease-in-out'}
      fontWeight={'500'}
      _hover={{
        transform: 'translateY(-2px)',
      }}
    >
      {btnText}
    </Button>
  );
};

export default ButtonTheme;
