//대문자 개수 구하기
function solution(s){         
    let answer=0;
    let str = s.slice().toLowerCase();
    for(let i=0; i<s.length; i++) {
        if(s[i]!==str[i]) {
            answer++;
        }
    }
    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));

function solution2(s){         
    let answer=0;
    for(let str2 of s) {
        if(str2 === str2.toUpperCase()) {
            answer++;
        }
    }
    return answer;
}

let str2="KoreaTimeGood";
console.log(solution2(str));