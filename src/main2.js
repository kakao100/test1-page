//関数
$(function(){
  function sh(){
    const $messages = $('#messages');
    $.getJSON('http://local.isc.meiji.ac.jp/~re00133/wp/chat1/chat.cgi').then(
      function(messages){
        $messages.empty();
        messages.forEach(message =>{
          $messages.append('<p>${message.time}    ${message.name}    ${message.text}</p>');
        });
      }
    );
  }
  sh();
}
