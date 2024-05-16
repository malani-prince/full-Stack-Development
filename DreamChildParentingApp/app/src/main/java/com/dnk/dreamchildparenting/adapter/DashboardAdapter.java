package com.dnk.dreamchildparenting.adapter;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.PorterDuff;
import android.os.Build;
import android.view.View;
import android.view.ViewGroup;

import androidx.recyclerview.widget.RecyclerView;

import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.activity.PlanSubTypeActivity;
import com.dnk.dreamchildparenting.async.DataModel;
import com.dnk.dreamchildparenting.databinding.DashboardAdapterRawBinding;

import java.util.ArrayList;


public class DashboardAdapter extends RecyclerView.Adapter<DashboardAdapter.ViewHolder> {

    Activity activity;

    ArrayList<DataModel> arrayList;
    String[] colorArray = {"#02b9ef", "#fec969", "#f78e57", "#5cd4b8", "#84d1eb"};

    public DashboardAdapter(Activity activity, ArrayList<DataModel> arrayList) {
        this.activity = activity;
        this.arrayList = arrayList;

    }


    public static class ViewHolder extends RecyclerView.ViewHolder {
        DashboardAdapterRawBinding binding;

        public ViewHolder(View itemView, DashboardAdapterRawBinding binding) {
            super(itemView);
            this.binding = binding;

        }

    }

    @Override
    public DashboardAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        DashboardAdapterRawBinding binding;
        binding = DashboardAdapterRawBinding.inflate(activity.getLayoutInflater());
        View view = binding.getRoot();
        ViewHolder viewHolder = new ViewHolder(view, binding);
        return viewHolder;
    }


    @Override
    public void onBindViewHolder(ViewHolder viewHolder, int position) {
        DataModel model = arrayList.get(position);
        viewHolder.binding.txtTitle.setText(model.planName);
        viewHolder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(activity, PlanSubTypeActivity.class);
                intent.putExtra("title", model.planName);
                intent.putExtra("PlanId", model.planId);
                activity.startActivity(intent);
            }
        });

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {

            if (position % 5 == 0) {
                viewHolder.binding.loutMain.getBackground().setTint(Color.parseColor(colorArray[0]));
                viewHolder.binding.imgGo.getBackground().setTint(Color.parseColor(colorArray[0]));
            } else if (position % 5 == 1) {
                viewHolder.binding.loutMain.getBackground().setTint(Color.parseColor(colorArray[1]));
                viewHolder.binding.imgGo.getBackground().setTint(Color.parseColor(colorArray[1]));
            } else if (position % 5 == 2) {
                viewHolder.binding.loutMain.getBackground().setTint(Color.parseColor(colorArray[2]));
                viewHolder.binding.imgGo.getBackground().setTint(Color.parseColor(colorArray[2]));
            } else if (position % 5 == 3) {
                viewHolder.binding.loutMain.getBackground().setTint(Color.parseColor(colorArray[3]));
                viewHolder.binding.imgGo.getBackground().setTint(Color.parseColor(colorArray[3]));
            } else if (position % 5 == 4) {
                viewHolder.binding.loutMain.getBackground().setTint(Color.parseColor(colorArray[4]));
                viewHolder.binding.imgGo.getBackground().setTint(Color.parseColor(colorArray[4]));
            } else {
                viewHolder.binding.loutMain.getBackground().setTint(Color.parseColor(colorArray[0]));
                viewHolder.binding.imgGo.getBackground().setTint(Color.parseColor(colorArray[0]));
            }
        }
    }

    @Override
    public int getItemCount() {
        return arrayList.size();
    }


}
