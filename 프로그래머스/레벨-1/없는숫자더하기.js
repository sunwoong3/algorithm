function solution(numbers) {
  let answer = 0;
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let el of arr) {
    if (numbers.indexOf(el) === -1) {
      answer += el;
    }
    continue;
  }
  return answer;
}
