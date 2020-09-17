$(document).ready(function()
{
	$("#collapse1").click(function(){
		if ($(this).hasClass("fa-chevron-down")){
			$(this).removeClass("fa-chevron-down")
			$(this).addClass("fa-chevron-up")
		} else {
			$(this).removeClass("fa-chevron-up")
			$(this).addClass("fa-chevron-down")
		}
	})
})