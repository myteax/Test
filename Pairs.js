function pairs(str) {
  let len = str.length;
  let arr = str.split("");
  let arr2 = [];
  if (len % 2 !== 0) {
    arr.push("_");
  }
  console.log(arr.length);
  for (let i = 0; i <= arr.length; i++) {
    let st = arr[i] + arr[i + 1];
    if (st) {
      arr2.push(st);
    }
    i = i + 1;
  }

  return arr2;
}

pairs("abcdef");
