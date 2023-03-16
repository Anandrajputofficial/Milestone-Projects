// function to determine resulting color when two colors are mixed
function mixColors(color1, color2) {
  switch(color1) {
    case "red":
      switch(color2) {
        case "blue":
          console.log("purple");
          break;
        case "yellow":
          console.log("orange");
          break;
        default:
          console.log("Invalid color");
      }
      break;
    case "blue":
      switch(color2) {
        case "red":
          console.log("purple");
          break;
        case "yellow":
          console.log("green");
          break;
        default:
          console.log("Invalid color");
      }
      break;
    case "yellow":
      switch(color2) {
        case "red":
          console.log("orange");
          break;
        case "blue":
          console.log("green");
          break;
        default:
          console.log("Invalid color");
      }
      break;
    default:
      console.log("Invalid color");
  }
}

// example usage
mixColors("red", "blue"); // prints "purple"
mixColors("red", "yellow"); // prints "orange"
mixColors("blue", "yellow"); // prints "green"
mixColors("green", "yellow"); // prints "Invalid color"
