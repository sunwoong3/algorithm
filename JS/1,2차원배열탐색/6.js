//격자판의 최대합 출력하기
function solution(arr){  
    let answer=Number.MIN_SAFE_INTEGER;
    let diagnoal1 = 0;
    let diagnoal2 = 0;
    let row = 0;
    let colomn = 0;
    let newArr = []
    let len = arr.length-1

    for(let i=0; i<arr.length; i++) {
        for(let j=0;j<arr.length;j++) {
            row += arr[i][j];
            colomn += arr[j][i];
        }
        diagnoal1 += arr[i][i] 
        diagnoal2 += arr[i][len-i]
        newArr.push(diagnoal1, diagnoal2, row, colomn)
        row = 0;
        colomn = 0;
    }
    answer = Math.max(...newArr)
   
    return answer;
}

let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];
console.log(solution(arr));