import { createContext, useContext, useState } from "react";

const DataContext = createContext();
export const useDataContext = () => {
  return useContext(DataContext);
};

function DataContextProvider({ children }) {
  const [formData, setFormData] = useState({
    details: {
      /* other details */
    },
    business_details: {
      /* business details */
    },
    contact_info: {
      /* contact info */
    },
    social_details: {
      /* social details */
    },
    other_details: {
      /* other details */
    },
  });

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

  const sendFormData = async () => {
    const form = new FormData();

    // Append formData fields
    Object.keys(formData).forEach((key) => {
      Object.keys(formData[key]).forEach((subKey) => {
        form.append(subKey, formData[key][subKey]);
      });
    });

    // Append formMedia fields
    Object.keys(formMedia).forEach((key) => {
      Object.keys(formMedia[key]).forEach((subKey) => {
        if (formMedia[key][subKey]) {
          form.append(subKey, formMedia[key][subKey]);
        }
      });
    });

    try {
      const response = await fetch(
        "http://20.244.48.88:8000/api/system_company_details_handler/",
        {
          method: "POST",
          body: form,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Form data submitted successfully:", data);
    } catch (error) {
      console.error("There was an error submitting the form data:", error);
    }
  };

  const value = {
    formData,
    setFormData,
    formMedia,
    setFormMedia,
    sendFormData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataContextProvider;
