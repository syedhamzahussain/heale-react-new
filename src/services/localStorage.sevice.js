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

export const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
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