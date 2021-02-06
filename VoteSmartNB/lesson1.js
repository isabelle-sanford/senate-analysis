var btn = document.querySelector("button");
var output = document.querySelector("#output");
var api_key = api_key

console.log(api_key);

btn.addEventListener("click",getJoke);
function getJoke(){
    console.log("new joke coming");
    const xhr = new XMLHttpRequest();
    //const url = "https://api.chucknorris.io/jokes/random"
    const url = "http://api.votesmart.org/CandidateBio.getBio?key=a0c685da7ae19f6f0b9994ed3b035cb1&candidateId=9490"
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
            if(xhr.status===200){
                console.log(xhr.responseText);
                const obj = JSON.parse(xhr.responseText);
                output.innerHTML = obj.value + '<br><img src="'+obj.icon_url+'">';
            }else{
                output.innerHTML = "ERROR";
            }
         }
    }
    xhr.open("GET",url);
    xhr.send();   
    
    xhr.addEventListener("progress",callBackfn);
    xhr.addEventListener("load",callBackfn);
    xhr.addEventListener("error",callBackfn);
}

function callBackfn(e){
    console.log(e);
}