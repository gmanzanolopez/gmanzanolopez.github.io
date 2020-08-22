$(document).ready(function () {
    
    var availTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17,18]
    var todayIs = moment().format('MMMM Do YYYY');
    var localTime = moment().format('H');
  
    
    $("#currentDay").append(todayIs)
  
  
    for (var i = 0; i < availTimes.length; i++) {
       
        if (availTimes[i] / 12 > 1) {
  
            console.log(availTimes[i]);
               dayHour = "PM";
            console.log(availTimes[i] * 10);
            hour = availTimes[i] - 12;
        } else {
            var hour = availTimes[i];
            if (availTimes[i] == 12) {
               dayHour = "PM"
            } else {
                dayHour = "AM"
            };
        };
  
  
    // making new variables
        var newDiv = $("<div>");
        var timeDiv = $("<div>");
        var descripDiv = $("<textarea>");
        var buttonEle = $("<button>");
        var iconEle = $("<i>");
  
  
        
        newDiv.attr("data-hour", availTimes[i]);
        newDiv.attr("class", "row")
        descripDiv.attr("class", "description col 8");
        descripDiv.attr("id", "text" + [i]);
        timeDiv.attr("class", "hour col-2");
        buttonEle.attr("class", "saveBtn col-2");
        buttonEle.attr("id", [i]);
        iconEle.attr("class", "far fa-save");
  
  
        
        $(".container").append(newDiv)
  
        newDiv.append(timeDiv)
        newDiv.append(descripDiv)
        newDiv.append(buttonEle)
        buttonEle.append(iconEle)
  
        $("#text" + [i]).append(
            localStorage.getItem("yourInfo" + [i])
        );
  
        timeDiv.text(hour + dayHour);
  
        // time changing colors for calendar
        if (availTimes[i] == localTime) {
            descripDiv.attr("class", "description col 8 present")
        } else if (availTimes[i] < localTime) {
            descripDiv.attr("class", "description col 2 past")
        } else {
            descripDiv.attr("class", "description col 2 future")
        }
    }
    // save button function
    $(".saveBtn").on("click", function () {
        var planText = "yourInfo" + this.id;
        var writeEle = "#text" + this.id;
        localStorage.setItem(planText, $(writeEle).val());
    })
  
  })