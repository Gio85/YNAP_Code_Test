
function converter(data) {
  if (data.letter) {
    let number = 0;
    let string = data.letter.toLowerCase();
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romans = ['m', 'cm', 'd', 'cd', 'c', 'xc', 'l', 'xl', 'x', 'ix', 'v', 'iv', 'i'];
    while (string.length > 0) {
      for (let i = 0; i <= romans.length; i++) {
        if (string.substr(0, 2) === romans[i]) {
          number += numbers[i];
          string = string.split('').splice(2).join('');
        }
        else if (string.charAt(0) === romans[i]) {
          number += numbers[i];
          string = string.split('').splice(1).join('');
        }
      }
    }
    return number;
  }
  else if(data.integer) {
    const numObj = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let roman = '';
    let num = data.integer;
    for (const i in numObj) {
      while (num >= numObj[i]) {
        roman += i;
        num -= numObj[i];
      }
    }
    return roman;
  }
}

async function createRoute(req, res) {
  try {
    const request = await converter(req.body);
    const response = await request;
    return res.json(response);
  }
  catch (err) {
    console.log('ERROR: ', err);
  }
}


module.exports = {
  create: createRoute
};
