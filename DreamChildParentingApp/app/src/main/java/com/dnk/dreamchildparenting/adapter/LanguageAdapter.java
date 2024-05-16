package com.dnk.dreamchildparenting.adapter;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.async.DataModel;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;


public class LanguageAdapter extends RecyclerView.Adapter<LanguageAdapter.ViewHolder> {

    Activity context;
    Map<Integer, Integer> map = new HashMap<>();
    ArrayList<DataModel> LanguageList;

    public LanguageAdapter(Activity context, ArrayList<DataModel> LanguageList) {

        this.context = context;
        this.LanguageList = LanguageList;

    }

    public static class ViewHolder extends RecyclerView.ViewHolder {

        RelativeLayout loutMain;
        ImageView btnCheck;
        TextView txtTitle;

        public ViewHolder(View itemView) {
            super(itemView);
            loutMain = itemView.findViewById(R.id.loutMain);
            btnCheck = itemView.findViewById(R.id.btnCheck);
            txtTitle = itemView.findViewById(R.id.txtTitle);
        }

    }

    @Override
    public LanguageAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        LayoutInflater inflater = LayoutInflater.from(context);
        View contactView = inflater.inflate(R.layout.raw_language_selection, parent, false);
        ViewHolder viewHolder = new ViewHolder(contactView);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(final ViewHolder viewHolder, int position) {
        DataModel dataModel = LanguageList.get(position);
        viewHolder.txtTitle.setText(dataModel.language_name);
        viewHolder.loutMain.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                map.clear();
                map.put(position, position);
                notifyDataSetChanged();
            }
        });

        if (map.containsKey(position)) {
            viewHolder.btnCheck.setImageResource(R.drawable.icn_check);
            viewHolder.txtTitle.setTextColor(context.getResources().getColor(R.color.white));
            viewHolder.loutMain.setBackgroundResource(R.drawable.selected_language_bg);
        } else {
            viewHolder.btnCheck.setImageResource(R.drawable.icn_uncheck);
            viewHolder.txtTitle.setTextColor(context.getResources().getColor(R.color.colorPrimary));
            viewHolder.loutMain.setBackgroundResource(R.drawable.unselected_language_bg);
        }
    }

    @Override
    public int getItemCount() {
        return LanguageList.size();
    }
}
