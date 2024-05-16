package com.dnk.dreamchildparenting.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;

import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;

import com.dnk.dreamchildparenting.Custom.DialogSelectAddress;
import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.adapter.CartProductListAdapter;
import com.dnk.dreamchildparenting.databinding.ActivityCartBinding;

public class CartActivity extends AppCompatActivity {
    ActivityCartBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityCartBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);

        binding.btnBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });
        binding.btnProcessToPay.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(CartActivity.this, CartSummaryActivity.class));
            }
        });
        binding.txtChangeAddress.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new DialogSelectAddress().getDialog(CartActivity.this).show();
            }
        });
        for (int i = 0; i < 5; i++) {
            if (i % 2 == 1) {
                addDataToDreamChildKit();
            } else {
                addDataToPlanList();
            }
        }
        binding.productList.setLayoutManager(new LinearLayoutManager(CartActivity.this, LinearLayoutManager.HORIZONTAL, false));
        CartProductListAdapter productListAdapter = new CartProductListAdapter(CartActivity.this);
        binding.productList.setAdapter(productListAdapter);
    }

    public void addDataToPlanList() {
        View layout = LayoutInflater.from(this).inflate(R.layout.raw_plan_list_cart, binding.loutPlanList, false);
        layout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(CartActivity.this, PlanDetailActivity.class));
            }
        });
        binding.loutPlanList.addView(layout);
    }

    public void addDataToDreamChildKit() {
        View layout = LayoutInflater.from(this).inflate(R.layout.raw_kit_list_cart, binding.loutPlanList, false);
        layout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(CartActivity.this, KitDetailListActivity.class));
            }
        });
        binding.loutPlanList.addView(layout);
    }
}