/*
var elemStr = "<li>Hello</li>";
elemStr +="<li>Hello</li>";
elemStr +="<li>Hello</li>";
elemStr +="<li>Hello</li>";
elemStr +="<li>Hello</li>";
elemStr +="<li>Hello</li>";

documet.getElementById("output").innerHTML = elemStr;
---------------------------------------------------
var people = [{name:"Joe", age:24, car:{isCool: true, color:"flames", fast:"VW fast."}},
  {name:"jenny", cat:{name:"garfield", weight:300}}];

// loop thru people array
for (var i = 0; i< people.length; i += 1){

// loop thru 'people' properties at index
  for (var prop in people[i]){

  // check if 'people' obj contain obj. If so loop thru those properties
    if (typeof people[i][prop] === "object") {

    // loop thru obj obj
      for (var propTwo in people[i][prop]) {

            console.log(people[i][prop][propTwo]);
          }
        } else {
          console.log(people[i][prop]);
      }
    }
  console.log("-----------------------");
}
---------------------------------------------------------























*/
