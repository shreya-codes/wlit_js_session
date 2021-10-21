 //conversion of fahrenheit to celcius
 convert =  (fahren)=>{
    let c = (5*(fahren-32))/9
    return c
}
let celcius= convert(41);
console.log(celcius);

//shopping cart
var total=0;
var cart ={
     items :[
    {name :"chips" , price :70},
    {name :"chocolate" , price :111},
    {name :"icecream" , price :70}
],
totalPrice : function(){
    this.items.forEach(item => {
    
        total=total + item.price;
        
    })
    console.log(total)

}};

cart.totalPrice();


//make a todo list that takes input from thee user and append the input as an object to an array

var list=[];

function promptFunction(){
var titleInput=prompt("what is your tasks for today ?");
var descriptionInput=prompt("description")

list.push({
    title:titleInput,
    description:descriptionInput
})
console.log(list)
}
promptFunction();