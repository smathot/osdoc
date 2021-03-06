function contribute5() {
	window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MNBZ7356M4FN2', '_blank');
}

function contribute10() {
	window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FQDD4U9ZCS8ZE', '_blank');
}

function contribute25() {
	window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TT7GLL9UTZRR8', '_blank');
}

function recommend_download() {

	var link =document.getElementById("cogsci-recommended-download-link");
	if (link == null) return;

	var OSName=null;
	var msg = null;
	var url = null;

	if (navigator.appVersion.indexOf("Win") != -1) OSName="Windows";
	if (navigator.appVersion.indexOf("Mac") != -1) OSName="MacOS";
	if (navigator.appVersion.indexOf("Linux") != -1) OSName="Linux";

	if (OSName == "Linux") {
		link.innerHTML = "View Linux installation options";
		link.href = "#ubuntu";
	} else if (OSName == "Windows") {
		link.innerHTML = "Windows installer (.exe)"
		link.href = "$url-windows-exe-py3$";
	} else if (OSName == "MacOS") {
		link.innerHTML = "Mac OS package (.dmg)"
		link.href = "#mac-os";
	} else {
		link.innerHTML = "Sorry, I don't recognize your system!<br />Maybe you can try Anaconda?";
		link.href = "#anaconda-cross-platform";
	}
}

recommend_download();

jQuery(document).on('click', '.mega-dropdown', function(e) {
  e.stopPropagation()
})
