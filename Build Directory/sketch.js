function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", setup);

function collidePointRect(px, py, rx1, ry1, rx2, ry2){
  if (px >= rx1 && px <= rx1 + Math.abs(rx1 - rx2) && py >= ry1 && py <= ry1 + Math.abs(ry1 - ry2)){
    return true
  }
  else {
    return false  
  }
}

function collideRectRect(r1x1, r1y1, r1x2, r1y2, r2x1, r2y1, r2x2, r2y2){
  let points = [[r1x1, r1y1], [r1x2, r1y2], [r1x1, r1y2], [r1x2, r1y1] ]
  for (let i = 0; i < points.length; i++){
    if (collidePointRect(points[i][0], points[i][1], r2x1, r2y1, r2x2, r2y2)){
      stroke("red")
      return true
      
    }
    
    // print(collidePointRect(points[i][0], points[i][1], r2x1, r2y1, r2x2, r2y2))
    
  }
  
  points = [[r2x1, r2y1], [r2x2, r2y2], [r2x1, r2y2], [r2x2, r2y1]]
  for (let i = 0; i < points.length; i++){
    if (collidePointRect(points[i][0], points[i][1], r1x1, r1y1, r1x2, r1y2)){
       stroke("red")
      return true
    }
    // print(collidePointRect(points[i][0], points[i][1], r1x1, r1y1, r1x2, r1y2))
  }
  stroke("black")
  return false
  
  
}

function draw() {
  background(220);
  let r1x1 = mouseX - 50
  let r1y1 = mouseY - 75
  let r1x2 = mouseX + 50
  let r1y2 = mouseY + 75
  let r2x1 = window.innerWidth/2 + 75
  let r2y1 = window.innerHeight/2 + 50
  let r2x2 = window.innerWidth/2 - 75
  let r2y2 = window.innerHeight/2 - 50
  
 
  rect(r2x1, r2y1, Math.abs(r2x1 - r2x2), Math.abs(r2y1 - r2y2))
  
  rect(r1x1, r1y1, Math.abs(r1x1 - r1x2), Math.abs(r1y1 - r1y2))
  
  collideRectRect(r1x1, r1y1, r1x2, r1y2, r2x1, r2y1, r2x2, r2y2)
  
  
  
}