//Product types
export interface ITask {
  id: number;
  created_date: string;
  deadline_days: number;
  created_by_name: string;
  text: string;
  status: string;
  status_display: string;
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
