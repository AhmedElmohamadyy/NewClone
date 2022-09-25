


let notification = document.getElementById("notifications"),
    mymenus = document.querySelectorAll(".menu-iteam"),
    popup = document.querySelector(".notifications-popup"),
    notifiCount = document.querySelector(".notifications-count-notifocation");
  


    let RemoveActive = () => {
        mymenus.forEach(iteam => {
            iteam.classList.remove('active')
        })
    }

    mymenus.forEach(iteam => {
        iteam.addEventListener("click", () => {
            RemoveActive();
            iteam.classList.add('active');
            
            if (notification.classList.contains("active")) {
                
                popup.style.display = "block";
                notifiCount.style.display = "none";
            }else {
                popup.style.display = "none";
            }
        })
    });

let emptyheart = document.querySelectorAll(".empty-heart"),
    fullheart = document.querySelectorAll(".full-heart"),
    numberr = document.querySelectorAll(".liked-by .number"),
    number1 = document.querySelector(".liked-by .number1"),
    number2 = document.querySelector(".liked-by .number2"),
    number3 = document.querySelector(".liked-by .number3"),
    myheartsbtn = document.querySelectorAll(".hearts"),
    random1 = Math.floor(Math.random() * 1325) * 16,
    random2 = Math.floor(Math.random() * 698) * 7,
    random3 = Math.floor(Math.random() * 1000) * 10;



    number1.innerHTML = `${random1}`;
    number2.innerHTML = `${random2}`;
    number3.innerHTML = `${random3}`;
    
    myheartsbtn.forEach((butt) => {
        
        butt.addEventListener("click", (e) => {
            
            butt.classList.toggle("active")
            
            if (butt.classList.contains("active")) {
                number1.innerHTML = `${random1}`;
                number2.innerHTML = `${random2}`;
                number3.innerHTML = `${random3}`;
            } else {
            number1.innerHTML = `${random1 + 1}`;
            number2.innerHTML = `${random2 + 1}`;
            number3.innerHTML = `${random3 + 1}`;
            }
            
        })
        
    })




    //// change font size
let spans = document.querySelectorAll(".choose-size span");
let progress = document.getElementById('progress');
let root = document.querySelector(`:root`)

spans.forEach( (span, index) => {
    span.addEventListener('click', () => highlightspan(index))

})

function highlightspan(index) {
    spans.forEach((span, indx) => {
        if (indx <= index) {
            span.classList.add('active');
        } else {
            span.classList.remove('active');

        }
    })
    let actives = document.querySelectorAll(".choose-size .active")
    progress.style.width = (actives.length - 1) / (spans.length - 1) * 100 +`%`
}

spans.forEach(size => {
    let fontSize;
    size.addEventListener('click', () =>{
        if (size.classList.contains('font-size1')) {
            fontSize = `10px`;
            root.style.setProperty(`---sticky-top-left`, `5.4rem`);
            root.style.setProperty(`---sticky-top-right`, `5.4rem`);
        } else if (size.classList.contains('font-size2')) {
            fontSize = `13px`;
            root.style.setProperty(`---sticky-top-left`, `5.4rem`);
            root.style.setProperty(`---sticky-top-right`, `-7rem`);
        } else if (size.classList.contains('font-size3')) {
            fontSize = `16px`
            root.style.setProperty(`---sticky-top-left`, `-2rem`);
            root.style.setProperty(`---sticky-top-right`, `-17rem`);
        } else if (size.classList.contains('font-size4')) {
            fontSize = `19px`
            root.style.setProperty(`---sticky-top-left`, `-5rem`);
            root.style.setProperty(`---sticky-top-right`, `-25rem`);
        } else if (size.classList.contains('font-size5')) {
            fontSize = `22px`
            root.style.setProperty(`---sticky-top-left`, `-12rem`);
            root.style.setProperty(`---sticky-top-right`, `-35rem`);
        }
        document.querySelector(`html`).style.fontSize = fontSize;
    })

  

})

/// color change


let colors = document.querySelectorAll(".choose-color span");
colors.forEach(color => {
    color.addEventListener(`click`, () => {
        deleteclasses()
        color.classList.add('active');
        color.style.transform =  `translateY(-20px)`;

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        root.style.setProperty(`--primary-color-hue`, primaryHue);

    })
})
function deleteclasses() {
    colors.forEach(color => {
        color.classList.remove(`active`);
        color.style.transform =  `translateY(0px)`
    })
}





