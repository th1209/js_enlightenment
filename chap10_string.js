// String()が持つプロパティとメソッド
// プロパティ
//     ・prototype
// メソッド
//     ・fromCharCode
// インスタンスプロパティ
//     ・constructor
//     ・length
// インスタンスメソッド
//     ・charAt(pos):
//     ・charCodeAt(pos):対象の文字コードを返す
//     ・concat([string [, string2 [,...]]]):
//     ・indexOf(searchString, position):
//     ・lastIndexOf(searchString, position):
//     ・localeCompare(that):引数で渡した文字列とどちらが若いか比較
//     ・match(regexp):
//     ・replace(searchValue, replaceValue):
//     ・search(regexp):
//     ・slice(start, end):
//     ・split(separator, limit):
//     ・substr(start, length):
//     ・substring(start, end)
//     ・toLowerCase():
//     ・toLocaleLowerCase():
//     ・toUpperCase():
//     ・toLocaleUpperCase():
//     ・toString():Stringオブジェクトだった場合、プリミティブ値に変換して返す
//     ・valueOf():toStringと同上


//------------------------------------------------

//Stringコンストラクタの挙動に注意(リテラル記法を使うのが無難)

var myStr = new String('hoge');
console.log(myStr);             //hoge {0="h", 1="o", 2="g", 3="e"}
console.log(myStr.toString());  //hoge
