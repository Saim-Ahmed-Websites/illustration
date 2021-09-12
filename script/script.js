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


    })

    $("#flexSwitchCheckDefault").click(function () {
        // console.log('clicked')
        $('body').toggleClass('dark')
        $('a').toggleClass('dark')
        $('.leftIntro button').toggleClass('dark')
    })











})