const time = document.getElementById('time');

function showTime(){
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();

	if (hour < 10) {
		hour = "0"+hour;
	}

	if (minute < 10) {
		minute = "0"+minute;
	}

	if (second < 10) {
		second = "0"+second;
	}

	time.innerHTML = `
	<h3>${hour}h : ${minute}m : ${second}s</h3>
	`;
}

setInterval(showTime, 1000);