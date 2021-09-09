$(document).ready(function () {
    $('#navbarNav ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
    })

    window.addEventListener('scroll', function () {
        let header = document.querySelector('#header');
        let nav_a = document.querySelector('#navbarNav');
        let windowPosition = window.scrollY > 0;

        header.classList.toggle('active-nav', windowPosition)

        nav_a.classList.toggle('active-a', windowPosition)

        // navBar.remove('navbar-light ', windowPosition);
        // navBar.add('navbar-dark ', windowPosition);

        // $("#navBar").hasClass("navbar-light", windowPosition) ? navBar.removeClass("navbar-light") && navBar.addClass("navbar-dark") : null


    })












})