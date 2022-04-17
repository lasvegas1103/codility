function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let isExits = [];
  let ochiba = [];
  let answer = "";
  for (let i = 0; i <= A.length; i++) {
    if (!isExits[A[i]] && A[i] <= X) {
      ochiba.push(A[i]);
      isExits[A[i]] = true;
      if (ochiba.length === X) {
        answer = i;
        break;
      }
      continue;
    }
  }
  return ochiba.length === X ? answer : -1;
}

let test = solution(5, [1, 2, 5, 3, 4]);
console.log(test);
