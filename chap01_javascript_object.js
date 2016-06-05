//個人的に気になった箇所メモ
// ・以下覚えておきたい格言
//     ・次の一文を心に刻み込んでください。「オブジェクトとは、名前と値を持つプロパティを格納するコンテナにすぎない」
// ・jsでは、配列も関数もオブジェクトである。これ押さえておくと、例えば以下のような時にスッキリする。
//     ・配列: オブジェクトと同じ振る舞いをするはず(デフォルトではシャローコピーされる点とか)
//     ・関数: prototypeプロパティを内部的に保持しており、プロトタイプチェーンで使われる
// ・jsでは、「null」「undefined」「'string'」「10」「true/false」はプリミティブ型である


//------------------------------------------------


// JavaScriptが持つ、9つのネイティブ(ビルトイン)オブジェクトコンストラクタ
// ・Number
// ・String
// ・Boolean
// ・Object
// ・Array
// ・Function
// ・Date
// ・RegExp
// ・Error


//------------------------------------------------


//コンストラクタ・リテラル記法の違い

//以下3つは、リテラル記法だと、プリミティブ値を生成
var myNumber = new Number(23);
var myNumberLiteral = 23;

var myString = new String('male');
var myStringLiteral = 'male';

var myBoolean = new Boolean(false);
var myBooleanLiteral = false;

//以下4つは、どちらの場合でもオブジェクトを生成
var myObject = new Object();
var myObjectLiteral = {};

var myArray = new Array('foo', 'bar');
var myArrayLiteral = ['foo', 'bar'];

var myFunction = new Function("x", "y", "return x*y");
var myFunctionLiteral = function(x, y) {return x*y};

var myRegExp = new RegExp('\bt[a-z]+\b');    //文字列中の、tで始まる単語とマッチ(\bは単語区切り文字を表す)
var myRegExpLiteral = /\bt[a-z]+\b/;


//------------------------------------------------


//プリミティブ型は同値判定に値を使う、オブジェクト型は同値判定に参照を使う

var Person = function(name){
    this.name = name;
};
objA    = new Person('taro');
objB    = new Person('taro');
objARef = objA;

//プリミティブ型の比較
console.log('str' === 'str');   //true

//オブジェクト型の比較
console.log(objA === objB);     //false
console.log(objA === objARef);  //true


//------------------------------------------------


//constructorプロパティ
//全てのオブジェクトが持つプロパティ
//そのオブジェクトを生成したコンストラクタ関数を指す

var CustomObj = function(){};

var obj    = {};
var array  = [];
var custom = new CustomObj();

console.log(obj.constructor);       //Object()
console.log(array.constructor);     //Array()
console.log(custom.constructor);    //function()

//余談だが、constructorプロパティで実際の関数名を表示したい場合、「名前付き関数式」を使うこと。
var CustomObj = function CustomObj(){};
var custom = new CustomObj();
console.log(custom.constructor);    //CustomObj() (環境によってはfunction())
