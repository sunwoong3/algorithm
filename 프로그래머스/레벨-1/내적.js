function solution(a, b) {
  var answer = 1234567890;
  const arr = a.map((el, idx) => el * b[idx]);
  answer = arr.reduce((acc, cur) => acc + cur);
  return answer;
}
