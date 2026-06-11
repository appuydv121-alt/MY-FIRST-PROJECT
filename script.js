const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
function pageTransition(){
    var tl = gsap.timeline();
    tl.from('#nav' , {
        y:"-10",
        opacity: 0,
        duration: 1,
        ease:Expo.easeInOut
    })
    .to('.boundingElement' , {
        y:0,
        ease:Expo.easeInOut,
        duration: 2,
        stagger:0.2,
        delay: -1
    })
    .from('#herofooter' , {
            y: "-10",
            opacity: 0,
            duration: 1.5,
            ease: Expo.easeInOut,
            delay: -1
        });
}
//when mouse moves the circle should skew by some amount and when mouse stops it should come back to normal
var timeoutId;
function skewMouseFollower(){

        var xscale=1;
        var yscale=1;
        var xprev=0;
        var yprev=0;
    window.addEventListener('mousemove', function(dets){
        clearTimeout(timeoutId);
        var xdiff=dets.clientX-xprev;
        var ydiff=dets.clientY-yprev;
       xscale=gsap.utils.clamp(.7,1.3,xdiff);
       yscale=gsap.utils.clamp(.7,1.3,ydiff);
       circleMouseFollower(xscale,yscale);
       timeoutId = setTimeout(() => {
            circleMouseFollower(1, 1);
        }, 100);
        xprev=dets.clientX;
        yprev=dets.clientY;
    })
}
function circleMouseFollower(xscale,yscale){
    window.addEventListener('mousemove', function(dets){
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}
pageTransition();
skewMouseFollower();
