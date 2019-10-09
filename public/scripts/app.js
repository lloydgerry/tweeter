/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]
$(document).ready(function() {

const correctDate = function() {
  
}


const createTweetElement = function(tweetObject) {
  const userName = tweetObject['user'].name;
  const userAvatar = tweetObject['user'].avatars;
  const userHandle = tweetObject['user'].handle;
  const tweetText = tweetObject['content'].text;
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
    $('#tweets-container').append(createTweetElement(tweet));
    }
  }
  renderTweets(data);
});



// console.log(renderTweets(data));

// // // Test / driver code (temporary). Eventually will get this from the server.
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }

// console.log(createTweetElement(tweetData));


// const $tweet = createTweetElement(tweetData);

// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements,