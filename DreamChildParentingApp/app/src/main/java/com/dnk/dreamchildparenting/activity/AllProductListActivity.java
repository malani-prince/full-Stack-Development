package com.dnk.dreamchildparenting.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;

import android.os.Bundle;
import android.view.View;

import com.dnk.dreamchildparenting.adapter.AllProductListAdapter;
import com.dnk.dreamchildparenting.adapter.CartProductListAdapter;
import com.dnk.dreamchildparenting.databinding.ActivityAllProductListBinding;

public class AllProductListActivity extends AppCompatActivity {
    ActivityAllProductListBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityAllProductListBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);
        binding.btnBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });
        binding.productList.setLayoutManager(new GridLayoutManager(AllProductListActivity.this, 2));
        AllProductListAdapter productListAdapter = new AllProductListAdapter(AllProductListActivity.this);
        binding.productList.setAdapter(productListAdapter);
    }
}