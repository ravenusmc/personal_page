//This file will handle all of the JS code for my personal page.

//This function will get the data from the API and then return it. 
function UserAction() {
    //Setting up to get the API request
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://teamtreehouse.com/michaelcuddy.json", false);
    xhr.send();
    //Setting up a variable to hold the response
    let response = xhr.response
    //parsing the response 
    let response_parsed = JSON.parse(response);
    //Returning parsed response 
    return response_parsed
}

function displayInfo(response_parsed){
  console.log(response_parsed.badges);
  response_length = response_parsed.badges.length;
  for (let i = 0; i < response_length; i++) {
    //Getting the parent element that will be a container. 
    var parent = document.getElementById('badge_container');
    // create a new h3 element 
    var newDiv = document.createElement("h3");
    // creating a new img element 
    var image = document.createElement("img");
    //adding content to the h3 element
    var newContent = document.createTextNode(response_parsed.badges[i].name); 
    // add the text node to the newly created h3 element
    newDiv.appendChild(newContent);  
    //getting the id of where to insert the new h3 elements
    var currentDiv = document.getElementById("badge_name");
    //attaching the elements to the page
    parent.insertBefore(newDiv, currentDiv);
  }
  
}

// console.log(response_parsed.badges[i].icon_url);
// document.getElementById("dailyImage").setAttribute("src", image.url);

function main() {
  response_parsed = UserAction();
  // console.log(response_parsed.badges)
  displayInfo(response_parsed);
}





window.onload = function(){
  main();
}

