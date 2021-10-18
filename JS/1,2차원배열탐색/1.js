//바로 앞 수보다 크면 출력해라 (단, 첫 번째 수는 무조건 출력)
function solution(arr){         
    let answer=[];
    arr.forEach((num,idx) => {
        if(num>arr[idx-1]){
            answer.push(num)
        }
    });
    answer.unshift(arr[0])
    return answer;
}

let arr=[7, 3, 9, 5, 6, 12];
console.log(solution(arr));