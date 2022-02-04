function filterMoney(value, isInt = false) {
  return isInt ? Math.round(value / 100) : value / 100
}

export default filterMoney
