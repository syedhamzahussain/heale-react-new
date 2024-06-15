import { Box, Flex, Text } from '@chakra-ui/react';
import { CheckIcon, RadioIcon, RadioIconChecked } from 'modules/shared/Icons';
import React from 'react'
import { useWizard } from 'react-use-wizard';

const CardWizardHeader = () => {
    const { activeStep, stepCount } = useWizard();
    const stepNames = [
        "Card Details",
        "Customize",
        "Review",
    ]
    const renderSteps = () => {
        const steps = [];

        for (let i = 0; i < stepCount; i++) {
            const stepNumber = i + 1;
            const isActive = stepNumber <= activeStep + 1;
            const isCompleted = stepNumber < activeStep + 1;

            steps.push(
                <Flex alignItems={"center"} gap={2} key={i} pb={4} pos={"relative"} _after={{
                    content: "''",
                    pos: "absolute",
                    w: "2px",
                    h: "8px",
                    bgColor: "Neutral.200",
                    left: "8px",
                    bottom: 0,
                    transform: "translate(-50%, -50%)"
                }} _last={{
                    _after: {
                        content: "unset"
                    }
                }}>
                    <Box>
                        {isCompleted ? <CheckIcon /> : isActive ? <RadioIconChecked /> : <RadioIcon mb={1} />}
                    </Box>
                    <Text color={isCompleted ? "Primary.Navy" : isActive ? "Primary.Blue" : "Neutral.700"}>{stepNames[i]}</Text>
                </Flex>
            );
        }
        return steps;
    };
    return (
        <Flex flexDir={"column"} minW={"20%"}>
            {renderSteps()}
        </Flex>
    )
}

export default CardWizardHeader