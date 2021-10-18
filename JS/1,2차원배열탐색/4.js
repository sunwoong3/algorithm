//연속해서 문제를 맞추는 경우, 가산점이 1점씩 추가로 붙는다. 총 점수를 구해라
function solution(arr){         
    let answer=0, cnt=0; 
    for(let num of arr) {
        if(num === 1) {
            cnt++
            answer+=cnt
        } else cnt = 0
    }
       
    return answer;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));