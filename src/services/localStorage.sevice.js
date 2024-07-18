export const saveTokenToLocalStorage = (token) => {
  localStorage.setItem('token', token);
};

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token');
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem('token');
};

export const saveUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const saveOwnersToLocalStorage = (updatedOwners) => {
  localStorage.setItem('owners', JSON.stringify(updatedOwners));
}

export const removeOwnersFromLocalStorage = () => {
  localStorage.removeItem('owners');
};

export const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
};

export const saveEmailStatusToLocalStorage = (user) => {
  localStorage.setItem('emailStatus', 1);
};

export const getEmailStatusFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('emailStatus'));
};

export const removeEmailStatusFromLocalStorage = () => {
  localStorage.removeItem('emailStatus');
};

export const removeStepFromLocalStorage = () => {
  localStorage.removeItem("onboardingStep");
};


export const saveAccountTypeToLocalStorage = (accountType) => {
  localStorage.setItem(
    'accountType',
    accountType === '0' ? 'Personal' : 'Business'
  );
};

export const getAccountTypeFromLocalStorage = () => {
  return localStorage.getItem('accountType');
};

export const removeAccountTypeFromLocalStorage = () => {
  localStorage.removeItem('accountType');
};

export const setQuestionaireToLocalStorage = (newFormData) => {
  // Retrieve the existing data from localStorage
  const existingData = getQuestionaireToLocalStorage() || {};

  // Update the existing data with the new data
  const updatedData = {
    ...existingData,
    ...newFormData
  };

  // Save the updated data back to localStorage
  localStorage.setItem('applicationQuestionaire', JSON.stringify(updatedData));
}


export const getQuestionaireToLocalStorage = () => {
  return JSON.parse(localStorage.getItem('applicationQuestionaire'));
}

export const removeQuestionaireToLocalStorage = () => {
  localStorage.removeItem('applicationQuestionaire');
}

export const setFieldValueToLocalStorage = (newFormData) => {
  // Retrieve the existing data from localStorage
  const existingData = getFieldValueToLocalStorage() || {};

  // Update the existing data with the new data
  const updatedData = {
    ...existingData,
    ...newFormData
  };

  // Save the updated data back to localStorage
  localStorage.setItem('applicationFieldValue', JSON.stringify(updatedData));
}

export const getFieldValueToLocalStorage = () => {
  return JSON.parse(localStorage.getItem('applicationFieldValue'));
}

export const removeFieldValueToLocalStorage = () => {
  localStorage.removeItem('applicationFieldValue');
}