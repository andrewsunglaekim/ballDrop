$(document).ready(function(){
  $(document).click(function(evt){
    console.log(evt.clientX, evt.clientY);
    console.log(evt.pageX, evt.pageY);
    let ball = new Ball(evt.pageX - 25, evt.pageY - 25, 0)
    let ballView = new BallView(ball)
    ballView.render()
    // let el = $("<div class='ballDrop'></div>")
    // $("body").append(el)
    // createCenter(evt)
  })
})
//
// function createCenter(evt){
//   var el = $("<div class='center ballDrop'></div>")
//   el.css({
//     position: "absolute",
//     top: evt.pageY - 25 ,
//     left: evt.pageX -25
//   })
//   var top = el.css("top")
//   console.log(top);
//   $("body").append(el)
//   var time = 0
//   setInterval(function(){
//     var timeSquared = Math.pow(time, 2)
//     var distance = 1/2 * 9.8 * timeSquared
//     console.log(timeSquared);
//     time++
//     el.css("top", (parseInt(top) + distance/50) + "px")
//   }, 20)
//
// }
//
//  // = vo • t + 0.5 • a • t2
//  // distance = velocity * time  + 1/2 * acceleration * time squared
