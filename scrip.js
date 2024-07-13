var profilemenu = document.querySelector(".profile-menu-wrap");
var showMore = document.querySelector(".sidebar-activity");
var moreLink =document.getElementById("showMoreLink")

function profileMenuToggle() {
  profilemenu.classList.toggle("open-menu");
}

function sidebarActivityToggle() {
  showMore.classList.toggle("open-activity");

  if (showMore.classList.contains("open-activity")) {
    moreLink.innerHTML = "Show less <b>-</b>"
  } else {
    moreLink.innerHTML = "Show more  <b>+</b>";
  }
}
