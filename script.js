const header = Vue.component("titles", {
  methods: {
    greet: function (event) {

      let y = document.getElementsByClassName("dot");
      let i;
      for (i = 0; i < y.length; i++) {

        y[i].style.backgroundColor = "red";
      }
    } },

  template:
  '<div class="d-flex justify-content-around">' +
  '<h1>Light-bright Colour Changing Circles' +
  '<button type="button" v-on:click="greet" class="btn btn-danger">Reset</button></h1>' +
  '</div>' });



const circle = Vue.component("round", {
  render: function (createElement) {
    return createElement(
    "span",
    Array.apply(null, { length: 176 }).map(function () {
      return createElement("span", {
        class: {
          dot: true },

        on: {
          mouseover: function (event) {
            if (event.buttons === 1) {
              let randomColor1 = Math.floor(Math.random() * 256);
              let randomColor2 = Math.floor(Math.random() * 256);
              let randomColor3 = Math.floor(Math.random() * 256);
              event.target.style.background =
              "rgba(" +
              randomColor1 +
              ", " +
              randomColor2 +
              ", " +
              randomColor3 +
              ", 1)";
            }
          },
          mousedown: function (event) {
            let randomColor1 = Math.floor(Math.random() * 256);
            let randomColor2 = Math.floor(Math.random() * 256);
            let randomColor3 = Math.floor(Math.random() * 256);
            event.target.style.background =
            "rgba(" +
            randomColor1 +
            ", " +
            randomColor2 +
            ", " +
            randomColor3 +
            ", 1)";
          } } });


    }));


  } });


//   }
// });

var app = new Vue({
  el: "#app",
  data: {} });