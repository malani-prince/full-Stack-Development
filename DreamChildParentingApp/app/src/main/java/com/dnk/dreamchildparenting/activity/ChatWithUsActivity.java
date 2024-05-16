package com.dnk.dreamchildparenting.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;

import com.dnk.dreamchildparenting.AppData;
import com.dnk.dreamchildparenting.Utility;
import com.dnk.dreamchildparenting.async.GetDetailsAsync;
import com.dnk.dreamchildparenting.async.Interface;
import com.dnk.dreamchildparenting.async.RequestModel;
import com.dnk.dreamchildparenting.async.ResponseData;
import com.dnk.dreamchildparenting.databinding.ActivityChatWithUsBinding;

public class ChatWithUsActivity extends AppCompatActivity {
    ActivityChatWithUsBinding binding;
    Activity activity;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityChatWithUsBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);
        activity = this;
        getProfileData();
    }

    void getProfileData() {
        if (Utility.checkInternetConnection(getApplicationContext())) {
            RequestModel requestModel = new RequestModel();
            requestModel.setUserId(AppData.UserDataClass.userData.user_id);
            requestModel.setPageNo("1");
            new GetDetailsAsync(activity, requestModel, AppData.MethodName.UserFeedbackList, false, new Interface.OnResponseDecode() {
                @Override
                public void setResponseDecodeListner(ResponseData responseModel) {
                    if (responseModel.status.equals(AppData.ResponseStatus.statusSuccess)) {

                    } else {

                    }
                }

                @Override
                public void onFail(Throwable t) {

                }
            });
        }
    }
}