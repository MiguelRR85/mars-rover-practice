// Rover Object Goes Here
// ======================
var rover = {
  positionX:0,
  positionY:0,
  direction: "N",
  travelLog: []
}
// ======================


function turnLeft(rover){
  
  switch(rover.direction){
    case "N":
      rover.direction = "W";
      console.log("Direction now is West");
      console.log([rover.positionX, rover.positionY]);
      break;
    case "S":
      rover.direction = "E";
      console.log("Direction now is East");
      console.log([rover.positionX, rover.positionY]);
      break;
    case "E":
      rover.direction = "N";
      console.log("Direction now is North");
      console.log([rover.positionX, rover.positionY]);
      break;
    case "W":
      rover.direction = "S";
      console.log("Direction now is South");
      console.log([rover.positionX, rover.positionY]);
      break;       
  }
}

function turnRight(rover){
  
  switch(rover.direction){
    case "N":
    rover.direction = "E";
    console.log("Direction now is East");
    console.log([rover.positionX, rover.positionY]);
        break;
    case "S":
    rover.direction = "W";
    console.log("Direction now is West");
    console.log([rover.positionX, rover.positionY]);
        break;
    case "E":
    rover.direction = "S";
    console.log("Direction now is South");
    console.log([rover.positionX, rover.positionY]);     
        break;
    case "W":
    rover.direction = "N";
    console.log("Direction now is North");
    console.log([rover.positionX, rover.positionY]);
        break;       
  }
}

function moveForward(rover){
  var currentPosition = ["["+rover.positionX, rover.positionY+"]"];
  rover.travelLog.push(currentPosition);
  switch(rover.direction){

    case "N":
      if(rover.positionX < 10){
        rover.positionX++;
        console.log("Direction is North // We move a square forward!!");
        console.log([rover.positionX, rover.positionY]);
      }else{
        alert("watch out! your rover has been about to have an accident");
      }
      break;

    case "S":
      if(rover.positionX > 0){
        rover.positionX--;
        console.log("Direction is South //We move a square forward!!");
        console.log([rover.positionX, rover.positionY]);
      }else{
        alert("watch out! your rover has been about to have an accidentt");
      }
      break; 

    case "E":
      if(rover.positionY < 10){
        rover.positionY++;
        console.log("Direction is East //We move a square forward!!");
        console.log([rover.positionX, rover.positionY]);
      }else{
        alert("watch out! your rover has been about to have an accidentt");
      } 
      break;

    case "W":
      if(rover.positionY > 0){
        rover.positionY--;
        console.log("Direction is West //We move a square forward!!");
        console.log([rover.positionX, rover.positionY]);
      }else{
        alert("watch out! your rover has been about to have an accidentt");
      }   
      break;
  }
}
function moveBackward(){
  //MUEVO Y GIRO EL ROVER HACIA DETRÁS,  RETROCEDIENDO UN CUADRO Y CAMBIANDO A LA DIRECCIÓN OPUESTA.
  var currentPosition = ["["+rover.positionX, rover.positionY+"]"];
  rover.travelLog.push(currentPosition);
  switch(rover.direction){

    case "N":
      if(rover.positionX > 0){
        rover.positionX--;
        rover.direction = "S";
        console.log("Direction now is South //"+" We move a square back!!");
        console.log([rover.positionX, rover.positionY]);
      }else{
        alert("watch out! your rover has been about to have an accident");
      }
      break;

    case "S":
      if(rover.positionX < 10){
        rover.positionX++;
        rover.direction = "N";
        console.log("Direction now is North //"+" We move a square back!!");
        console.log([rover.positionX, rover.positionY]);
      }else{
        alert("watch out! your rover has been about to have an accidentt");
      }
      break; 

    case "E":
      if(rover.positionY > 0){
        rover.positionY--;
        rover.direction = "W";
        console.log("Direction now is West //"+" We move a square back!!");
        console.log([rover.positionX, rover.positionY]);
      }else{
        alert("watch out! your rover has been about to have an accidentt");
      } 
      break;

    case "W":
      if(rover.positionY < 10){
        rover.positionY++;
        rover.direction = "E";
        console.log("Direction now is East //"+" We move a square back!!");
        console.log([rover.positionX, rover.positionY]);
      }else{
        alert("watch out! your rover has been about to have an accidentt");
      }   
      break;
  }
}

function commands(){
  var text = prompt("Insert the commands to move the Rover: f: forward, r: right, l: left, b: backward");;
  
  for(var i = 0; i<text.length; i++){
    switch(text[i]){
      case "f":
        moveForward(rover);
        break;
      case "r":
        turnRight(rover); 
        break;
      case "l":
        turnLeft(rover);
        break;
      case "b":
        moveBackward();
        break;
    }  
  }
  console.log("Your rover is here: " + [rover.positionX, rover.positionY]);
  console.log("Your rover was here: " + rover.travelLog);

}
commands();


  