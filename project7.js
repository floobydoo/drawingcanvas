var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  var newRect = document.createElementNS(namespace, "square")
  drawSquare.setAttribute("x", xpos)
  drawSquare.setAttribute("y", ypos)
  drawSquare.setAttribute("fill", color)
  drawSquare.setAttribute("length", size)
  canvas.appendChild(drawSquare)
}
function drawRect(canvas, xpos, ypos, color, width, height) {
  var newRect = document.createElementNS(namespace, "rect")
  newRect.setAttribute("x", xpos)
  newRect.setAttribute("y", ypos)
  newRect.setAttribute("fill", color)
  newRect.setAttribute("width", width)
  newRect.setAttribute("height", height)
  canvas.appendChild(newRect)
}
function drawCircle(canvas, xpos, ypos, color, radius) {
  var newCircle = document.createElementNS(namespace, "circle")
  newCircle.setAttribute("cx", xpos)
  newCircle.setAttribute("cy", ypos)
  newCircle.setAttribute("fill", color)
  newCircle.setAttribute("r", radius)
  canvas.appendChild(newCircle)
}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
})
