//삼각형 판별하기
function solution(a, b, c){
    let answer="YES", max;
    if(a > b && a > c) {
        max = a;
        if(max > b + c){
            answer = "NO"
        }
    } else if(b > c && b > a) {
        max = b;
        if(max > c + a) {
            answer = "NO"
        } else {
            max = c
            if(max > a + b) {
                answer = "NO"
            }
        }
    }
    return answer;
}

console.log(solution(6, 7, 17));
