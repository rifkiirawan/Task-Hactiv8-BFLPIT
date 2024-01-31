var array = [2,3];
multiply(array)

function multiply(arr){
    if(arr.length >= 3){
        var uniqarray = arr.filter((value,index,self) =>{
            return self.indexOf(value) === index;
        });
        console.log(uniqarray);
        uniqarray.sort(function(a, b){return b - a});
        console.log("sorted "+uniqarray)
        var res=0;
        res=uniqarray[0]*uniqarray[1]*uniqarray[2];
        console.log(res);
    }
    else console.log("ERROR");
}