//ブラケット記法の利点
//・以下のようなプロパティへのアクセスの仕方を、「ブラケット記法」と呼ぶ
//・ドット記法と比較した、ブラケット記法の利点は以下
//     ・数値から始まるプロパティにアクセスできる
//     ・配列・連想配列としてオブジェクトを使っていることが読み手に伝わる
//     ・jsの予約語と一致するプロパティにアクセスできる(これはメリットと言えないような...)

var myObject = {
    '123': 'zero',
    'class': 'foo'
};

console.log(myObject['123'], myObject['class']);


//------------------------------------------------


//delete演算子
//・オブジェクトからプロパティを抹殺する唯一の方法
//・以下注意
//    ・プロトタイプチェーンで継承したプロパティは削除できない
//    ・varで宣言した変数(グローバル変数という)、function文で宣言した関数は削除できない
//    ・配列の要素を削除することができるが、lengthは保たれ、指定した要素の値はundefinedになる -> 別途歯抜けを無くす方法が必要

var obj = {prop: 123};
delete obj.prop;
console.log('prop' in obj); //false


//------------------------------------------------


//hasOwnProperty()メソッドと、in演算子
// ・hasOwnProperty()メソッド: 対象のインスタンスのプロパティのみ確認(プロトタイプチェーンを辿らない)
// ・in演算子: プロトタイプチェーン含め、対象のインスタンスが当該プロパティを持っているか確認

var obj = {prop: 'foo'};

console.log(obj.hasOwnProperty('prop'));        //true
console.log(obj.hasOwnProperty('toString'));    //false

console.log('prop' in obj);                     //true
console.log('toString' in obj);                 //true


//------------------------------------------------


//for-inループ
// ・in演算子と挙動が似ていて、プロトタイプチェーンを辿って全プロパティを列挙する
// ・ただし、DontEnum内部属性を持つプロパティは列挙されない(この性質は、propetyIsEnumerableメソッドで確認可能)

var obj = {prop: 'foo'};

for(var key in obj){
    console.log(key);
}

for(var key in obj){
    if(obj.hasOwnProperty(key)){
        console.log(key);
    }
}
