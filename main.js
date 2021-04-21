var canvas=new fabric.Canvas("mycanvas");
block_image_width=30;
block_image_height=30;

hero_x=10;
hero_y=10;
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(img1){
hero_object=img1;
hero_object.scaleToWidth(150);
hero_object.scaleToHeight(140);
hero_object.set({
    top:hero_y,
    left:hero_x
})
canvas.add(player_object)
    });}
  
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(img2){
block_image_object=img2;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
    top:hero_y,
    left:hero_x
})
    
canvas.add(block_image_object)
});
}

window.addEventListener('keydown',my_keydown)
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey==true && keypressed=='80'){
        console.log("shift+p has been pressed");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if (e.shiftKey==true && keypressed=='77'){
        console.log("shift+m has been pressed");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (keypressed=='37'){up();
    console.log("up arrow is being pressed") 
    }
    if (keypressed=='40'){down();
        console.log("down arrow is being pressed") 
        }
        if (keypressed=='38'){left();
            console.log("left arrow is being pressed") 
            }
            if (keypressed=='39'){right();
                console.log("right arrow is being pressed") 
                }
    if (keypressed=='70'){
        new_image('hulk_face.png');
        console.log("f key is pressed");
    }
    if (keypressed=='66'){
        new_image('ironman_body.png');
        console.log("b key is pressed");
    }
    if (keypressed=='76'){
        new_image('spiderman_legs.png');
        console.log("l key is being pressed");
    }
    if (keypressed=='82'){
        new_image('thor_right_hand.png');
        console.log("r key is being pressed");
      
    }
    if (keypressed=='72'){
        new_image ('captian_america_left_hand.png');
        console.log("h key is pressed");
     
    }
}
function up(){
    if(hero_y>=0){
       hero_y=hero_y-block_image_height;
        console.log("block image height= "+ block_image_height);
        console.log("when up arrow is being pressed,x= "+hero_x+" y= "+hero_y);
        canvas.remove(player_object);
         player_update();
    }
}
function down(){  
    if(hero_y<=500){
   hero_y=hero_y+block_image_height;
    console.log("block image height= "+ block_image_height);
    console.log("when down arrow is being pressed,x= "+hero_x+" y= "+hero_y);
    canvas.remove(player_object);
     player_update();
}}
function left(){
    if(hero_x>=0){
        hero_x=hero_x-block_image_width;
        console.log("block image width= "+ block_image_width);
        console.log("when left arrow is being pressed,x= "+hero_x+" y= "+hero_y);
        canvas.remove(player_object);
         player_update();
    }}
function right(){
    if(hero_x<=900){
        hero_x=hero_x+block_image_width;
        console.log("block image_width= "+ block_image_width);
        console.log("when right arrow is being pressed,x= "+hero_x+" y= "+hero_y);
        canvas.remove(player_object);
         player_update();
    }}
