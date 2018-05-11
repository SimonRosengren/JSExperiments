var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, debitis dicta esse iste odit libero voluptates sed velit harum cum, laborum corrupti quidem repellendus ratione. Tempore eos, nobis quod cumque officiis quia assumenda quasi voluptatum nihil porro accusantium velit itaque, quis saepe est minus molestiae iure dignissimos, architecto cum praesentium possimus quas voluptatibus. Veniam sint soluta consequatur unde vero vel fugit natus excepturi corporis ex? Qui asperiores, fugit dolorem temporibus officiis odit sed incidunt cum numquam quos est minima iure eum atque, praesentium repellendus dolores quidem doloremque, amet recusandae in aliquam ratione. Ut dolorum consequatur a debitis, aliquam maiores dolorem?";
var words = text.split(" ")
var currentWord = 0;


function presentText() {
    $('#text-holder').text(words[currentWord])
}