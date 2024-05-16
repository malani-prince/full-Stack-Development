package com.dnk.dreamchildparenting.Custom;

import android.app.Activity;
import android.app.Dialog;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;

import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.activity.KitDetailListActivity;
import com.dnk.dreamchildparenting.adapter.AddressListAdapter;
import com.dnk.dreamchildparenting.adapter.KitListAdapter;
import com.google.android.material.bottomsheet.BottomSheetDialog;
import com.vlstr.blurdialog.BlurDialog;


public class DialogSelectAddress {
    public BottomSheetDialog getDialog(Activity activity) {
        final BottomSheetDialog dialog1 = new BottomSheetDialog(activity, R.style.DialogStyle);
        dialog1.setContentView(R.layout.select_address_dialog);
        dialog1.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        dialog1.setCanceledOnTouchOutside(true);
        dialog1.getWindow().setDimAmount(0.5f);

        final BlurDialog blurDialog = dialog1.findViewById(R.id.blurView);
        RecyclerView listAddress = dialog1.findViewById(R.id.listAddress);
        ImageView btnBack = dialog1.findViewById(R.id.btnBack);
        btnBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog1.dismiss();
            }
        });
        //dialog1.show();
        blurDialog.create(activity.getWindow().getDecorView(), 20);
        blurDialog.show();
        listAddress.setLayoutManager(new LinearLayoutManager(activity, LinearLayoutManager.VERTICAL, false));
        AddressListAdapter addressListAdapter = new AddressListAdapter(activity);
        listAddress.setAdapter(addressListAdapter);
        return dialog1;
    }

}