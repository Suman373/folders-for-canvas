 <h1 align="center"> HTML5 Canvas X Javascript(ES6) </h1>
 
<h2>What is HTML Canvas?</h2>

The HTML <canvas> element is used to draw graphics, on the fly, via scripting (usually JavaScript).
The <canvas> element is only a container for graphics. You must use a script to actually draw the graphics.
Canvas has several methods for drawing paths, boxes, circles, text, and adding images.

<h3>Here are the things html canvas can do : </h3>

- HTML canvas can draw text
- HTML canvas can draw graphics
- HTML canvas can be animated
- HTML canvas can be interacted with

### Example of using / defining a canvas :

```
<canvas id="myCanvas" width="200" height="100"></canvas>
```
The <canvas> element must have an id attribute so it can be referred to by JavaScript.
The width and height attribute is necessary to define the size of the canvas.

<b>Tip</b>: You can have multiple <canvas> elements on one HTML page.

<b>Note :</b> By default, the <canvas> element has no border and no content.

### How to draw on a html canvas using JavaScript ?
Example :
```
<script>
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);
</script>
```
### STEP 1 : Targetting the canvas element and define it.
```
const canvas = document.getElementById("myCanvas");
```

### STEP 2 : Creating a drawing object
The getContext() is a built-in HTML object, with properties and methods for drawing:
```
const ctx = canvas.getContext("2d");
```

### STEP 3 : Drawing on the canvas
Set the fill style of the drawing object to the color red:
```
ctx.fillStyle = "#FF0000";
```
The fillStyle property can be a CSS color, a gradient, or a pattern. The default fillStyle is black.
The fillRect(x,y,width,height) method draws a rectangle, filled with the fill style, on the canvas:
```
ctx.fillRect(0, 0, 150, 75);
```

## HTML Canvas Coordinates
The Html canvas is like a 2-dimensional grid ( rectangular or square container ). This means that the top-left corner of the canvas has coordinates of (0,0)

