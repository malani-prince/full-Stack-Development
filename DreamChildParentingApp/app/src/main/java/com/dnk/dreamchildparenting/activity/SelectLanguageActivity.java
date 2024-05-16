package com.dnk.dreamchildparenting.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import com.dnk.dreamchildparenting.AppData;
import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.Utility;
import com.dnk.dreamchildparenting.adapter.LanguageAdapter;
import com.dnk.dreamchildparenting.async.GetDetailsAsync;
import com.dnk.dreamchildparenting.async.Interface;
import com.dnk.dreamchildparenting.async.RequestModel;
import com.dnk.dreamchildparenting.async.ResponseData;
import com.dnk.dreamchildparenting.databinding.ActivitySelectLanguageBinding;

public class SelectLanguageActivity extends AppCompatActivity {
    ActivitySelectLanguageBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivitySelectLanguageBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);

        binding.btnBack.setOnClickListener(v -> onBackPressed());

        binding.btnContinue.setOnClickListener(v ->
                startActivity(new Intent(SelectLanguageActivity.this, LoginActivity.class))
        );
        if (Utility.checkInternetConnection(getApplicationContext())) {
            RequestModel requestModel = new RequestModel();
            requestModel.setPageNo("1");
            new GetDetailsAsync(SelectLanguageActivity.this, requestModel, AppData.MethodName.LanguageList, false, new Interface.OnResponseDecode() {
                @Override
                public void setResponseDecodeListner(ResponseData responseModel) {
                    if (responseModel.status.equals(AppData.ResponseStatus.statusSuccess)) {
                        binding.languageList.setLayoutManager(new LinearLayoutManager(SelectLanguageActivity.this, LinearLayoutManager.VERTICAL, false));
                        LanguageAdapter languageAdapter = new LanguageAdapter(SelectLanguageActivity.this,responseModel.data.LanguageList);
                        binding.languageList.setAdapter(languageAdapter);
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