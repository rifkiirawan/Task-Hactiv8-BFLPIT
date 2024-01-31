var a = 6
console.log(cetakSegitiga(a))
function cetakSegitiga(a){
    for (var i=1-1;i<=a;i++){
        var space = " ";
        var symbol ="";

        for(var x=i;x>0;x--){
            if(x%2==0){
                symbol += "#";
            }else symbol += "*"
        }
        console.log (space.repeat(a-i)+symbol);
    }
}
 