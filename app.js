var div = document.getElementById("div1");
var input = document.createElement("input");
var par = document.createElement("p")
input.setAttribute("type","text");
input.setAttribute("name","UserName");
input.setAttribute("id","first");
input.setAttribute("size","20px");
var name1 = document.createTextNode("Name:");
par.appendChild(name1);
par.appendChild(input);
div.appendChild(par);
console.log(input);

var input1 = document.createElement("input");
var par1 = document.createElement("p")
input1.setAttribute("type","text");
input1.setAttribute("name","fName");
input1.setAttribute("id","first1");
input1.setAttribute("size","20px");
var name2 = document.createTextNode("fName:");
par1.appendChild(name2);
par1.appendChild(input1);
div.appendChild(par1);
console.log(input1);

var input2 = document.createElement("input");
var par2 = document.createElement("p")
input2.setAttribute("type","text");
input2.setAttribute("name","class");
input2.setAttribute("id","first2");
input2.setAttribute("size","20px");
var name3 = document.createTextNode("Class:");
par2.appendChild(name3);
par2.appendChild(input2);
div.appendChild(par2)
console.log(input2);

var input3 = document.createElement("input");
var par3 = document.createElement("p")
input3.setAttribute("type","text");
input3.setAttribute("name","Batch");
input3.setAttribute("id","first3");
input3.setAttribute("size","20px");
var name4 = document.createTextNode("Batch:");
par3.appendChild(name4);
par3.appendChild(input3);
div.appendChild(par3)
console.log(input3);

var input4 = document.createElement("input");
var par4 = document.createElement("p")
par4.setAttribute("style","background:yelloW;color:black");
input4.setAttribute("type","text");
input4.setAttribute("name","Batch");
input4.setAttribute("id","first5");
input4.setAttribute("size","20px");
var name5 = document.createTextNode("Contact:");
par4.appendChild(name5);
par4.appendChild(input4);
div.appendChild(par4)
console.log(input4);



// // prompt
 var username = prompt("Enter Your Name?");
 var fname = prompt("Enter Your Father Name?");
 var class1 = prompt("Enter Your Class Name?");
 var batch = prompt("Enter Your Batch Name?");
 var contact = prompt("Enter Your Contact Number?");


 var obj = {
 Name:username,
 fname:fname,
 class:class1,
 batch:batch,
 Contact:contact,

 }
 document.getElementById("first").value =obj.Name
 document.getElementById("first1").value =obj.fname
 document.getElementById("first2").value =obj.class
 document.getElementById("first3").value =obj.batch
 document.getElementById("first5").value =obj.Contact 