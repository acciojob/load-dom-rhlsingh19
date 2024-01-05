//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
      // Select the body element
      var body = document.body;
      
      // Clear any existing content in the body
      body.innerHTML = '';

      // Create a new text node with the desired message
      var message = document.createTextNode("DOM load success");

      // Append the text node to the body
      body.appendChild(message);
    });