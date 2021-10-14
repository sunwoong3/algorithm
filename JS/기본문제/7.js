/* 10부제  - 날짜의 일의 자리 숫자가 주어지고, 
            자동차 번호의 끝 두자리 수가 주어졌을때
            위반하는 자동차의 대수
*/

function solution(day, arr){
    let answer=0;
    for(let car of arr) {
        if((car - day)%10 === 0) answer++
    }

    return answer;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
