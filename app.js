//Declaring and defining object ,nested property

var empobj ={
					name:"Ankita",
					age :28,
					salary:300000,
					address :{
								city:"Bangalore",
								state:"Karnataka",
								pincode:560100
							}
				};

//Displaying each object and nested property in console
console.log(empobj.name);
console.log(empobj.age);
console.log(empobj.salary);
console.log(empobj.address.city);
console.log(empobj.address.state);
console.log(empobj.address.pincode);

