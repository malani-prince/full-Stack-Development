package com.dnk.dreamchildparenting.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.view.WindowManager;

import com.dnk.dreamchildparenting.AppData;
import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.Utility;
import com.dnk.dreamchildparenting.async.DataModel;

public class SplashScreen extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Utility.setFullScreenActivity(SplashScreen.this);
        setContentView(R.layout.splash_screen);

        new Handler(getMainLooper()).postDelayed(new Runnable() {
            @Override
            public void run() {
                DataModel dataModel = Utility.getSharedPreferencesObject(SplashScreen.this, AppData.SharedKey.UserData);
                if (dataModel != null) {
                    if (!Utility.isEmptyVal(dataModel.user_id)) {
                        Intent intent = new Intent(SplashScreen.this, MainActivityAfterLogin.class);
                        startActivity(intent);
                        finish();
                    } else {
                        Intent intent = new Intent(SplashScreen.this, SelectLanguageActivity.class);
                        startActivity(intent);
                        finish();
                    }
                } else {
                    Intent intent = new Intent(SplashScreen.this, SelectLanguageActivity.class);
                    startActivity(intent);
                    finish();
                }
            }
        }, 2000);
    }
}