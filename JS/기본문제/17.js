//중복단어제거
function solution(s){  
    let answer;
    return answer = s.filter((el,idx) => s.indexOf(el) === idx)
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));