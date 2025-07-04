import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';
import { message } from 'antd';

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    // RTK Query uses createAsyncThunk from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
      const payload: any = action.payload;
      const error_message =
        payload?.data?.message ??
        payload?.data?.msg ??
        payload?.data?.err?.message ??
        '';
      error_message &&
        error_message !== 'A validation error occurred.' &&
        message.warning(error_message);

      const errors = payload?.data?.errors ?? '';
      if (errors.length > 0) {
        errors.forEach((item: string) => {
          item && message.warning(item);
        });
      }

      const status = payload?.originalStatus;

      if (status === 500) {
        message.warning(
          "Server bilan bog'liq xatolik. Iltimos bu haqda ma'sul xodimlarga xabar bering"
        );
      } else if (status === 401 || status === 403) {
        window.location.href = '/auth/signin';
        message.warning('Iltimos avval tizimga kiring!');
      }
    }

    return next(action);
  };
