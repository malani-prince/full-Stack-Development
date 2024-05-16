package com.dnk.dreamchildparenting.Custom;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Typeface;
import android.util.AttributeSet;
import android.widget.TextView;

import com.dnk.dreamchildparenting.R;
import com.dnk.dreamchildparenting.Utility;


@SuppressLint("AppCompatCustomView")
public class CustomTextView extends TextView {

    public CustomTextView(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        init(context, attrs);
    }

    public CustomTextView(Context context, AttributeSet attrs) {
        super(context, attrs);
        init(context, attrs);
    }

    public CustomTextView(Context context) {
        super(context);
    }

    private void init(Context context, AttributeSet attrs) {

        TypedArray a = context.obtainStyledAttributes(attrs, R.styleable.CustomTextView);
        String customFont = a.getString(R.styleable.CustomTextView_CustomTextviewFont);


        /*Typeface tf = Typeface.createFromAsset(getContext().getAssets(),
                "ProductSans-Bold.ttf");
        textInputEditText.setTypeface(tf);*/


        CustomTypeFace(Utility.isEmptyVal(customFont) ? "ProductSans-Bold.ttf" : customFont);


    }

    private boolean CustomTypeFace(String customFont) {
        try {

            setTypeface(Typeface.createFromAsset(getContext().getAssets(), customFont));

        } catch (Exception e) {
            return false;
        }
        return true;
    }


}