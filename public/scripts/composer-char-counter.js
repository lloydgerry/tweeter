//Application JS for tweet character counter




$(document).ready(function() {
  $('#count').text(140);

  $('#tweet-text')
    .keyup(function() {
      let characters = this.value.length
      let counter = maxValue - characters;
      const maxValue = 140;
      const count = $('#count')

      //update css based on count
      if (characters  > maxValue) {
        count.addClass('over');
      } else {
        count.removeClass('over');
      }
      //update counter
      count.text(counter);
    });
});