//첫째 줄에 홀수들의 합, 둘째 줄에 홀수 중에 최소값 출력하기
function solution(arr){
    let answer=[];
    let sum = 0;
    for(let el of arr) {
        if(el%2 === 1) {
            answer.push(el)
            sum = sum + el
        }
    }
    let result = `${sum} \n${Math.min(...answer)}`

    return result;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
