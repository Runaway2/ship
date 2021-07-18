var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b5b10cb1-0883-4b2a-8a5a-dbe18a32e9a8"],"propsByKey":{"b5b10cb1-0883-4b2a-8a5a-dbe18a32e9a8":{"name":"emoji_35_1","sourceUrl":null,"frameSize":{"x":334,"y":400},"frameCount":2,"looping":true,"frameDelay":12,"version":"HxdAWT3Y.EzOv_jxYNZMrZ3rhIR21.Ed","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":668,"y":400},"rootRelativePath":"assets/b5b10cb1-0883-4b2a-8a5a-dbe18a32e9a8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var stuff = createSprite(25,25,50,50)
var player = createSprite(25,25,15,15);
player.shapeColor = "blue";
var bar1 = createSprite(150,50,400,10);
bar1.shapeColor = "purple";
var bot1 = createSprite(100,25,10,10);
bot1.shapeColor = "red";
bot1.velocityY = -9;
var bot2 = createSprite(200,25,10,10);
bot2.shapeColor = "red";
bot2.velocityY = 8;
var bot3 = createSprite(300,25,10,10);
bot3.shapeColor = "red";
bot3.velocityY = -10;
var bar2 = createSprite(250,150,400,10);
bar2.shapeColor = "purple";
var bar3 = createSprite(150,250,400,10);
bar3.shapeColor = "purple";
var bar4 = createSprite(200,350,400,10);
bar4.shapeColor = "purple";
var b = createSprite(250,100,10,10);
b.velocityY = 6;
var b2 = createSprite(150,100,10,10);
b2.velocityY = -6;
var b3 = createSprite(175,200,10,10);
b3.velocityY = -6;
var b4 = createSprite(225,200,10,10);
b4.velocityY = 6;
var death = 0;
var crown = createSprite(25,300,50,50);
var invis = createSprite(100,300,10,90);
invis.shapeColor = "white";
var distruct = createSprite(300,300,5,90);
distruct.shapeColor = "blue";
distruct.velocityX = 2.5;

function draw() {
  createEdgeSprites();
  background("white");
  textSize(30);
  text(death,20,375);
  
  if(keyDown(RIGHT_ARROW)||keyDown("d")){
    player.x = player.x + 6;
  }
  if(keyDown(UP_ARROW)||keyDown("w")){
    player.y = player.y - 6;
  }
  if(keyDown(DOWN_ARROW) || keyDown("s")){
    player.y = player.y + 6;
  }
  if(keyDown(LEFT_ARROW)||keyDown("a")){
    player.x = player.x - 6;
  }
  if(player.isTouching(distruct)){
     player.x = 25;
    player.y = 25;
    death = death + 1;

  }
  
  if (player.isTouching(bot1)|| player.isTouching(bot2)|| player.isTouching(bot3)){
    player.x = 25;
    player.y = 25;
    death = death + 1;

  }
  if (player.isTouching(bar1) || player.isTouching(bar2) || player.isTouching(bar3)
  || player.isTouching(bar4)){
    player.x = 25;
    player.y = 25;
    death = death + 1;

  } 
  if(player.isTouching(b)||player.isTouching(b2)||player.isTouching(b3)
  ||player.isTouching(b4)){
    player.x = 25;
    player.y = 25;
    death = death + 1;

  }
  
  if(player.isTouching(crown)){
    text("YOU WIN",150,200);
    stuff.setAnimation("emoji_35_1");
  }
  bot1.bounceOff(edges);
  bot2.bounceOff(edges);
  bot3.bounceOff(edges);
  player.bounceOff(edges);
  b.bounceOff(bar1);
  b.bounceOff(bar2);
  b2.bounceOff(bar1);
  b2.bounceOff(bar2);
  b3.bounceOff(bar2);
  b3.bounceOff(bar3);
  b4.bounceOff(bar2);
  b4.bounceOff(bar3);
  distruct.bounceOff(edges);
  distruct.bounceOff(invis);
  bot1.bounceOff(bar3);
  bot2.bounceOff(bar3);
  bot3.bounceOff(bar3);
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
