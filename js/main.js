var prevScrollpos = 0;
$(document).ready(function () {
    new WOW().init();
});
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 20) {
        document.getElementById("navbar").style.background = "black";
    }
    if (currentScrollPos < 20 && document.getElementById("check").checked == false) {
        document.getElementById("navbar").style.background = "";
    }
    /*
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } 
  else {
    document.getElementById("navbar").style.top = "-85px";
	}
	 prevScrollpos = currentScrollPos */
}

function handleChange(checkbox) {
    var currentScrollPos = window.pageYOffset;
    if (checkbox.checked == true) {
        document.getElementById("navbar").style.background = 'black';
    } else {
        if (currentScrollPos > 20) {
            document.getElementById("navbar").style.background = "black";
        }
        if (currentScrollPos < 20) {
            document.getElementById("navbar").style.background = "";
        }
    }
}
var mq = window.matchMedia("(max-width: 900px)");
if (mq.matches) {
    $('.animated').toggleClass('animated');
    $('.wow').toggleClass('wow');
    $('.fadeInRight').toggleClass('fadeInRight');
    $('.fadeInLeft').toggleClass('fadeInLeft');
    $('.fadeInDown').toggleClass('fadeInDown');
    $('.fadeInUp').toggleClass('fadeInUp');
}

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

var party = SmokeMachine(ctx, [200, 200, 200])
party.start() // start animating
var scrollIcon = $('.bouncy')

scrollIcon.on('click',()=>{
    $("html,body").animate({scrollTop:800},1200)
})

setInterval(() => {
    scrollIcon.addClass('anim')
    setTimeout(()=>{scrollIcon.removeClass('anim')},400)
    
},2000)

setInterval(() => {
    if (scrollY > window.innerHeight){
        var n = .5
        var t = Math.floor(Math.random() * 200) + 100
        x = Math.floor(Math.random() * screen.width)
        y = Math.floor(Math.random() * screen.width)
        if (mq.matches) {
            y = screen.height - Math.floor(Math.random() * 200)
        }
        party.addsmoke(x, y, n, t)
    }
}, mq.matches ? 50 : 20)
setTimeout(function () {

    party.stop() // stop animating

    for (var i = 0; i < 10; i++) {
        party.step(10) // pretend 10 ms pass and rerender
    }

    setTimeout(function () {
        party.start()
    }, 1000)

}, 1000)
