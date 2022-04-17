// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  let count = 0;
  let countList = [];
  let isCheck = false; //この変数で「1」の間の「0」を取得するよう制御する
  let binary = N.toString(2);

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "0") {
      count++;
      isCheck = false;
    }
    if (binary[i] === "1") isCheck = true;

    // 0の長さを取得
    if (isCheck && count !== 0) {
      countList[i] = count;
      // count、isCheck初期化
      count = 0;
      isCheck = false;
    }
  }

  // 0の最大の長さ取得
  let maxLength =
    countList.length > 0 ? countList.reduce((a, b) => Math.max(a, b)) : 0;

  return maxLength;
}
