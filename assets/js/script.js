'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



//---------------------------------

const filterItems = document.querySelectorAll("[data-filter-item]");

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}


// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
console.log(pages);

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        console.log(pages[i]);
        navigationLinks[i].classList.add("active");
        console.log(navigationLinks[i]);
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

const logoBtn = document.querySelectorAll("[data-nav-logo]");
console.log(logoBtn);

for (let i = 0; i < logoBtn.length; i++) {

  logoBtn[i].addEventListener('click',function(){
  pages[0].classList.remove("active");
  pages[1].classList.add("active");
  navigationLinks[0].classList.remove("active");
  navigationLinks[1].classList.add("active");
  window.scrollTo(0, 0);
})

}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/**
 * ----------------------------------Project----------------------------------
 */

// project variables
const projectItem = document.querySelectorAll("[data-project-item]");
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectModalCloseBtn = document.querySelector("[data-project-modal-close-btn]");
const projectOverlay = document.querySelector("[data-project-overlay]");
// modal variable
const projectModalImg = document.querySelector("[data-project-modal-img]");
const projectModalLink = document.querySelector("[data-project-modal-link]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalText = document.querySelector("[data-project-modal-text]");

// modal toggle function
const projectModalFunc = function () {
  projectModalContainer.classList.toggle("active");
  projectOverlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < projectItem.length; i++) {

  projectItem[i].addEventListener("click", function () {

    projectModalImg.src = this.querySelector("[data-project-avatar]").src;
    projectModalImg.alt = this.querySelector("[data-project-avatar]").alt;
    projectModalLink.href = this.querySelector("[data-project-link-href]").innerHTML;
    projectModalLink.innerHTML = this.querySelector("[data-project-link-text]").innerHTML;
    projectModalTitle.innerHTML = this.querySelector("[data-project-title]").innerHTML;
    projectModalText.innerHTML = this.querySelector("[data-project-text]").innerHTML;

    projectModalFunc();
  });

}

// add click event to modal close button
projectModalCloseBtn.addEventListener("click", projectModalFunc);
projectOverlay.addEventListener("click", projectModalFunc);

/**
 * ----------------------------------Panel Project----------------------------------
 */

// panel project variables
const panelProjectList = document.querySelectorAll("[data-panel-project]");
const panelProjectModalContainer = document.querySelector("[data-panel-project-modal-container]");
const panelProjectOverlay = document.querySelector("[data-panel-project-overlay]");
// modal variable
const panelProjectModalContent = document.querySelector("[data-panel-project-modal-content]");

// modal toggle function
const panelProjectModalFunc = function () {
  panelProjectModalContainer.classList.toggle("active");
  panelProjectOverlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < panelProjectList.length; i++) {

  panelProjectList[i].addEventListener("click", function () {
    const panelProjectContent = event.currentTarget.querySelector("[data-panel-project-content]");
    if (panelProjectContent) {
      panelProjectModalContent.innerHTML = panelProjectContent.innerHTML;
      panelProjectModalFunc(); // Show the modal
    }
  });

}

// add click event to modal close button
panelProjectOverlay.addEventListener("click", panelProjectModalFunc);

/**
 * ---------------------------------------------------------------------------------
 */

