package com.dnk.dreamchildparenting.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import com.dnk.dreamchildparenting.AppData;
import com.dnk.dreamchildparenting.Utility;
import com.dnk.dreamchildparenting.databinding.ActivityOtpVerificationBinding;

public class OtpVerificationActivity extends AppCompatActivity {
    ActivityOtpVerificationBinding binding;
    public Activity activity;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityOtpVerificationBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);
        activity = this;
        binding.btnBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });
        binding.btnSubmit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (Utility.isEmptyVal(binding.otpView.getText().toString().trim())) {
                    Utility.NotifyDialog(activity, AppData.AppName, AppData.ErrorMessage.otpValidation, AppData.btnOkTitle);
                } else {
                    startActivity(new Intent(OtpVerificationActivity.this, MainActivityAfterLogin.class));
                }


            }
        });

    }
}