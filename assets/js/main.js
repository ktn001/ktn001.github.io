function on_SidenavClosed(sidenav){
	sidenav = $(sidenav);
	main = $('#div_content')
	main.offset({left:0});
	main.width(main.width()+sidenav.width());
}

function on_SidenavOpened(sidenav){
	sidenav = $(sidenav);
	main = $('#div_content')
	main.offset({left:sidenav.width()});
	main.width(main.width()-sidenav.width());
}

function setLeftMenu(){
  var url = window.location.href
  $('#ul_menu a').each(function(){
	 console.log("url");
    if ($(this).attr('href') && url.indexOf($(this).attr('href')) != -1) {
      $(this).closest('li').addClass('menu_active')
      if ($(this).closest('li').closest('ul').closest('li')) {
        $(this).closest('li').closest('ul').closest('li').find('.collapsible-header').click()
        return false
      }
    }
  })
}

$(function(){
	$('.sidenav').sidenav({onCloseStart: on_SidenavClosed, onOpenStart: on_SidenavOpened });
	setTimeout(function(){
    if ($('#slide-out').length > 0 && window.matchMedia("only screen and (max-width: 760px)").matches) {
      $('.sidenav').sidenav();
    }
  }, 100);
  setTimeout(function(){
    if ($('#slide-out').length > 0 && window.matchMedia("only screen and (max-width: 760px)").matches) {
      $('.sidenav').sidenav();
    }
  }, 250);
  setTimeout(function(){
    if ($('#slide-out').length > 0 && window.matchMedia("only screen and (max-width: 760px)").matches) {
      $('.sidenav').sidenav();
    }
  }, 500);
  $('.collapsible').collapsible();
  $('.dropdown-trigger').dropdown();
  setLeftMenu();
})

