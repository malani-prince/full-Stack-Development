package com.dnk.dreamchildparenting.adapter;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.recyclerview.widget.RecyclerView;

import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.activity.DailyActivity;
import com.dnk.dreamchildparenting.activity.FolderFileActivity;
import com.dnk.dreamchildparenting.activity.ReportActivity;
import com.dnk.dreamchildparenting.async.DataModel;
import com.dnk.dreamchildparenting.databinding.PlanSubTypeAdapterRawBinding;

import java.util.ArrayList;
import java.util.Random;


public class PlanSubTypeAdapter extends RecyclerView.Adapter<PlanSubTypeAdapter.ViewHolder> {

    Activity activity;
    ArrayList<DataModel> plan_type_detail;
    String[] colorArray = {"#e3f9ff", "#fffcee", "#f9eafc", "#e9fffa"};
    String PlanId;

    public PlanSubTypeAdapter(Activity activity, ArrayList<DataModel> plan_type_detail, String planId) {
        this.activity = activity;
        this.plan_type_detail = plan_type_detail;
        this.PlanId = planId;
    }


    public static class ViewHolder extends RecyclerView.ViewHolder {
        PlanSubTypeAdapterRawBinding binding;

        public ViewHolder(View itemView, PlanSubTypeAdapterRawBinding binding) {
            super(itemView);
            this.binding = binding;
        }

    }

    @Override
    public PlanSubTypeAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        PlanSubTypeAdapterRawBinding binding;
        binding = PlanSubTypeAdapterRawBinding.inflate(activity.getLayoutInflater());
        View view = binding.getRoot();
        ViewHolder viewHolder = new ViewHolder(view, binding);
        return viewHolder;
    }


    @Override
    public void onBindViewHolder(final ViewHolder viewHolder, int position) {
        DataModel model = plan_type_detail.get(position);
        viewHolder.binding.txtTitle.setText(model.planTypeName);
        viewHolder.binding.txtDesc.setText(model.planTypeDescription);
        viewHolder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(activity, FolderFileActivity.class);
                intent.putExtra("Title", model.planTypeName);
                intent.putExtra("PlanId", PlanId);
                intent.putExtra("PlanTypeId", model.planTypeId);
                activity.startActivity(intent);
            }
        });
        /*Random rnd = new Random();
        int currentColor = Color.argb(255, rnd.nextInt(256), rnd.nextInt(256), rnd.nextInt(256));*/
        if (position % 4 == 0) {
            viewHolder.binding.cardView.setCardBackgroundColor(Color.parseColor(colorArray[0]));
        } else if (position % 4 == 1) {
            viewHolder.binding.cardView.setCardBackgroundColor(Color.parseColor(colorArray[1]));
        } else if (position % 4 == 2) {
            viewHolder.binding.cardView.setCardBackgroundColor(Color.parseColor(colorArray[2]));
        } else if (position % 4 == 3) {
            viewHolder.binding.cardView.setCardBackgroundColor(Color.parseColor(colorArray[3]));
        } else {
            viewHolder.binding.cardView.setCardBackgroundColor(Color.parseColor(colorArray[0]));
        }

    }

    @Override
    public int getItemCount() {
        return plan_type_detail.size();
    }


}
