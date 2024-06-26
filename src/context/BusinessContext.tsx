import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BusinessContextType {
  selectedTypes: string[];
  setBusinessTypes: (types: string[]) => void;
}

// Providing a default value that matches the context type.
const defaultContextValue: BusinessContextType = {
  selectedTypes: [],
  setBusinessTypes: () => {}, // No-op function as a placeholder
};

const BusinessContext = createContext<BusinessContextType>(defaultContextValue);

export const useBusiness = () => useContext(BusinessContext);

interface BusinessProviderProps {
  children: ReactNode;
}

export const BusinessProvider: React.FC<BusinessProviderProps> = ({ children }) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const setBusinessTypes = (types: string[]) => {
    console.log('Updating selected types:', types); // Debug output
    setSelectedTypes(types);
  };
  console.log('Current selected types:', selectedTypes); // Debug output
  return (
    <BusinessContext.Provider value={{ selectedTypes, setBusinessTypes }}>
      {children}
    </BusinessContext.Provider>
  );
};
