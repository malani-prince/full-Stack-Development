package com.dnk.dreamchildparenting.async;

import android.app.Activity;
import android.app.Dialog;
import android.os.Build;

import com.dnk.dreamchildparenting.AppData;
import com.dnk.dreamchildparenting.Custom.CustomProgress;
import com.dnk.dreamchildparenting.Utility;
import com.google.gson.Gson;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.http.Body;
import retrofit2.http.POST;
import retrofit2.http.Path;

public class GetDetailsAsync {


    Interface.OnResponseDecode onResponseDecode;
    String MethodName;
    Dialog progress_dialog;

    public GetDetailsAsync(final Activity act, RequestModel requestModel, final String MethodName, final boolean isProgressVisible, final Interface.OnResponseDecode onResponseDecode) {
        if (!Utility.checkInternetConnection(act)) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                // AppUtil.dialog_internet_retry(act, requestModel, onResponseDecode, MethodName, isProgressVisible);
            } else {
                // AppUtil.snackBar(act, act.getResources().getString(R.string.internet_msg), R.color.warning);
            }
            return;
        }
        if (isProgressVisible) {
            progress_dialog = new CustomProgress().getDialog(act);
            progress_dialog.setCancelable(false);
            progress_dialog.show();
        }
        requestModel.setToken(AppData.token);
        requestModel.setDeviceId(Utility.getDeviceID(act));

        ApiInterface apiService = ApiClient.getClient().create(ApiInterface.class);
        final Call<ResponseData> call = apiService.sendBody(MethodName, requestModel);
        Utility.PrintLog("call", new Gson().toJson(requestModel));
        Utility.PrintLog("Request", call.request().toString());
        call.enqueue(new Callback<ResponseData>() {
            @Override
            public void onResponse(Call<ResponseData> call, Response<ResponseData> response) {
                if (isProgressVisible) {
                    progress_dialog.dismiss();
                }
                try {
                    ResponseData responseData = response.body();
                    Utility.PrintLog("Value", responseData.status);
                    onResponseDecode.setResponseDecodeListner(responseData);


                } catch (Exception e) {
                    e.printStackTrace();
                }
            }

            @Override
            public void onFailure(Call<ResponseData> call, Throwable t) {
                if (isProgressVisible) {
                    progress_dialog.dismiss();
                }
                onResponseDecode.onFail(t);
                t.printStackTrace();
            }
        });
        /*new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {

            }
        }, 5000);
*/

    }

    public interface ApiInterface {

        @POST("{method}")
        Call<ResponseData> sendBody(@Path("method") String postfix, @Body RequestModel requestModel);

    }

}