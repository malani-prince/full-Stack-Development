package com.dnk.dreamchildparenting.async;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;

public class DataModel {
    public String CurrentPage, TotalPage, TotalRecord;
    public String language_name;
    public String country_id, country_name, country_code, country_phone_code;
    public String state_id, state_name, state_code;
    public String city_id, city_name;
    public String user_id, user_mobile, user_name, user_type, is_paid_user, user_status;


    @SerializedName("plan_id")
    @Expose
    public String planId;
    @SerializedName("plan_name")
    @Expose
    public String planName;
    @SerializedName("is_paid_plan")
    @Expose
    public String isPaidPlan;
    @SerializedName("plan_description")
    @Expose
    public String planDescription;
    @SerializedName("plan_price")
    @Expose
    public String planPrice;
    @SerializedName("cgst")
    @Expose
    public String cgst;
    @SerializedName("sgst")
    @Expose
    public String sgst;
    @SerializedName("igst")
    @Expose
    public String igst;
    @SerializedName("utgst")
    @Expose
    public String utgst;
    @SerializedName("is_have_plan_type")
    @Expose
    public String isHavePlanType;
    @SerializedName("dob_start_date")
    @Expose
    public String dobStartDate;
    @SerializedName("dob_end_date")
    @Expose
    public String dobEndDate;
    @SerializedName("dob_total_days")
    @Expose
    public String dobTotalDays;

    @SerializedName("plan_type_id")
    @Expose
    public String planTypeId;
    @SerializedName("plan_type_name")
    @Expose
    public String planTypeName;
    @SerializedName("plan_type_description")
    @Expose
    public String planTypeDescription;

    @SerializedName("object_id")
    @Expose
    public String objectId;
    @SerializedName("is_folder")
    @Expose
    public String isFolder;
    @SerializedName("object_name")
    @Expose
    public String objectName;
    @SerializedName("object_sub_title")
    @Expose
    public String objectSubTitle;
    @SerializedName("is_have_child")
    @Expose
    public String isHaveChild;
    @SerializedName("is_show_activity_day")
    @Expose
    public String isShowActivityDay;
    @SerializedName("progress_type_id")
    @Expose
    public String progressTypeId;
    @SerializedName("progress_type_title")
    @Expose
    public String progressTypeTitle;
    @SerializedName("is_icon")
    @Expose
    public String isIcon;
    @SerializedName("object_icon")
    @Expose
    public String objectIcon;
    @SerializedName("folder_type")
    @Expose
    public String folderType;
    @SerializedName("duration")
    @Expose
    public String duration;
    @SerializedName("is_file_download")
    @Expose
    public String isFileDownload;
    @SerializedName("is_activity")
    @Expose
    public String isActivity;
    @SerializedName("activity_points")
    @Expose
    public String activityPoints;
    @SerializedName("is_questionaries")
    @Expose
    public String isQuestionaries;
    @SerializedName("object_status")
    @Expose
    public String objectStatus;
    @SerializedName("object_sub_status")
    @Expose
    public String objectSubStatus;
    @SerializedName("folder_parent_id")
    @Expose
    public String folderParentId;
    @SerializedName("language_id")
    @Expose
    public String languageId;
    @SerializedName("activity_day")
    @Expose
    public String activityDay;

    public ArrayList<DataModel> LanguageList;
    public ArrayList<DataModel> CountryList;
    public ArrayList<DataModel> StateList;
    public ArrayList<DataModel> CityList;
    public ArrayList<DataModel> PlanList;
    public ArrayList<DataModel> plan_type_detail;
    public ArrayList<DataModel> FolderFileList;
}
