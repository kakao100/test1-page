//関数
function refreshServerInfo() {
    const req = new XMLHttpRequest();
    //when load
    req.addEventListener('load', function() {
	//(parse)によって入手したstring をオブジェクトに変更
	const messages = JSON.parse(this.responseText);
	//文書追加する場所の決定　ms のタグがあるところ(HTML側)
	const parent = document.getElementById('ms');
	//for文でオブジェクトを処理
	messages.forEach(message => {
	    //pタグで囲う
	    const p = document.createElement('p');
	    //表示する中身の決定　オブジェクトになっている文字データを呼ぶ
	    p.textContent = `${message.time}    ${message.name}    ${message.text}`;
	    //表示場所に文書追加
	    parent.appendChild(p);
	});
    });
    //呼び出し
    req.open('GET', 'http://local.isc.meiji.ac.jp/~re00133/wp/chat1/chat.cgi', true);
    req.send();

}
//関数呼び出し
refreshServerInfo();
