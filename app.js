// Get the canvas element
const canvas = document.getElementById('glCanvas')

// Initialize the WebGL context
const gl = canvas.getContext('webgl')

// Check if WebGL is supported
if (!gl) {
  alert('WebGL not supported, falling back on experimental-webgl')
  gl = canvas.getContext('experimental-webgl')
}
if (!gl) {
  alert('Your browser does not support WebGL')
}

// Set the clear color to black, fully opaque
gl.clearColor(0.0, 0.0, 0.0, 1.0)

// Clear the color buffer with specified clear color
gl.clear(gl.COLOR_BUFFER_BIT)
