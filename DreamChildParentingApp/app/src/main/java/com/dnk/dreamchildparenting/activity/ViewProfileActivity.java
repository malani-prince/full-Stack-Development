package com.dnk.dreamchildparenting.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;

import com.dnk.dreamchildparenting.AppData;
import com.dnk.dreamchildparenting.Utility;
import com.dnk.dreamchildparenting.adapter.LanguageAdapter;
import com.dnk.dreamchildparenting.async.GetDetailsAsync;
import com.dnk.dreamchildparenting.async.Interface;
import com.dnk.dreamchildparenting.async.RequestModel;
import com.dnk.dreamchildparenting.async.ResponseData;
import com.dnk.dreamchildparenting.databinding.ActivityViewProfileBinding;

public class ViewProfileActivity extends AppCompatActivity {
    ActivityViewProfileBinding binding;
    Activity activity;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityViewProfileBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);
        activity = this;
        binding.btnBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });
        getProfileData();
    }

    void getProfileData() {
        if (Utility.checkInternetConnection(getApplicationContext())) {
            RequestModel requestModel = new RequestModel();
            requestModel.setUserId(AppData.UserDataClass.userData.user_id);
            new GetDetailsAsync(activity, requestModel, AppData.MethodName.UserProfileDetail, false, new Interface.OnResponseDecode() {
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