package com.dnk.dreamchildparenting.async;

import android.annotation.SuppressLint;
import android.util.Log;


import com.dnk.dreamchildparenting.BuildConfig;

import java.io.IOException;

import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class LogJsonInterceptor implements Interceptor {
    @SuppressLint("LongLogTag")
    @Override
    public Response intercept(Chain chain) throws IOException {
        Request request = chain.request();

        Response response = chain.proceed(request);
        String rawJson = response.body().string();
        if (BuildConfig.DEBUG) {
            Log.d(BuildConfig.APPLICATION_ID, String.format("raw JSON response is: %s", rawJson));
        }
        // Re-create the response before returning it because body can be read only once
        return response.newBuilder()
                .body(ResponseBody.create(response.body().contentType(), rawJson)).build();
    }
}