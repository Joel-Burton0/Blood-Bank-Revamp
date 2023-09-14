// header scripting
function mouseOver(){
    document.getElementById("hero-list2").style.visibility = "visible";
}
function mouseOut(){
    document.getElementById("hero-list2").style.visibility = "hidden";
}
function linklist1(){
    document.getElementById('link-item1').innerHTML = "Eligibility";
    document.getElementById('link-item2').innerHTML = "The Process";
    document.getElementById('link-item3').innerHTML = "Blood Safety";
    document.getElementById('link-item4').innerHTML = "Blood Types";
}
function linklist2(){
    document.getElementById('link-item1').innerHTML = "Testimonials";
    document.getElementById('link-item2').innerHTML = "News";
    document.getElementById('link-item3').innerHTML = "Photo Gallery";
    document.getElementById('link-item4').innerHTML = "Videos";
}

const div1 = document.getElementById('hero-img-div1');
const div2 = document.getElementById('hero-img-div2');
const div3 = document.getElementById('hero-img-div3');

let index = 0;

function addToClass(){
    div3.classList.add(active)
    
}

// end of header scripting
