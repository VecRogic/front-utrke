
import { getAxiosInstance } from '../utils/axiosUtils';

export class PayPalService {
  static createPayment(paymentDetails: any) {
    return getAxiosInstance().post('http://localhost:8080/payment/create-payment', paymentDetails);
  }

  static executePayment(paymentDetails: { paymentId: string, payerId: string }) {
    const { paymentId, payerId } = paymentDetails;
    return  getAxiosInstance().get(`http://localhost:8080/payment/success?paymentId=${paymentId}&payerId=${payerId}`);
  }


  static makePayment(form:any){
    return getAxiosInstance().post(`http://localhost:8080/payment/make/payment`,form);
  }
}
