$(document).ready(function() {
  console.log(' doc ready');


  var theNumber = prompt("Please type in a number -> ");
  runFizzbuzz(theNumber);

  function runFizzbuzz(mynum) {
    mynum = parseInt(mynum);
        // console.log(typeof mynum);

    for (var i = 1; i <= mynum; i++) {
          // console.log('can you see me?')
      if (i % 5 === 0 && i % 3 === 0) {
        $('#results').append('fizzbuzz<br>');

      } else if (i % 5 === 0) {
        $('#results').append('buzz<br>');

      } else if (i % 3 === 0) {
        $('#results').append('fizz<br>');

      } else {
        $('#results').append(i + '<br>');
      }
    }
  }
  
});



