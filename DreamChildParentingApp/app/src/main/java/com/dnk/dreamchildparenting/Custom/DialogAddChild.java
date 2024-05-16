package com.dnk.dreamchildparenting.Custom;

import android.app.Activity;
import android.app.Dialog;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.view.Gravity;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.RelativeLayout;

import com.dnk.dreamchildparenting.R;
import com.vlstr.blurdialog.BlurDialog;


public class DialogAddChild {

    private float movement = 150;

    public Dialog getDialog(Activity activity) {

        final Dialog dialog1 = new Dialog(activity);
        dialog1.requestWindowFeature(Window.FEATURE_NO_TITLE);
        dialog1.setContentView(R.layout.add_child_dialog);
        dialog1.getWindow().setDimAmount(0.5f);
        dialog1.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        dialog1.setCanceledOnTouchOutside(true);
        ViewGroup.LayoutParams paramsdialog = dialog1.getWindow().getAttributes();
        paramsdialog.width = RelativeLayout.LayoutParams.WRAP_CONTENT;
        paramsdialog.height = RelativeLayout.LayoutParams.WRAP_CONTENT;
        dialog1.getWindow().setWindowAnimations(R.style.DialogTheme);
        dialog1.getWindow().setGravity(Gravity.CENTER);
        dialog1.getWindow().addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);

        final BlurDialog blurDialog = dialog1.findViewById(R.id.blurView);

        //dialog1.show();
        blurDialog.create(activity.getWindow().getDecorView(), 20);
        blurDialog.show();


        /*AlertDialog.Builder builder = new AlertDialog.Builder(activity, R.style.DialogTheme);

        LayoutInflater inflater = activity.getLayoutInflater();
        View dialogView = inflater.inflate(R.layout.progress_dialog, null);

        // Set the custom layout as alert dialog view
        builder.setView(dialogView);


        *//*ImageView img_animated = (ImageView) dialogView.findViewById(R.id.img_animated);
        GlideDrawableImageViewTarget imageViewTargetnew = new GlideDrawableImageViewTarget(img_animated);
        Glide.with(activity).load(R.raw.loader_animated).override(Target.SIZE_ORIGINAL, Target.SIZE_ORIGINAL).diskCacheStrategy(DiskCacheStrategy.SOURCE).into(imageViewTargetnew);*//*
        dialog = builder.create();*/
        return dialog1;
    }

}