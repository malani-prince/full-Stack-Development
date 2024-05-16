package com.dnk.dreamchildparenting.async;


public class Interface {
    public interface OnResponseDecode {
        void setResponseDecodeListner(ResponseData responseModel);

        void onFail(Throwable t);
    }

    public interface OnReferEvent {
        void setonSuccessReferEvent(ResponseData responseModel);
    }

    public interface onDownloadListner {
        void setOnDownloadListner(String filepath);
    }

    public interface onConfirmtionLstner {
        void setOnYesClick(DataModel dataModel, int position);
    }


}
