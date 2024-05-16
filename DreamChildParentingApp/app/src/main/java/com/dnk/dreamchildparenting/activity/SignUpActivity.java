package com.dnk.dreamchildparenting.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.view.View;

import com.dnk.dreamchildparenting.AppData;
import com.dnk.dreamchildparenting.Custom.DialogAddChild;
import com.dnk.dreamchildparenting.Custom.EditMessage;
import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.Utility;
import com.dnk.dreamchildparenting.adapter.CityAdapter;
import com.dnk.dreamchildparenting.adapter.CountryAdapter;
import com.dnk.dreamchildparenting.adapter.StateAdapter;
import com.dnk.dreamchildparenting.async.DataModel;
import com.dnk.dreamchildparenting.async.GetDetailsAsync;
import com.dnk.dreamchildparenting.async.Interface;
import com.dnk.dreamchildparenting.async.RequestModel;
import com.dnk.dreamchildparenting.async.ResponseData;
import com.dnk.dreamchildparenting.databinding.ActivitySignUpBinding;
import com.google.android.material.bottomsheet.BottomSheetDialog;

import java.util.ArrayList;

public class SignUpActivity extends AppCompatActivity {
    ActivitySignUpBinding binding;
    SignUpActivity activity;
    public CountryData countryData;
    public StateData stateData;
    public CityData cityData;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivitySignUpBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);
        activity = this;
        initCityData();
        initStateData();
        initCountryData();
        binding.btnBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });
        binding.txtAddChild.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new DialogAddChild().getDialog(SignUpActivity.this).show();
            }
        });
        binding.loutSelectContry.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                countryData.showCountryDialog(countryData.countryList, 0);
            }
        });
        binding.btnSubmit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (checkValidation()) {
                    callUserRegister();
                }
            }
        });
        binding.txtSelectState.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                stateData.showDialog(0);
            }
        });
        binding.txtSelectCityVillage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (stateData.selectedState == null) {
                    Utility.NotifyDialog(activity, AppData.AppName, AppData.ErrorMessage.stateValidation, AppData.btnOkTitle);
                    return;
                }
                cityData.showDialog(0);
            }
        });

    }

    public boolean checkValidation() {
        boolean isValid = true;
        if (Utility.isEmptyVal(binding.edtName.getText().toString())) {
            isValid = false;
            Utility.NotifyDialog(activity, AppData.AppName, AppData.ErrorMessage.string, AppData.btnOkTitle);
        } else if (Utility.isEmptyVal(binding.edtMobileNo.getText().toString())) {
            Utility.NotifyDialog(activity, AppData.AppName, AppData.ErrorMessage.loginValidation, AppData.btnOkTitle);
            isValid = false;
        } else if (stateData.selectedState == null) {
            Utility.NotifyDialog(activity, AppData.AppName, AppData.ErrorMessage.stateValidation, AppData.btnOkTitle);
            isValid = false;
        } else if (cityData.selectedCity == null) {
            Utility.NotifyDialog(activity, AppData.AppName, AppData.ErrorMessage.cityValidation, AppData.btnOkTitle);
            isValid = false;
        } else if (Utility.isEmptyVal(binding.edtEmail.getText().toString())) {
            Utility.NotifyDialog(activity, AppData.AppName, AppData.ErrorMessage.emailValidation, AppData.btnOkTitle);
            isValid = false;
        } else if (Utility.isEmptyVal(binding.edtPassword.getText().toString())) {
            Utility.NotifyDialog(activity, AppData.AppName, AppData.ErrorMessage.passwordValidation, AppData.btnOkTitle);
            isValid = false;
        } else if (Utility.isEmptyVal(binding.edtConfirmPassword.getText().toString())) {
            Utility.NotifyDialog(activity, AppData.AppName, AppData.ErrorMessage.confirmPasswordValidation, AppData.btnOkTitle);
            isValid = false;
        } else if (!binding.edtPassword.getText().toString().trim().equals(binding.edtConfirmPassword.getText().toString().trim())) {
            Utility.NotifyDialog(activity, AppData.AppName, AppData.ErrorMessage.mismatchPasswordValidation, AppData.btnOkTitle);
            isValid = false;
        }
        return isValid;
    }

    public void callUserRegister() {
        if (Utility.checkInternetConnection(getApplicationContext())) {
            RequestModel requestModel = new RequestModel();
            requestModel.setUserMobileNo(binding.edtMobileNo.getText().toString().trim());
            requestModel.setUserName(binding.edtName.getText().toString().trim());
            requestModel.setUserName(binding.edtName.getText().toString().trim());
            requestModel.setUserType("0");//USER_TYPE (0-Parent, 1-Guardian, 2-Explore)
            requestModel.setParentType("1");//PARENT_TYPE (0-Mother, 1-Father)
            requestModel.setUserPassword(binding.edtPassword.getText().toString().trim());
            requestModel.setCountry(countryData.selectedCountry.country_id);
            requestModel.setState(stateData.selectedState.state_id);
            requestModel.setCity(cityData.selectedCity.city_id);
            requestModel.setDeviceType("0");//DEVICE_TYPE (0=Android,1=IOS)
            requestModel.setFcmToken("dskfsdkvlLSDKDldsfklsdfm3246asdffjkJKJSDFvcka");
            new GetDetailsAsync(activity, requestModel, AppData.MethodName.UserRegister, false, new Interface.OnResponseDecode() {
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

    void initCountryData() {
        countryData = new CountryData();
        countryData.getCountryData();
    }

    public class CountryData {
        ArrayList<DataModel> countryList;
        DataModel selectedCountry;

        public CountryData() {
            countryList = new ArrayList<>();

        }


        public void getCountryData() {
            if (Utility.checkInternetConnection(getApplicationContext())) {
                RequestModel requestModel = new RequestModel();
                requestModel.setPageNo("1");
                new GetDetailsAsync(activity, requestModel, AppData.MethodName.CountryList, false, new Interface.OnResponseDecode() {
                    @Override
                    public void setResponseDecodeListner(ResponseData responseModel) {
                        if (responseModel.status.equals(AppData.ResponseStatus.statusSuccess)) {
                            selectedCountry = new DataModel();
                            selectedCountry.country_name = "India";
                            selectedCountry.country_code = "IN";
                            selectedCountry.country_phone_code = "91";
                            selectedCountry.country_id = "101";
                            stateData.getStateData();
                            countryList = responseModel.data.CountryList;
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
            selectedCountry = dataModel;
            binding.txtCountryCode.setText("+" + dataModel.country_phone_code);
            stateData.selectedState = null;
            binding.txtSelectState.setText("Select State");
            cityData.selectedCity = null;
            binding.txtSelectCityVillage.setText("Select City/Village");
            stateData.getStateData();

        }
    }

    void initStateData() {
        stateData = new StateData();
    }

    public class StateData {
        ArrayList<DataModel> stateList;
        DataModel selectedState;

        public StateData() {
            stateList = new ArrayList<>();
        }

        public void getStateData() {
            if (Utility.checkInternetConnection(getApplicationContext())) {
                RequestModel requestModel = new RequestModel();
                requestModel.setPageNo("0");
                requestModel.setCountryId(countryData.selectedCountry.country_id);
                new GetDetailsAsync(activity, requestModel, AppData.MethodName.StateList, false, new Interface.OnResponseDecode() {
                    @Override
                    public void setResponseDecodeListner(ResponseData responseModel) {
                        if (responseModel.status.equals(AppData.ResponseStatus.statusSuccess)) {
                            stateList = responseModel.data.StateList;
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
        StateAdapter adapter;

        public void showDialog(int position) {
            View view = getLayoutInflater().inflate(R.layout.dialog_select_city_state, null);
            dialog = new BottomSheetDialog(activity, R.style.DialogStyle);
            dialog.setContentView(view);
            RecyclerView recycleView = dialog.findViewById(R.id.recycleView);
            edtSearch = dialog.findViewById(R.id.edtSearch);
            recycleView.setLayoutManager(new LinearLayoutManager(activity, LinearLayoutManager.VERTICAL, false));
            adapter = new StateAdapter(activity, stateList, position, dialog);
            recycleView.setAdapter(adapter);
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
                    ArrayList<DataModel> arrayList = new ArrayList<DataModel>();
                    for (int i = 0; i < stateList.size(); i++) {
                        if (stateList.get(i).state_name.toUpperCase().trim().contains(edittextValue.trim().toUpperCase())) {
                            DataModel list = new DataModel();
                            list.state_id = stateList.get(i).state_id;
                            list.state_name = stateList.get(i).state_name;
                            list.state_code = stateList.get(i).state_code;
                            arrayList.add(list);
                        }
                    }


                    adapter = new StateAdapter(activity, arrayList, position, dialog);
                    recycleView.setAdapter(adapter);
                }

                @Override
                public void onTextDeleted() {
                    adapter = new StateAdapter(activity, stateList, position, dialog);
                    recycleView.setAdapter(adapter);
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

        public void setSelected(DataModel dataModel) {
            selectedState = dataModel;
            binding.txtSelectState.setText(dataModel.state_name);
            cityData.selectedCity = null;
            binding.txtSelectCityVillage.setText("Select City/Village");
            cityData.getData();
        }
    }

    void initCityData() {
        cityData = new CityData();
    }

    public class CityData {
        ArrayList<DataModel> cityList;
        DataModel selectedCity;

        public CityData() {
            cityList = new ArrayList<>();
        }

        public void getData() {
            if (Utility.checkInternetConnection(getApplicationContext())) {
                RequestModel requestModel = new RequestModel();
                requestModel.setPageNo("0");
                requestModel.setCountryId(countryData.selectedCountry.country_id);
                requestModel.setStateId(stateData.selectedState.state_id);
                new GetDetailsAsync(activity, requestModel, AppData.MethodName.CityList, false, new Interface.OnResponseDecode() {
                    @Override
                    public void setResponseDecodeListner(ResponseData responseModel) {
                        if (responseModel.status.equals(AppData.ResponseStatus.statusSuccess)) {
                            cityList = responseModel.data.CityList;
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
        CityAdapter adapter;

        public void showDialog(int position) {
            View view = getLayoutInflater().inflate(R.layout.dialog_select_city_state, null);
            dialog = new BottomSheetDialog(activity, R.style.DialogStyle);
            dialog.setContentView(view);
            RecyclerView recycleView = dialog.findViewById(R.id.recycleView);
            edtSearch = dialog.findViewById(R.id.edtSearch);
            recycleView.setLayoutManager(new LinearLayoutManager(activity, LinearLayoutManager.VERTICAL, false));
            adapter = new CityAdapter(activity, cityList, position, dialog);
            recycleView.setAdapter(adapter);
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
                    ArrayList<DataModel> arrayList = new ArrayList<DataModel>();
                    for (int i = 0; i < cityList.size(); i++) {
                        if (cityList.get(i).city_name.toUpperCase().trim().contains(edittextValue.trim().toUpperCase())) {
                            DataModel list = new DataModel();
                            list.city_id = cityList.get(i).city_id;
                            list.city_name = cityList.get(i).city_name;

                            arrayList.add(list);
                        }
                    }


                    adapter = new CityAdapter(activity, arrayList, position, dialog);
                    recycleView.setAdapter(adapter);
                }

                @Override
                public void onTextDeleted() {
                    adapter = new CityAdapter(activity, cityList, position, dialog);
                    recycleView.setAdapter(adapter);
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

        public void setSelected(DataModel dataModel) {
            selectedCity = dataModel;
            binding.txtSelectCityVillage.setText(dataModel.city_name);

        }

    }

}