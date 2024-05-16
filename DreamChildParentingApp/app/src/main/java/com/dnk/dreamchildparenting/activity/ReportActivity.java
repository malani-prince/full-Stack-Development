package com.dnk.dreamchildparenting.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;

import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.databinding.ActivityDailyBinding;
import com.dnk.dreamchildparenting.databinding.ActivityReportBinding;

public class ReportActivity extends AppCompatActivity {
    ActivityReportBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityReportBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);
        binding.btnBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });

        binding.txtWeekly.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                setFilterSelection(v);
            }
        });
        binding.txtMonthly.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                setFilterSelection(v);
            }
        });
        binding.txtYearly.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                setFilterSelection(v);
            }
        });
        binding.txtWeekly.performClick();
        for (int i = 0; i < 10; i++) {
            addReportView();
        }
    }

    public void setFilterSelection(View v) {
        binding.txtWeekly.setBackgroundResource(0);
        binding.txtMonthly.setBackgroundResource(0);
        binding.txtYearly.setBackgroundResource(0);
        binding.txtWeekly.setTextColor(getResources().getColor(R.color.colorPrimaryVariant));
        binding.txtMonthly.setTextColor(getResources().getColor(R.color.colorPrimaryVariant));
        binding.txtYearly.setTextColor(getResources().getColor(R.color.colorPrimaryVariant));
        if (v == binding.txtWeekly) {
            binding.txtWeekly.setBackgroundResource(R.drawable.left_selected_light_blue_bg);
            binding.txtWeekly.setTextColor(getResources().getColor(R.color.white));
        } else if (v == binding.txtMonthly) {
            binding.txtMonthly.setBackgroundResource(R.drawable.selected_light_blue_bg);
            binding.txtMonthly.setTextColor(getResources().getColor(R.color.white));
        } else if (v == binding.txtYearly) {
            binding.txtYearly.setBackgroundResource(R.drawable.right_selected_light_blue_bg);
            binding.txtYearly.setTextColor(getResources().getColor(R.color.white));

        }
    }

    public void addReportView() {
        View layout = LayoutInflater.from(this).inflate(R.layout.raw_report_list, binding.loutReportList, false);
        binding.loutReportList.addView(layout);
    }
}