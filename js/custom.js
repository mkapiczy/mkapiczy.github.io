$('.sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    if( $( "#menu-button-row" ).hasClass( "navbar-left" )){
        $( "#menu-button-row" ).removeClass( "navbar-left" );
    } else {
        $("#menu-button-row").addClass("navbar-left");
    }
});


$('#sidebar-content').width($('#sidebar').width()).affix();