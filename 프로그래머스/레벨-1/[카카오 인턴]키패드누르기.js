function solution(numbers, hand) {
  var answer = "";
  const grid = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let l = grid["*"];
  let r = grid["#"];
  numbers.map((el, idx) => {
    if (grid[el][1] === 0) (answer += "L"), (l = grid[el]);
    else if (grid[el][1] === 2) (answer += "R"), (r = grid[el]);
    else {
      let ltmp = Math.abs(grid[el][0] - l[0]) + Math.abs(grid[el][1] - l[1]);
      let rtmp = Math.abs(grid[el][0] - r[0]) + Math.abs(grid[el][1] - r[1]);
      if (ltmp > rtmp) (answer += "R"), (r = grid[el]);
      else if (ltmp < rtmp) (answer += "L"), (l = grid[el]);
      else {
        if (hand === "left") (answer += "L"), (l = grid[el]);
        else (answer += "R"), (r = grid[el]);
      }
    }
  });

  return answer;
}
