var iconBefore = document.querySelector('.icon-before');
var iconAfter = document.querySelector('.icon-after');
var menuPage = document.querySelector('.menu-page');
function HideMenu() {
    iconBefore.style.opacity = '1';
    iconBefore.style.zIndex = '1';
    iconAfter.style.opacity = '0';
    iconAfter.style.zIndex = '0';
    menuPage.style.opacity = '0';
    menuPage.style.transform = 'translateX(-100%)'
}
function ShowMenu() {
    iconBefore.style.opacity = '0';
    iconBefore.style.zIndex = '0';
    iconAfter.style.opacity = '1';
    iconAfter.style.zIndex = '1';
    menuPage.style.opacity = '1';
    // menuPage.style.display = 'block';
    menuPage.style.transform = 'translateX(0%)'
}

