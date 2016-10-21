app.controller('EventsCtrl', ['$scope', function($scope) {
  $scope.pageClass = 'page-events';
  $scope.addEvent = true;
  $scope.title = "SCHEDULE";
  $scope.colour = "#93c99b";
  $scope.events = [];

  $scope.newEvent = {
    startHour: "08",
    startMinute: "00",
    startAmPm: "am",
    endHour: "09",
    endMinute: "00",
    endAmPm: "am",
    days: [],
    colour: '#fa7278',
  };

  $scope.$watch('$scope.title', function(newValue) {
    //$scope.$apply();
  });

  $scope.schedColour = function(btn, colour) {
    $scope.colour = "#" + colour;
    $scope.updateActive('.sched-clr.active', '.' + btn)
  }

  $scope.eventColour = function(btn, colour) {
    $scope.newEvent.colour = "#" + colour;
    $scope.updateActive('.event-clr.active', '.' + btn)
  }

  $scope.updateActive = function(remove, add) {
    var prev = angular.element(document.querySelector(remove));
    prev.removeClass('active');

    var button = angular.element(document.querySelector(add));
    button.addClass('active');
  }

  $scope.submitForm = function() {
    if($scope.validName() && $scope.validTime() && $scope.validDays()) {

      delete $scope.newEvent.startHour;
      delete $scope.newEvent.startMinute;
      delete $scope.newEvent.startAmPm;
      delete $scope.newEvent.endHour;
      delete $scope.newEvent.endMinute;
      delete $scope.newEvent.endAmPm;

      $scope.events.push($scope.newEvent);
      console.log($scope.events);


      var newEvent = $scope.events[$scope.events.length - 1];
      var i;
      for (i = 0; i < $scope.events.length - 1; i++) {
        if ($scope.events[i].name > newEvent.name) {
          for (j = i; j < $scope.events.length - 1; j++) {
            $scope.events[i+1] = $scope.events[i];
          }
          $scope.events[i] = newEvent;
          break;
        }
      }
      console.log($scope.events);

      $scope.resetNewEvent();
      $scope.addEvent = !$scope.addEvent;
    }
  }

  $scope.validName = function() {
    if ($scope.newEvent.name == null) {
      alert("Please enter a name!");
      return false;
    }

    var i;
    for (i = 0; i < $scope.events.length; i++) {
      if ($scope.events[i].name.toLowerCase() == $scope.newEvent.name.toLowerCase()) {
        alert("This name has already been used!");
        return false;
      }
    };

    return true;
  };

  $scope.validTime = function() {
    if ($scope.newEvent.startAmPm == "am") {
      $scope.newEvent.startTime = parseInt($scope.newEvent.startHour)*60 + parseInt($scope.newEvent.startMinute);
    } else {
      var hour = parseInt($scope.newEvent.startHour) + 12;
      $scope.newEvent.startTime = hour*60 + parseInt($scope.newEvent.startMinute);
    };

    if ($scope.newEvent.endAmPm == "am") {
      $scope.newEvent.endTime = parseInt($scope.newEvent.endHour)*60 + parseInt($scope.newEvent.endMinute);
    } else {
      var hour = parseInt($scope.newEvent.endHour) + 12;
      $scope.newEvent.endTime = hour*60 + parseInt($scope.newEvent.endMinute);
    };

    if ($scope.newEvent.startTime >= $scope.newEvent.endTime) {
      alert("Please enter a valid end time!");
      return false;
    };

    return true;
  }

  $scope.noOverlap = function(currE, newE) {
    if (newE.startTime < currE.startTime && !(newE.endTime >= currE.startTime)) {
      return false;
    } else if (newE.startTime < currE.endTime) {
      return false;
    }

    return true;
  };

  $scope.validDays = function() {
    $scope.newEvent.days = [];

    var days = document.getElementsByName('days');

    var j;
    for (j = 0; j < days.length; j++) {
      if (days[j].checked) {
        $scope.newEvent.days.push(days[j].value);
      }
    }

    if ($scope.newEvent.days.length == 0) {
      alert("Please select at least one day of the week");
      return false;
    }

    var i;
    for (i = 0; i < $scope.events.length; i++) {
      var currEvent = $scope.events[i];
      var currDays = currEvent.days;

      var d;
      for (d = 0; d < currDays.length; d++) {
        if ($scope.newEvent.days.includes(currDays[d])) {
          if (!$scope.noOverlap(currEvent, $scope.newEvent)) {
            alert("The new event " + $scope.newEvent.name + " overlaps with " + currEvent.name + " on " + currDays[d] + "s!");
/*
            var k;
            for (k = 0; k < $scope.newEvent.days.length; k++) {
              if ($scope.newEvent.days[k].checked) {
                $scope.newEvent.days[k].checked = false;
              }
            }*/

            return false;
          }
        }
      }
    }
    return true;
  };

  $scope.resetNewEvent = function() {
    $scope.newEvent = {
      startHour: "08",
      startMinute: "00",
      startAmPm: "am",
      endHour: "09",
      endMinute: "00",
      endAmPm: "am",
      days: [],
    };

    var days = document.getElementsByName('days');

    var i;
    for (i = 0; i < days.length; i++) {
      days[i].checked = false;
    }
  };

  $scope.toggleModal = function() {
    $scope.addEvent = !$scope.addEvent;
  };

  $scope.toPdf = function() {
    var canvas = document.getElementById('c');

    // only jpeg is supported by jsPDF
    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF();

    pdf.addImage(imgData, 'JPEG', -50, -50);
    var download = document.getElementById('download');

    pdf.save("download.pdf");
    }

  $scope.visitHome = function() {
    window.location='#'
  };

}])
