function solution(array, commands) {
  var answer = [];

  //[i,j,k] i번째부터j번째까지 자르고 정렬한 뒤 k번째 수 담아서 리턴하기
  commands.forEach((el, idx) => {
    let arr = array.slice(el[0] - 1, el[1]);
    arr.sort((a, b) => a - b);
    answer.push(arr[el[2] - 1]);
  });
  return answer;
}
