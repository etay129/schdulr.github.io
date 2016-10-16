app.component('drawing', {
  template: "<canvas id='c'></canvas>",
  controller: function DrawingCtrl($scope) {
    var ctrl = this;



    (function thisCanvas() {

      $scope.$watch(function() {return ctrl.eventList}, function (newValue) {
        console.log(newValue);

      });

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

    			// Display custom canvas.
    			// In this case it's a blue, 5 pixel border that
    			// resizes along with the browser window.
    			function redraw() {

                    var widthIndent = window.innerWidth * 2 / 10;
                    var columnWidth = window.innerWidth * 6 / 70;

                    var heightIndent = window.innerHeight / 10;
                    var height = window.innerHeight * 1.5;



    				context.strokeStyle = 'white';
    				context.lineWidth = '1';

                    context.fillStyle = ctrl.schedClr;

                    // top square
    				context.fillRect(widthIndent, heightIndent , columnWidth * 7 , heightIndent);

                    var fontsize = window.innerHeight / 20;
                    var fontsizeString = fontsize.toString();
                    context.font = fontsizeString.concat("px Comic Sans");

                    context.fillStyle = "#FFFFFF";

                    context.fillText("S", widthIndent + columnWidth / 3, heightIndent * 1.75);
                    context.fillText("M", widthIndent + 4 * columnWidth / 3, heightIndent * 1.75);
                    context.fillText("T", widthIndent + 7 * columnWidth / 3, heightIndent * 1.75);
                    context.fillText("W", widthIndent + 10 * columnWidth / 3, heightIndent * 1.75);
                    context.fillText("T", widthIndent + 13 * columnWidth / 3, heightIndent * 1.75);
                    context.fillText("F", widthIndent + 16 * columnWidth / 3, heightIndent * 1.75);
                    context.fillText("S", widthIndent + 19 * columnWidth / 3, heightIndent * 1.75);

                    fontsize = window.innerHeight / 40;
                    var fontsizeString = fontsize.toString();
                    context.font = fontsizeString.concat("px Comic Sans");


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

    			}

    			// Runs each time the DOM window resize event fires.
    			// Resets the canvas dimensions to match window,
    			// then draws the new borders accordingly.
    			function resizeCanvas() {
    				htmlCanvas.width = window.innerWidth;
    				htmlCanvas.height = window.innerHeight;
    				redraw();
    			}


                function event() {
                    this.name;
                    this.start;
                    this.end;
                    this.color;
                    this.days;
                }

                function createEvent(event) {

                    var startHour = parseInt(event.start.substring(0,2), 10);
                    var startMin = parseInt(event.start.substring(2,4), 10);
                    var endHour = parseInt(event.end.substring(0,2), 10);
                    var endMin = parseInt(event.end.substring(2,4), 10);

                    if (startHour > endHour) {
                        if (startMin >= endMin) {
                            var totalMins = (((24 - startHour) + endHour) * 60) - ((60 - startMin) + endMin);
                        }
                        else
                            var totalMins = (((24 - startHour) + endHour) * 60) + (endMin - startMin);
                    }


                    else
                        if (startMin >= endMin) {
                            var totalMins = ((endHour - startHour) + (60 - startMin) + endMin);
                        }
                        else
                            var totalMins = ((endHour - startHour) + (endMin - startMin));

                    }

                    context.fillStyle = event.color;







    		})();
  },
  bindings: {
    eventList: '=',
    schedClr: '=',
  }
})
