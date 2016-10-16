app.component('drawing', {
  template: "<canvas id='c'></canvas>",
  controller: function DrawingCtrl($scope) {
    var ctrl = this;



    (function thisCanvas() {

      $scope.$watch(function() {return ctrl.eventList}, function (newValue) {
        console.log(newValue);

        redraw();
      }, true);

      $scope.$watch(function() {return ctrl.schedClr}, function (newValue) {
        console.log(newValue);
        redraw();
      });

          console.log(ctrl.eventList);
          console.log(ctrl.schedClr);
    			var
    				// Obtain a reference to the canvas element
    				// using its id.
    				htmlCanvas = document.getElementById('c'),

    			  	// Obtain a graphics context on the
    			  	// canvas element for drawing.
    			  	context = htmlCanvas.getContext('2d');

    			// Start listening to resize events and
    			// draw canvas.
    			initialize();

    			function initialize() {
    				// Register an event listener to
    				// call the resizeCanvas() function each time
    				// the window is resized.
    				window.addEventListener('resize', resizeCanvas, false);

    				// Draw canvas border for the first time.
    				resizeCanvas();
    			}

          var widthIndent;
          var columnWidth;
          var heightIndent;
          var height;
    			// Display custom canvas.
    			// In this case it's a blue, 5 pixel border that
    			// resizes along with the browser window.
    			function redraw() {

                    widthIndent = window.innerWidth * 2 / 10;
                    columnWidth = window.innerWidth * 6 / 70;

                    heightIndent = window.innerHeight / 10;
                    height = window.innerHeight * 1.5;



    				context.strokeStyle = 'white';
    				context.lineWidth = '1';

                    context.fillStyle = ctrl.schedClr;

                    // top square
                    context.fillRect(widthIndent, 0, columnWidth * 7 , heightIndent);
    				        context.fillRect(widthIndent, heightIndent , columnWidth * 7 , heightIndent);

                    var fontsize = window.innerHeight / 30;
                    var fontsizeString = fontsize.toString();
                    context.font = fontsizeString.concat("px Arial");

                    context.fillStyle = "#FFFFFF";

                    context.fillText(ctrl.schedTitle, innerWidth / 2 - widthIndent/4, heightIndent*3/4);
                    context.fillText("S", widthIndent + columnWidth / 3, heightIndent * 1.75);
                    context.fillText("M", widthIndent + 4 * columnWidth / 3, heightIndent * 1.75);
                    context.fillText("T", widthIndent + 7 * columnWidth / 3, heightIndent * 1.75);
                    context.fillText("W", widthIndent + 10 * columnWidth / 3, heightIndent * 1.75);
                    context.fillText("T", widthIndent + 13 * columnWidth / 3, heightIndent * 1.75);
                    context.fillText("F", widthIndent + 16 * columnWidth / 3, heightIndent * 1.75);
                    context.fillText("S", widthIndent + 19 * columnWidth / 3, heightIndent * 1.75);

                    fontsize = window.innerHeight / 40;
                    var fontsizeString = fontsize.toString();
                    context.font = fontsizeString.concat("px Arial");


                    context.fillStyle = "#DBDBDB";

                    context.fillRect(widthIndent,  2 * heightIndent, columnWidth, height / 2);

                    context.fillStyle = "#FFFFFF";

                    context.fillRect(widthIndent + columnWidth, 2 * heightIndent, columnWidth, height / 2);

                    context.fillStyle = "#DBDBDB";

                    context.fillRect(widthIndent + 2 * columnWidth, 2 * heightIndent, columnWidth, height / 2);

                    context.fillStyle = "#FFFFFF";

                    context.fillRect(widthIndent + 3 * columnWidth, 2 * heightIndent, columnWidth, height / 2);

                    context.fillStyle = "#DBDBDB";

                    context.fillRect(widthIndent + 4 * columnWidth, 2 * heightIndent, columnWidth, height / 2);

                    context.fillStyle = "#FFFFFF";

                    context.fillRect(widthIndent + 5 * columnWidth, 2 * heightIndent, columnWidth, height / 2);

                    context.fillStyle = "#DBDBDB";

                    context.fillRect(widthIndent + 6 * columnWidth, 2 * heightIndent, columnWidth, height / 2);
                    context.fillStyle = "#FFFFFF";

                    context.fillText("8:00", widthIndent + columnWidth / 8, 2 * heightIndent + height / 20 );
                    context.fillText("9:00", widthIndent + columnWidth / 8, 3 * heightIndent + height / 20 );
                    context.fillText("10:00", widthIndent + columnWidth / 8, 4 * heightIndent + height / 20 );
                    context.fillText("11:00", widthIndent + columnWidth / 8, 5 * heightIndent + height / 20 );
                    context.fillText("12:00", widthIndent + columnWidth / 8, 6 * heightIndent + height / 20 );

                    var i;
                    for (i = 0; i < ctrl.eventList.length; i++) {
                      /*var startHour = newValue[i].startTime / 60;
                      var startMinute = newValue[i].startTime % 60;
                      var start = startHour.toString + startMinute.toString;

                      var endHour = newValue[i].endTime / 60;
                      var endMinute = newValue[i].endTime % 60;
                      var end = endHour.toString + endMinute.toString;*/

                      var newEvent = new event(
                        ctrl.eventList[i].name, ctrl.eventList[i].startTime, ctrl.eventList[i].endTime, ctrl.eventList[i].colour, ctrl.eventList[i].days
                      );

                      createEvent(newEvent);

                      console.log(newEvent);

    			}};

    			// Runs each time the DOM window resize event fires.
    			// Resets the canvas dimensions to match window,
    			// then draws the new borders accordingly.
    			function resizeCanvas() {
    				htmlCanvas.width = window.innerWidth;
    				htmlCanvas.height = window.innerHeight;
    				redraw();
    			}

          class event {
            constructor(name, startTime, endTime, color, days) {
              this.name = name;
              this.start = startTime;
              this.end = endTime;
              this.color = color;
              this.days = days;
            }
          };



                function createEvent(event) {
                    var x = 0;

                    var i;
                    for (i = 0; i < event.days.length; i++) {
                      switch (event.days[i]){
                        case "Sunday":
                          x = widthIndent;
                          break;
                        case "Monday":
                          x = widthIndent + columnWidth;
                          break;
                        case "Tuesday":
                          x = widthIndent + columnWidth * 2;
                          break;
                        case "Wednesday":
                          x = widthIndent + columnWidth * 3;
                          break;
                        case "Thursday":
                          x = widthIndent + columnWidth * 4;
                          break;
                        case "Friday":
                          x = widthIndent + columnWidth * 5;
                          break;
                        case "Saturday":
                          x = widthIndent + columnWidth * 6;
                          break;


                      }
                      context.fillStyle = event.color;
                      context.fillRect(x, 2 * heightIndent, columnWidth, (event.end - event.start) / 60 * heightIndent + height / 20);
                      context.fillStyle = '#FFFFFF';
                      context.fillText(event.name, x + 10, 2 * heightIndent + 10);


                      console.log(context);
                    }
                  };








    		})();
  },
  bindings: {
    eventList: '=',
    schedClr: '=',
    schedTitle: '=',
  }
})
