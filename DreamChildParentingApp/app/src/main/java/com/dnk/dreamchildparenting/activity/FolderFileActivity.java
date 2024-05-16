package com.dnk.dreamchildparenting.activity;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;

import com.dnk.dreamchildparenting.AppData;
import com.dnk.dreamchildparenting.Utility;
import com.dnk.dreamchildparenting.adapter.Folder_File_Adapter;
import com.dnk.dreamchildparenting.async.GetDetailsAsync;
import com.dnk.dreamchildparenting.async.Interface;
import com.dnk.dreamchildparenting.async.RequestModel;
import com.dnk.dreamchildparenting.async.ResponseData;
import com.dnk.dreamchildparenting.databinding.ActivityFolderFileBinding;

public class FolderFileActivity extends AppCompatActivity {
    ActivityFolderFileBinding binding;
    Folder_File_Adapter folder_file_adapter;
    Activity activity;
    String PlanId;
    String PlanTypeId;
    String FolderParentId = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityFolderFileBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);
        activity = this;
        PlanId = getIntent().getStringExtra("PlanId");
        PlanTypeId = getIntent().getStringExtra("PlanTypeId");
        FolderParentId = getIntent().getStringExtra("FolderParentId");
        binding.btnBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });

        binding.txtTitle.setText(getIntent().getStringExtra("Title"));
        getPlanTypeList();
    }

    public void getPlanTypeList() {
        if (Utility.checkInternetConnection(activity)) {
            RequestModel requestModel = new RequestModel();
            requestModel.setUserId(AppData.UserDataClass.userData.user_id);
            requestModel.setPlanId(PlanId);
            requestModel.setLanguageId("1");
            requestModel.setPageNo("1");
            requestModel.setPlanTypeId(PlanTypeId);
            requestModel.setFolderParentId(FolderParentId);
            requestModel.setActivityDay("");
            new GetDetailsAsync(activity, requestModel, AppData.MethodName.FolderFileList, false, new Interface.OnResponseDecode() {
                @Override
                public void setResponseDecodeListner(ResponseData responseModel) {
                    if (responseModel.status.equals(AppData.ResponseStatus.statusSuccess)) {
                        binding.listFolderFile.setLayoutManager(new LinearLayoutManager(activity, LinearLayoutManager.VERTICAL, false));
                        folder_file_adapter = new Folder_File_Adapter(activity, responseModel.data.FolderFileList, PlanId, PlanTypeId);
                        binding.listFolderFile.setAdapter(folder_file_adapter);
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