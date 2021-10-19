function solution(arr){  
    let answer=0;
    let len = arr.length;
    let dx = [-1, 0, 1, 0] //행
    let dy = [0, 1, 0, -1] //열

    for(let i=0; i<len; i++) {
        for(let j=0; j<len; j++) {
            let flag = 1;
            for(let k=0; k<4; k++) {
                let x = i + dx[k];
                let y = j + dy[k];
                if(x>=0 && x<len && y>=0 && y<len && arr[x][y]>=arr[i][j]) {
                    flag = 0;
                    break;
                }
            }
    
            if(flag) {
                answer++
            }
        }
    }
    return answer;
}

let arr=[[5, 3, 7, 2, 3], 
         [3, 7, 1, 6, 1],
         [7, 2, 5, 3, 4],
         [4, 3, 6, 4, 1],
         [8, 7, 3, 5, 2]];
console.log(solution(arr));
