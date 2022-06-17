function solution(answers) {
  var answer = [];
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const fp = answers.filter((el, idx) => el === first[idx % 5]).length;
  const sp = answers.filter((el, idx) => el === second[idx % 8]).length;
  const tp = answers.filter((el, idx) => el === third[idx % 10]).length;

  const winner = Math.max(fp, sp, tp);

  fp === winner && winner !== 0 ? answer.push(1) : answer;
  sp === winner && winner !== 0 ? answer.push(2) : answer;
  tp === winner && winner !== 0 ? answer.push(3) : answer;

  return answer;
}
