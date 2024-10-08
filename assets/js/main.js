
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
      $(this).after('<hr>')
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
  var regex = /\/([a-z]{2}_[A-Z]{2})\//g;
  var corresp  = regex.exec(window.location.href)
  if(corresp !== null && corresp[1]){
    $('.sel_lang').val(corresp[1])
  }
  $('select').formSelect();

  setTimeout (function() {
    images = document.getElementById('div_content').getElementsByTagName('img')
    for (let i = 0; i < images.length; i++) {
      if (images[i].naturalWidth == 0 ) {
        src = images[i].getAttribute('src')
        console.warn ("L'image '" + src + "' est introuvable")
        src = src.replace(page_lang,'fr_FR')
        images[i].setAttribute('src',src)
      }
    }
  },200)
})

$('.sel_lang').on('change',function() {
  var regex = /\/([a-z]{2}_[A-Z]{2})\//g;
  var corresp  = regex.exec(window.location.href);
  var url = window.location.href.replace(corresp[1], $(this).find('option:selected').attr('value'));
  if(url.endsWith('/')){
    url += 'index';
  }
  window.location.href = url;
})

$('blockquote').css({"padding-bottom":"1px"});
$('blockquote p img[title*="warning"]').closest('blockquote').css('background', "red");
$('blockquote p img[title*="bulb"]').closest('blockquote').css('background', "#70db70");
$('blockquote p img[title]').closest('p').css({"text-indent":"-35px","margin-left":"30px","margin-right":"1em"});
$('blockquote p img[title]').css({"width":"30px","height":"30px","position":"relative",top:"10px"});

