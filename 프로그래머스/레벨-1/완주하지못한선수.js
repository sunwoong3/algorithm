function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (completion[i] !== participant[i]) {
      return participant[i];
    }
  }

  return answer;
}
