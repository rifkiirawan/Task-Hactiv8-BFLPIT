var umur = [30,32,24,26,19,17,81];
sorting(umur);

function sorting(umur){
    for(var i=0; i<umur.length-1;i++){
        var minIndex = i;
        for(var j=i+1; j<umur.length; j++){
            if(umur[j]<umur[minIndex]) minIndex=j
        }
        var temp=umur[minIndex];
        umur[minIndex]=umur[i];
        umur[i]=temp;
    }
    for(var j=0;j<umur.length;j++){
        console.log(umur[j]);
    }
}