function getAmp(val) {
  let now = new Date(val)
  let hour = now.getHours()

  if (hour >= 6 && hour < 12) {
    // 06.00-12.00
    // console.log("06.00-12.00");
    return 'Good Morning'
  }
  if (hour >= 12 && hour < 19) {
    // 12.00-19.00
    // console.log("12.00-19.00");
    return 'Good Afternoon'
  }
  if (hour >= 19 && hour < 24) {
    // 19.00-24.00
    // console.log("19.00-24.00");
    return 'Good Evening'
  }
  if (hour >= 0 && hour < 6) {
    // 00.00-06.00
    // console.log("00.00-06.00");
    return 'Go Sleep'
  }
}

export default getAmp
