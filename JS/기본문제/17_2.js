//중복단어제거
function solution(s){  
    let answer;
    answer = new Set(s);
    console.log(answer)
    return [...answer]
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));