package com.dnk.dreamchildparenting;

import com.dnk.dreamchildparenting.async.DataModel;

public class AppData {
    public static String token = "S9KqsBWOm6zT/9eeIQtch1G8oBYTyjkr6QnIooI3px4LJZN8HJXVLJbCXjWI+V4f";
    public static String AppName = "Dream Child Parenting";
    public static String btnOkTitle = "Ok";

    public static class SharedKey {
        public static String UserData = "UserData";
    }

    public static class UserDataClass {
        public static DataModel userData;
    }

    public static class MethodName {
        public static String LanguageList = "LanguageList";
        public static String CountryList = "CountryList";
        public static String VerifyUser = "VerifyUser";
        public static String UserLogin = "UserLogin";
        public static String CityList = "CityList";
        public static String StateList = "StateList";
        public static String UserRegister = "UserRegister";
        public static String PlanList = "PlanList";
        public static String PlanTypeList = "PlanTypeList";
        public static String FolderFileList = "FolderFileList";
        public static String UserProfileDetail = "UserProfileDetail";
        public static String UserFeedbackList = "UserFeedbackList";
    }

    public static class ResponseStatus {
        public static String statusSuccess = "1";
    }

    public static class ErrorMessage {
        public static String loginValidation = "Please enter your mobile number....";
        public static String otpValidation = "Please enter OTP";
        public static String string = "Please enter your name";
        public static String emailValidation = "Please enter your email address";
        public static String stateValidation = "Please select your state";
        public static String cityValidation = "Please select your City/Village";
        public static String passwordValidation = "Please enter your password";
        public static String confirmPasswordValidation = "Please enter your confirm password";
        public static String mismatchPasswordValidation = "Password and confirm password doesn't match";
    }
}
