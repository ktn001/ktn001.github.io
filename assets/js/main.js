
function setLeftMenu(){
  var url = window.location.href
  $('#ul_menu a').each(function(){
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
  $('#div_content ul').each(function() {
    $(this).addClass('browser-default');
  })
  $('.sidenav').sidenav();
  $('.collapsible').collapsible();
  $('.dropdown-trigger').dropdown();
  setLeftMenu();
})

