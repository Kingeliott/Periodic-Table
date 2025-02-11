document.querySelectorAll(".element").forEach((element) => {
    element.addEventListener("mouseenter", function () {
      const extraText = this.querySelector(".extra-text");
  
      if (extraText) {
        // Get the 3rd class (index 2) and check if it exists
        const className = this.classList[2];
        
        console.log("Hovered element:", this);          // Inspect the hovered element
        console.log("Class name to display:", className); // Check the class name being set
  
        if (className) {
          extraText.textContent = className;  // Set the text content
        } else {
          console.warn("No 3rd class found in", this);  // If no 3rd class
        }
      } else {
        console.warn("extra-text element not found in", this);  // If no .extra-text element
      }
    });
  });
  