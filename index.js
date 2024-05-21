emp_data =[{

    name : "riyan",
    age : "17",
    sal : 3,
    isActive : true,
},

{name : "riyan",
    age : "17",
    sal : 3,
    isActive : true
} ,


]
// console.log(emp_data[1].age);
// console.log(emp_data);



emp_data.forEach(function(data , index){
    console.log(index , data)
})