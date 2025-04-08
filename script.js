
var iconBefore = document.querySelector('.icon-before');
var iconAfter = document.querySelector('.icon-after');
var menuPage = document.querySelector('.menu-page');
var menu = document.querySelector('.menu');
var page = document.querySelector('.page');
var subPageTitle = document.querySelector('.subpage-title');
function HideMenu() {
    iconBefore.style.opacity = '1';
    iconBefore.style.zIndex = '1';
    iconAfter.style.opacity = '0';
    iconAfter.style.zIndex = '-1';
    menuPage.style.opacity = '0';
    menuPage.style.width = '1%';
    menu.style.width = '1%';
    subPageTitle.style.zIndex = '1';
    menuPage.style.transform = 'translateX(-100%)'
    page.style.zIndex = '1';
}
function ShowMenu() {
    iconBefore.style.opacity = '0';
    iconBefore.style.zIndex = '0';
    iconAfter.style.opacity = '1';
    iconAfter.style.zIndex = '1';
    menuPage.style.opacity = '1';
    menuPage.style.width = '100%';
    menuPage.style.transform = 'translateX(0%)'
    menu.style.width = 'var(--menu-width)';
    subPageTitle.style.zIndex = '-1';
    page.style.zIndex = '-1';
}



document.getElementById('downloadButton').addEventListener('click', function() {
    var mapUrl = 'https://maps.app.goo.gl/9bfcvuAEDbAiaaDZ7';
    var link = document.createElement('a');
    link.href = mapUrl;
    link.setAttribute('download', 'taj_mahal_map.png');
    link.click();
  });

// -------------------------------gallery-----------------------------------




