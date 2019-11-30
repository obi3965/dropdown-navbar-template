
// for active menu highlighting
(function(){
	var a = document.getElementById('nav').getElementsByTagName("a");
	if (window.location.href.substr(location.href.length - 1, 1) == '/') {
		var loc = window.location.href + 'index.aspx';
	} else {
		var loc = window.location.href;
	}
	for(var i=0; i < a.length; i++) {
		if (a[i].href == loc) {
			a[i].className += ' is-active';
		}
	}
})();

document.getElementById('nav').querySelector('ul').insertAdjacentHTML("beforebegin", "<span id='menutoggle' class='test'><span>Menu</span></span>");
var menutoggle = document.getElementById("menutoggle");
var activeClass = "is-active"

menutoggle.onclick = function(event) {
	menutoggle.classList.toggle(activeClass);
	//menutoggle.nextSibling.classList.toggle(activeClass);
	var el = document.querySelectorAll("#nav span.submenu, #nav ul.submenu");
	var i; for (i = 0; i < el.length; i++) {
		el[i].classList.remove(activeClass);
	}
	event.preventDefault();
};

var forEach = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]); // passes back stuff we need from the array
	}
};
forEach(document.querySelectorAll("#nav span.submenu"), function (index, value) {
	value.addEventListener('click', function() {
        if ( menutoggle.offsetWidth > 0 && menutoggle.offsetHeight > 0 ) { // if the #menutoggle is visible
    		value.classList.toggle(activeClass);
        }
	})
});

function hideMenu() {
	var el = document.querySelectorAll("#menutoggle, #menutoggle + ul, #nav span.submenu, #nav ul.submenu");
	var i; for (i = 0; i < el.length; i++) {
		el[i].classList.remove(activeClass);
	}
}

document.addEventListener('click', function(e) {
	if ( menutoggle.offsetWidth > 0 && menutoggle.offsetHeight > 0 ) { // if the #menutoggle is visible
		var e=e? e : window.event;
	    var event_element=e.target? e.target : e.srcElement;
		if (!event_element.closest("#nav")){
			//console.log(event_element.closest("#nav"));
			if (menutoggle.classList.contains(activeClass)) {
				hideMenu();
			}
		}
	}
}, false);

/*
window.addEventListener("resize", function () {
    //if ( menutoggle.offsetWidth > 0 && menutoggle.offsetHeight > 0 ) { // if the #menutoggle is visible
	//	hideMenu();
	//}
    if ( menutoggle.offsetWidth <= 0 && menutoggle.offsetHeight <=  0 ) { // if the #menutoggle is hidden
		hideMenu();
	}
}, false);
*/

var resizeTimer;
window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        if ( menutoggle.offsetWidth <= 0 && menutoggle.offsetHeight <=  0 ) { // if the #menutoggle is hidden
    		hideMenu();
    	}
    }, 250);
}, false);


// Dropdown Select Toggle
forEach(document.querySelectorAll(".dropdown_list span.dropdown"), function (index, value) {
	value.addEventListener('click', function() {
        //console.log(value.classList);
        if ( !value.classList.contains(activeClass) ) {
            var el = document.querySelectorAll(".dropdown_list span.dropdown");
            var i; for (i = 0; i < el.length; i++) {
                el[i].classList.remove(activeClass);
            }
            value.classList.toggle(activeClass);
        } else
        if ( value.classList.contains(activeClass) ) {
            value.classList.remove(activeClass);
        }
	})
});
document.addEventListener('click', function(e) {
	// Dropdown Select Toggle
	var el = document.querySelectorAll(".dropdown_list span.dropdown")
	var e=e? e : window.event;
    var event_element=e.target? e.target : e.srcElement;
	if (!event_element.closest(".dropdown_list")){
		//console.log(event_element.closest(".dropdown_list"));
		var i; for (i = 0; i < el.length; i++) {
			el[i].classList.remove(activeClass);
		}
	}
}, false);



const backToTopButton = document.querySelector("#back-to-top-btn");

    window.addEventListener("scroll", scrollFunction);
    
    function scrollFunction() {
      if (window.pageYOffset > 300) { // Show backToTopButton
        if(!backToTopButton.classList.contains("btnEntrance")) {
          backToTopButton.classList.remove("btnExit");
          backToTopButton.classList.add("btnEntrance");
          backToTopButton.style.display = "block";
        }
      }
      else { // Hide backToTopButton
        if(backToTopButton.classList.contains("btnEntrance")) {
          backToTopButton.classList.remove("btnEntrance");
          backToTopButton.classList.add("btnExit");
          setTimeout(function() {
            backToTopButton.style.display = "none";
          }, 250);
        }
      }
    }
    
    backToTopButton.addEventListener("click", smoothScrollBackToTop);
    
    // function backToTop() {
    //   window.scrollTo(0, 0);
    // }
    
    function smoothScrollBackToTop() {
      const targetPosition = 0;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 750;
      let start = null;
      
      window.requestAnimationFrame(step);
    
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
      }
    }
    
    function easeInOutCubic(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    };

$('.launch-modal').on('click', function(e){
	e.preventDefault();
	$( '#' + $(this).data('modal-id') ).modal();
  });