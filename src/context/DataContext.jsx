import { createContext, useContext, useState } from "react";

const DataContext = createContext();
export const useDataContext = () => {
  return useContext(DataContext);
};
function DataContextProvider({ children }) {
  const [formData, setFormData] = useState({
    details: {
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
    },

    business_details: {
      businessDetails: "",
      additionalInformation: "",
    },
    contact_info: {
      name: "",
      designation: "",
      role: "",
      emailId: "",
      contactNumber: "",
    },
    social_details: {
      emailId: "",
      contactNumber: "",
    },
    other_details: {
      name: "",
      address: "",
    },
  });

  //formMedia
  const [formMedia, setFormMedia] = useState({
    brand_info: {
      upload_logo: "",
      header: "",
      favicon: "",
      footer: "",
    },
    social_details: {
      upload_logo: "",
    },
  });

  console.log(formData);

  const value = {
    formData,
    setFormData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataContextProvider;
