import { Box, Container, Flex, Link, Heading, Image, List, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import ButtonTheme from './shared/ButtonTheme';
import { DesktopIcon } from './shared/Icons';
import { DownloadIcon } from './shared/Icons';
import Success from './onboarding/components/Success';
import { HealLogoHexagonIcon } from 'modules/shared/Icons';


const browserExtension = () => {



  return (
    <Container maxW={"80%"} margin={"0 auto"} textAlign={'center'}>
      <Box textAlign={'center'} mb={'30px'} w={'550px'} margin={"0 auto"}>
        <Image src='/Imageplaceholder.png' alt='image' w={'550px'} />
      </Box>
      <Box w={'550px'} margin={"0 auto"} textAlign={'left'}>
        <Heading color={"Primary.Navy"} fontSize={"3xl"} my={30} as={"h4"}>Download Chrome browser Extension</Heading>
        <Text color={"Neutral.800"} fontSize={"md"}>We recommend installing the HEALE browser extension. It's an easy, fast, and secure way to interact with the HEALE network.</Text>
        <List spacing={5} color={"Neutral.800"} fontSize={"sm"} mt={10}>
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
        <Flex py={5} borderBottom={'1px solid'} borderColor={'Neutral.200'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Heading color={"Primary.Navy"} fontSize={"sm"} as={"h6"}>Don't have Chrome?</Heading>
          <Link gap={3} fontSize={"xs"} color={"Primary.Blue"} display={'flex'} flexDirection={'row'} alignItems={'center'}  >
            <DownloadIcon w={4} h={4} />
            Download Chrome
          </Link>
        </Flex>
        <Box py={5}>
          <ButtonTheme btnText={"Download Browser Extension"} chakraProps={{
            width: "full",
          }} primary />
          <Box textAlign="center" py={5} >
            <Link href="#" color='Primary.Blue' display={'inline-block'} >Continue</Link>
          </Box>
        </Box>
        <Success icon={HealLogoHexagonIcon} percentage="48% complete" title="Creating Account" desc="We're creating your HEALE Network account" />
        <Success icon={HealLogoHexagonIcon} percentage="53% complete" title="Minting badge" desc="We're minting your unique, secure, network identity" />
        <Success icon={HealLogoHexagonIcon} percentage="72% complete" title="Filling your wallet" desc="We're filling your HEALE wallet with funds and rewards" />
      </Box>
    </Container>
  )
}

export default browserExtension