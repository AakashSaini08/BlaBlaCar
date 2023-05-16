export const STRINGS={
    BIRTHDATE_HEADING:"What is your Birth date?",
    EMAIL_HEADING:"What is your email?",
    NAME_HEADING:"What is your name?",
    GENDER_SELECT_HEADING:"How would you like to be addressed?",
    PASSWORD_HEADING:"Define your password",
    MOBILE_VERIFICATION_HEADING:"Verify your mobile number",
    SEARCH_HEADING:"Find a ride",
    LOGIN_INPUT_HEADING:"What's your email and password?",
    FORGOT_PASSWORD:"What's your email? Check your inbox for a link to create a new password.",
    RESET_PASSWORD:"Reset Password",
    MINI_BIO_HEADING:"What would you like other members to know about you?",
    ADDING_VEHICLE_DETAILS:"What is your license plate number?",
    VERIFY_EMAIL:"Click to verify Email",
    PUBLISH_RIDE:"Become a BlaBlaCar driver and save on travel costs by sharing your ride with passengers.",
    PICKUP:"Pick-up",
    PICKUP_FROM_MAP:"Where would you like to pick up passengers?",
    DROPOF:"Drop-off",
    DROPOF_LOCATION_MAP:"Where would you like to drop off passengers?",
    SELECT_ROUTE:"What is your route?",
    ADD_STOP:"Add stopovers to get more passengers",
    WHEN_GOING:"When are you going?",
    ON_WHAT_TIME:"At what time will you pick passengers up?",
    CHANGE_PASSWORD:"Change password",
    OTP_SMS:"Enter the code we've just sent you by SMS",
    PANCARD_DETAILS:"Enter your PAN Card number"
}


export const REGEX={
    email:"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
    name: "[a-zA-Z][a-zA-Z]+",
    password:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
    numberAndText:"/^[a-zA-Z0-9]+$/",
    numer:"/^[0-9]+$/",
    phone:"^[0-9]{10}$",
    otp:"^[0-9]{4}$",
    pancard:"[A-Z]{5}[0-9]{4}[A-Z]{1}",
}

export const VALIDATION_MESSAGES={
    EMAIL:{
        NOT_VALID:"Enter Valid Email",
        EMPTY:"*Email Required"
    },
    FIRST_NAME:{
        NOT_VALID:"Enter Valid First Name",
        EMPTY:"*FirstName Required"
    },
    LAST_NAME:{
        NOT_VALID:"Enter Valid Last Name",
        EMPTY:"*LastName Required"
    },
    PASSWORD:{
        NOT_VALID:"Enter Valid Password",   
        EMPTY:"*Password Required",
      
    },
    CHANGE_PASSWORD:{
        NOT_MATCHED:"Password doesn't matched",   
        EMPTY:"*Password Required",
    },
    BIO:"enter more than 15 character and numbers are not accepted  "
    ,  COUNTRY:{
        NOT_VALID:"Enter Valid country",   
        EMPTY:"*country Required",
      
    },
    VEHICLENUMBER:{
        NOT_VALID:"Enter Valid vehicleNumber",   
        EMPTY:"*VehicleNumber Required",
      
    },
    VEHICLEBRAND:{
        NOT_VALID:"Enter Valid vehicleBrand",   
        EMPTY:"*VehicleBrand Required",
      
    },
    VEHICLENAME:{
        NOT_VALID:"Enter Valid vehicleName",   
        EMPTY:"*VehicleName Required",
      
    },
    VEHICLETYPE:{
        NOT_VALID:"Enter Valid vehicleType",   
        EMPTY:"*VehicleType Required",
      
    },
    VEHICLECOLOR:{
        NOT_VALID:"Enter Valid vehicleColor",   
        EMPTY:"*VehicleColor Required",
      
    },
    VEHICLEMODELYEAR:{
        NOT_VALID:"Enter Valid vehicleModelYear",   
        EMPTY:"*VehicleModelYear Required",
      
    },
    DATE:{
        NOT_VALID:"Enter Valid Date",   
        EMPTY:"*Date Required",
      
    },
    TIME:{
        NOT_VALID:"Enter Valid Time",   
        EMPTY:"*Time Required",
      
    },
    PHONE:{
        NOT_VALID:"Enter Valid Phone number",   
        EMPTY:"*Phone number Required",
    },
    OTP:{
        NOT_VALID:"Enter Valid OTP",   
        EMPTY:"*OTP Required",
    },
    PANCARD:{
        NOT_VALID:"Enter Valid PAN card number",   
        EMPTY:"*PAN card number Required",
    },
}


export const LOCALSTORAGE_KEY_NAME="token"



export const BUTTONTEXT={
    PUBLISH_RIDE:"Publish Ride",
    CONTINUE:"Continue"
}