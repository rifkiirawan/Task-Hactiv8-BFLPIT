var a = 'abba'
reverse(a);

function reverse (a){
    var arr= a.split("");
    var len=arr.length;
    var tempArr = [];
    while(len-1<=arr.length&&len-1>=0){
        tempArr.push(arr[len-1]);
        len--;
    }
    var reversed = tempArr.join("");
    console.log(reversed);
    if(a==reversed){
        console.log("PALINDROM!");
    }else console.log("BUKAN PALINDROM!")
}