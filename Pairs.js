function pairs(str) {
  let len = str.length;
  let arr = str.split("");
  let arr2 = [];
  if (len % 2 !== 0) {
    arr.push("_");
  }
  for (let i = 0; i <= arr.length; i++) {
    let st = arr[i] + arr[i + 1];
    if (st) {
      arr2.push(st);
    }
    i = i + 1;
  }

  return arr2;
}

const case1Result = pairs("abc");
const case2Result = pairs("abcdef");

if (!Array.isArray(case1Result) || case1Result.join("|") !== "ab|c_") {
  console.log(
    "pairs('abc') should return ['ab','c_'] but did not. Please fix the pairs function."
  );
} else if (
  !Array.isArray(case2Result) ||
  case2Result.join("|") !== "ab|cd|ef"
) {
  console.log(
    "pairs('abcdef') should return ['ab','cd', 'ef'] but did not. Please fix the pairs function."
  );
} else {
  console.log("Success!");
}
