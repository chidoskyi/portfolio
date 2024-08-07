  //toggler hamburger functions



 

  const menuBtn = document.querySelector(".navbar-toggler");
	let menuOpen = false;
	menuBtn.addEventListener("click", () => {
		if (!menuOpen) {
		menuBtn.classList.add("open");
		menuOpen = true;
		} else {
		menuBtn.classList.remove("open");
		menuOpen = false;
		}
  });


const allElements = document.querySelectorAll('.animated-text');

// It checks if there is at least one element
if (allElements.length > 0) {
	//It runs the script for each found element
	allElements.forEach((element) => {
		const txtElement = element,
			wordsList = txtElement.getAttribute('data-words'),
			words = wordsList.split(', '); // It makes an array of words from data attribute

		let wordsCount = 0;

		entry();

		// Initial function
		function entry() {
			if (wordsCount < words.length) {
				// It runs the code for each word
				let word = words[wordsCount],
					txtArr = word.split(''), // It makes an array of letters in the word
					count = 0;

				txtElement.textContent = ''; // It removes the previous text from the element

				// For each letter in the array
				txtArr.forEach((letter) => {
					// It replaces the empty space for the "non-break-space" HTML...
					// ... This is needed to separate the words properly
					let _letter = letter === ' ' ? '&nbsp;' : letter;

					// It wraps every letter with a "span" and puts all they back to the element
					txtElement.innerHTML += `<span>${_letter}</span>`;
				});

				let spans = txtElement.childNodes;

				// It sets the interval between each letter showing
				const letterInterval = setInterval(activeLetter, 70);

				function activeLetter() {
					spans[count].classList.add('active');
					count++;

					if (count === spans.length) {
						clearInterval(letterInterval);

						// It waits 4 seconds to start erasing the word
						setTimeout(() => {
							eraseText();
						}, 600);
					}
				}

				function eraseText() {
					// It sets the interval between each letter hiding
					let removeInterval = setInterval(removeLetter, 40);
					count--;

					function removeLetter() {
						spans[count].classList.remove('active');
						count--;

						if (count === -1) {
							clearInterval(removeInterval);
							wordsCount++;

							// After removing the last letter, call the initial function again
							entry();
						}
					}
				}
			} else {
				// If the code reaches the last word
				// It resets the words counter...
				wordsCount = 0;
				// ...and calls the initial function again.
				entry();
			}
		}
	});
}


if (localStorage.getItem("lightMode") == "dark") {
	var app = document.getElementsByTagName("HTML")[0];
	app.setAttribute("light-mode", "dark");
  
	//to add dark theme to nav bar after its been loaded
	window.addEventListener("load", function () {
	  var nav = document.getElementById("navbar");
	  nav.classList.add("dark-theme");
	  document.getElementById("dark_toggler").checked = true;
	});
  
	var sc = document.getElementsByClassName("socialicon");
	for (var i = 0; i < sc.length; i++) {
	  sc[i].classList.add("dsc");
	}
  } else {
	localStorage.setItem("lightMode", "light");
  }
  
  function toggle_light_mode() {
	console.log(localStorage.getItem("lightMode"));
	var app = document.getElementsByTagName("HTML")[0];
	var nav = document.getElementById("navbar");
	if (localStorage.lightMode == "dark") {
	  localStorage.lightMode = "light";
	  app.setAttribute("light-mode", "light");
	  nav.classList.remove("dark-theme");
	  var sc = document.getElementsByClassName("socialicon");
	  for (var i = 0; i < sc.length; i++) {
		sc[i].classList.remove("dsc");
	  }
	} else {
	  nav.classList.add("dark-theme");
	  localStorage.lightMode = "dark";
	  app.setAttribute("light-mode", "dark");
	  var sc = document.getElementsByClassName("socialicon");
	  for (var i = 0; i < sc.length; i++) {
		sc[i].classList.add("dsc");
	  }
	}
  }
  
  window.addEventListener("storage", function () {
	if (localStorage.lightMode == "dark") {
	  app.setAttribute("light-mode", "dark");
	} else {
	  app.setAttribute("light-mode", "light");
	}
  });



  