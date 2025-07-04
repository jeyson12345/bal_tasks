export type IBaseRes<TData> = TData & {
  id: number;
  is_archived?: string;
  created_at?: string;
  updated_at?: string;
  key?: string;
};

export type IBaseNameRes<TData = {}> = TData & {
  id: number;
  name_uz: string;
  name_oz: string;
  name_ru: string;
};

export interface IBaseEdit<TData> {
  id: IBaseRes<TData>['id'];
  body: Partial<TData>;
  method?: 'PUT' | 'PATCH';
}

export interface IBaseDataRes<TData> {
  count: number;
  next: string;
  previous: string;
  results: TData[];
}

export interface IBaseDeleteRes {
  id: number;
  success?: boolean;
}

export interface IBaseOption {
  label: string;
  value: string;
}

export interface IParams {
  limit?: number;
  offset?: number;
}

export type PositionAttributes = 'ceo' | 'accountant' | 'employee';
export type CurrencyAttributes = 'usd' | 'uzs';
