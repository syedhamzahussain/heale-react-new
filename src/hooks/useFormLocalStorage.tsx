import { useEffect } from 'react';
import { UseFormSetValue, Path } from 'react-hook-form';

interface FormData {
  [key: string]: any;
}

const useFormLocalStorage = <T extends FormData>(section: string, setValue?: UseFormSetValue<T>) => {
  useEffect(() => {
    const data = localStorage.getItem('applicationFieldValue');
    if (data) {
      const formData: T = JSON.parse(data)[section] || {};
      if (setValue) {
        Object.keys(formData).forEach((key) => {
          setValue(key as Path<T>, formData[key]);
        });
      }
    }
  }, [section, setValue]);

  const handleChange = (key: keyof T, value: any) => {
    const existingData = localStorage.getItem('applicationFieldValue');
    const parsedData: { [key: string]: T } = existingData ? JSON.parse(existingData) : {};
    const updatedSection = {
      ...parsedData[section],
      [key]: value,
    };
    const updatedData = {
      ...parsedData,
      [section]: updatedSection,
    };
    localStorage.setItem('applicationFieldValue', JSON.stringify(updatedData));
  };

  const getInitialValues = (): T => {
    const data = localStorage.getItem('applicationFieldValue');
    if (data) {
      const formData: T = JSON.parse(data)[section] || {};
      return formData;
    }
    return {} as T;
  };

  return { handleChange, getInitialValues };
};

export default useFormLocalStorage;
