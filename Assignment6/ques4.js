//What are callback functions and why are they named so? Give one example.

/*A callback function is a function that is passed as an argument to another function,
 to be “called back” at a later time. A function that accepts other functions as arguments 
 is called a higher-order function, which contains the logic for when the callback function gets executed 4*/

 //eg 
 function serverRequest(query, callback){
    setTimeout(function(){
      var response = query + "full!";
      callback(response);
    },5000);
  }
  
  function getResults(results){
    console.log("Response from the server: " + results);
  }
  
  serverRequest("The glass is half ", getResults);
  