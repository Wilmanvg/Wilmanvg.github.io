function openNavigation() {
	
	if ($(".UINavigationCompactConatiner").length) {
		$(".UINavigationCompactConatiner").fadeToggle(100);
	}
	else {
		$("<div class=\"UINavigationCompactConatiner\"> <ul style=\"list-style: none; line-height: 60px;\"> <li><a class=\"UINavigationItem\" href=\"/index\">Home</a></li> <li><a class=\"UINavigationItem\" href=\"/apps\">iOS Development</a></li> <li><a class=\"UINavigationItem\" href=\"/work\">Work</a></li> <li><a class=\"UINavigationItem\" href=\"/education\">Education</a></li> <li><a class=\"UINavigationItem\" href=\"mailto:nporter3@gmail.com\">Contact</a></li> </ul> </div>").clone().hide().prependTo("body").fadeToggle(100);
	}
	
}