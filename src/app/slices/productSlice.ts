import { createSlice } from '@reduxjs/toolkit';

export interface IProductState {
  // products: IProduct[];
}

const initialState: IProductState = {
  // products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // removeCart: (state, action: PayloadAction<number>) => {
    //   state.products = action.payload;
    // },
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
