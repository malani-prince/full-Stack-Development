package com.dnk.dreamchildparenting.adapter;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.recyclerview.widget.RecyclerView;

import com.dnk.dreamchildparenting.R;


public class KitListAdapter extends RecyclerView.Adapter<KitListAdapter.ViewHolder> {

    Activity activity;


    public KitListAdapter(Activity activity) {
        this.activity = activity;

    }


    public static class ViewHolder extends RecyclerView.ViewHolder {


        public ViewHolder(View itemView) {
            super(itemView);

        }

    }

    @Override
    public KitListAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        LayoutInflater inflater = LayoutInflater.from(context);
        View contactView = inflater.inflate(R.layout.raw_kit_list_adapter, parent, false);
        ViewHolder viewHolder = new ViewHolder(contactView);
        return viewHolder;
    }


    @Override
    public void onBindViewHolder(ViewHolder viewHolder, int position) {


    }

    @Override
    public int getItemCount() {
        return 50;
    }


}
