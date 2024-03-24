import { Box, Container, Flex, Grid, Heading, Icon, List, ListItem, Text, useRadio, useRadioGroup } from '@chakra-ui/react'
import { options } from 'dummyData/data';
import React from 'react'
import { RadioCardProps } from 'type';
import ButtonTheme from './shared/ButtonTheme';
import { CheckIcon } from './shared/Icons';
import { Link } from 'react-router-dom';

const RadioCard: React.FC<RadioCardProps> = ({ ...props }) => {
    const { getInputProps, getRadioProps } = useRadio(props);
    const input = getInputProps();
    const checkbox = getRadioProps();
    return (
        <Box as='label'>
            <input {...input} />
            <Flex
                mb={4}
                gap={6}
                {...checkbox}
                p={8}
                cursor='pointer'
                borderRadius='16px'
                borderWidth={"2px"}
                boxShadow='1px 1px 6px 0px rgba(149, 153, 192, 0.22);                '
                _checked={{
                    borderColor: 'Primary.Blue',
                    "svg path": {
                        stroke: "Primary.Blue"
                    }
                }}
            >
                <Box w={"90%"} h={"100px"}>
                    <Heading color={"Primary.Navy"} fontSize={"xl"} mb={4} as={"h6"}>{props.title}</Heading>
                    <Text color={"Neutral.800"} fontSize={"sm"}>{props.desc}</Text>
                </Box>
                <Icon as={props.icon} w={8} h={8} />
            </Flex>
        </Box>
    );
};

const Welcome = () => {
    const { getRootProps, getRadioProps, setValue: setRadioValue, value: radioValue } = useRadioGroup({
        name: 'accountType',
        defaultValue: '0',
        onChange: (value) => {
            setRadioValue(value);
        },
    })
    const group = getRootProps()
    console.log(radioValue);

    return (
        <Container maxW={"80%"}>
            <Heading mb={4} as={"h4"} fontSize={"3xl"} color={"Primary.Navy"}>Welcome to HEALE</Heading>
            <Text mb={8} color={"Neutral.800"}>Choose your Account Type</Text>
            <Grid gridTemplateColumns={"repeat(2,1fr)"} gap={16}>
                <Box {...group} w={"80%"}>
                    {options.map((value) => {
                        const radio = getRadioProps({ value: String(value?.id) });
                        return (
                            <RadioCard children id={value?.id} key={value?.id} value={value?.title} icon={value?.icon} title={value?.title} desc={value?.desc} {...radio} />
                        )
                    })}
                    <Link to={radioValue === "0" ? "/personal" : "/business"}>
                        <ButtonTheme btnText='Get Started' primary chakraProps={{
                            mt: 4,
                            w: "100%"
                        }} />
                    </Link>
                </Box>
                <Flex flexDir={"column"} w={"80%"} marginLeft={"auto"}>
                    {radioValue === "0" ?
                        <>
                            <Heading fontSize={"xl"} color={"Primary.Navy"} as={"h6"} mb={8}>Title goes here</Heading>
                            <List spacing={8} color={"Primary.Navy"} fontSize={"sm"}>
                                <ListItem display={"flex"} gap={3}>
                                    <CheckIcon w={5} h={5} />
                                    <Text as={"span"}>
                                        Personal Users can access company logistics tools for efficient task management and enhanced team collaboration.
                                    </Text>
                                </ListItem>
                                <ListItem display={"flex"} gap={3}>
                                    <CheckIcon w={5} h={5} />
                                    <Text as={"span"}>
                                        Businesses and Owner Operators, streamline your logistics with shipment tracking and finance tools for complete operational control.
                                    </Text>
                                </ListItem>
                                <ListItem display={"flex"} gap={3}>
                                    <CheckIcon w={5} h={5} />
                                    <Text as={"span"}>
                                        Choose your account to fit your role: earn rewards for yourself and your business, whether you’re an individual contributor or managing your own logistics operations.
                                    </Text>
                                </ListItem>
                            </List>
                        </>
                        :
                        <>
                            <Heading fontSize={"xl"} color={"Primary.Navy"} as={"h6"} mb={8}>What a Business Profile Offers</Heading>
                            <List spacing={8} color={"Primary.Navy"} fontSize={"sm"}>
                                <ListItem display={"flex"} gap={3}>
                                    <CheckIcon w={5} h={5} />
                                    <Text as={"span"}>
                                        Personal Users can access company logistics tools for efficient task management and enhanced team collaboration.
                                    </Text>
                                </ListItem>
                                <ListItem display={"flex"} gap={3}>
                                    <CheckIcon w={5} h={5} />
                                    <Text as={"span"}>
                                        Businesses and Owner Operators, streamline your logistics with shipment tracking and finance tools for complete operational control.
                                    </Text>
                                </ListItem>
                                <ListItem display={"flex"} gap={3}>
                                    <CheckIcon w={5} h={5} />
                                    <Text as={"span"}>
                                        Choose your account to fit your role: earn rewards for yourself and your business, whether you’re an individual contributor or managing your own logistics operations.
                                    </Text>
                                </ListItem>
                            </List>
                        </>
                    }
                </Flex>
            </Grid>
        </Container>
    )
}

export default Welcome