package com.dnk.dreamchildparenting.Custom;

import android.annotation.SuppressLint;
import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.util.AttributeSet;
import android.view.KeyEvent;
import android.view.animation.Animation;

/**
 * Created by vishal on 6/16/2016.
 */

@SuppressLint("AppCompatCustomView")
public class EditMessage extends CustomEditText {

    protected Handler mTypingHandler = new Handler(Looper.getMainLooper());
    protected KeyboardListener keyboardListener;
    private boolean isUserTyping = false;
    protected Runnable mTypingTimeout = new Runnable() {
        @Override
        public void run() {
            if (isUserTyping && keyboardListener != null) {
                keyboardListener.onTypingStopped(EditMessage.this.getText().toString());
                isUserTyping = false;
            }
        }
    };
    private boolean lastInputWasTab = false;

    public EditMessage(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public EditMessage(Context context) {
        super(context);
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent e) {
        if (keyCode == KeyEvent.KEYCODE_ENTER && !e.isShiftPressed()) {
            lastInputWasTab = false;
            if (keyboardListener != null && keyboardListener.onEnterPressed()) {
                return true;
            }
        } else if (keyCode == KeyEvent.KEYCODE_TAB && !e.isAltPressed() && !e.isCtrlPressed()) {
            if (keyboardListener != null && keyboardListener.onTabPressed(this.lastInputWasTab)) {
                lastInputWasTab = true;
                return true;
            }
        } else {
            lastInputWasTab = false;
        }
        return super.onKeyDown(keyCode, e);
    }

    boolean is_animation = true;
    Animation zoom_in, zoom_out;

    @Override
    public void onTextChanged(CharSequence text, int start, int lengthBefore, int lengthAfter) {
        super.onTextChanged(text, start, lengthBefore, lengthAfter);

        lastInputWasTab = false;
        if (this.mTypingHandler != null && this.keyboardListener != null) {
            this.mTypingHandler.removeCallbacks(mTypingTimeout);
            this.mTypingHandler.postDelayed(mTypingTimeout, 500);
            final int length = text.length();
            if (!isUserTyping && length > 0) {
                this.isUserTyping = true;
                this.keyboardListener.onTypingStarted();
            } else if (length == 0) {
                this.isUserTyping = false;
                this.keyboardListener.onTextDeleted();
            }
            this.keyboardListener.onTextChanged();


        }
    }


    public void setKeyboardListener(KeyboardListener listener) {
        this.keyboardListener = listener;
        if (listener != null) {
            this.isUserTyping = false;
        }


    }

    public interface KeyboardListener {
        boolean onEnterPressed();

        void onTypingStarted();

        void onTypingStopped(String s);

        void onTextDeleted();

        void onTextChanged();

        boolean onTabPressed(boolean repeated);
    }

}
