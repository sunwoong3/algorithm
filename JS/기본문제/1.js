
function solution(a, b, c){
    let answer = a;
    if (answer > b && b < c) answer = b
    else if (answer > c && c < b) answer = c
    return answer; 
    return answer;
}
console.log(solution(2, 5, 1));
