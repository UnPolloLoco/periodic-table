setTimeout(() => {
	alert(JSON.stringify(document.body.getBoundingClientRect()));
	alert(document.defaultView.getComputedStyle(document.body).backgroundColor);
}, 500);