// 난쟁이들의 키가 주어지며, 일곱 난쟁이의 키의 합은 100. 난쟁이의 키를 출력해라
// 아홉명의 난쟁이 중 일곱 난쟁이를 찾아야 된다
function solution(arr){
    let answer=arr;
    let arrSum = answer.reduce((acc,cur)=>acc+cur); //배열 합계구하기
    for(let i=0; i<answer.length-1; i++) {
        for(let j=i+1; j<answer.length; j++) {
            if(arrSum - (answer[i]+answer[j]) === 100) {
                answer.splice(i,1);
                answer.splice(j,1);
                break;
            }
        }
    }
    
    return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
