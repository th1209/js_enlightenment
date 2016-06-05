// Boolean()が持つプロパティとメソッド
// プロパティ
//     ・prototype
// インスタンスプロパティ
//     ・constructor
// インスタンスメソッド
//     ・toString(radix):
//     ・valueOf():


//------------------------------------------------


//Booleanコンストラクタは、絶対newして使っちゃダメ
//(他のプリミティブ型含め、リテラル記法使うのが一番)

var falseObj = new Boolean(false);
console.log(falseObj);  //false{ }
if(falseObj){           //trueで判定されますwww
    console.log('falseObj is true!');
}

var falseObj = Boolean(false)//リテラル記法使うの一番だが、このようにする方法も
console.log(falseObj);  //false
if(falseObj){           //当然ifブロックの中は通らない
    console.log('falseObj is true!');
}


//------------------------------------------------


//以下の値は全てfalse。jsでは、それ以外の値はtrue

console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(false));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));




