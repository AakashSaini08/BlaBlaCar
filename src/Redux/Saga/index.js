import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
import { ACTION_STATES } from "../ActionStates";
import { BASE_URL, URL_EXTENSIONS } from "../../Services/Api/Constants";
import { LOCALSTORAGE_KEY_NAME } from "../../Shared/Constants";
import {
  savingProfilePic,
  setVehicleData,
  settingLoaderState,
  setBankDetails,
} from "../Actions";
import { axiosInstance } from "../../Shared/Request/Request";

function* postRegisterData(payload) {
  // console.log(payload.payload,"asdasd")
  const formData = new FormData();
  formData.append("first_name", payload.payload.first_name);
  formData.append("last_name", payload.payload.last_name);
  formData.append("password", payload.payload.password);
  formData.append("email", payload.payload.email);
  formData.append("dob", payload.payload.dob);
  formData.append("title", payload.payload.title);
  // console.log(formData,"My form Data")

  try {
    yield put(settingLoaderState(true));
    const res = yield axios.post(BASE_URL + URL_EXTENSIONS.SIGN_UP, formData);
    console.log(res.data, "register response");
    if (res) {
      localStorage.setItem(
        LOCALSTORAGE_KEY_NAME,
        JSON.stringify(res?.data?.token)
      );
      localStorage.setItem(
        "CurrentUser",
        JSON.stringify(res?.data?.data?.first_name)
      );
      localStorage.setItem("email", JSON.stringify(res?.data?.data?.email));
    }
    yield put(payload?.successRegister());
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    yield put(
      payload?.failedRegister(error?.response?.data || "server not responding")
    );
    // console.log(error, "errorInRegister")
  }
}

function* logoutnow(payload) {
  try {
    yield put(settingLoaderState(true));
    yield axiosInstance.post(BASE_URL + URL_EXTENSIONS.LOGOUT);
    payload?.successLogin();

    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in logging out");
  }
}

function* checkEmail(payload) {
  console.log(payload, "sasasasa");
  try {
    yield put(settingLoaderState(true));
    yield axios.get(
      BASE_URL + URL_EXTENSIONS.CHECKEMAIL + "?email=" + payload.payload
    );
    payload?.successLogin();
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    payload?.failedLogin(error?.response?.data || "server not responding");
    // console.log(error, "error in logging out")
  }
}

// successLogin,failedLogin
function* postLoginData(payload) {
  // console.log(payload.payload,"login data");
  const formData = new FormData();
  formData.append("password", payload.payload.password);
  formData.append("email", payload.payload.email);
  try {
    yield put(settingLoaderState(true));
    const res = yield axios.post(BASE_URL + URL_EXTENSIONS.SIGN_IN, formData);
    payload?.successLogin();
    if (res) {
      localStorage.setItem(
        LOCALSTORAGE_KEY_NAME,
        JSON.stringify(res?.data?.token)
      );
      localStorage.setItem(
        "CurrentUser",
        JSON.stringify(res?.data?.data?.first_name)
      );
      localStorage.setItem("email", JSON.stringify(res?.data?.data?.email));
    }
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    payload?.failedLogin(error?.response?.data || "server not responding");
  }
}

function* sendPasswordResetMailData(payload) {
  console.log(payload, "endPasswordResetMailData");
  const formData = new FormData();
  formData.append("email", payload.payload.email);

  try {
    yield put(settingLoaderState(true));
    yield axios.post(BASE_URL + URL_EXTENSIONS.SEND_MAIL, formData);
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in sending mail");
  }
}
function* sendResetPassword(payload) {
  // console.log(payload,"##########")
  const formData = new FormData();
  formData.append("password", payload.payload.password);
  formData.append("id", payload.payload.id);
  formData.append("token", payload.payload.token);

  try {
    yield put(settingLoaderState(true));
    yield axios.post(BASE_URL + URL_EXTENSIONS.FORGET_PASSWORD, formData);
    payload?.successLogin();
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    payload?.failedLogin(error?.response?.data || "server not responding");
    console.log(error, "error in reseting password");
  }
}

function* uploadingPic(payload) {
  try {
    yield put(settingLoaderState(true));
    yield axiosInstance.post(
      BASE_URL + URL_EXTENSIONS.PROFILE_PIC,
      payload?.payload
    );
    payload?.successImageUpload();
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in uploading pic");
  }
}

