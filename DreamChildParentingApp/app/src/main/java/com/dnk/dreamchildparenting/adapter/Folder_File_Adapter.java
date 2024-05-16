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
import com.dnk.dreamchildparenting.activity.FolderFileActivity;
import com.dnk.dreamchildparenting.async.DataModel;

import java.util.ArrayList;


public class Folder_File_Adapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

    Activity activity;

    ArrayList<DataModel> folderFileList;
    String planId;
    String planTypeId;

    public Folder_File_Adapter(Activity activity, ArrayList<DataModel> folderFileList, String planId, String planTypeId) {
        this.activity = activity;
        this.folderFileList = folderFileList;
        this.planId = planId;
        this.planTypeId = planTypeId;

    }


    public static class ViewHolder extends RecyclerView.ViewHolder {
        TextView txtTitle, txtDesc;
        ImageView icnImage, icnRight;

        public ViewHolder(View itemView) {
            super(itemView);
            txtTitle = itemView.findViewById(R.id.txtTitle);
            txtDesc = itemView.findViewById(R.id.txtDesc);
            icnImage = itemView.findViewById(R.id.icnImage);
            icnRight = itemView.findViewById(R.id.icnRight);
        }
    }

    public static class ViewHolderBig extends RecyclerView.ViewHolder {
        public ViewHolderBig(View itemView) {
            super(itemView);
        }
    }

    @Override
    public int getItemViewType(int position) {
        return 0;
    }

    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        LayoutInflater inflater = LayoutInflater.from(context);
        switch (viewType) {
            case 0:
                View contactView = inflater.inflate(R.layout.small_folder_file_adapter_raw, parent, false);
                ViewHolder viewHolder = new ViewHolder(contactView);
                return viewHolder;
            case 2:
                View contactViewBig = inflater.inflate(R.layout.big_folder_file_adapter_raw, parent, false);
                ViewHolderBig viewHolderBig = new ViewHolderBig(contactViewBig);
                return viewHolderBig;
            default:
                View contactViewSmall = inflater.inflate(R.layout.small_folder_file_adapter_raw, parent, false);
                ViewHolder viewHoldersmall = new ViewHolder(contactViewSmall);
                return viewHoldersmall;
        }

    }


    @Override
    public void onBindViewHolder(final RecyclerView.ViewHolder viewHolder, int position) {
        DataModel model = folderFileList.get(position);
        if (viewHolder instanceof ViewHolder) {
            ((ViewHolder) viewHolder).txtTitle.setText(model.objectName);
            ((ViewHolder) viewHolder).txtDesc.setText(model.objectSubTitle);
            if (model.isIcon.equals("1")) {
                ((ViewHolder) viewHolder).icnImage.setVisibility(View.VISIBLE);
            } else {
                ((ViewHolder) viewHolder).icnImage.setVisibility(View.GONE);
            }
            if (model.isFolder.equals("1")) {
                ((ViewHolder) viewHolder).icnRight.setVisibility(View.VISIBLE);
                viewHolder.itemView.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        Intent intent = new Intent(activity, FolderFileActivity.class);
                        intent.putExtra("Title", model.objectName);
                        intent.putExtra("PlanId", planId);
                        intent.putExtra("PlanTypeId", planTypeId);
                        intent.putExtra("FolderParentId", model.objectId);
                        activity.startActivity(intent);
                    }
                });
            } else {
                ((ViewHolder) viewHolder).icnRight.setVisibility(View.GONE);
                viewHolder.itemView.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                    }
                });
            }


        }
    }

    @Override
    public int getItemCount() {
        return folderFileList.size();
    }


}
