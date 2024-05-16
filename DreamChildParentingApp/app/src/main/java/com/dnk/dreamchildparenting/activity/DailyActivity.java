package com.dnk.dreamchildparenting.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;

import android.os.Bundle;
import android.view.View;

import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.adapter.Folder_File_Adapter;
import com.dnk.dreamchildparenting.databinding.ActivityDailyBinding;

import java.util.ArrayList;

public class DailyActivity extends AppCompatActivity {
    ActivityDailyBinding binding;
    Folder_File_Adapter folder_file_adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityDailyBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);

        binding.btnBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });
        binding.txtYesterday.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                setFilterSelection(v);
            }
        });
        binding.txtToday.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                setFilterSelection(v);
            }
        });
        binding.txtTomorrow.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                setFilterSelection(v);
            }
        });

        binding.listFolderFile.setLayoutManager(new LinearLayoutManager(DailyActivity.this, LinearLayoutManager.VERTICAL, false));
        /*folder_file_adapter = new Folder_File_Adapter(DailyActivity.this, new ArrayList<>(), "", "");
        binding.listFolderFile.setAdapter(folder_file_adapter);*/
    }

    public void setFilterSelection(View v) {
        binding.txtYesterday.setBackgroundResource(0);
        binding.txtToday.setBackgroundResource(0);
        binding.txtTomorrow.setBackgroundResource(0);
        binding.txtYesterday.setTextColor(getResources().getColor(R.color.colorPrimaryVariant));
        binding.txtToday.setTextColor(getResources().getColor(R.color.colorPrimaryVariant));
        binding.txtTomorrow.setTextColor(getResources().getColor(R.color.colorPrimaryVariant));
        if (v == binding.txtYesterday) {
            binding.txtYesterday.setBackgroundResource(R.drawable.left_selected_light_blue_bg);
            binding.txtYesterday.setTextColor(getResources().getColor(R.color.white));
        } else if (v == binding.txtToday) {
            binding.txtToday.setBackgroundResource(R.drawable.selected_light_blue_bg);
            binding.txtToday.setTextColor(getResources().getColor(R.color.white));
        } else if (v == binding.txtTomorrow) {
            binding.txtTomorrow.setBackgroundResource(R.drawable.right_selected_light_blue_bg);
            binding.txtTomorrow.setTextColor(getResources().getColor(R.color.white));

        }
    }
}