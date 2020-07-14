let list=[2,4,3,2,6,7,34,87,98,45,76,346,6343,333,088,343,335];
console.log("All Odd numbers from the list :")
list.forEach(element => {
    if(element%2!==0){
        console.log(element);
    }
});