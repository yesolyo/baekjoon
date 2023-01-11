function solution(numer1, denom1, numer2, denom2) {
  //분자
  const numer = numer1 * denom2 + numer2 * denom1;
  //분모
  const denom = denom1 * denom2;

  let minNumber;
  if (numer > denom) {
    minNumber = denom;
  } else {
    minNumber = numer;
  }

  while (true) {
    if (numer % minNumber === 0) {
      if (denom % minNumber === 0) {
        return [numer / minNumber, denom / minNumber];
      }
    }
    minNumber -= 1;
  }
}