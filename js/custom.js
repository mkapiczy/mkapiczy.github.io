$('.sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');

    if($('#sidebar').hasClass("active")){
        $('#sidebarCollapse2').hide();
        $('#menu-button-row').css({
            left: $('#sidebar').width()
        });
    } else{
        $('#sidebarCollapse2').show();
        $('#menu-button-row').css({
            left: 0
        });
    }
});


$('#sidebar-content').width($('#sidebar').width()).affix();
