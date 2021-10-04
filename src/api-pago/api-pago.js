const url = 'https://sandbox.flow.cl/api/payment/create'
const apiKey = '53305F1C-A536-4332-9718-7C31DCEL94C8'
const secretKey = '1b48ec1ca7efa74509196577aa3c4ecb0f7fdf11'
const urlConfirmation = 'http://flowosccomerce.tuxpan.com/csepulveda/api2/pay/confirmPay.php'
const urlReturn = 'http://flowosccomerce.tuxpan.com/csepulveda/api2/pay/resultPay.php'
const form =
{
  amount: $store.getters['valorTotalVenta'],
  apiKey :'53305F1C-A536-4332-9718-7C31DCEL94C8',
  commerceOrder : $store.state.numeroOrden,
  email: 'vriquelmefe@gmail.com',
  subject: $store.state.producto.title,
  commerceOrder : 'numerorandom',
  urlConfirmation : urlConfirmation,
  urlReturn : urlReturn
}

const toSign = `amount${form.amount}apiKey${form.apiKey}commerceOrder${form.commerceOrder}currencyCLPemail${form.email}subject${form.subject}urlConfirmation${form.urlConfirmation}purlReturn${form.urlReturn}`

let hash = CryptoJS.HmacSHA256(toSign, pm.variables.get("secretKey"));
console.log(hash);

export {hash, apiKey, form}


// const toSign = "amount5000apiKey53305F1C-A536-4332-9718-7C31DCEL94C8commerceOrder1currencyCLPemailvriquelmefe@gmail.comsubjectPago de prueba POSTMANurlConfirmationhttp://flowosccomerce.tuxpan.com/csepulveda/api2/pay/confirmPay.phpurlReturnhttp://flowosccomerce.tuxpan.com/csepulveda/api2/pay/resultPay.php"