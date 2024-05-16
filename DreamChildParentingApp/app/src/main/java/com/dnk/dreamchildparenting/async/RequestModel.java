package com.dnk.dreamchildparenting.async;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.io.Serializable;
import java.util.ArrayList;

public class RequestModel implements Serializable {

    public String token, PageNo, CountryId, StateId;
    public String DeviceId, UserMobileNo, UserName, UserType, ParentType, UserPassword, Country, State, City, DeviceType, FcmToken;
    public String UserId, PlanId, LanguageId, PlanTypeId, FolderParentId, ActivityDay;
    public String BillingName, BillingAddress, BillingMobileNo, BillingCountryId, BillingStateId, BillingCityId, BillingPincode, ShippingName, ShippingAddress, ShippingMobileNo, ShippingCountryId, ShippingStateId, ShippingCityId, ShippingPincode, DeviceVersion, DeviceName, Otp, OtpReferenceId, Village, FromId, ToId, Message;


    public void setLanguageId(String languageId) {
        LanguageId = languageId;
    }

    public void setPlanTypeId(String planTypeId) {
        PlanTypeId = planTypeId;
    }

    public void setFolderParentId(String folderParentId) {
        FolderParentId = folderParentId;
    }

    public void setActivityDay(String activityDay) {
        ActivityDay = activityDay;
    }

    public void setPlanId(String planId) {
        PlanId = planId;
    }

    public void setUserId(String userId) {
        UserId = userId;
    }

    public void setUserMobileNo(String userMobileNo) {
        UserMobileNo = userMobileNo;
    }

    public void setPageNo(String pageNo) {
        PageNo = pageNo;
    }

    public void setCountryId(String countryId) {
        CountryId = countryId;
    }

    public void setStateId(String stateId) {
        StateId = stateId;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public void setDeviceId(String deviceId) {
        DeviceId = deviceId;
    }

    public void setUserName(String userName) {
        UserName = userName;
    }

    public void setUserType(String userType) {
        UserType = userType;
    }

    public void setParentType(String parentType) {
        ParentType = parentType;
    }

    public void setUserPassword(String userPassword) {
        UserPassword = userPassword;
    }

    public void setCountry(String country) {
        Country = country;
    }

    public void setState(String state) {
        State = state;
    }

    public void setCity(String city) {
        City = city;
    }

    public void setDeviceType(String deviceType) {
        DeviceType = deviceType;
    }

    public void setFcmToken(String fcmToken) {
        FcmToken = fcmToken;
    }
}
