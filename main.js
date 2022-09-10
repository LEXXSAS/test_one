let changeHeader = document.getElementById("demo");
changeHeader.addEventListener('click', function() {
//    changeHeader.innerHTML = "before";
      if (changeHeader.innerHTML === "Тёмная тема") {
    changeHeader.innerHTML = "Светлая тема";
  } else {
    changeHeader.innerHTML = "Тёмная тема";
  }
});
let page = document.querySelector('.page');
changeHeader.addEventListener('click', function() {
    page.classList.toggle('light');
});

let upElement = document.getElementById("upClick");
upElement.addEventListener('click', () => {
//    window.scrollTo(0, 0);
    window.scrollTo({
    top: 0,
    behavior: "smooth"
});
});
//let upCl = document.querySelector(".upClick");

//window.addEventListener('scroll', scrollFunction);
//function scrollFunction() {
//    if (window.pageYOffset > 300) {
//        upElement.style.display = "flex";
//    }
//    else {
//        upElement.style.display = "none";
//    }
//}

window.addEventListener('scroll', scrollFunction);
function scrollFunction() {
    if (window.pageYOffset > 200) {
        upElement.style.display = "flex";
    }
    else {
        upElement.style.display = "none";
    }
}

let expDel = document.getElementById("exp");
expDel.addEventListener('click', function() {
  if (expDel.style.display === "none") {
      expDel.style.display = "block";
  }
    else {
        expDel.style.display = "none";
    }
});


let openMenu = document.querySelector('.spanOne');
openMenu.addEventListener('click', openNav);



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    body.classList.toggle('active');
}

let body = document.querySelector('.page');
openMenu.addEventListener('click', bodyActive);
function bodyActive() {
    body.classList.toggle('active');
}

