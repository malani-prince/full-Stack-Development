package com.dnk.dreamchildparenting.activity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import com.dnk.dreamchildparenting.AppData;
import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.Utility;

import com.dnk.dreamchildparenting.async.DataModel;
import com.dnk.dreamchildparenting.fragment.DashboardFragment;
import com.dnk.dreamchildparenting.databinding.ActivityMainAfterLoginBinding;
import com.dnk.dreamchildparenting.fragment.MyChildFragment;
import com.google.gson.Gson;


public class MainActivityAfterLogin extends AppCompatActivity {
    ActivityMainAfterLoginBinding binding;
    DataModel UserData;
    Activity activity;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityMainAfterLoginBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);
        activity = this;
        AppData.UserDataClass.userData = Utility.getSharedPreferencesObject(activity, AppData.SharedKey.UserData);
        binding.superSlidingPaneLayout.setSliderFadeColor(0);
        binding.loutInclude.btnDrawer.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Utility.PrintLog("Click", "CLick");

                if (binding.superSlidingPaneLayout.isOpen()) {
                    binding.superSlidingPaneLayout.closePane();
                } else {
                    binding.superSlidingPaneLayout.openPane();
                }
            }
        });
        ViewGroup.LayoutParams params = binding.loutIncludeSideMenu.menu.getLayoutParams();
        params.width = (int) (getResources().getDisplayMetrics().widthPixels * 0.75f);
        binding.loutIncludeSideMenu.menu.setLayoutParams(params);

        binding.loutInclude.loutDashboard.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                loadFragment(new DashboardFragment(), binding.loutInclude.loutDashboard);
            }
        });
        binding.loutInclude.loutMyChild.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                loadFragment(new MyChildFragment(), binding.loutInclude.loutMyChild);
            }
        });
        binding.loutInclude.loutShare.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                loadFragment(new DashboardFragment(), binding.loutInclude.loutShare);
            }
        });
        binding.loutInclude.btnNotification.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivityAfterLogin.this, NotificationActivity.class));
            }
        });
        binding.loutInclude.loutDashboard.performClick();
        initSideMenu();
    }

    @Override
    public void onBackPressed() {
        if (binding.superSlidingPaneLayout.isOpen()) {
            binding.superSlidingPaneLayout.closePane();
        } else {
            finishAffinity();
        }
    }


    void initSideMenu() {

        binding.loutIncludeSideMenu.loutContactUs.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivityAfterLogin.this, Contact_Us_Activity.class));
                closeSideMenu();
            }
        });

        binding.loutIncludeSideMenu.loutChangeLanguage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivityAfterLogin.this, SelectLanguageActivity.class));
                closeSideMenu();
            }
        });
        binding.loutIncludeSideMenu.loutViewProfile.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivityAfterLogin.this, ViewProfileActivity.class));
                closeSideMenu();
            }
        });
        binding.loutIncludeSideMenu.loutFeedbackRateUs.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivityAfterLogin.this, ChatWithUsActivity.class));
                closeSideMenu();
            }
        });

        binding.loutIncludeSideMenu.loutLogout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Utility.setSharedPreferences(activity, AppData.SharedKey.UserData, "");
                startActivity(new Intent(MainActivityAfterLogin.this, SplashScreen.class));
                closeSideMenu();
                finishAffinity();
            }
        });
    }

    void closeSideMenu() {
        new Handler(getMainLooper()).postDelayed(new Runnable() {
            @Override
            public void run() {
                binding.superSlidingPaneLayout.closePane();
            }
        }, 400);
    }

    private void loadFragment(Fragment fragment, LinearLayout layout) {
        FragmentManager fm = getSupportFragmentManager();
        FragmentTransaction fragmentTransaction = fm.beginTransaction();
        fragmentTransaction.replace(R.id.frameLayout, fragment);
        fragmentTransaction.commit();

        binding.loutInclude.imageDashboard.setImageResource(R.drawable.icn_dashboard);
        binding.loutInclude.imageMychild.setImageResource(R.drawable.icn_mychild);
        binding.loutInclude.imageShare.setImageResource(R.drawable.icn_share);
        binding.loutInclude.textDashboard.setTextColor(getResources().getColor(R.color.c_8d95a1));
        binding.loutInclude.textMychild.setTextColor(getResources().getColor(R.color.c_8d95a1));
        binding.loutInclude.textShare.setTextColor(getResources().getColor(R.color.c_8d95a1));

        if (layout == binding.loutInclude.loutDashboard) {
            binding.loutInclude.imageDashboard.setImageResource(R.drawable.icn_dashboard_active);
            binding.loutInclude.textDashboard.setTextColor(getResources().getColor(R.color.colorPrimary));
            binding.loutInclude.txtTitle.setText("Dashboard");
        } else if (layout == binding.loutInclude.loutMyChild) {
            binding.loutInclude.imageMychild.setImageResource(R.drawable.icn_mychild_active);
            binding.loutInclude.textMychild.setTextColor(getResources().getColor(R.color.colorPrimary));
            binding.loutInclude.txtTitle.setText("My Child");
        } else if (layout == binding.loutInclude.loutShare) {
            binding.loutInclude.imageShare.setImageResource(R.drawable.icn_share_active);
            binding.loutInclude.textShare.setTextColor(getResources().getColor(R.color.colorPrimary));
            binding.loutInclude.txtTitle.setText("Share");
            startActivity(new Intent(MainActivityAfterLogin.this, CartActivity.class));
            return;
        }
        // save the changes
    }
}