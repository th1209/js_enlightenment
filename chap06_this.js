//thisキーワードの挙動
// ・原則:その関数を内包するオブジェクトを参照する
// ・パターン
//     ・インスタンスのメソッドとして呼ばれた場合: インスタンスを指す
//     ・グローバルオブジェクトから呼ばれた場合: グローバルオブジェクトを指す
//     ・new演算子を使って呼ばれた場合: 新たに生成されるインスタンスを指す


//------------------------------------------------


//メソッド内のヘルパメソッドは、グローバルオブジェクトを指してしまう。
//この仕様は、ECMAScript5で改善されるとのこと

var example = {
  nest1: function(){
      console.log(this)         //対象インスタンスを指す
      var nest2 = function(){
          console.log(this);    //グローバルオブジェクトを指す
      }();
  }
};
example.nest1();


//------------------------------------------------


//プロトタイプメソッド内のthisは、生成されるインスタンスを参照する

var Person = function(name){
    this.name = name;
};
Person.prototype.getName = function(){
    return this.name;
}

var taro   = new Person('taro');
var hanako = new Person('hanako');

console.log(taro.getName());
console.log(hanako.getName());



