package com.dnk.dreamchildparenting.async;


import java.util.concurrent.TimeUnit;

import okhttp3.OkHttpClient;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;


public class ApiClient {
    private static String RetroFitAPIUrl = "http://test.dreamchildparenting.com:3500/API/v1.0/";//Test

    //private static String RetroFitAPIUrl = "http://userapi.omyshaindia.com:3000/api/user/v1.2/";//Live
    private static Retrofit retrofit = null;

    public static Retrofit getClient() {


        OkHttpClient.Builder builder = new OkHttpClient.Builder();
        /*if (BuildConfig.DEBUG) {
            builder.addInterceptor(new OkHttpProfilerInterceptor());
        }*/
        OkHttpClient okHttpClient = builder
                .connectTimeout(5, TimeUnit.MINUTES)
                .readTimeout(30, TimeUnit.SECONDS)
                .addInterceptor(new LogJsonInterceptor())
                .writeTimeout(15, TimeUnit.SECONDS)
                .build();
        retrofit = new Retrofit.Builder()
                .client(okHttpClient)
                .addConverterFactory(GsonConverterFactory.create())
                .baseUrl(RetroFitAPIUrl)
                .build();
        return retrofit;
    }

}
