
//1,compare two JSON have the same properties without order

var obj1 = {"name":"person 1","age":"5"};
var obj2 = {"age":"5","name":"person 1"};

var flag=true;
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal : "+flag);
//----------------------------------------------------------------------------------------------------

// 2, print all country flag
let xhp = new XMLHttpRequest();
xhp.open("get","https://restcountries.com/v3.1/all");
xhp.send();
xhp.onload = function(){
    let data = JSON.parse(xhp.response)
    for(let i=0;i<data.length;i++){
        console.log(`
        Name : ${data[i].name.common}
        Flag : ${(data[i].flags.png)}
        `);
    }
};
//--------------------------------------------------------------------------

//3.print all country name,region,sub-region,populatoion
let a = new XMLHttpRequest();
a.open("get","https://restcountries.com/v3.1/all");
a.send();
a.onload = function(){
    let datas = JSON.parse(a.response)
    for(let i=0;i<datas.length;i++){
        console.log(`
        Name : ${datas[i].name.common}
        Region : ${(datas[i].region)}
        SubRegion : ${(datas[i].subregion)}
        Population : ${(datas[i].population)}
        `);
    }
};
//-------------------------------------------------------------------------------