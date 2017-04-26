  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 2;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('header').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up').addClass('nav-down');
      }
    }

    lastScrollTop = st;
  };
  // 
  // 

  $(window).scroll(function () {
    $('#stackIcon').each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 500) {
        $(this).addClass("fadeIn");
      }
    });
  });
  // 
  // 

  $(window).scroll(function () {
    $('#linkedinIcon').each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 500) {
        $(this).addClass("fadeIn2");
      }
    });
  });


  // 
  // 
  $(window).scroll(function () {
    $('#githubIcon').each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 500) {
        $(this).addClass("fadeIn3");
      }
    });
  });
  // 
  // 
  
  // 
  $(window).scroll(function () {
    $('#twitterIcon').each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 500) {
        $(this).addClass("fadeIn");
      };
    });
  });

// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.sparkpost.com/api/v1/transmissions",
//   "method": "POST",
//   "headers": {
//     "content-type": "application/json",
//     "authorization": "API KEY",
//   },
//   "processData": false,
//   "data": "{\n    \"content\": {\n      \"from\": \"from_email_at_gmail@aliciatapia.com\",\n      \"subject\": \"Thundercats are GO!!!\",\n      \"text\": \"Sword of Omens, give me sight BEYOND sight\"\n    },\n    \"recipients\": [{ \"address\": \"alicia.tapia@gmail.com\" }]\n}"
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.sparkpost.com/api/v1/transmissions",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "authorization": "b1bfe8e43c581fa60d873ab5eb2bc25c24fcaffe",
    "cache-control": "no-cache",
    "postman-token": "b21332f0-76c4-b2b5-8b81-aacd055277c7"
  },
  "data": "{\n   \"options\": {\n      \"open_tracking\": true,\n      \"click_tracking\": true\n   },\n   \"substitution_data\": {\n      \"signature\": \"Aicia Tapia\"\n   },\n   \"recipients\": [\n      {\n         \"address\": {\n            \"email\": \"alicia.tapia@gmail.com\"\n         },\n         \"tags\": [\n            \"learning\"\n         ],\n         \"substitution_data\": {\n            \"first_name\": \"Khalid Adil\"\n         }\n      }\n   ],\n   \"content\": {\n      \"from\": {\n        \"from\": \"Alicia Tapia\",\n        \"email\": \"contact@aliciatapia.com\",\n      },\n      \"subject\": \"What a wonderful test email!\",\n      \"text\": \"Hi {{first_name}}\\r\\nYou have just sent your first email through SparkPost!\\r\\nCongratulations,\\r\\n{{signature}}\",\n      \"html\": \"<strong>Hi {{first_name}},<\\/strong><p>You have just sent your first email through SparkPost!<\\/p><p>Congratulations!<\\/p>{{signature}}\"\n   }\n}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});