import api from '../../utils/api';
import {payToe} from './ActionCreators';

export const handlePayToe = data => dispatch => {
  return new Promise((resolve, reject) => {
    // uniWallet().post('/debit/customer', data).then((res) => {
    //     data['transactionId'] = res.data.uniwalletTransactionId
    //     data['status'] = res.data.responseMessage
    //     api().post('/payments', data).then((res) => {
    //         dispatch(payToe(res.data))
    //         console.log(res.data, '- here')
    //         resolve(res)
    //     }).catch((err) => {
    //         reject(err)
    //     })
    // }).catch((err) => {
    //     reject(err)
    // })

    api()
      .post('/payments', data)
      .then(res => {
        dispatch(payToe(res.data));
        resolve(res);
        console.log(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
