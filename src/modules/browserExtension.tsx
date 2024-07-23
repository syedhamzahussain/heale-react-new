import { Box, Container, Flex, Link, Heading, Image, List, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import ButtonTheme from './shared/ButtonTheme';
import { CheckIcon, DesktopIcon, ExtensionIcon } from './shared/Icons';
import { DownloadIcon } from './shared/Icons';
import Success from './onboarding/components/Success';
import { HealLogoHexagonIcon } from 'modules/shared/Icons';


const BrowserExtension = () => {
  return (
    <Container maxW={"80%"} margin={"0 auto"} textAlign={'center'}>
      <Flex gap={20}>
        <Box textAlign={'center'} w={"50%"}>
          <Image src='/Imageplaceholder2.png' alt='image' w={"100%"} />
        </Box>
        <Box textAlign={'left'} w={"50%"}>
          <Box textAlign={"center"}>
            <Flex bgColor={"Neutral.100"} borderRadius={"full"} justifyContent={"center"} alignItems={"center"} w={40} h={40} m={"0 auto"}>
              <ExtensionIcon w={20} h={20} />
            </Flex>
            <Heading color={"Primary.Navy"} fontSize={"3xl"} my={30} as={"h4"}>Download Chrome browser Extension</Heading>
            <Text color={"Neutral.800"} fontSize={"md"}>We recommend installing the HEALE browser extension. It's an easy, fast, and secure way to interact with the HEALE network.</Text>
          </Box>
          <List spacing={5} color={"Neutral.800"} fontSize={"sm"} mt={10}>
            <ListItem display={"flex"} gap={3}>
              <CheckIcon w={5} h={5} />
              <Text as={"span"}>
                Save time - access to your accounts, make transfers, and make payments without having to log in every time
              </Text>
            </ListItem>
            <ListItem display={"flex"} gap={3}>
              <CheckIcon w={5} h={5} />
              <Text as={"span"}>
                Compatible with Chrome-based browsers, including Google Chrome and Brave, for Mac or PC.
              </Text>
            </ListItem>
            <ListItem display={"flex"} gap={3}>
              <CheckIcon w={5} h={5} />
              <Text as={"span"}>
                Get quick access to the information you most need.
              </Text>
            </ListItem>
          </List>
          <Flex py={5} borderBottom={'1px solid'} borderColor={'Neutral.200'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Heading color={"Primary.Navy"} fontSize={"sm"} as={"h6"}>Don't have Chrome?</Heading>
            <Link gap={3} fontSize={"xs"} color={"Primary.Blue"} display={'flex'} flexDirection={'row'} alignItems={'center'}  >
              <DownloadIcon w={4} h={4} />
              Download Chrome
            </Link>
          </Flex>
          <Box py={5} textAlign="center">
            <ButtonTheme btnText={"Download Browser Extension"} chakraProps={{
              width: "50%",
              m: "0 auto"
            }} primary />
            <Box py={5} >
              <Link href="#" color='Primary.Blue' display={'inline-block'} >Continue</Link>
            </Box>
          </Box>
          <Success icon={HealLogoHexagonIcon} percentage="48% complete" title="Creating Account" desc="We're creating your HEALE Network account" />
          <Success icon={HealLogoHexagonIcon} percentage="53% complete" title="Minting badge" desc="We're minting your unique, secure, network identity" />
          <Success icon={HealLogoHexagonIcon} percentage="72% complete" title="Filling your wallet" desc="We're filling your HEALE wallet with funds and rewards" />
        </Box>

      </Flex>
    </Container>
  )
}

export default BrowserExtension