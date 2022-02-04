import { isNumber, isNaN } from 'lodash'
import mathArithmetic from './mathArithmetic'

function checkNumber(v) {
  if (!isNumber(v) || isNaN(v)) {
    v = 0
  }
  return v
}

export function fen2yuan(v, isInt = false) {
  v = checkNumber(v);
  let value = mathArithmetic.divide(v, 100)
  return isInt ? Math.round(value) : value;
}

export function yuan2fen(v, isInt = false) {
  v = checkNumber(v);
  let value = mathArithmetic.multiply(v, 100)
  return isInt ? Math.round(value) : value;
}
