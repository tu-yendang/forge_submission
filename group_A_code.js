const IsPalindrome = (input) => {
  if (!input) {
    return false;
  }
  input = input.toString();
  const lower = input.toLowerCase();
  for (let i = 0; i < Math.floor(lower.length / 2); i++) {
    if (lower[i] !== lower[lower.length - i - 1]) {
      return false;
    }
  }
  return true;
};

const YeeHawCount = (n) => {
  if (Number.isInteger(n) && n >= 0) {
    const result = [];
    for (let i = 1; i <= n; i++) {
      let output = '';
      if (i % 3 == 0) {
        output += 'yee';
      }
      if (i % 4 == 0) {
        output += 'haw';
      }
      result.push(output || i);
    }
    return result;
  }
  else {
    return 'Input is not a valid positive integer number.';
  }
};


// // TESTING:
// console.log("Testing IsPalindrome: ");
// console.log(IsPalindrome('racecAr'));
// console.log(IsPalindrome('testing'));
// console.log(IsPalindrome('2.2'));
// console.log(IsPalindrome(2.2));
// console.log(IsPalindrome(200));

// console.log("Testing YeeHawCount: ");
// console.log(YeeHawCount(15));
// console.log(YeeHawCount("testing"));
// console.log(YeeHawCount(2.5));
// console.log(YeeHawCount(-2));