let messagenotification = document.getElementById("messages-notifications"),
    messages = document.querySelector(".messages"),
    notificationcountmess = document.querySelector('.notifications-count-messages')

    messagenotification.addEventListener('click', () => {
        notificationcountmess.style.display = "none";
        messages.classList.add('active');
        setInterval(() => {
        messages.classList.remove('active');
        }, 4000);
        
    })





    let searcho = () => {
        let searchbox = document.getElementById(`message-search`).value.toUpperCase(),
            msgs = document.getElementById('messages'),
            allmsgs = document.querySelectorAll('.message'),
            h5 = msgs.getElementsByTagName('h5');
    for (let i = 0; i < h5.length; i++) {
        let match = allmsgs[i].getElementsByTagName('h5')[0];

        if (match) {
            let textvalue = match.textContent  || match.innerHTML;
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                allmsgs[i].style.display = "flex";
            }else {
                allmsgs[i].style.display = "none";
            }
        }
    }
    }



let right = document.querySelector('.right');


right.addEventListener('mouseover', () => {
    if (!right.classList.contains('active')) {
        right.classList.add('active');
    } else {
        mouseleave()
    }
})
function mouseleave() {
    right.addEventListener('mouseout', () =>{
        right.classList.remove('active');
    })
}

let bookmarko = document.querySelectorAll('.bookmark');

let added  = document.createTextNode("Added to book");
let smalltext = document.querySelector('.small-text');


bookmarko.forEach(marko => {
    marko.addEventListener('click', () => {
        marko.classList.toggle('active');


        if (marko.classList.contains('active')) {
            addbookmark()
        } else if (!marko.classList.contains('active')) {
            RemoveBookmark()
        }
    })

})
function addbookmark() {
    gsap.to(`.small-text1`, {opacity: 0, duration: 2, y: -10, Infinity});
    document.getElementById("changemepls1").innerHTML = "added to bookmark";
    //two
    gsap.to(`.small-text2`, {opacity: 0, duration: 2, y: -10, Infinity});
    document.getElementById("changemepls2").innerHTML = "added to bookmark";
    ///three
    gsap.to(`.small-text3`, {opacity: 0, duration: 2, y: -10, Infinity});
    document.getElementById("changemepls3").innerHTML = "added to bookmark";
}
function RemoveBookmark() {
    gsap.to(`.small-text1`, {opacity: 0, duration: 2, y: 20});
    document.getElementById("changemepls1").innerHTML = "Removed from bookmark";
    //two
    gsap.to(`.small-text2`, {opacity: 0, duration: 2, y: 20});
    document.getElementById("changemepls2").innerHTML = "Removed from bookmark";
    ///three
    gsap.to(`.small-text3`, {opacity: 0, duration: 2, y: 20});
    document.getElementById("changemepls3").innerHTML = "Removed from bookmark";
}


gsap.from(`nav`, {duration: 1, y: `-100%`, ease: `bounce`})
gsap.from(`nav .container`, {duration: 1, opacity: 0, delay: 1, stagger: .5});
gsap.from(`.right`, {duration: 1.8, x: `-100vw`, delay: 1, ease: `power2.in`});
gsap.from(`.left`, {duration: 1.8, x: `100vw`, delay: 1, ease: `power2.in`});
gsap.from(`.middle`, {opacity: 0, delay: 3.3});

////theme

let theme = document.getElementById('theme'),
    themecustomize = document.querySelector(".customize-theme"),
    Exittheme = document.getElementById("Exit-theme ");


let openWindow = () => {
    themecustomize.style.display = 'grid';
}

    theme.addEventListener('click', openWindow);

let closetheme = (e) => {
    if (e.target.classList.contains('exito') || e.target.classList.contains('customize-theme')) {
    themecustomize.style.display = 'none';

    }
}
themecustomize.addEventListener('click', closetheme)



//// back change 

let back = document.querySelectorAll('.background .bege');
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
let blackColorLightness;


let BG1 = document.querySelector(".bg-1");
let BG2 = document.querySelector(".bg-2");
let BG3 = document.querySelector(".bg-3");

let changeBG = () =>{
    root.style.setProperty(`--dark-color-lightness`, darkColorLightness);
    root.style.setProperty(`--light-color-lightness`, lightColorLightness);
    root.style.setProperty(`--white-color-lightness`, whiteColorLightness);
    root.style.setProperty(`--black-color-lightness`, blackColorLightness);
}

BG1.addEventListener('click', () => {
    darkColorLightness = `20%`;
    whiteColorLightness = `100%`;
    lightColorLightness  = `95%`;
    blackColorLightness = `5%`;
    changeBG();
})

BG2.addEventListener('click', () => {
    darkColorLightness = `20%`;
    whiteColorLightness = `20%`;
    lightColorLightness  = `15%`;
    blackColorLightness = `80%`
    changeBG();
})

BG3.addEventListener('click', () => {
    darkColorLightness = `95%`;
    whiteColorLightness = `8%`;
    lightColorLightness  = `4%`;
    blackColorLightness = `80%`

    changeBG();
})


back.forEach(bg => {
    bg.addEventListener(`click`, () => {
        removeme(bg)
        bg.classList.add('active');
    })
})

function removeme() {
    back.forEach(bako => {
        bako.classList.remove('active')
    })
}
