let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function(){
    collapse.forEach(col=>col.classList.toggle("collapse-toggle")
    )
})

// with masonry

new Masonry("#posts .grid",{
    itemSelector :'.grid-item',
    gutter: 20
});

// Sticky Navigation
window.onscroll = function(){myFunction()};

// Get current value
let navbar = document.getElementById("header");

// Get navbar pos
let sticky = navbar.offsetTop;

// Sticky function

function myFunction(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        
    }

}