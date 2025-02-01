"use strict";

const activeBar = document.querySelectorAll(".tab");
const featuresTab = document.querySelectorAll(".features__tab1");

// // iterate through each nodes
// activeBar.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     if (tab === activeBar[0]) {
//       // remove active from tabs
//       activeBar[1].classList.remove("active");
//       activeBar[2].classList.remove("active");
//       // add active class to clicked tab
//       activeBar[0].classList.add("active");
//     } else if (tab === activeBar[1]) {
//       // remove classes from other tabs
//       activeBar[0].classList.remove("active");
//       activeBar[2].classList.remove("active");
//       // add active class to clicked tab
//       activeBar[1].classList.add("active");
//     } else if (tab === activeBar[2]) {
//       activeBar[0].classList.remove("active");
//       activeBar[1].classList.remove("active");
//       // add active class to clicked tab
//       activeBar[2].classList.add("active");
//     }
//   });
// });

// refactor code to be more efficient and readable
activeBar.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // add "hidden" class to all features Tab
    featuresTab.forEach((ele) => {
      ele.classList.add("hidden");
      // Add show class to the corresponding tab
      if (tab === activeBar[1]) {
        featuresTab[1].classList.remove("hidden");
      } else if (tab === activeBar[2]) {
        featuresTab[2].classList.remove("hidden");
      } else {
        featuresTab[0].classList.remove("hidden");
      }
    });
    // Remove the "active" class from all tabs
    activeBar.forEach((t) => {
      t.classList.remove("active");
    });
    // Add the "active" class to the clicked tab
    tab.classList.add("active");
  });
});

// accordion feature
const accordionFlex = document.querySelectorAll(".accordion__flex");
const accordionDisplay = document.querySelectorAll(".accordion__display");
const faqAnswer = document.querySelectorAll(".faq__answers");
const icon = document.querySelectorAll(".icon");

accordionFlex.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele === accordionFlex[0]) {
      faqAnswer[0].classList.toggle("open");
    } else if (ele === accordionFlex[1]) {
      faqAnswer[1].classList.toggle("open");
    } else if (ele === accordionFlex[2]) {
      faqAnswer[2].classList.toggle("open");
    } else {
      faqAnswer[3].classList.toggle("open");
    }
  });
});