function* gettingProfilePic() {
  try {
    // console.log("get image called");
    yield put(settingLoaderState(true));
    const res = yield axiosInstance.get(BASE_URL + URL_EXTENSIONS.USER_PROFILE);
    // console.log(res.data.data, "imageinsaga");
    yield put(savingProfilePic(res?.data?.data));
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in getting pic");
  }
}

function* updateProfileData(payload) {
  try {
    const formData = new FormData();
    formData.append("dob", payload.payload.dob);
    formData.append("email", payload.payload.email);
    formData.append("first_name", payload.payload.first_name);
    formData.append("last_name", payload.payload.last_name);

    yield put(settingLoaderState(true));
    const res = yield axiosInstance.patch(
      BASE_URL + URL_EXTENSIONS.USER_PROFILE,
      formData
    );
    localStorage.setItem(
      "CurrentUser",
      JSON.stringify(res?.data?.data?.userdeatils?.first_name)
    );
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    // console.log(error, "errorInLogin");
  }
}
function* sendingEmailVerificationLink(payload) {
  console.log(payload, "<<<<>>>>>>");
  try {
    yield put(settingLoaderState(true));
    const res = yield axiosInstance.post(
      BASE_URL + URL_EXTENSIONS.EMAIL_VERIFICATION,
      payload?.payload
    );
    payload.successSend(res);
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    payload.failedSend(error?.response?.data);
    console.log(error, "error in sending email verification");
  }
}

function* confirmEmailOtp(payload) {
  console.log(payload, "[[[[[]]]]]]]]");
  try {
    yield put(settingLoaderState(true));
    const res = yield axiosInstance.post(
      BASE_URL + URL_EXTENSIONS.CONFIRM_EMAIL_OTP,
      payload?.payload
    );
    payload.successSend(res);
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    payload.failedSend(error?.response?.data);
    console.log(error, "error in confirming email verification");
  }
}

function* updateBioData(payload) {
  const formData = new FormData();
  formData.append("addbio", payload.payload.bio);
  try {
    // console.log(payload.payload.bio,"sssssss")
    yield put(settingLoaderState(true));
    const res = yield axiosInstance.put(
      BASE_URL + URL_EXTENSIONS.ADDBIO,
      formData
    );
    payload.successSend(res);

    // console.log(res?.data?.status?.data, "bioUpdated");
    // localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    payload.failedSend(error?.response?.data);
    console.log(error, "errorInLogin");
  }
}

function* addVehicle(payload) {
  try {
    console.log(payload, "$$$$$$$$$$$$$$$");
    const formData = new FormData();
    formData.append("country", payload.payload.country);
    formData.append("vehicle_no", payload.payload.vehicle_no);
    formData.append("vehicle_brand", payload.payload.vehicle_brand);
    formData.append("vehicle_name", payload.payload.vehicle_name);
    formData.append("vehicle_type", payload.payload.vehicle_type);
    formData.append("vehicle_color", payload.payload.vehicle_color);
    formData.append("vehicle_model_year", payload.payload.vehicle_model_year);

    yield put(settingLoaderState(true));
    const res = yield axiosInstance.post(
      BASE_URL + URL_EXTENSIONS.VEHICLE,
      formData
    );
    payload.navigateToProfile(res);
    // localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in adding vehicle");
  }
}

function* getVehicle() {
  try {
    yield put(settingLoaderState(true));
    const res = yield axiosInstance.get(BASE_URL + URL_EXTENSIONS.VEHICLE);
    console.log(res?.data, "res in saga");
    yield put(setVehicleData(res?.data));
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in adding vehicle");
  }
}

function* deleteVehicleData(payload) {
  try {
    console.log(payload.id, "deleteVehicleData");
    yield put(settingLoaderState(true));
    const res = yield axiosInstance.delete(
      BASE_URL + URL_EXTENSIONS.VEHICLE + `${payload?.id}/`
    );
    payload.navigateToProfile(res);
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in adding vehicle");
  }
}

