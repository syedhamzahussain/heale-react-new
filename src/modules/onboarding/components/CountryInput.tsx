import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Box } from '@chakra-ui/react';

const CountryInput = () => {
  const [phone, setPhone] = useState('');
  return (
    <Box sx={{ '.react-tel-input .form-control': { height: '2.75rem !important', width: '100%', paddingLeft: '38px', borderColor: '#E3E3FA', borderRadius: '5px' }, '.react-tel-input .flag-dropdown': { borderRight: '0', borderTopLeftRadius: '5px', borderColor: '#E3E3FA', borderBottomLeftRadius: '5px' }, '.react-tel-input .selected-flag': { backgroundColor: "#fff", borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }, '.react-tel-input .flag-dropdown .selected-flag .flag .arrow': { display: 'none' } }}>
      <PhoneInput
        country={'us'}
        value={phone}
        onChange={setPhone}
      />
    </Box>

  )
}

export default CountryInput