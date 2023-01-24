var navBar = document.getElementById("navBar");
      window.onscroll = function() {
        if (window.scrollY > 22) {
          navBar.classList.add("scrolled");
        } else {
          navBar.classList.remove("scrolled");
        }
      };