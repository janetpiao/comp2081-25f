// Get path for bar
let path = document.querySelector("svg #barWedge");
console.log(path);

// Get percentage of bar
let percent = document.querySelector("svg text").textContent;
console.log(percent);

// Remove the % sign of percentage
percent = percent.replaceAll("%", "");
console.log(percent);

// convert the string to an integer
percent = parseInt(percent, 10);
console.log(percent);

// Calculate height of bar segment as a percentage
percent = percent / 100;
let barHeight = percent * 300;
console.log(barHeight);

// Grab the external CSS as one of the document object properties
const cssRulesList = document.styleSheets[0].cssRules;
console.log(cssRulesList);

// Loop through the CSS rules to capture the one that controls the :active state for the bar
let svgActiveRule;
for (let i = 0; i < cssRulesList.length; i++) {
  if (cssRulesList[i].selectorText == "svg:active #barWedge") {
    svgActiveRule = cssRulesList[i];
  }
}

// Update the new property value for height in the CSS
svgActiveRule.style.setProperty("height", barHeight + "px");
