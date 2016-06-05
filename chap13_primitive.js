//primitive値でも、対応するオブジェクトのメソッドを使用可能
//(一時的にラッパーオブジェクトが生成&破棄が行われる)

console.log('hoge'.length);     //4
console.log(3.14.toFixed());    //3
console.log(false.toString());  //'false'