package com.dnk.dreamchildparenting.Custom;

import android.app.Activity;
import android.app.Dialog;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.dnk.dreamchildparenting.R;
import com.vlstr.blurdialog.BlurDialog;


public class NotifyDialog {


    public Dialog getDialog(Activity activity, String Title, String Message, String ButtonName) {

        final Dialog dialog1 = new Dialog(activity);
        dialog1.requestWindowFeature(Window.FEATURE_NO_TITLE);
        dialog1.setContentView(R.layout.notify_dialog_layout);
        dialog1.getWindow().setDimAmount(0.2f);
        dialog1.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        ViewGroup.LayoutParams paramsdialog = dialog1.getWindow().getAttributes();
        paramsdialog.width = RelativeLayout.LayoutParams.MATCH_PARENT;
        paramsdialog.height = RelativeLayout.LayoutParams.MATCH_PARENT;
        dialog1.getWindow().setWindowAnimations(R.style.DialogTheme);
        dialog1.getWindow().addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);

        /*final BlurDialog blurDialog = dialog1.findViewById(R.id.blurView);
        //dialog1.show();
        blurDialog.create(blurDialog.getRootView(), 25);
        blurDialog.show();*/
        TextView txtTitle = dialog1.findViewById(R.id.txtTitle);
        TextView txtMessage = dialog1.findViewById(R.id.txtMessage);
        TextView btnOk = dialog1.findViewById(R.id.btnOk);
        txtTitle.setText(Title);
        txtMessage.setText(Message);
        btnOk.setText(ButtonName);
        btnOk.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog1.dismiss();
            }
        });
        return dialog1;
    }

}