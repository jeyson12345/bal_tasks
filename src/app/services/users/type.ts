//Product types
export interface ITask {
  id: number;
  created_by_name: string;
  signed_users_names: string[];
  status_display: string;
  days_remaining: number;
  created_date: string;
  deadline_days: number;
  text: string;
  media_file: string;
  media_type: string;
  message_id: any;
  result_text: any;
  result_media_file: any;
  result_media_type: any;
  result_message_id: any;
  feedback_text: any;
  feedback_media_file: any;
  feedback_media_type: any;
  feedback_message_id: any;
  status: string;
  created_by: number;
  responsible_user: any;
  signed_users: number[];
}

export interface IUser {
  id: number;
  full_name: string;
  telegram_id: number;
  is_active: boolean;
  status: string;
}

// Order types
export interface IOrder {}

export interface IOrderRes {}

export interface ILogin {
  username: string;
  password: string;
}
export interface ILoginRes {
  token: string;
  user_id: number;
  username: string;
  email: string;
}
