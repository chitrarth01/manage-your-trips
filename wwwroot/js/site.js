//site.js

//Anonymous Function:
(function () {

    $("#username").text("Chitrarth Singh");


    //var main = $("#main");
    //main.on("mouseenter", function () {
    //    main.css("background-color", "#888");
    //});

    //main.on("mouseleave", function () {
    //    main.css("background-color", "");
    //});


    //var menuItems = $("ul.menu li a");
    //menuItems.on("click", function () {
    //    var me = $(this);
    //    alert(me.text());

    //});
    var $sidebarAndWrapper = $("#sidebar,#wrapper");
    var $icon = $("#sidebarToggle i.fa");

    $("#sidebarToggle").on("click", function () {

        $sidebarAndWrapper.toggleClass("hide-sidebar");
        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            //$(this).text("Show Hidebar"); 
            $icon.removeClass("fa-chevron-left");
            $icon.addClass("fa-chevron-right");
        }
        else {
            //$(this).text("Hide Sidebar");
            $icon.addClass("fa-chevron-left");
            $icon.removeClass("fa-chevron-right");
        }
    });


})();

