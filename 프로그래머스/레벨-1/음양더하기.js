function solution(absolutes, signs) {
  var answer = 123456789;
  const arr = [];
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === false) {
      arr.push(-absolutes[i]);
    } else {
      arr.push(absolutes[i]);
    }
  }
  answer = arr.reduce((acc, cur) => acc + cur);
  return answer;
}
