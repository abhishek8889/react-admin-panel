import { toast } from 'react-toastify';

import axios from "axios";

export const submitForm = (requestData ,validationRules= []) => {
    const validationStatus = validateForm(requestData.data , validationRules);

    if(validationStatus !== true){

    }
    console.log(requestData)
    axios(requestData)
        .then(function (response) {
            if(response.status === 200 && response.data.success === true){
                toastSuccess(response.data.message);
            }
        }).catch((error) => {
            if (error.response) {
                console.error("Error Response Data:", error.response.data);
                console.error("Error Status:", error.response.status);
                console.error("Error Headers:", error.response.headers);
                toastError(`Error: ${error.response.data.message || "Something went wrong!"}`);
            } else if (error.request) {
                console.error("No Response:", error.request);
                toastError("Error: No response received from the server.");
            } else {
                console.error("Error Message:", error.message);
                toastError(`Error: ${error.message}`);
            }
        })
        .finally(() => {
            
        });
}


// export const fetchFromApi =  (requestData) => {
//     return axios(requestData)
//         .then(function (response) {
//             if(response.status === 200 && response.data.success === true){
//                 // console.log(response.data)
//                 return response.data;
//             }
//         }).catch((error) => {
//             if (error.response) {
//                 console.error("Error Response Data:", error.response.data);
//                 console.error("Error Status:", error.response.status);
//                 console.error("Error Headers:", error.response.headers);
//             } else if (error.request) {
//                 console.error("No Response:", error.request);
//             } else {
//                 console.error("Error Message:", error.message);
//             }
//         });
// }


export const fetchFromApi = (requestData) => {
    return axios(requestData)
      .then((response) => {
        if (response.status === 200 && response.data.success === true) {
            // console.log(response.data);
            return response.data;
        }
        throw new Error("Unexpected response status or data structure.");
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error Response Data:", error.response.data);
          console.error("Error Status:", error.response.status);
          console.error("Error Headers:", error.response.headers);
        } else if (error.request) {
          console.error("No Response:", error.request);
        } else {
          console.error("Error Message:", error.message);
        }
        throw error;
      });
  };

//  :::::::: Toast Messages ::::::::

export function toastSuccess(message) {
    toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export function toastError(message) {
    toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export function toastWarning(message) {
    toast.warning(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export function toastInfo(message) {
    toast.info(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export function validateForm(formData , validationRules) {
    if(validationRules && validationRules.length === 0){        
        return true;
    }   
}