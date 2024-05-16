package com.dnk.dreamchildparenting.adapter;

import android.app.Activity;
import android.content.Context;
import android.text.Html;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.activity.LoginActivity;
import com.dnk.dreamchildparenting.activity.SignUpActivity;
import com.dnk.dreamchildparenting.async.DataModel;
import com.google.android.material.bottomsheet.BottomSheetDialog;

import java.util.ArrayList;


public class CountryAdapter extends RecyclerView.Adapter<CountryAdapter.ViewHolder> {

    Activity activity;
    ArrayList<DataModel> listData;
    int selectedPosition;
    BottomSheetDialog dialog;
    String isFrom;

    public CountryAdapter(Activity activity, ArrayList<DataModel> listData, int position, BottomSheetDialog dialog) {
        this.activity = activity;
        this.listData = listData;
        this.selectedPosition = position;
        this.dialog = dialog;
        this.isFrom = isFrom;
    }


    public static class ViewHolder extends RecyclerView.ViewHolder {


        TextView txtTitle, txtCountryCode;


        public ViewHolder(View itemView) {
            super(itemView);


            txtTitle = itemView.findViewById(R.id.txtTitle);
            txtCountryCode = itemView.findViewById(R.id.txtCountryCode);


        }

    }

    @Override
    public CountryAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        LayoutInflater inflater = LayoutInflater.from(context);
        View contactView = inflater.inflate(R.layout.country_list_raw, parent, false);
        ViewHolder viewHolder = new ViewHolder(contactView);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(final ViewHolder viewHolder, final int position) {

        final DataModel dataModel = listData.get(position);
        viewHolder.txtTitle.setText(Html.fromHtml(dataModel.country_name));
        viewHolder.txtCountryCode.setText("+" + dataModel.country_phone_code);
        viewHolder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (activity instanceof LoginActivity) {
                    ((LoginActivity) activity).countryData.setSelectedCountry(dataModel);
                } else if (activity instanceof SignUpActivity) {
                    ((SignUpActivity) activity).countryData.setSelectedCountry(dataModel);
                }
                dialog.dismiss();
            }
        });
        viewHolder.txtTitle.setTextColor(activity.getResources().getColor(R.color.colorPrimary));


    }

    @Override
    public int getItemCount() {
        return listData.size();
    }


}
