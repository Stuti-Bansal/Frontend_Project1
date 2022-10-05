var tl = gsap.timeline();
tl
    .from("#lowest",{
    onStart: function(){ 
        $('#lowest').textillate({ 
    in:{
        effect:"fadeInUp",
         callback:function(){
        $('#lowest').textillate('out');
        }
    },
    out:{effect: 'fadeOutUp'}
        })
    }
})
 
.from("#second-lowest",{
    opacity:0,
    delay:1,
    onStart: function(){
        $('#second-lowest').textillate({ 
    in:{
        effect:"fadeInUp",
         callback:function(){
        $('#second-lowest').textillate('out');
        }
    },
    out:{effect: 'fadeOutUp'}   
    })
    }
    
})

.from("#second-top",{
    opacity:0,
    delay:1,
    onStart: function(){
        $('#second-top').textillate({ 
    in:{
        effect:"fadeInUp",
         callback:function(){
        $('#second-top').textillate('out');
        }
    },
    out:{effect: 'fadeOutUp'}   
    })
    }
    
})

.from("#top",{
    opacity:0,
    delay:1,
    onStart: function(){
        $('#top').textillate({ 
    in:{
        effect:"fadeInUp",
    },   
    })
    }
    
})
.to('#top-screen',{
    top:"-100%",
    delay:1,
    duration:1.2,
    ease:"Power4.easeOut"

})

.from(["#head1","#head2","#head3","#head4"],{
    opacity:0,
    y:20,
})

.from("#nav",{
    opacity:0,
    y:20,
})


.from("#image-div",{
    opacity:0,
    scale:1.3,
    duration:1,
   })

.from("#head5",{
    scale:0.1,
    opacity:0,
    duration:1,
})


.from("#arrow",{
    scale:0.1,
    opacity:0,
    duration:1,
})
  
  .to("#arrow",{
    y:20,
    yoyo:"true",
    repeat:"-1"
})


  