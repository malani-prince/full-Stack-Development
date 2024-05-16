package com.dnk.dreamchildparenting.adapter;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import androidx.recyclerview.widget.RecyclerView;

import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.activity.AllProductListActivity;


public class CartProductListAdapter extends RecyclerView.Adapter<CartProductListAdapter.ViewHolder> {

    Activity activity;


    public CartProductListAdapter(Activity activity) {
        this.activity = activity;

    }


    public static class ViewHolder extends RecyclerView.ViewHolder {
        LinearLayout loutViewAll;

        public ViewHolder(View itemView) {
            super(itemView);
            loutViewAll = itemView.findViewById(R.id.loutViewAll);
        }

    }

    @Override
    public CartProductListAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        LayoutInflater inflater = LayoutInflater.from(context);
        View contactView = inflater.inflate(R.layout.raw_productlist_cart_adapter, parent, false);
        ViewHolder viewHolder = new ViewHolder(contactView);
        return viewHolder;
    }


    @Override
    public void onBindViewHolder(ViewHolder viewHolder, int position) {
        if (position == 9) {
            viewHolder.loutViewAll.setVisibility(View.VISIBLE);
        } else {
            viewHolder.loutViewAll.setVisibility(View.GONE);
        }

        viewHolder.loutViewAll.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                activity.startActivity(new Intent(activity, AllProductListActivity.class));
            }
        });
    }

    @Override
    public int getItemCount() {
        return 10;
    }


}
