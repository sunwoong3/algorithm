//키 순으로 섰을때. 선생님이 보이는 학생의 수 구하기
function solution(arr){         
    let answer=1, max=arr[0];
    for(let student of arr) {
        if(max<student) {
            answer++;
            max = student;
        }
    }
    return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));