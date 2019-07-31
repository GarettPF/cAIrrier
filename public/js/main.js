let overlayOpen = false;
$('#sideMenu').on('click', () => {
  if (window.matchMedia("(min-width: 992px)").matches) {
    console.log('test1')
    if (overlayOpen) {
      overlayOpen = false;

      $('#overlay')[0].style.right = "-30%";
      $('#homeText')[0].style.left = "0";
      $('#socialLinks')[0].style.left = "0";

      $('#line1')[0].style.marginBottom = "13px";
      $('#line2')[0].style.marginBottom = "13px";
      $('#line3')[0].style.opacity = "1";

      $('#line1')[0].style.transform = "rotate(0deg)";
      $('#line2')[0].style.transform = "rotate(0deg)";

      $('#sideMenu').removeClass('overlayOpen');
      $('#sideMenu').addClass('overlayClose');

    } else {
      overlayOpen = true;

      $('#overlay')[0].style.right = "0";
      $('#homeText')[0].style.left = "-15%";
      $('#socialLinks')[0].style.left = "-15%";

      $('#line1')[0].style.marginBottom = "-3px";
      $('#line2')[0].style.marginBottom = "-3px";
      $('#line3')[0].style.opacity = "0";

      $('#line1')[0].style.transform = "rotate(45deg)";
      $('#line2')[0].style.transform = "rotate(-45deg)";

      $('#sideMenu').removeClass('overlayClose');
      $('#sideMenu').addClass('overlayOpen');
    }
  } else if (window.matchMedia("(min-width: 0px)").matches) {
    console.log('test2')
    if (overlayOpen) {
      overlayOpen = false;

      $('#overlay')[0].style.width = "0";
      // $('#homeText')[0].style.left = "0";
      // $('#socialLinks')[0].style.left = "0";

      $('#line1')[0].style.marginBottom = "13px";
      $('#line2')[0].style.marginBottom = "13px";
      $('#line3')[0].style.opacity = "1";

      $('#line1')[0].style.transform = "rotate(0deg)";
      $('#line2')[0].style.transform = "rotate(0deg)";

      $('#sideMenu').removeClass('overlayOpen');
      $('#sideMenu').addClass('overlayClose');

    } else {
      overlayOpen = true;

      $('#overlay')[0].style.width = "65%";
      // $('#homeText')[0].style.left = "-15%";
      // $('#socialLinks')[0].style.left = "-15%";

      $('#line1')[0].style.marginBottom = "-3px";
      $('#line2')[0].style.marginBottom = "-3px";
      $('#line3')[0].style.opacity = "0";

      $('#line1')[0].style.transform = "rotate(45deg)";
      $('#line2')[0].style.transform = "rotate(-45deg)";

      $('#sideMenu').removeClass('overlayClose');
      $('#sideMenu').addClass('overlayOpen');
    }
  }
})

//Media Queries for Home Page Overlay
function responsive() {

  /* Smartphone Portrait Mode */
  if (window.matchMedia("(min-width: 0px)").matches) {

  }

  /* Small devices (landscape phones, 576px and up) */
  if (window.matchMedia("(min-width: 576px)").matches) {

  }

  /* Medium devices (tablets, 768px and up) */
  if (window.matchMedia("(min-width: 768px)").matches) {

  }

  /* Large devices (desktops, 992px and up) */
  if (window.matchMedia("(min-width: 992px)").matches) {

  }

  /* Extra large devices (large desktops, 1200px and up) */
  if (window.matchMedia("(min-width: 1200px)").matches) {

  }
}
responsive(); //determine what to enable/disable on load

$(window).resize(() => {
  responsive();
});