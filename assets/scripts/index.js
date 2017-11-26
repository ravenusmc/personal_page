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

response_parsed = UserAction()

console.log(response_parsed.badges)







// window.onload = function(){
//   getImage();
// }

// document.getElementById("dailyImage").setAttribute("src", image.url);