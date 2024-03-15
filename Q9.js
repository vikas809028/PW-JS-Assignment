const arr = [1,2,3,4,"Mithun",45,"Ram",78.98]

for(let i =0;i<arr.length;i++){
    if (typeof(arr[i])=="string"){
        console.log(`Found The First String : ${arr[i]}`)
        break;
    }
}