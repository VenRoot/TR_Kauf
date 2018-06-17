function calculate(input) {

  let f = {
    add: '+',
    sub: '-',
    div: '/',
    mlt: '*',
    mod: '%',
    exp: '^',
  };

  f.ooo = [
    [
      [f.mlt],
      [f.div],
      [f.mod],
      [f.exp]
    ],
    [
      [f.add],
      [f.sub]
    ]
  ];
  input = input.replace(/[^0-9%^*\/()\-+.]/g, '');

  let output;
  for (let i = 0, n = f.ooo.length; i < n; i++){

    let re = new RegExp('(\\d+\\.?\\d*)([\\' + f.ooo[i].join('\\') + '])(\\d+\\.?\\d*)');
    re.lastIndex = 0;

    while (re.test(input)) {
    output = _calculate(RegExp.$1, RegExp.$2, RegExp.$3);
    if (isNaN(output) || !isFinite(output))
      return output; // exit early if not a number
    input = input.replace(re, output);
  }
}

return output;

function _calculate(a, op, b) {
  a = a * 1;
  b = b * 1;
  switch (op) {
    case f.add:
      return a + b;
      break;
    case f.sub:
      return a - b;
      break;
    case f.div:
      return a / b;
      break;
    case f.mlt:
      return a * b;
      break;
    case f.mod:
      return a % b;
      break;
    case f.exp:
      return Math.pow(a, b);
      break;
    default:
      null;
  }
}
}
