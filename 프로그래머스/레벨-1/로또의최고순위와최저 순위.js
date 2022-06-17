function solution(lottos, win_nums) {
  var answer = [];
  //0~1개를 맞추면 6등
  //6개 다 맞추면 1등
  // 배열이 순서대로 정렬이 되어있지않음

  //lottos배열에 0이 몇개 들어있는지 확인
  const zero = lottos.filter((el) => el === 0).length; //0의 갯수
  //win_nums배열안에 lottos 일치하는 번호 갯수 확인
  const correctNum = lottos.filter((el) => win_nums.includes(el)).length; // 맞는 번호갯수
  //7에서 부터 차감
  let high = 7 - zero - correctNum === 7 ? 6 : 7 - zero - correctNum;
  let row = 7 - correctNum === 7 ? 6 : 7 - correctNum;

  // if(high === 7) high = 6
  // if(row === 7) row = 6

  answer = [high, row];

  return answer;
}
