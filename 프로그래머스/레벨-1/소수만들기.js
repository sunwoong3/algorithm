function solution(nums) {
  var answer = 0;
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let el = nums[i] + nums[j] + nums[k];
        prime(el) === true ? (answer += 1) : 0;
      }
    }
  }
  return answer;
}

function prime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
