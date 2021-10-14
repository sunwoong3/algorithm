//A를 #으로 바꾸기
function solution(s){
    let answer="";
    for(let i=0; i<s.length; i++) {
        if(s[i] === 'A') {
            answer = answer + '#'
        } else {
            answer = answer + s[i];
        }
        
    }
    return answer;
}

let str="BANANA";
console.log(solution(str));

function solution(s){
    let answer=s;
    answer=answer.replace(/A/g,'#'); // replace메소드 사용
    return answer;
}

let str="BANANA";
console.log(solution(str));