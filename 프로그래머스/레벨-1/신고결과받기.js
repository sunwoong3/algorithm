function solution(id_list, report, k) {
  //메일을 받지 않은 사람이 초기값이니 0으로 채워준다
  var answer = new Array(id_list.length).fill(0);
  const obj = {};
  //신고당한 사람:[]
  id_list.map((user) => {
    obj[user] = [];
  });
  //신고한 사람들을 넣어준다. 단 한사람이 같은 사람을 여러번 신고해도 1번으로 간주
  report.map((el) => {
    const [user, reported] = el.split(" ");
    if (!obj[reported].includes(user)) {
      obj[reported].push(user);
    }
  });
  //k번 이상 신고당한 사람들 한에 신고자들에게 메일을 발송시켜 주므로 조건 달아주기
  for (let key in obj) {
    if (obj[key].length >= k) {
      for (let id of id_list) {
        if (obj[key].includes(id)) {
          answer[id_list.indexOf(id)] += 1;
        }
      }
    }
  }
  return answer;
}
