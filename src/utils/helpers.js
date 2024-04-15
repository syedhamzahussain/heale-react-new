import { toast } from 'react-toastify';

export const getErrorMessage = (error) => {
  console.log('error', error);
  if (error?.response?.status === 404) return 'Not Found';

  if (error?.response?.data?.message) return error.response.data.message;

  if (error?.message) return error.message;
  return 'Something went wrong';
};

export const toastSuccess = (message) => {
  toast.success(message);
};

export const toastError = (message) => {
  toast.error(message);
};

export const validatePasswords = (password, confirm_password, setError) => {
  if (password !== confirm_password) {
    setError('confirm_password', {
      type: 'manual',
      message: 'Passwords do not match',
    });
    return false;
  }
  return true;
};

/**
 * Formats a given year, month, and day into an ISO date string (YYYY-MM-DD).
 * If month and day are less than 10, prefixes them with a '0' to ensure two digits.
 *
 * @param {number} year - The year component of the date.
 * @param {number} month - The month component of the date. Note: 1 = January, 12 = December.
 * @param {number} day - The day component of the date.
 * @returns {string} The formatted date string in ISO format (YYYY-MM-DD).
 */
export const formatDateToISO = (year, month, day) => {
  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
};
