var t1 = gsap.timeline(); 
t1.to("#loader" ,{
    top : "-100vh" ,
    delay : 4 ,
    duration : 2

})

t1.from("#navbar" , {
    y : -50 ,
    duartion : 0.5 , 
    delay : 1, 
    opacity : 0
})
t1.from("#main h1" ,{
    opacity : 0 ,
    y : 1000 ,
    duration : 1 
})

t1.from("#main h1" ,{
    delay : 0.5 ,
    fontWeight : "500" ,
    color : "gray" ,
    stagger : 0.8,   
    duration : 2 ,
    scrollTrigger : {
        trigger : "#main h1", 
        scroller : "body" ,
         start : "top 200%" ,       
    }
})


t1.from("#right-img , #bottom-img" , {
    opacity : 0 ,
    rotate : 360 ,
    duration : 0.8 ,
})
t1.from("#top-img" , {
    opacity : 0 ,
    x : -1000 ,
    duration : 0.8
})
t1.from("#left-img" , {
    opacity : 0, 
    x : 1000 ,
    duration : 0.8
})
gsap.to("h5" , {
    opacity : 0 ,
    duration : 0.2,
    scrollTrigger : {
        trigger : "h5" ,
        scroller : "body" ,
        scrub : true ,
    }
})
gsap.from ("#page2part1 img" , {
    opacity : 0 ,
    scale : 0 ,
    duration : 2 ,
    scrollTrigger : {
        trigger : "#page2part1 img" ,
        scroller : "body" ,
        scrub : 3
    }
})

 

