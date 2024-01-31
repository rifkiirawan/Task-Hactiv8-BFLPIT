var a = 6
console.log(cetakSegitiga(a))
function cetakSegitiga(a){
    for (var i=1;i<=a;i++){
        let space = " ";
        let symbol = "*";
        console.log (space.repeat(a-i)+symbol.repeat(i*2-1));
    }
}