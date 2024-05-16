package com.dnk.dreamchildparenting.fragment;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.cardview.widget.CardView;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;

import com.dnk.dreamchildparenting.AppData;
import com.dnk.dreamchildparenting.Utility;
import com.dnk.dreamchildparenting.activity.MainActivityAfterLogin;
import com.dnk.dreamchildparenting.adapter.DashboardAdapter;
import com.dnk.dreamchildparenting.async.GetDetailsAsync;
import com.dnk.dreamchildparenting.async.Interface;
import com.dnk.dreamchildparenting.async.RequestModel;
import com.dnk.dreamchildparenting.async.ResponseData;
import com.dnk.dreamchildparenting.databinding.DashboardFragmentBinding;
import com.google.gson.Gson;

public class DashboardFragment extends Fragment {
    DashboardFragmentBinding binding;
    DashboardAdapter dashboardAdapter;
    Activity activity;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        binding = DashboardFragmentBinding.inflate(inflater, container, false);
        View view = binding.getRoot();
        activity = getActivity();

        getPlanList();

        return view;
    }

    public void getPlanList() {
        if (Utility.checkInternetConnection(activity)) {
            binding.loaderLayout.setVisibility(View.VISIBLE);
            RequestModel requestModel = new RequestModel();
            requestModel.setUserId("1");
            //AppData.UserDataClass.userData.user_id
            new GetDetailsAsync(activity, requestModel, AppData.MethodName.PlanList, false, new Interface.OnResponseDecode() {
                @Override
                public void setResponseDecodeListner(ResponseData responseModel) {
                    if (responseModel.status.equals(AppData.ResponseStatus.statusSuccess)) {
                        binding.listDashboard.setLayoutManager(new LinearLayoutManager(getActivity(), LinearLayoutManager.VERTICAL, false));
                        dashboardAdapter = new DashboardAdapter(getActivity(), responseModel.data.PlanList);
                        binding.listDashboard.setAdapter(dashboardAdapter);
                    } else {
                        Utility.NotifyDialog(activity, AppData.AppName, responseModel.message, AppData.btnOkTitle);
                    }
                    binding.loaderLayout.setVisibility(View.GONE);
                }

                @Override
                public void onFail(Throwable t) {
                    binding.loaderLayout.setVisibility(View.GONE);
                }
            });
        }
    }
}