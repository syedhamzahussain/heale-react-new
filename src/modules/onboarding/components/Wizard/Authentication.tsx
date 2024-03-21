import { Box } from '@chakra-ui/react'
import { CheckIcon, FlyEnvelopeIcon, alertIcon, trustIcon } from 'modules/shared/Icons';
import React from 'react'
import MessageBox from '../MessageBox';

const Authentication = () => {
    return (
        <Box w={'50%'} display={'flex'} flexDirection='column' justifyContent={'Center'}>
            <MessageBox btnText='Resend Email' desc='We just Sent you an email to jeffbridges@gmail.com.check it and click the link to verify your address' icon={FlyEnvelopeIcon} title='Verify Your Email' />
            <MessageBox desc='You can close this windows and continue setting up your account' icon={CheckIcon} title='Your Email is Verified' />
            <MessageBox btnText='Resend Email' desc='The verification Link has Expired. Please Click "Resend Email". and click the link in your email within 10 mins' icon={alertIcon} title='Resend Email' />
            <MessageBox trust btnText='Trust' desc="We don't recognize this device. Should we trust it for your next login? If this is a public computer, we recommend clicking Don't Trust 'Resend Email'. and click the link in your email within 10 mins" icon={trustIcon} title='Trust This Device?' />
        </Box>
    )
}

export default Authentication