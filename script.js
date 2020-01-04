let count = 0;
let colour;
let press = true

function randomColour() {
  let randomColor1 = Math.floor(Math.random() * 256);
  let randomColor2 = Math.floor(Math.random() * 256);
  let randomColor3 = Math.floor(Math.random() * 256);
  colour = [randomColor1, randomColor2, randomColor3];
}

const header = Vue.component("titles", {
  methods: {
    restart: function(event) {
      let y = document.getElementsByClassName("dot");
      let i;
      for (i = 0; i < y.length; i++) {
        if (y[i].hasAttribute("data-length") || y[i].getAttribute("style")) {
          y[i].removeAttribute("data-length");
          y[i].style.boxShadow = null
        }

        y[i].style.backgroundColor = "#ff0000";
      }
      count = 0;
    },
    resetColour: function(event) {
      let recentElement;
      let highestNumber = -1;
      let y = document.getElementsByClassName("dot");
      for (let i = 0; i < y.length; i++) {
        if (y[i].hasAttribute("data-length")) {
          if (parseInt(y[i].getAttribute("data-length")) > highestNumber) {
            recentElement = y[i];
            highestNumber = parseInt(y[i].getAttribute("data-length"));
            
          }
        }
      }
      recentElement.style.background = "#ff0000";
      recentElement.style.boxShadow = null
      recentElement.removeAttribute("data-length");
      randomColour();
      highestNumber = -1;
      recentElement = null;
      for (i = 0; i < y.length; i++) {
        if (y[i].hasAttribute("data-length")) {
          y[i].removeAttribute("data-length");
        }
      }
    }
  },
  template:
    '<div class="d-flex justify-content-around">' +
    "<h1>Light-bright Colour Changing Circles" +
    '<button type="button" v-on:click="restart" class="btn btn-danger">Reset</button>' +
    '<button type="button" v-on:click="resetColour" class="btn btn-danger">Reset Colour</button>' +
    "</h1>" +
    "</div>"
});

const circle = Vue.component("round", {
  render: function(createElement, context) {
    return createElement(
      "span",
      Array.apply(null, { length: 286 }).map(function() {
        return createElement("span", {
          class: {
            dot: true
          },
          on: {
            mousemove: function(event) {          
              if (event.buttons === 1) {
                console.log("mousemove")
                event.target.style.background =
                  "rgba(" +
                  colour[0] +
                  ", " +
                  colour[1] +
                  ", " +
                  colour[2] +
                  ", 1)";
                event.target.style.boxShadow= "1px 1px 5px 5px rgba(" + colour[0] + ", " +colour[1] + ", " +colour[2] + ", 1)";
              } 
              event.target.ondragstart = function() {
  return false;
};
            },
            mousedown: function(event) {
              console.log("mousedown")
              randomColour();
              event.target.style.background =
                "rgba(" +
                colour[0] +
                ", " +
                colour[1] +
                ", " +
                colour[2] +
                ", 1)";
              event.target.setAttribute("data-length", count++);
               
              event.target.style.background =
                "rgba(" +
                colour[0] +
                ", " +
                colour[1] +
                ", " +
                colour[2] +
                ", 1)";
              event.target.setAttribute("data-length", count++); 
              event.target.style.boxShadow= "1px 1px 5px 5px rgba(" + colour[0] + ", " +colour[1] + ", " +colour[2] + ", 1)";
              
            },
            dblclick: function(event) {
              event.target.style.background = "#ff0000";
            }
          }
        });
      })
    );
  }
});

var app = new Vue({
  el: "#app",
  data: {}
});
