function solution(new_id) {
  let answer = "";
  let arr = [];
  let str = "~!@#$%^&*()=+[{]}:?,<>/".split("");
  //1단계 모두 소문자로 치환
  for (let el of new_id.toLowerCase()) {
    arr.push(el);
  }

  //2단계 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
  for (let i = 0; i < arr.length; i++) {
    if (str.includes(arr[i])) {
      arr.splice(i, 1);
    }
  }
  //3단계 .가 2개 이상이면 1개로 바꿔주기
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "." && arr[i + 1] === ".") {
      arr.splice(i + 1, 1);
    }
  }
  //4단계 .가 처음이나 끝에 위치하면 제거
  if (arr[0] === ".") arr.splice(0, 1);
  if (arr[arr.length - 1] === ".") arr.splice(-1);
  //5단계 빈문자열이면 'a'대입
  if (arr.length === 0) arr = "a";
  //6단계 문자열의 길이가 16이상이면 15까지만 남기고 자르기
  if (arr.length > 15) arr.splice(15);

  //7단계 문자열의 길이가 2자 이하면 마지막 문자를 길이가3이 될때까지 붙이기
  if (arr.length < 3) {
    while (arr.length === 3) {
      arr.push(arr[arr.length - 1]);
    }
  }

  answer = arr.join("");
  return answer;
}
