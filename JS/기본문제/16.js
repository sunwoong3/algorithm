//중복문자제거
function solution(s){  
    let answer="";
    let match = answer.length-1;
    for(let str of s) {
        if(!answer.includes(str)){
            answer = answer + str;
        }
    }
    return answer;
}
console.log(solution("ksekkset"));
