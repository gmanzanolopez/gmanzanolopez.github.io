$(document).ready(function () {
  // create array for "business times"
  var availTimes = ['8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm']

  for (var i=0; i < availTimes.length; i++) {
      var newDiv = $("<div>");
      var timeDiv = $("<div>");
      var descriptionDiv = $("<textarea>");
      var buttonEle = $("<button>");
      var iconEle = $("<i>")

      newDiv.attr('data-hours', availTimes[i]);
      timeDiv.attr('class', 'row');
      
      descriptionDiv.attr('class', 'description col-8')
      timeDiv.attr('class', 'hour col-2')
      buttonEle.attr('class', 'saveBtn col-2');
      iconEle.attr('class', 'far fa-save');

      $(".container").append(newDiv)

      newDiv.append(timeDiv)
      newDiv.append(descriptionDiv)
      newDiv.append(buttonEle)

      buttonEle.append(iconEle)
      
      timeDiv.text(availTimes[i])
  }
})