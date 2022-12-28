const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

const finalPosition = function(moves) {
  //establish starting location
  let position = [];
  let x = 0; //starting x coordinate
  let y = 0; //starting y coordinate
  for (let move of moves) { //check each move in the 'moves array
    //for moves that affect the y-axis
    if (move === "north") {
      y++;
    }
    else if (move === "south") {
      y--;
    }
    //for moves that affect the x-axis
    else if (move === "west") {
      x--;
    }
    else if (move === "east") {
      x++;
    }
  }
  position.push(x,y);
  return position;
}

console.log(finalPosition(moves));