const palindrome = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

palindrome('lol');
//----------------------------------------------------
const min = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

const minTernary = (a, b) => (a < b ? a : b);

min(1, 4);
minTernary(1, 4);

const max = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

const maxTernary = (a, b) => (a > b ? a : b);

max(1, 4);
maxTernary(1, 4);
//----------------------------------------------------
const randomArray = (length, max) => {
  return Array.apply(null, Array(length)).map(function () {
    return Math.round(Math.random() * max);
  });
};

const zero = (theArgs) => {
  for (let i = 0; i < theArgs.length; i++) {
    const name = String(theArgs[i]);
    if (name.includes('0')) {
      theArgs[i] = name.replaceAll('0', 'zero');
    }
  }
  return theArgs;
};

zero(randomArray(10, 101));
