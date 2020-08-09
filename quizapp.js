function submitform(e){
    e.preventDefault();
    let name =document.forms["welcome_form"]["name"].value;
    //store player name
    sessionStorage.setItem("name", name);

    location.href = "index.html";
    
    
}