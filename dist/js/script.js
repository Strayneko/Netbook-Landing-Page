const el = el => document.querySelector(el);
const elAll = el => document.querySelectorAll(el);
const animateElement = (el, animClass) => {
  elAll(el).forEach((e, i) => {
    setTimeout(() => {
      elAll(el)[i].classList.remove("opacity-0");
      elAll(el)[i].classList.add(animClass);
    }, 300 * (i + 1));
  });
};
/*
      * =================
      * Navbar onscroll behavior
      * =================
      */
window.onscroll = () => {
  const header = el("#header");
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add("navbar-fixed");
    header.classList.remove("lg:w-10/12");
    header.classList.remove("lg:top-8");
    header.classList.remove("lg:rounded-lg");
  } else {
    header.classList.add("lg:rounded-lg");
    header.classList.add("lg:w-10/12");
    header.classList.add("lg:top-8");
    header.classList.remove("navbar-fixed");
  }

  /*
* ========================
* Element on scroll animation
* ========================
*/
  // About section
  if (window.pageYOffset > el("#about").offsetTop - 400) {
    el("#about .left .text").classList.remove("opacity-0");
    el("#about .left .text").classList.add("animate__lightSpeedInLeft");
    animateElement("#about .left ul li", "animate__lightSpeedInLeft");

    elAll("#about .right div img").forEach((e, i) => {
      setTimeout(() => {
        elAll("#about .right div img")[i].classList.remove("opacity-0");
        elAll("#about .right div img")[i].classList.add("animate__fadeIn");
      }, 350 * (i + elAll("#about .left ul li").length + 1));
    });
  }
  // Achievement section
  if (window.pageYOffset > el("#achievement").offsetTop - 400) {
    animateElement("#achievement .content", "animate__bounceIn");
  }

  // Community section
  if (window.pageYOffset > el("#community").offsetTop - 500) {
    el("#community .box-title").classList.remove("opacity-0");
    el("#community .box-title").classList.add("animate__fadeInDownBig");
    animateElement("#community .card-long", "animate__fadeInDownBig");
  }
};
/*
       * ===============
       * Hamburger button
       * ===============
       */
let show = false;
const hamburgerBtn = el("#hamburger");
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("hamburger-active");

  if (show == false) {
    el(".navbar-menu").classList.toggle("hidden");
    el(".navbar-menu").classList.remove("animate__fadeOut");
    el(".navbar-menu").classList.add("animate__fadeIn");
  } else {
    el(".navbar-menu").classList.remove("animate__fadeIn");
    el(".navbar-menu").classList.add("animate__fadeOut");
    setTimeout(() => {
      document
        .querySelector(".navbar-menu")
        .classList.remove("animate__fadeOut");
    }, 300);
    setTimeout(() => {
      el(".navbar-menu").classList.toggle("hidden");
    }, 200);
  }
  show = !show;
});
