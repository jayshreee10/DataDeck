import React, { useState, createContext, useContext } from "react";

const DataContext = createContext();
export const useDataContext = () => {
  return useContext(DataContext);
};
function DataContextProvider({ children }) {
  const [formData, setFormData] = useState({
    companyName: "",
    companyType: "",
    alias: "",
    companyId: "",
    companySize: "",
    incorporationNo: "",
    incorporationCertificate: "",
    incorporationDate: "",
    panDetails: "",
    taxCertification: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    registeredOfficeAddress: "",
    address: "",
    whatsappNumber: "",
    mobileNumber: "",
    emailId: "",
  });

  console.log(formData);

  const value = {
    formData,
    setFormData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataContextProvider;
