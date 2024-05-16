package com.dnk.dreamchildparenting.adapter;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import com.dnk.dreamchildparenting.R;


public class MyChildAdapter extends RecyclerView.Adapter<MyChildAdapter.ViewHolder> {

    Activity activity;


    public MyChildAdapter(Activity activity) {
        this.activity = activity;

    }


    public static class ViewHolder extends RecyclerView.ViewHolder {


        public ViewHolder(View itemView) {
            super(itemView);


        }

    }

    @Override
    public MyChildAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        LayoutInflater inflater = LayoutInflater.from(context);
        View contactView = inflater.inflate(R.layout.mychild_adapter_raw, parent, false);
        ViewHolder viewHolder = new ViewHolder(contactView);
        return viewHolder;
    }


    @Override
    public void onBindViewHolder(final ViewHolder viewHolder, final int position) {


    }

    @Override
    public int getItemCount() {
        return 10;
    }


}
