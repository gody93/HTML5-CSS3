
var showText = function (target, message, index, interval) {    
  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}
    
// $(function () { 
 
//   //showText("#msg", "Hello, World!", 0, 100);    
 
// }); 
// // $("#pesho").on('click', function () {
// // 	console.log("clicked");
// // 	showText("#msg", "Hello, World!", 0, 100);
// // })
// function showTest(msg) {
// 	console.log(msg)
// }