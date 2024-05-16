package com.dnk.dreamchildparenting.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;

import android.os.Bundle;
import android.view.View;

import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.adapter.AllProductListAdapter;
import com.dnk.dreamchildparenting.adapter.CartProductListAdapter;
import com.dnk.dreamchildparenting.adapter.KitListAdapter;
import com.dnk.dreamchildparenting.databinding.ActivityKitDetailListBinding;

public class KitDetailListActivity extends AppCompatActivity {
    ActivityKitDetailListBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityKitDetailListBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);
        binding.btnBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });

        binding.productList.setLayoutManager(new LinearLayoutManager(KitDetailListActivity.this, LinearLayoutManager.VERTICAL, false));
        KitListAdapter kitListAdapter = new KitListAdapter(KitDetailListActivity.this);
        binding.productList.setAdapter(kitListAdapter);
    }
}