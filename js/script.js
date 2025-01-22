"use strict";

const activeBar = document.querySelectorAll(".tab");

// iterate through each nodes
activeBar.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (tab === activeBar[0]) {
      // remove active from tabs
      activeBar[1].classList.remove("active");
      activeBar[2].classList.remove("active");
      // add active class to clicked tab
      activeBar[0].classList.add("active");
    } else if (tab === activeBar[1]) {
      // remove classes from other tabs
      activeBar[0].classList.remove("active");
      activeBar[2].classList.remove("active");
      // add active class to clicked tab
      activeBar[1].classList.add("active");
    } else if (tab === activeBar[2]) {
      activeBar[0].classList.remove("active");
      activeBar[1].classList.remove("active");
      // add active class to clicked tab
      activeBar[2].classList.add("active");
    }
  });
});
