function solution(board, moves) {
  //같은 모양의 인형 두 개가 바구니에 연속해서 쌓이면 삭제
  //터뜨려서 사라진 인형의 개수 리턴
  var answer = 0;
  let basket = []; //인형 담을 바구니

  for (let i = 0; i < moves.length; i++) {
    let current = moves[i] - 1;
    let idx = 0;

    while (board[idx][current] === 0 && idx < board.length - 1) {
      idx += 1;
    }

    if (board[idx][current] === 0) {
      //뺄 인형이 없을땐 넘겨주기
      continue;
    }
    basket.push(board[idx][current]);
    board[idx][current] = 0; //빠진 인형은 초기화를 시켜줘야 됨

    if (basket[basket.length - 1] === basket[basket.length - 2]) {
      answer += 2;
      basket.splice(-2);
    }
  }
  return answer;
}
