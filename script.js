const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
function pageTransition() {
    var tl = gsap.timeline();
    tl.from('#nav', {
        y: "-10",
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })
        .to('.boundingElement', {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            stagger: 0.2,
            delay: -1
        })
        .from('#herofooter', {
            y: "-10",
            opacity: 0,
            duration: 1.5,
            ease: Expo.easeInOut,
            delay: -1
        });
}
//when mouse moves the circle should skew by some amount and when mouse stops it should come back to normal
var timeoutId;
function skewMouseFollower() {

    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener('mousemove', function (dets) {
        clearTimeout(timeoutId);
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;
        xscale = gsap.utils.clamp(.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(.8, 1.2, ydiff);
        circleMouseFollower(xscale, yscale);
        timeoutId = setTimeout(() => {
            circleMouseFollower(1, 1);
        }, 100);
        xprev = dets.clientX;
        yprev = dets.clientY;
    })
}
function circleMouseFollower(xscale, yscale) {
    window.addEventListener('mousemove', function (dets) {
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}
pageTransition();
skewMouseFollower();

document.querySelectorAll('.elem')
    .forEach(function (elem) {
        var rot = 0;
        var diffRot = 0 ;
        elem.addEventListener('mousemove', function (dets) {
            var rect = elem.getBoundingClientRect();
            diffRot = dets.clientX - rot;
            rot = dets.clientX;
            
            gsap.to(elem.querySelector('img'), {
                opacity: 1,
                display: "block",
                left: dets.clientX - rect.left,
                top: dets.clientY - rect.top,
                ease: "power1.out",
                rotate:gsap.utils.clamp(-20,20,diffRot)
            });
        });
    })
document.querySelectorAll('.elem')
    .forEach(function (elem){
    elem.addEventListener('mouseleave', function () {
        gsap.to(elem.querySelector('img'), {
            opacity: 0,
            duration:0.5,
            display: "none"
        });
    });
})