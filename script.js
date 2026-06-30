function updateTime() {
	let timeUpdate = document.getElementById('timer');
	let now = new Date();
	timeUpdate.innerText = now.toLocaleTimeString();
	
}

updateTime();
setInterval(updateTime, 1000);