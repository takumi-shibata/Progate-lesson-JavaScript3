// 1.関数
// 関数の定義では値に「function()」を記述する
const greet = function() {
  console.log("こんにちは！");
  console.log("関数を学習していきましょう！");
};
// 関数を呼び出す実行処理「定数名();」
greet();
// →こんにちは！ 関数を学習していきましょう！


// 2.アロー関数
// ES6では「function()」の部分を「() =>」としても、これまでと同じように関数を定義することができる
const greet = () => {
  console.log("こんにちは！");
}
greet();
// →こんにちは！


// 3.引数(関数に与える追加情報)
// アロー関数の()内に引数nameを追加
const greet = (name) => {
  console.log("こんにちは、" + name + "さん");  
};
// 定数名()内に引数の値を記述。その値は引数nameに代入され出力される
greet("ひつじ仙人");
// →こんにちはひつじ仙人さん


// 4.複数の引数を受け取る関数
// 引数をコンマ(,)で区切って並べることで、複数の引数を指定することができる
const add = (number1,number2) => {
  // number1とnumber2を足した値をコンソールに出力してください
  console.log(number1 + number2);
};

// 引数に5と7を渡して関数を呼び出してください
// 値もコンマ(,)で区切る
add(5,7);
// →12


// 5. 戻り値(関数の処理結果を呼び出し元で受け取る方法)
const half = (number) => {
  // 「return 値;」と書くことで、関数はその値を戻り値として返す
  // numberを2で割った値を戻り値として返してください
  return number / 2;
};
// 定数名resultを定義してください
const result = half(130);
// 「130の半分は〇〇です」となるように出力してください
console.log("130の半分は" + result + "です");
// 上記の定数を定義せずconsole.log("130の半分は" + half(130) + "です"); でも出力される
// →130の半分は65です


// 6.戻り値の活用
const check = (number) => {
  // numberが3の倍数かどうかを戻り値として返してください
  return number % 3 === 0;
};

// if文の条件式で、checkを呼び出してください
if (check(123)) { // 注意! ifの時()でくくる 「;」はいらない
  console.log("3の倍数です");
  // console.log(check(123));→true
} else {
  console.log("3の倍数ではありません");
  // console.log(check(123));→false
}
// →3の倍数です


// 7.関数演習
const number1 = 103;
const number2 = 72;
const number3 = 189;

// getMax関数を定義してください
const getMax = (a,b,c) => {
  // 引数a, b, cのうち一番大きい値を戻り値にしてください

  // ①変数maxを定義しaを代入
  let max = a
  
  // ②もしbがmaxより大きければ、bをmaxに代入
  if (b > max) {
    max = b
  }

  // ③もしcがmaxより大きければ、cをmaxに代入
  if (c > max) {
    max = c
  }

  // ④maxをreturnする
  return max;
}

// 「最大値は○○です」と出力してください
const max = getMax(number1,number2,number3); // getMax(103,72,189);
console.log("最大値は" + max + "です");
// →最大値は189です
