package com.dnk.dreamchildparenting.fragment;

import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;

import com.dnk.dreamchildparenting.Custom.CustomProgress;
import com.dnk.dreamchildparenting.activity.MainActivityAfterLogin;
import com.dnk.dreamchildparenting.adapter.MyChildAdapter;
import com.dnk.dreamchildparenting.databinding.ChildFragmentBinding;

public class MyChildFragment extends Fragment {
    ChildFragmentBinding binding;
    MyChildAdapter childAdapter;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        binding = ChildFragmentBinding.inflate(inflater, container, false);
        View view = binding.getRoot();

        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {
                binding.listMychild.setLayoutManager(new LinearLayoutManager(getActivity(), LinearLayoutManager.VERTICAL, false));
                childAdapter = new MyChildAdapter(getActivity());
                binding.listMychild.setAdapter(childAdapter);
            }
        });


        //new CustomProgress().getDialog(getActivity()).show();
        return view;
    }
}