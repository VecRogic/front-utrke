import { call, put, takeLatest } from 'redux-saga/effects';
import { createPaymentRequest, createPaymentSuccess, createPaymentFailure } from './reducer';
import { PayloadAction } from '@reduxjs/toolkit';
import sagaUtility from '../../utils/sagaUtils';
import { PayPalService } from '../../services/PayPalService';
import { PaymentForm } from '../../models/SearchFlight';

function* createPaymentSaga(action: PayloadAction<PaymentForm>) {
  yield sagaUtility(action.payload, PayPalService.makePayment, createPaymentSuccess, createPaymentFailure);
}
export default function* payPalSaga() {
  yield takeLatest(createPaymentRequest.type, createPaymentSaga);
}
