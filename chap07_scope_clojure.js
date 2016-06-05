//jsが持つ3つのスコープ

//1.グローバルスコープ
var foo = 0;
console.log(foo);   //0

//2.ローカルスコープ(関数スコープ)
var myFunction = function(){
    var foo = 1;
    console.log(foo);   //1

    var myNestedFunction = function(){
        var foo = 2;
        console.log(foo);   //2
    }();

    var myNestedFunctionTwo = function(){
        console.log(foo);   //1
    }();
}();

//3.evalスコープ(まず使わないだろう)
eval('var foo = 3; console.log(foo)');  //3


//------------------------------------------------


//jsでは、{}はブロックスコープを作らない

var foo = 1;

if(true){
    var foo = 2;            //この時点でグローバル変数を上書いちゃう
    for(var i = 3; i <= 5; i++){
        foo = i;
        console.log(foo);   //3,4,5
    }
}
console.log(foo);           //5(グローバル変数を破壊)


//------------------------------------------------


//スコープチェーンは、関数の定義時に作られる(not 関数の実行時)
//(この挙動を、「静的スコープ」と呼ぶ)

var myClojure = function(){
    var foo = 'foo';
    return function(){
        console.log(foo);
    }
};

var clojure = myClojure();
clojure();


//------------------------------------------------


//クロージャ サンプルその1

var countUpFromZero = function(){
    var counter = 0;
    return function(){
        return ++counter;
    }
}();//即時実行しているので、countUpFromZeroに代入されるのは、関数内の無名関数

console.log(countUpFromZero()); //1
console.log(countUpFromZero()); //2
console.log(countUpFromZero()); //3


//------------------------------------------------


//クロージャ サンプルその2 〜無名関数が取る引数を使うパターン〜

//以下は間違った例。
var logElementNumber = function(){
    var funcArray = [];
    var i;
    for(i = 0; i < 3; i++){
        funcArray[i] = function(){ console.log(i); };
    }
}();//即時実行するので、logElementNumberには関数オブジェクトの配列が入る

logElementNumber[0]();  //3
logElementNumber[1]();  //3
logElementNumber[2]();  //3


//以下は正しい例。クロージャで固定した値を返したい場合、無名関数で引数を取るのが無難かな。
var logElementNumber = function(){
    var funcArray = [];
    var i;
    var func = function(n){ console.log(n); };

    for(i = 0; i < 3; i++){
        funcArray[i] = func(i);
    }
}();

logElementNumber[0]();  //0
logElementNumber[1]();  //1
logElementNumber[2]();  //2