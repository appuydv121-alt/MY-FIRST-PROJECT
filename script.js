const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener('mousemove', function(dets){
        // console.log(dets.clientX, dets.clientY);
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

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
circleMouseFollower();
pageTransition();
