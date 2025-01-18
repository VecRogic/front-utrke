import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaymentForm } from '../../models/SearchFlight';

export interface PayPalState {
  error?: string;
  loading: boolean;
  response:any;
  request?:PaymentForm;
}

const initialState: PayPalState = {
  loading: false,
  response:undefined,
  request:undefined
};

const payPalSlice = createSlice({
  name: 'payPal',
  initialState,
  reducers: {
    createPaymentRequest: (state,action:PayloadAction<PaymentForm>) => {
      state.loading = true;
      state.error = undefined;
      state.response = undefined;
    },
    createPaymentSuccess: (state, action: PayloadAction<any>) => {
      state.response = action.payload;
      state.request = undefined;
      state.loading = false;
    },
    createPaymentFailure: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.loading = false;
      state.request = undefined;
      state.response = undefined;
    },
    resetState:(state)=>{
      state.loading = false;
      state.request = undefined;
      state.response = undefined;
      state.error = undefined
    }
  },
});

export const {
  createPaymentRequest,
  createPaymentSuccess,
  createPaymentFailure,
  resetState
} = payPalSlice.actions;

export default payPalSlice.reducer;
