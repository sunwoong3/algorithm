//회문 문자열, 대소문자 구분하지 않는다
function solution(s) {
	let answer = 'YES';
	let len = s.length - 1;
	s = s.toLowerCase();
	for (let i = 0; i <= len; i++) {
		if (s[i] !== s[len - i]) {
			return 'NO';
		}
	}
	return answer;
}

let str = 'goooG';
console.log(solution(str));