function* updateVehicleDetails(payload) {
  const formData = new FormData();
  formData.append("id", payload.payload.id);
  formData.append("country", payload.payload.country);
  formData.append("vehicle_no", payload.payload.vehicle_no);
  formData.append("vehicle_brand", payload.payload.vehicle_brand);
  formData.append("vehicle_name", payload.payload.vehicle_name);
  formData.append("vehicle_type", payload.payload.vehicle_type);
  formData.append("vehicle_color", payload.payload.vehicle_color);
  formData.append("vehicle_model_year", payload.payload.vehicle_model_year);
  try {
    yield put(settingLoaderState(true));
    const res = yield axiosInstance.patch(
      BASE_URL + URL_EXTENSIONS.VEHICLE,
      formData
    );
    payload.navigateToProfile(res);
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in adding vehicle");
  }
}

function* updatePassword(payload) {
  const formData = new FormData();
  console.log(payload.payload, "saga change psw");
  formData.append("oldpassword", payload.payload.oldpassword);
  formData.append("password", payload.payload.password);

  try {
    // console.log(payload.payload.bio,"sssssss")
    yield put(settingLoaderState(true));
    const res = yield axiosInstance.post(
      BASE_URL + URL_EXTENSIONS.CHANGE_PASSWORD,
      formData
    );
    payload.successPsw(res);

    // console.log(res?.data?.status?.data, "bioUpdated");
    // localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    payload.failedPsw(error?.response?.data);
    console.log(error, "errorInLogin");
  }
}

function* updatePhone(payload) {
  const formData = new FormData();
  console.log(payload.payload, "saga phone");
  formData.append("phoneno", payload.payload);
  try {
    // console.log(payload.payload.bio,"sssssss")
    yield put(settingLoaderState(true));
    const res = yield axiosInstance.post(
      BASE_URL + URL_EXTENSIONS.PHONE_NUMBER,
      formData
    );
    payload.successSend(res);

    // console.log(res?.data?.status?.data, "bioUpdated");
    // localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    payload.failedSend(error?.response?.data);
    // console.log(error, "errorInLogin");
  }
}

function* confirmPhone(payload) {
  const formData = new FormData();
  console.log(payload.payload, "saga phone");
  formData.append("otp", payload.payload);
  try {
    // console.log(payload.payload.bio,"sssssss")
    yield put(settingLoaderState(true));
    const res = yield axiosInstance.post(
      BASE_URL + URL_EXTENSIONS.CONFIRM_PHONE,
      formData
    );
    payload.successSend(res);

    // console.log(res?.data?.status?.data, "bioUpdated");
    // localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    payload.failedSend(error?.response?.data);
    // console.log(error, "errorInLogin");
  }
}

function* checkPancard(payload) {
  const formData = new FormData();
  console.log(payload.payload, "saga phone");
  formData.append("pancard", payload.payload);
  try {
    // console.log(payload.payload.bio,"sssssss")
    yield put(settingLoaderState(true));
    const res = yield axiosInstance.put(
      BASE_URL + URL_EXTENSIONS.PANCARD,
      formData
    );
    payload.successSend(res);

    // console.log(res?.data?.status?.data, "bioUpdated");
    // localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    payload.failedSend(error?.response?.data);
    // console.log(error, "errorInLogin");
  }
}

function* updateBankDetails(payload) {
  const formData = new FormData();
  console.log(payload.payload, "saga bank");
  formData.append("account_holder", payload?.payload?.account_holder);
  formData.append("account_no", payload?.payload?.account_no);
  formData.append("ifsccode", payload?.payload?.ifsccode);

  try {
    // console.log(payload.payload.bio,"sssssss")
    yield put(settingLoaderState(true));
    const res = yield axiosInstance.put(
      BASE_URL + URL_EXTENSIONS.BANK_DETAILS,
      formData
    );
    payload.successSend(res);

    // console.log(res?.data?.status?.data, "bioUpdated");
    // localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    payload.failedSend(error?.response?.data);
    // console.log(error, "errorInLogin");
  }
}

function* gettingBankDetails(payload) {
  try {
    // console.log(payload.payload.bio,"sssssss")
    yield put(settingLoaderState(true));
    const res = yield axiosInstance.get(BASE_URL + URL_EXTENSIONS.BANK_DETAILS);
    yield put(setBankDetails(res?.data));
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    payload.failedSend(error?.response?.data);
    // console.log(error, "errorInLogin");
  }
}

