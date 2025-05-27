function check() {
	alert(JSON.stringify(document.body.getBoundingClientRect()));
	alert(document.defaultView.getComputedStyle(document.body).backgroundColor);
}

check();

setTimeout(check, 500);