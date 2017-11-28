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
  // console.log(response_parsed.badges);
  response_length = response_parsed.badges.length;
  for (let i = 0; i < response_length; i++) {

    //Getting the variable to get the main container that all the divs will sit in
    var main_parent = document.getElementById('badge_main_container');
    //Creating the container, text and image elements.
    var container = document.createElement('div');
    var text = document.createElement('h3');
    var image = document.createElement('img');
    image.setAttribute("src", response_parsed.badges[i].icon_url);
    image.setAttribute('class', 'image_area')
    //Appending the image to the container
    container.appendChild(image);
    //Getting the text information 
    var newContent = document.createTextNode(response_parsed.badges[i].name); 
    //Adding the text information
    text.appendChild(newContent); 
    //Appending the container div to the main div
    main_parent.appendChild(container);
    //Appending the text to the image
    container.appendChild(text);




    //creating div element 
    // var main_parent = document.getElementById('badge_main_container'); //added
    // var container = document.createElement('div'); //Added
    // var gone = document.createElement('badge_container');//added
    // main_parent.insertBefore(container, gone); // added 

    // create a new h3 element 
    // var newDiv = document.createElement("h3");
    // // creating a new img element 
    // var image = document.createElement("img");



///////Works ///
    //Getting the parent element that will be a container. 
    //var parent = document.getElementById('badge_container');

    // // create a new h3 element 
    // var newDiv = document.createElement("h3");
    // // creating a new img element 
    // var image = document.createElement("img");
    

    //image code
    //Setting the src and class attributes for the image.
    // image.setAttribute("src", response_parsed.badges[i].icon_url);
    // image.setAttribute('class', 'image_area')
    // var imageTag = document.getElementById('badge_image');
    // //Inserting the image to the DOM
    // parent.insertBefore(image, imageTag);

    //Code for the badge title
    //adding content to the h3 element
    // var newContent = document.createTextNode(response_parsed.badges[i].name); 
    // // add the text node to the newly created h3 element
    // newDiv.appendChild(newContent);  
    // //getting the id of where to insert the new h3 elements
    // var currentDiv = document.getElementById("badge_name");
    // //attaching the elements to the page
    // parent.insertBefore(newDiv, currentDiv);
  }
  
}

// console.log(response_parsed.badges[i].icon_url);
// document.getElementById("dailyImage").setAttribute("src", image.url);

function main() {
  response_parsed = UserAction();
  displayInfo(response_parsed);
}


window.onload = function(){
  main();
}

