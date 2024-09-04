// validate.js

export const validateCompanyName = (companyName) => {
    if (!companyName) return "Company Name is required.";
    return "";
  };
  
  export const validateCompanyType = (companyType) => {
    if (!companyType) return "Company Type is required.";
    return "";
  };
  
  export const validateAlias = (alias) => {
    if (!alias) return "Alias is required.";
    return "";
  };
  
  export const validateCompanyId = (companyId) => {
    if (!companyId) return "Company ID is required.";
    if (!/^\d+$/.test(companyId)) return "Company ID must be a number.";
    return "";
  };
  
  export const validateCompanySize = (companySize) => {
    if (!companySize) return "Company Size is required.";
    if (!/^\d+$/.test(companySize)) return "Company Size must be a number.";
    return "";
  };
  
  export const validateIncorporationNo = (incorporationNo) => {
    if (!incorporationNo) return "Incorporation No. is required.";
    return "";
  };
  
  export const validateIncorporationCertificate = (certificate) => {
    if (!certificate) return "Incorporation Certificate is required.";
    return "";
  };
  
  export const validateIncorporationDate = (date) => {
    if (!date) return "Incorporation Date is required.";
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) return "Date must be in the format YYYY-MM-DD.";
    return "";
  };
  
  export const validatePanDetails = (pan) => {
    if (!pan) return "PAN is required.";
    return "";
  };
  
  export const validateTaxCertification = (taxCert) => {
    if (!taxCert) return "Tax Certification is required.";
    return "";
  };
  
  export const validateCountry = (country) => {
    if (!country) return "Country is required.";
    return "";
  };
  
  export const validateState = (state) => {
    if (!state) return "State is required.";
    return "";
  };
  
  export const validateCity = (city) => {
    if (!city) return "City is required.";
    return "";
  };
  
  export const validatePincode = (pincode) => {
    if (!pincode) return "Pincode is required.";
    if (!/^\d{5,6}$/.test(pincode)) return "Pincode must be 5 or 6 digits.";
    return "";
  };
  
  export const validateRegisteredOfficeAddress = (address) => {
    if (!address) return "Registered Office Address is required.";
    return "";
  };
  
  export const validateAddress = (address) => {
    if (!address) return "Address is required.";
    return "";
  };
  
  export const validateWhatsappNumber = (whatsappNumber) => {
    if (whatsappNumber && !/^\d+$/.test(whatsappNumber))
      return "WhatsApp Number must be a number.";
    return "";
  };
  
  export const validateMobileNumber = (mobileNumber) => {
    if (!mobileNumber) return "Mobile Number is required.";
    if (!/^\d{10}$/.test(mobileNumber))
      return "Mobile Number must be a 10-digit number.";
    return "";
  };
  
  export const validateEmailId = (emailId) => {
    if (!emailId) return "Email ID is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) return "Email ID is not valid.";
    return "";
  };
  
  // Validate all fields
  export const validateAllFields = (formData) => {
    return {
      companyName: validateCompanyName(formData.companyName),
      companyType: validateCompanyType(formData.companyType),
      alias: validateAlias(formData.alias),
      companyId: validateCompanyId(formData.companyId),
      companySize: validateCompanySize(formData.companySize),
      incorporationNo: validateIncorporationNo(formData.incorporationNo),
      incorporationCertificate: validateIncorporationCertificate(
        formData.incorporationCertificate
      ),
      incorporationDate: validateIncorporationDate(formData.incorporationDate),
      panDetails: validatePanDetails(formData.panDetails),
      taxCertification: validateTaxCertification(formData.taxCertification),
      country: validateCountry(formData.country),
      state: validateState(formData.state),
      city: validateCity(formData.city),
      pincode: validatePincode(formData.pincode),
      registeredOfficeAddress: validateRegisteredOfficeAddress(
        formData.registeredOfficeAddress
      ),
      address: validateAddress(formData.address),
      whatsappNumber: validateWhatsappNumber(formData.whatsappNumber),
      mobileNumber: validateMobileNumber(formData.mobileNumber),
      emailId: validateEmailId(formData.emailId),
    };
  };
  