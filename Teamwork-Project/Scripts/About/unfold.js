$(document).ready(function(){
    $(".entry a").click(function() {
       $(this).parents('.entry').find('.description').slideToggle(1000);
	    var bottomPosition = $(document).height();
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        return false;
    });
});
