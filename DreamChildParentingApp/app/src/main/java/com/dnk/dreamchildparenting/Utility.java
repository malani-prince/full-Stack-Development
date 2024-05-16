package com.dnk.dreamchildparenting;

import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.ConnectivityManager;
import android.os.Build;
import android.provider.Settings;
import android.renderscript.ScriptGroup;
import android.util.Log;
import android.view.View;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.view.WindowManager;
import android.widget.Toast;

import androidx.viewbinding.ViewBinding;

import com.dnk.dreamchildparenting.Custom.NotifyDialog;
import com.dnk.dreamchildparenting.async.DataModel;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;

public class Utility {

    public static void PrintLog(String key, String value) {
        if (BuildConfig.DEBUG)
            if (value != null) {
                Log.e(key, value);
            } else {
                Log.e(key, "NULL VALUE");
            }
    }

    public static String getDeviceID(Context context) {
        String androidId = Settings.Secure.getString(context.getContentResolver(),
                Settings.Secure.ANDROID_ID);
        return androidId;
    }

    public static void NotifyDialog(Activity activity, String title, String message, String btnName) {
        new NotifyDialog().getDialog(activity, title, message, btnName).show();
        //new GlideToast.makeToast(activity, message, GlideToast.LENGTHLONG, GlideToast.CUSTOMTOAST, GlideToast.TOP, color).show();
    }

    public static boolean isEmptyVal(String s) {
        return s == null || s.trim().equals("") || s.isEmpty() || s.equals("null") || s.length() == 0;
    }

    public static void setFullScreenActivity(Activity activity) {

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            final WindowInsetsController insetsController = activity.getWindow().getInsetsController();
            if (insetsController != null) {
                insetsController.hide(WindowInsets.Type.statusBars());
            }
        } else {
            activity.getWindow().setFlags(
                    WindowManager.LayoutParams.FLAG_FULLSCREEN,
                    WindowManager.LayoutParams.FLAG_FULLSCREEN
            );
        }
    }

    public static boolean checkInternetConnection(Context context) {
        ConnectivityManager cm = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
        try {
            if (cm.getActiveNetworkInfo() != null
                    && cm.getActiveNetworkInfo().isAvailable()
                    && cm.getActiveNetworkInfo().isConnected()) {
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            PrintLog("checkInternetConnection", e + "");
            return false;
        }

    }

    public static void setSharedPreferences(Context activity, String Key, String Value) {
        SharedPreferences sharedpreferences = activity.getSharedPreferences(AppData.AppName, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedpreferences.edit();
        editor.putString(Key, Value);
        editor.commit();
    }
    public static String getSharedPreferences(Activity activity, String Key) {
        SharedPreferences sharedpreferences = activity.getSharedPreferences(AppData.AppName, Context.MODE_PRIVATE);
        return sharedpreferences.getString(Key, "");
    }

    public static DataModel getSharedPreferencesObject(Activity activity, String Key) {
        String str = getSharedPreferences(activity, Key);
        if (isEmptyVal(str)) {
            return new DataModel();
        }
        Type type = new TypeToken<DataModel>() {
        }.getType();
        return new Gson().fromJson(str, type);
    }

}

