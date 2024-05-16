package com.dnk.dreamchildparenting.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;

import com.dnk.dreamchildparenting.AppData;
import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.Utility;
import com.dnk.dreamchildparenting.adapter.DashboardAdapter;
import com.dnk.dreamchildparenting.adapter.MyChildAdapter;
import com.dnk.dreamchildparenting.adapter.PlanSubTypeAdapter;
import com.dnk.dreamchildparenting.async.GetDetailsAsync;
import com.dnk.dreamchildparenting.async.Interface;
import com.dnk.dreamchildparenting.async.RequestModel;
import com.dnk.dreamchildparenting.async.ResponseData;
import com.dnk.dreamchildparenting.databinding.ActivityMainAfterLoginBinding;
import com.dnk.dreamchildparenting.databinding.ActivityPlanSubTypeBinding;

public class PlanSubTypeActivity extends AppCompatActivity {
    ActivityPlanSubTypeBinding binding;
    PlanSubTypeAdapter planSubTypeAdapter;
    Activity activity;
    String title;
    String PlanId;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityPlanSubTypeBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);
        activity = this;
        title = getIntent().getStringExtra("title");
        PlanId = getIntent().getStringExtra("PlanId");

        binding.btnBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });
        binding.txtTitle.setText(title);

        getPlanTypeList();
    }

    public void getPlanTypeList() {
        if (Utility.checkInternetConnection(activity)) {
            RequestModel requestModel = new RequestModel();
            requestModel.setUserId("1");
            requestModel.setPlanId(PlanId);
            new GetDetailsAsync(activity, requestModel, AppData.MethodName.PlanTypeList, false, new Interface.OnResponseDecode() {
                @Override
                public void setResponseDecodeListner(ResponseData responseModel) {
                    if (responseModel.status.equals(AppData.ResponseStatus.statusSuccess)) {
                        binding.listPlanType.setLayoutManager(new LinearLayoutManager(PlanSubTypeActivity.this, LinearLayoutManager.VERTICAL, false));
                        planSubTypeAdapter = new PlanSubTypeAdapter(PlanSubTypeActivity.this, responseModel.data.plan_type_detail,PlanId);
                        binding.listPlanType.setAdapter(planSubTypeAdapter);
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