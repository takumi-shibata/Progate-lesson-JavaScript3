// 関数(いくつかの処理をまとめたもの)
// 定義
const greet = function() {
  //　関数の定義では値に「function()」を記述する
  console.log("こんにちは！");
  console.log("関数を学習していきましょう！");
};
// 関数を呼び出す実行処理
greet();
// 定数名();


// アロー関数(ES6では「function()」の部分を「() =>」としても、これまでと同じように関数を定義することができる)
// 定数greetにアロー関数を代入してください
const greet = () => {
  console.log("こんにちは！");
}
// 定数greetを呼び出してください
greet();