function showMessages() {
    const request = new XMLHttpRequest();

    request.addEventListener('load', function() {
	    const messages = JSON.parse(this.responseText);

	    const messagesElement = document.getElementById("messages");
	    while (messagesElement.firstChild) {
		messagesElement.removeChild(messagesElement.firstChild);
	    }

	    messages.forEach(message => {
		    const p = document.createElement('p');
		    p.textContent = `time: ${message.time}, name: ${message.name}, text: ${message.text}`;
		    messagesElement.appendChild(p);
		});
	});

    request.open('GET', 'http://local.isc.meiji.ac.jp/~re00133/wp/chat1/chat.cgi', true);
    request.send();

}

document.getElementById("submit").addEventListener("click", function() {
	const request = new XMLHttpRequest();
	const message = new FormData(document.getElementById("message"));

	request.addEventListener('load', showMessages);
	request.open('POST', 'http://local.isc.meiji.ac.jp/~re00133/wp/chat1/chat.cgi', true);
	request.send(message);

    });

setInterval(showMessages, 5000);
   