import { REGEX } from "../Constants"

export const isValidEmail = new RegExp(REGEX?.email);
export const isValidName = new RegExp(REGEX?.name);
export const isValidPassword = new RegExp(REGEX?.password);
export const isValidNumber = new RegExp(REGEX?.numer);
export const isValidNumberAndText = new RegExp(REGEX?.numberAndText);
export const isValidPhone = new RegExp(REGEX?.phone);
export const isValidOtp = new RegExp(REGEX?.otp);
export const isValidPancard = new RegExp(REGEX?.pancard);

