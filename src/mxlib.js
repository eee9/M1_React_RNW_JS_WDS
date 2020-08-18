//==================================================================================================
//  Library for Maix common functions (JavaScript, K6J)
//==================================================================================================

export const cc = console.log;
export const ccc = (t) => {
  cc(getTimeNow() + ': ' + t);
};
export const cc_ = (...args) => {
  cc('[' + getTimeNow() + ']', ...args);
};
export const secx = () => getTimeNow().substr(-6);
export const EOL = '\n';
export const LL = '\n';
export const Q = "'";
export const QQ = '"';

export const sFTime = () => {
  let oDateNow = new Date();
  return oDateNow.toLocaleString() + '.' + add3(oDateNow.getMilliseconds());
};

export const add0 = (n, len) => ('0'.repeat(len) + n).slice(-1 * len);
const add3 = (n) => add0(n, 3);
const add2 = (n) => add0(n, 2);
export const getTimeMx = (objDate) => {
  let res = '';
  res += add2(objDate.getHours()) + ':';
  res += add2(objDate.getMinutes()) + ':';
  res += add2(objDate.getSeconds());
  res += '.' + add3(objDate.getMilliseconds());
  return res;
};
export const getTimeNow = () => getTimeMx(new Date());
export const T = () => getTimeMx(new Date());

export const J = (obj) => JSON.stringify(obj, null, '  ');
