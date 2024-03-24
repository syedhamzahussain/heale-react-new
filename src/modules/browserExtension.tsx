import { Box, Center, Container, Flex, Grid, Heading, Icon, Image, List, ListItem, Text, useRadio, useRadioGroup } from '@chakra-ui/react'
import { options } from 'dummyData/data';
import React from 'react'
import { RadioCardProps } from 'type';
import ButtonTheme from './shared/ButtonTheme';
import { DesktopIcon } from './shared/Icons';
import { Link } from 'react-router-dom';


const browserExtension = () => {
    
 

    return (
        <Container maxW={"80%"} margin={"0 auto"} textAlign={'center'}>
          <Box  textAlign={'center'} mb={'30px'} w={'550px'} margin={"0 auto"}>
            <Image src='/Imageplaceholder.png' alt='image' w={'550px'} />
          </Box>
          <Box w={'550px'} margin={"0 auto"} textAlign={'left'}>
             <Heading color={"Primary.Navy"} fontSize={"3xl"} my={30} as={"h4"}>Download Chrome browser Extension</Heading>
             <Text color={"Neutral.800"} fontSize={"md"}>We recommend installing the HEALE browser extension. It's an easy, fast, and secure way to interact with the HEALE network.</Text>
                <List spacing={8} color={"Neutral.800"} fontSize={"sm"}>
                  <ListItem display={"flex"} gap={3}>
                      <DesktopIcon w={5} h={5} />
                      <Text as={"span"}>
                         Save time - access to your accounts, make transfers, and make payments without having to log in every time
                      </Text>
                  </ListItem>
                  <ListItem display={"flex"} gap={3}>
                      <DesktopIcon w={5} h={5} />
                      <Text as={"span"}>
                          Compatible with Chrome-based browsers, including Google Chrome and Brave, for Mac or PC.
                      </Text>
                  </ListItem>
                  <ListItem display={"flex"} gap={3}>
                      <DesktopIcon w={5} h={5} />
                      <Text as={"span"}>
                         Get quick access to the information you most need.
                      </Text>
                  </ListItem>
              </List>
          </Box>
        </Container>
    )
}

export default browserExtension