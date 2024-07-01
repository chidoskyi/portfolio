
document.getElementById('contact-form').addEventListener('submit', function(event) {
event.preventDefault();

  // Show the spinner
  var spinner = document.getElementById('spinner');
  spinner.style.display = 'inline-block';

  // Hide the success message initially
  var successMessage = document.getElementById('success');
  successMessage.textContent = '';

  // Get form values
  var templateParams = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          subject: document.getElementById('subject').value,
          message: document.getElementById('message').value
      };

  // Send email
  emailjs.send('service_tsqx7fc', 'template_x1snur8', templateParams)
          .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
              // Hide the spinner after 2 seconds
              setTimeout(function() {
                  spinner.style.display = 'none';
                  // Show success message
                  successMessage.textContent = 'Email sent successfully!';
                  successMessage.style.display = 'block';
                  // Hide success message after 2 seconds and reset form
                  setTimeout(function() {
                      successMessage.style.display = 'none';
                      document.getElementById('contact-form').reset();
                  }, 2000);
              }, 2000);
          }, function(error) {
              console.log('FAILED...', error);
              // Hide the spinner after 2 seconds
              setTimeout(function() {
                  spinner.style.display = 'none';
                  // Show error message
                  successMessage.textContent = 'Failed to send email. Please try again later.';
                  successMessage.style.display = 'block';
                  // Hide error message after 2 seconds and reset form
                  setTimeout(function() {
                      successMessage.style.display = 'none';
                      document.getElementById('contact-form').reset();
                  }, 2000);
              }, 2000);
          });
});


   window.onload = function () {
    const favicon = document.getElementById("favicon");
    let pageTitle = document.title;
    let attentionMessage = "Come back";
  
    document.addEventListener("visibilitychange", function (e) {
      let isPageActive = !document.hidden;
  
      if (!isPageActive) {
        toggle();
      } else {
        document.title = pageTitle;
      }
    });
  
    document.addEventListener("visibilitychange", function (e) {
      if (!document.hidden) {
        document.title = pageTitle;
        favicon.href = "./assets/dp_male.svg";
      }
    });
  
    function toggle() {
      if (document.title === attentionMessage) {
          document.title = pageTitle;
          favicon.href = "./assets/dp_male.svg";
      } else {
          document.title = attentionMessage;
          favicon.href = "./assets/folded.png";
      }
    }   
  };

let loader = document.querySelector(".loader-container");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}


// Function to remove scroll bar during preload
// $(window).on("load", function () {
//   setTimeout(function () {
//     $(".no-scroll-preload").css("overflow", "visible");
//   }, 1000);
//   $(".loader-container").fadeOut(2500);
// });
    