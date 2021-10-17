//가장 긴 문자열
// N개의 문자열 중 가장 긴 문자열을 출력
function solution(s){  
    let answer="", max=Number.MIN_SAFE_INTEGER;
    s.forEach((str, idx) => {
        if(str.length>max) {
            max = str.length;  
            answer = str;
        }
    });
    return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));