function* deleteMyAccount(payload) {
  try {
    const id = payload.payload.id;
    yield put(settingLoaderState(true));
    const res = yield axiosInstance.delete(
      BASE_URL + URL_EXTENSIONS.USER_PROFILE + id + "/"
    );
    payload.successSend(res);
    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    // console.log(error, "errorInLogin");
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////

function* publishRideData(payload) {
  try {
    console.log("publishride");
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: token },
    };
    yield put(settingLoaderState(true));
    const res = yield axios.post(
      BASE_URL + URL_EXTENSIONS.PUBLISH_RIDE,
      payload?.payload,
      config
    );
    console.log(res?.data, "publishRide");
    payload?.successPublishRide();

    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in publish ride", payload);
    payload?.failedPublishRide(error?.response?.data);
  }
}
function* getPublishRidesData(payload) {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: token },
    };
    yield put(settingLoaderState(true));
    const res = yield !payload?.id &&
      axios.get(BASE_URL + URL_EXTENSIONS.PUBLISH_RIDE, config);
    const res1 = yield payload?.id &&
      axios.get(
        BASE_URL + URL_EXTENSIONS.PUBLISH_RIDE + "/" + payload?.id,
        config
      );

    payload?.successGet(res?.data || res1?.data);

    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in getting ride", payload);
    payload?.failedGet(error?.response?.data);
  }
}
function* deleteRide(payload) {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: token },
    };
    yield put(settingLoaderState(true));

    const res1 = yield axios.delete(
      BASE_URL + URL_EXTENSIONS.PUBLISH_RIDE + "/" + payload?.id,
      config
    );

    payload?.successGet(res1);

    yield put(settingLoaderState(false));
  } catch (error) {
    yield put(settingLoaderState(false));
    console.log(error, "error in getting ride", payload);
    payload?.failedGet(error?.response?.data);
  }
}

function* Saga() {
  yield all([
    takeLatest(ACTION_STATES.LOGOUT, logoutnow),
    takeLatest(ACTION_STATES.CHECKEMAIL, checkEmail),
    takeLatest(ACTION_STATES.SIGN_UP, postRegisterData),
    takeLatest(ACTION_STATES.SIGN_IN, postLoginData),
    takeLatest(
      ACTION_STATES.SEND_FORGET_PASSWORD_MAIL,
      sendPasswordResetMailData
    ),
    takeLatest(ACTION_STATES.CONFIRM_EMAIL_OTP, confirmEmailOtp),
    takeLatest(
      ACTION_STATES.SEND_EMAIL_VERIFICATION_LINK,
      sendingEmailVerificationLink
    ),
    takeLatest(ACTION_STATES.SEND_RESET_PASSWORD, sendResetPassword),
    takeLatest(ACTION_STATES.UPDATE_PROFILE, updateProfileData),
    takeLatest(ACTION_STATES.ADDING_MINI_BIO, updateBioData),
    takeLatest(ACTION_STATES.UPLOADING_PROFILE_PIC, uploadingPic),
    takeLatest(ACTION_STATES.GETTING_PROFILE_PIC, gettingProfilePic),
    takeLatest(ACTION_STATES.ADD_VEHICLE_DATA, addVehicle),
    takeLatest(ACTION_STATES.GET_VEHICLE_DATA, getVehicle),
    takeLatest(ACTION_STATES.DELETE_VEHICLE, deleteVehicleData),
    takeLatest(ACTION_STATES.UPDATE_VEHICLE, updateVehicleDetails),
    takeLatest(ACTION_STATES.CHANGE_PASSWORD, updatePassword),
    takeLatest(ACTION_STATES.PHONE_NUMBER, updatePhone),
    takeLatest(ACTION_STATES.CONFIRM_PHONE, confirmPhone),
    takeLatest(ACTION_STATES.PANCARD, checkPancard),
    takeLatest(ACTION_STATES.BANK_DETAILS, updateBankDetails),
    takeLatest(ACTION_STATES.GET_BANK_DETAILS, gettingBankDetails),
    takeLatest(ACTION_STATES.DELETE_ACCOUNT, deleteMyAccount),
    takeLatest(ACTION_STATES.PUBLISH_RIDE, publishRideData),
    takeLatest(ACTION_STATES.GET_PUBLISHED_RIDES, getPublishRidesData),
    takeLatest(ACTION_STATES.DELETE_RIDE, deleteRide),
  ]);
}
export default Saga;
