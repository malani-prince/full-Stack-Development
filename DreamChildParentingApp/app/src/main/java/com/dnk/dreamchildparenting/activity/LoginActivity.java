package com.dnk.dreamchildparenting.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import com.dnk.dreamchildparenting.AppData;
import com.dnk.dreamchildparenting.Custom.EditMessage;
import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.Utility;
import com.dnk.dreamchildparenting.adapter.CountryAdapter;
import com.dnk.dreamchildparenting.async.DataModel;
import com.dnk.dreamchildparenting.async.GetDetailsAsync;
import com.dnk.dreamchildparenting.async.Interface;
import com.dnk.dreamchildparenting.async.RequestModel;
import com.dnk.dreamchildparenting.async.ResponseData;
import com.dnk.dreamchildparenting.databinding.ActivityLoginBinding;
import com.google.android.material.bottomsheet.BottomSheetDialog;

import java.util.ArrayList;

public class LoginActivity extends AppCompatActivity {
    ActivityLoginBinding binding;
    LoginActivity activity;
    public CountryData countryData;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityLoginBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);
        activity = this;
        initCountryData();

        binding.btnFreeUserLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(LoginActivity.this, SignUpActivity.class));
            }
        });
        binding.btnForgotPassword.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(LoginActivity.this, ForgotPasswordActivity.class));
            }
        });
        binding.btnLoginWithOtp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                checkMobileNumberExist("OTP");
            }
        });
        binding.btnLoginWithPassword.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                checkMobileNumberExist("PASSWORD");
            }
        });
        binding.loutSelectContry.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                countryData.showCountryDialog(countryData.CountryList, 0);
            }
        });


    }

    public void checkMobileNumberExist(String isFrom) {
        if (Utility.isEmptyVal(binding.edtMobileNo.getText().toString().trim())) {
            Utility.NotifyDialog(activity, AppData.AppName, AppData.ErrorMessage.loginValidation, AppData.btnOkTitle);
        } else {
            if (Utility.checkInternetConnection(getApplicationContext())) {
                RequestModel requestModel = new RequestModel();
                requestModel.setUserMobileNo(binding.edtMobileNo.getText().toString().trim());
                new GetDetailsAsync(activity, requestModel, AppData.MethodName.VerifyUser, false, new Interface.OnResponseDecode() {
                    @Override
                    public void setResponseDecodeListner(ResponseData responseModel) {
                        if (responseModel.status.equals(AppData.ResponseStatus.statusSuccess)) {
                            if (isFrom.equals("OTP")) {
                                if (responseModel.is_user_exist.equals("1")) {
                                    startActivity(new Intent(LoginActivity.this, OtpVerificationActivity.class));
                                } else {
                                    startActivity(new Intent(LoginActivity.this, SignUpActivity.class));
                                }
                            } else {
                                if (responseModel.is_user_exist.equals("1")) {
                                    Intent intent=new Intent(LoginActivity.this, EnterPasswordActivity.class);
                                    intent.putExtra("mobileNumber",binding.edtMobileNo.getText().toString().trim());
                                    startActivity(intent);
                                } else {
                                    startActivity(new Intent(LoginActivity.this, SignUpActivity.class));
                                }
                            }


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


    void initCountryData() {
        countryData = new CountryData();
        countryData.getCountryData();
    }

    public class CountryData {
        ArrayList<DataModel> CountryList;
        DataModel selectedCountry;

        public CountryData() {
            CountryList = new ArrayList<>();
            selectedCountry = new DataModel();
            selectedCountry.country_name = "India";
            selectedCountry.country_code = "IN";
            selectedCountry.country_phone_code = "91";
            selectedCountry.country_id = "101";
        }

        public void getCountryData() {
            if (Utility.checkInternetConnection(getApplicationContext())) {
                RequestModel requestModel = new RequestModel();
                requestModel.setPageNo("1");
                new GetDetailsAsync(activity, requestModel, AppData.MethodName.CountryList, false, new Interface.OnResponseDecode() {
                    @Override
                    public void setResponseDecodeListner(ResponseData responseModel) {
                        if (responseModel.status.equals(AppData.ResponseStatus.statusSuccess)) {
                            CountryList = responseModel.data.CountryList;
                        } else {

                        }
                    }

                    @Override
                    public void onFail(Throwable t) {

                    }
                });
            }
        }

        BottomSheetDialog dialog;
        EditMessage edtSearch;
        CountryAdapter countryAdapter;

        public void showCountryDialog(ArrayList<DataModel> CountryList, int position) {
            View view = getLayoutInflater().inflate(R.layout.dialog_select_city_state, null);
            dialog = new BottomSheetDialog(activity, R.style.DialogStyle);
            dialog.setContentView(view);
            RecyclerView recycleView = dialog.findViewById(R.id.recycleView);
            edtSearch = dialog.findViewById(R.id.edtSearch);
            recycleView.setLayoutManager(new LinearLayoutManager(activity, LinearLayoutManager.VERTICAL, false));
            countryAdapter = new CountryAdapter(activity, CountryList, position, dialog);
            recycleView.setAdapter(countryAdapter);
            edtSearch.setKeyboardListener(new EditMessage.KeyboardListener() {
                @Override
                public boolean onEnterPressed() {
                    return false;
                }

                @Override
                public void onTypingStarted() {

                }

                @Override
                public void onTypingStopped(String edittextValue) {
                    ArrayList<DataModel> contact_arr_list_temp = new ArrayList<DataModel>();
                    for (int i = 0; i < CountryList.size(); i++) {
                        if (CountryList.get(i).country_name.toUpperCase().trim().contains(edittextValue.trim().toUpperCase())) {
                            DataModel list = new DataModel();
                            list.country_name = CountryList.get(i).country_name;
                            list.country_code = CountryList.get(i).country_code;
                            list.country_id = CountryList.get(i).country_id;
                            list.country_phone_code = CountryList.get(i).country_phone_code;
                            contact_arr_list_temp.add(list);
                        }
                    }
                    Utility.PrintLog("contact_arr_list_temp", contact_arr_list_temp.size() + "");

                    countryAdapter = new CountryAdapter(activity, contact_arr_list_temp, position, dialog);
                    recycleView.setAdapter(countryAdapter);
                }

                @Override
                public void onTextDeleted() {
                    countryAdapter = new CountryAdapter(activity, CountryList, position, dialog);
                    recycleView.setAdapter(countryAdapter);
                }

                @Override
                public void onTextChanged() {

                }

                @Override
                public boolean onTabPressed(boolean repeated) {
                    return false;
                }
            });
            dialog.show();
        }

        public void setSelectedCountry(DataModel dataModel) {
            binding.txtCountryCode.setText("+" + dataModel.country_phone_code);

        }
    }
}