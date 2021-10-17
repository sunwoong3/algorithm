//가운데 문자 출력
//단어길이가 짝수면 가운데 2개 출력
function solution(s){  
    let answer;
    let mid = Math.floor(s.length/2);
    answer = s[mid];
    return answer;
}
console.log(solution("study"));