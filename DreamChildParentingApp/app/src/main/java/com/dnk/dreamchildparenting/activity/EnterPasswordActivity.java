package com.dnk.dreamchildparenting.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

import com.dnk.dreamchildparenting.AppData;
import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.Utility;
import com.dnk.dreamchildparenting.async.GetDetailsAsync;
import com.dnk.dreamchildparenting.async.Interface;
import com.dnk.dreamchildparenting.async.RequestModel;
import com.dnk.dreamchildparenting.async.ResponseData;
import com.dnk.dreamchildparenting.databinding.ActivityEnterPasswordBinding;
import com.google.gson.Gson;

public class EnterPasswordActivity extends AppCompatActivity {
    ActivityEnterPasswordBinding binding;
    Activity activity;
    String mobileNumber;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityEnterPasswordBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);
        activity = this;
        mobileNumber = getIntent().getStringExtra("mobileNumber");

        binding.btnBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });
        binding.btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (Utility.isEmptyVal(binding.edtPassword.getText().toString())) {
                    Utility.NotifyDialog(activity, AppData.AppName, AppData.ErrorMessage.passwordValidation, AppData.btnOkTitle);
                } else {
                    if (Utility.checkInternetConnection(getApplicationContext())) {
                        RequestModel requestModel = new RequestModel();
                        requestModel.setUserMobileNo(mobileNumber);
                        requestModel.setUserPassword(binding.edtPassword.getText().toString().trim());
                        new GetDetailsAsync(activity, requestModel, AppData.MethodName.UserLogin, false, new Interface.OnResponseDecode() {
                            @Override
                            public void setResponseDecodeListner(ResponseData responseModel) {
                                if (responseModel.status.equals(AppData.ResponseStatus.statusSuccess)) {
                                    Utility.setSharedPreferences(activity, AppData.SharedKey.UserData, new Gson().toJson(responseModel.data));
                                    startActivity(new Intent(activity, MainActivityAfterLogin.class));
                                } else {
                                    Utility.NotifyDialog(activity, AppData.AppName, responseModel.message, AppData.btnOkTitle);
                                }
                            }

                            @Override
                            public void onFail(Throwable t) {

                            }
                        });
                    }
                }
            }
        });
    }
}