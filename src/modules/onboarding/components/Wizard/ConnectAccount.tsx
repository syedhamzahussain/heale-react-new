import { Box, Flex, Heading, Icon, Text, useRadio, useRadioGroup } from '@chakra-ui/react'
import { bankOptions } from 'dummyData/data';
import ButtonTheme from 'modules/shared/ButtonTheme';
import { RightIcon } from 'modules/shared/Icons';
import React from 'react'
import { useWizard } from 'react-use-wizard';
import { RadioCardProps } from 'type';

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
                <Flex p={4} justifyContent={"center"} alignItems={"center"} w={"56px"} h={"56px"} bgColor={"Neutral.100"} borderRadius={"full"}>
                    <Icon as={props.icon} w={6} h={6} sx={{
                        "path": {
                            stroke: "Primary.Blue"
                        }
                    }} />
                </Flex>
                <Box w={"90%"} h={"100px"}>
                    <Heading color={"Primary.Navy"} fontSize={"xl"} mb={4} as={"h6"}>{props.title}</Heading>
                    <Text color={"Neutral.800"} fontSize={"sm"}>{props.desc}</Text>
                </Box>
                <RightIcon w={6} h={6} />
            </Flex>
        </Box>
    );
};

const ConnectAccount = () => {
    const { nextStep, previousStep } = useWizard();
    const { getRootProps, getRadioProps, setValue: setRadioValue, value: radioValue } = useRadioGroup({
        name: 'accountType',
        defaultValue: 'Personal',
        onChange: (value) => {
            setRadioValue(value);
        },
    })
    const group = getRootProps()
    return (
        <Box w={"50%"}>
            <Heading as={"h4"} mb={4} fontSize={"3xl"} color={"Primary.Navy"}>Add bank account</Heading>
            <Text mb={8} color={"Neutral.800"}>Choose your Account Type</Text>
            <Box {...group} w={"100%"}>
                {bankOptions.map((value) => {
                    const radio = getRadioProps({ value: String(value?.id) });
                    return (
                        <RadioCard children id={value?.id} key={value?.id} value={value?.title} icon={value?.icon} title={value?.title} desc={value?.desc} {...radio} />
                    )
                })}
            </Box>
            <Flex gap={4} mt={8}>
                <ButtonTheme btnText='Back' chakraProps={{
                    w: "100%",
                    onClick: () => previousStep(),
                }} />
                <ButtonTheme btnText='Get started' primary chakraProps={{
                    w: "100%",
                    onClick: () => nextStep(),
                    isDisabled: radioValue === "" || (radioValue !== "0" && radioValue !== "1")
                }} />
            </Flex>
        </ Box>
    )
}

export default ConnectAccount