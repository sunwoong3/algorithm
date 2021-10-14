// 문자열에 특정문자의 개수 구하기
function solution(s, t){
    let answer=0;
    for(let el of s) {
        if(el === t) {
            answer++;
        }
    }
    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));