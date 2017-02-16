function sidebarToggle(e, abc){
    var list;
    if (e.className == "sidebar--list__hulpheading"){
        list = document.getElementById("hulp");
        if(list.style.display == "none"){
            list.style.display = "block";
        } else{
            list.style.display = "none";
        }
    } else if (e.className == "sidebar--list__persoonlijkheading"){
        list = document.getElementById("persoonlijk");
        if(list.style.display == "none"){
            list.style.display = "block";
        } else{
            list.style.display = "none";
        }
    } else if (e.className == "sidebar--list__crimesheading") {
        list = document.getElementById("misdaden");
        if (list.style.display == "none") {
            list.style.display = "block";
        } else {
            list.style.display = "none";
        }
    } else if (e.className == "sidebar--list__spelheading") {
        list = document.getElementById("spel");
        if (list.style.display == "none") {
            list.style.display = "block";
        } else {
            list.style.display = "none";
        }
    } else if (e.className == "sidebar--list__familieheading") {
        list = document.getElementById("familie");
        if (list.style.display == "none") {
            list.style.display = "block";
        } else {
            list.style.display = "none";
        }
    } else if (e.className == "sidebar--list__casinoheading") {
        list = document.getElementById("casino");
        if (list.style.display == "none") {
            list.style.display = "block";
        } else {
            list.style.display = "none";
        }
    } else if (e.className == "sidebar--list__communicatieheading") {
        list = document.getElementById("berichten");
        if (list.style.display == "none") {
            list.style.display = "block";
        } else {
            list.style.display = "none";
        }
    }
}