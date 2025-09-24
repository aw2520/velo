// Header Menu
let headerToggler = document.querySelector(".header__toggler");
let headerTogglerIcon = document.querySelector(".header__toggler i");
let headerNav = document.querySelector(".header__nav");
let headerNavOpen = "header__nav--open";

headerToggler.onclick = () => {
  headerNav.classList.toggle(headerNavOpen);
  headerTogglerIcon.classList.toggle("lni-menu-hamburger-1");
  headerTogglerIcon.classList.toggle("lni-xmark");
};

// Header Links
let headerLinks = document.querySelectorAll(".header__menu-link");
let headerLinkActive = "header__menu-link--active";

Array.from(headerLinks).forEach((link) => {
  link.onclick = () => {
    Array.from(headerLinks).forEach((siblingsLinks) => {
      siblingsLinks.classList.remove(headerLinkActive);
    });

    link.classList.add(headerLinkActive);
  };
});

// About Statistics Counter
let statNumbers = document.querySelectorAll(".about__statistics-number");

const startCounting = () => {
  statNumbers.forEach((ele) => {
    let value = parseInt(ele.getAttribute("data-num"));
    let symbol = ele.textContent.replace(/[0-9]/g, ""); // Keep non-numeric characters like "+"
    let count = 0;
    let speed = 1000;

    const updateCounter = () => {
      count++;
      if (count <= value) {
        ele.textContent = `${count}${symbol}`;
        setTimeout(updateCounter, speed / value);
      }
    };

    updateCounter();
  });
};

// Projects Filter
let projectsFilterBtn = document.querySelectorAll(".projects__filters-btn");
let projectsFilterBtnActive = "projects__filters-btn--active";
let projectsItems = document.querySelectorAll(".projects__item");

projectsFilterBtn.forEach((btn) => {
  btn.onclick = () => {
    // Toggle Active Class
    projectsFilterBtn.forEach((sibBtn) => {
      sibBtn.classList.remove(projectsFilterBtnActive);
    });

    btn.classList.add(projectsFilterBtnActive);

    // Get filter value
    let value = btn.getAttribute("data-filter");

    projectsItems.forEach((item) => {
      let itemValue = item.getAttribute("data-category");

      if (value === "all" || itemValue === value) {
        item.classList.remove("projects__item--hidden");
      } else {
        item.classList.add("projects__item--hidden");
      }
    });
  };
});

// Footer Year
document.querySelector(".footer__year").innerHTML = new Date().getFullYear();
