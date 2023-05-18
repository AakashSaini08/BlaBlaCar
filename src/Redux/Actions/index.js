import { ACTION_STATES } from "../ActionStates";

export const registerData = {

  email: (payload) => {
    return {
      type: ACTION_STATES.ADD_EMAIL,
      payload,
    };
  },
  password: (payload) => {
    return {
      type: ACTION_STATES.ADD_PASSWORD,
      payload,
    };
  },
  nameTitle: (payload) => {
    return {
      type: ACTION_STATES.ADD_TITLE,
      payload,
    };
  },
  date: (payload) => {
    return {
      type: ACTION_STATES.ADD_DATE,
      payload,
    };
  },
  firstName: (payload) => {
    return {
      type: ACTION_STATES.ADD_FIRSTNAME,
      payload,
    };
  },
  lastName: (payload) => {
    return {
      type: ACTION_STATES.ADD_LASTNAME,
      payload,
    };
  },
  signup: (payload, successRegister, failedRegister) => {
    return {
      type: ACTION_STATES.SIGN_UP,
      payload,
      successRegister,
      failedRegister,
    };
  },
};

export const checkemail = (payload,successLogin,failedLogin) => {
  return {
    type: ACTION_STATES.CHECKEMAIL,
    payload,
    successLogin,
    failedLogin
  };
};

export const phoneno = (payload,successSend,failedSend) => {
  // console.log(payload,"aaaaaaaaa")
  return {
    type: ACTION_STATES.PHONE_NUMBER,
    payload,
    successSend,
    failedSend
  };
};

export const confirmPhone = (payload,successSend,failedSend) => {
  console.log(payload,"aaaaaaaaa")
  return {
    type: ACTION_STATES.CONFIRM_PHONE,
    payload,
    successSend,
    failedSend
  };
};

export const loginData = {
  signin: (payload, successLogin, failedLogin) => {
    return {
      type: ACTION_STATES.SIGN_IN,
      payload,
      successLogin,
      failedLogin,
    };
  },
};

export const logout = {
  logout: (payload, successLogin, failedLogin) => {
    return {
      type: ACTION_STATES.LOGOUT,
      payload,
      successLogin,
      failedLogin,
    };
  },
};



export const currentUserUpdate = (payload) => {
  console.log("currentUserUpdateCalled");
  return {
    type: ACTION_STATES.SET_CURRENT_USER,
    payload,
  };
};

export const sendPasswordResetMail = (payload) => {
  return {
    type: ACTION_STATES.SEND_FORGET_PASSWORD_MAIL,
    payload,
  };
};
export const sendResetPassword = (payload, successLogin, failedLogin) => {
  return {
    type: ACTION_STATES.SEND_RESET_PASSWORD,
    payload,
    successLogin,
    failedLogin,
  };
};

export const settingLoaderState = (payload) => {
  return {
    type: ACTION_STATES.SETTING_LOADER_STATE,
    payload,
  };
};

export const uploadProfilePic = (payload, successImageUpload) => {
  return {
    type: ACTION_STATES.UPLOADING_PROFILE_PIC,
    payload,
    successImageUpload,
  };
};
export const updateProfile = (payload) => {
  console.log(payload,"action")
  return {
    type: ACTION_STATES.UPDATE_PROFILE,
    payload,
  };
};
export const addingBio = (payload, successSend, failedSend) => {
  return {
    type: ACTION_STATES.ADDING_MINI_BIO,
    payload,
    successSend,
    failedSend
  };
};

export const gettingProfilePic = (payload) => {
  return {
    type: ACTION_STATES.GETTING_PROFILE_PIC,
    payload,
  };
};
export const addVehicleData = (payload, navigateToProfile) => {
  return {
    type: ACTION_STATES.ADD_VEHICLE_DATA,
    payload,
    navigateToProfile,
  };
};
export const savingProfilePic = (payload) => {
  return {
    type: ACTION_STATES.SAVE_PROFILE_PIC,
    payload,
  };
};
export const getVehicleData = () => {
  return {
    type: ACTION_STATES.GET_VEHICLE_DATA,
  };
};
export const setVehicleData = (payload) => {
  console.log(payload, "res in action");
  return {
    type: ACTION_STATES.SET_VEHICLE_DATA,
    payload,
  };
};

export const deleteVehicle = (id, navigateToProfile) => {
  return {
    type: ACTION_STATES?.DELETE_VEHICLE,
    id,
    navigateToProfile,
  };
};
export const updateVehicleData = (payload, navigateToProfile) => {
  return {
    type: ACTION_STATES.UPDATE_VEHICLE,
    payload,
    navigateToProfile,
  };
};

export const sendEmailVerificationLink = (payload, successSend, failedSend) => {

  return {
    type: ACTION_STATES.SEND_EMAIL_VERIFICATION_LINK,
    payload,
    successSend,
    failedSend
  }
}

export const confirmemailotp = (payload, successSend, failedSend) => {
console.log(payload,"otp confirm action")
  return {
    type: ACTION_STATES.CONFIRM_EMAIL_OTP,
    payload,
    successSend,
    failedSend
  }
}

export const changePassword = (payload, successPsw, failedPsw) => {
  console.log(payload,"psw confirm action")
    return {
      type: ACTION_STATES.CHANGE_PASSWORD,
      payload,
      successPsw,
      failedPsw
    }
  }

  export const myPancard = (payload, successSend, failedSend) => {
    console.log(payload,"Send confirm action")
      return {
        type: ACTION_STATES.PANCARD,
        payload,
        successSend,
        failedSend
      }
    }
  

    export const bankDetails = (payload, successSend, failedSend) => {
      console.log(payload,"bank action")
        return {
          type: ACTION_STATES.BANK_DETAILS,
          payload,
          successSend,
          failedSend
        }
      }
    
      export const getBankDetails = () => {
          return {
            type: ACTION_STATES.GET_BANK_DETAILS,

          }
        }
  
        export const setBankDetails = (payload) => {
          return {
            type: ACTION_STATES.SET_BANK_DETAILS,
            payload
          }
        }

        export const deleteAccount = (payload,successSend) => {
          console.log(payload.id,"{{{{{}}}}}}}")
          return {
            type: ACTION_STATES.DELETE_ACCOUNT,
            payload,
            successSend
          };
        };