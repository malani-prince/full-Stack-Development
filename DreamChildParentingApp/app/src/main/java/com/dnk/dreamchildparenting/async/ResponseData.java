package com.dnk.dreamchildparenting.async;

import java.io.Serializable;


public class ResponseData implements Serializable {

    public DataModel data;
    public String status;
    public String token;
    public String message;
    public String is_user_exist;


}
