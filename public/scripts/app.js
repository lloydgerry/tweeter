/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

/* TODO
* Place cursor in field when clicking anchor link
* Tweet icons
* Date helper function
* Responsive font size (em)
*/

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// const correctDate = function() {

// }


$(document).ready(function() {


  const createTweetElement = function(tweetObject) {
    const userName = tweetObject['user'].name;
    const userAvatar = tweetObject['user'].avatars;
    const userHandle = tweetObject['user'].handle;
    const tweetText = escape(tweetObject['content'].text);
    const createdId = tweetObject['created_at'];

    const $tweet = $('<article>').addClass("tweet");

    const markup = `
      <header>
        <h6> ${userName} <img src='${userAvatar}'> </h6>  <p> ${userHandle}</p>
      </header>
      <body>
        <p>
          ${tweetText}
        </p>
          <hr style="4px" solid black></hr>
      </body>
      <footer> 
        <sub>Posted ${createdId} day(s) ago.</sub>
      </footer> `
    $($tweet).append(markup)
    return $tweet;
  }

  const renderTweets = function(tweets) {
  for(let tweet of tweets) {
    $('#tweets-container').prepend(createTweetElement(tweet));
    }
  }

  const $loadTweets = function() {
    $.getJSON('/tweets', function(json) {
      return renderTweets(json);
    })
  };
  $loadTweets();

// Submit from New Tweet Form
$('#tweet-form').submit(function(event) {
  event.preventDefault();
  $('#error_0').slideUp();
  $('#errorToo').slideUp();

  const tweetText = $(this[name="text"]).val();
  const newTweetObject = $(this).serialize() ;

  if (tweetText.length === 0) {

    return $('#error_0').slideDown();

  } else if (tweetText.length > 140) {

    return $('#errorToo').slideDown();

  } else {

    $.ajax({
      method: "POST",
      url: "/tweets",
      data: newTweetObject,
    })
    .then(() => $loadTweets() )
    .then(() => $('#tweet-form').trigger("reset") )
    .then(() => $('#count').text(140) )
  }
});

});

