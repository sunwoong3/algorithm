//각 학생의 등수를 순서대로 출력
function solution(arr){  
    let answer = Array(arr.length).fill(1)
    for(let i=0;i<arr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if(arr[i]<arr[j]) {
                answer[i]++
            }
        }
    }
    return answer;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));