
function setLeftMenu(){
  var url = window.location.href
  $('#ul_menu a').each(function(){
    if ($(this).attr('href') && url.indexOf($(this).attr('href')) != -1) {
      $(this).closest('li').addClass('menu_active')
      if ($(this).closest('li').closest('ul').closest('li')) {
        $(this).closest('li').closest('ul').closest('li').find('.collapsible-header').click().css("font-weight","bolder");
        $collapsHeader = $(this).closest('li').closest('ul').closest('li').find('.collapsible-header')
	//$collapsHeader.closest('li').closest('ul').closest('li').find('.collapsible-header.level1').click();
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
  var elem = document.querySelector('.collapsible.expandable');
  M.Collapsible.init(elem, {accordion: false});
  $('.dropdown-trigger').dropdown();
  setLeftMenu();

  $('#div_summary').empty().append('<ul></ul>');
  $('#div_content h1,h2,h3,h4').each(function(){
    var id = encodeURIComponent($(this).text() + Math.random());
    $(this).attr('id',id)
    if($(this).is('h1')){
      $('#div_summary ul').append('<li><a href="#'+id+'" class="tocAnchor">'+$(this).text()+'</a></li>')
    }
    if($(this).is('h2')){
      $('#div_summary ul').append('<li><a href="#'+id+'" class="tocAnchor" style="margin-left:10px;">'+$(this).text()+'</a></li>')
    }
    if($(this).is('h3')){
      $('#div_summary ul').append('<li><a href="#'+id+'" class="tocAnchor" style="margin-left:20px;">'+$(this).text()+'</a></li>')
    }
    if($(this).is('h4')){
      $('#div_summary ul').append('<li><a href="#'+id+'" class="tocAnchor" style="margin-left:30px;">'+$(this).text()+'</a></li>')
    }
    $(this).addClass('scrollspy');
  });
  $('.scrollspy').scrollSpy();
})

$('blockquote p img[title*="bulb"]').closest('blockquote').css('background', "#70db70");
$('blockquote p img[title*="bulb"]').closest('p').css('text-indent', '-40px').css('margin-left', '40px').css('margin-right','1em');
$('blockquote p img[title*="bulb"]').attr('width','30').attr('height','30');
