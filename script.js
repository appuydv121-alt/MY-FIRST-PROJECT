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
circleMouseFollower();