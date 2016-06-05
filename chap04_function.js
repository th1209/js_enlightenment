// Function()が持つプロパティとメソッド
// プロパティ
//     ・prototype
// インスタンスプロパティ
//     ・constructor
//     ・arguments:Functionに渡された引数を保持する。lengthで実際の引数の長さを取れる。calleeで再帰可能。
//     ・length:関数が期待する引数の長さを取れる
// インスタンスメソッド
//     ・apply:関数を特定インスタンスに適用して実行
//     ・call:applyとほぼ同じ
//     ・toString:関数を文字列にして返す


//------------------------------------------------


//return文の無い関数は、undefinedを返す

var noReturn = function(){
    console.log('Return Nothing.')
};
console.log(noReturn() === undefined);	//true


//------------------------------------------------


//関数内のthisキーワードは、関数を保持するオブジェクトの参照である

//以下の例だと、thisはグローバルオブジェクトを指す
var globalFunc = function(){
    console.log(this);  //グローバルオブジェクトを出力
}();



//------------------------------------------------


//arguments.calleeプロパティで、その関数自身にアクセス可能

//以下の例は無限ループになるので注意
var recursive = function(){
    console.log('recursive');
    arguments.callee();
}();


//------------------------------------------------


//引数の長さを取る

var argLength = function(a, b, c){
    console.log(arguments.length)   //2 実際に渡された引数の数
    console.log(argLength.length);  //3 期待する引数の数
}('fizz', 'buzz');


//------------------------------------------------


//apply()とcall()

var greet = {
    outputName: function(){
        console.log('My name is', this.first, this.last, arguments[0], arguments[1]);
    }
}
var person1 = {
    first: 'taro',
    last: 'sato'
};
var person2 = {
    first: 'hanako',
    last: 'suzuki'
};

//call,applyを使うと、あたかもそのインスタンスのメソッドのように使える
greet.outputName.call(person1, 'korekara', 'yorosiku');     //callは引数を一つずつ渡す
greet.outputName.apply(person2, ['korekara', 'yorosiku']);  //applyは引数を配列でまとめて渡す



//------------------------------------------------


//無名関数

//高階関数の引数に渡す
//※jsデフォの高階関数だと貧弱なようなので、Underscore.jsのFunctionsを使おう
var setUpAndCleanUp = function(func){
    console.log('setUp...');
    func();
    console.log('cleanUp...');
};

setUpAndCleanUp(function(){
    console.log('hoge');
});

//無名関数を即時実行
//(関数を括弧でくるみ、式にすることで、即時実行できる。式の厳密な定義は以下)
//https://ja.wikipedia.org/wiki/%E6%96%87_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0)

//パターン1 無名関数を括弧でくるむ
(function(msg){
    console.log(msg);
})('Hi');

//パターン2 実引数も含めて括弧でくるむ
(function(msg){
    console.log(msg);
}('Hi'));

//パターン3 これはだめ
//function(msg){ console.log(msg); }('Hi');



//------------------------------------------------


//関数の巻き上げ
//(関数の定義前に、対象の関数が呼び出された場合
//定義が巻き上げられて、対象の関数を正しく呼び出せる)

var example = function(){
    hoisting1();            //巻き上げが発生
    function hoisting1(){ console.log('hoisting1'); }
}();

console.log(hoisting2());    //巻き上げが発生
function hoisting2(){ console.log('hoisting2'); }


//関数式を使った場合は巻き上げられない
console.log(hoisting3());
var hoisting3 = function(){ console.log('hoisting3'); }



