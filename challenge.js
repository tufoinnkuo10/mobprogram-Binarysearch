module.exports = function sqrt(number) {
  return sqrt_recursive(number, 0, number)
}

function sqrt_recursive(number, min_interval, max_interval) {
  // write your code here
  const midle= (max_interval + min_interval)/2;
  const midsquared = midle*midle;
  if(midsquared === number){
    return midle;
  }else if (midle*midle > number){
    return sqrt_recursive(number, min_interval, midle)
  }else
  return sqrt_recursive(number, midle, max_interval)
}

//  console.log(sqrt(25))
//  console.log(sqrt(7056))
