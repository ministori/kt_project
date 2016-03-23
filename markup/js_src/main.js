/********
 * Main *
 ********/

// Check UA
if( navigator.userAgent.indexOf('Safari') > 0 ){
	if( navigator.userAgent.indexOf('Chrome') > 0 ){
		$('html').addClass('chrome');
	} else {
		$('html').addClass('Safari');
	}
} else if( navigator.userAgent.indexOf('Firefox') > 0 ){
	$('html').addClass('firefox');
} else if( navigator.userAgent.indexOf('Trident/7.0') > 0 ){
	$('html').addClass('ie11');
} else if( navigator.userAgent.indexOf('MSIE 10.0') > 0 ){
	$('html').addClass('ie10');
}

$(function(){

	/*
		maiin
	 */

	// gnb
	var gnb = new GnbEvent();

	$('.gnb-menu-item>.menu-link').on( 'mouseenter', function(){
		gnb.showSubMenu( $(this).parents('.gnb-menu-item') );
	});

	$('.gnb').on('mouseleave', function(){
		gnb.hideSubMenu();
	});

	// franchise view
	var view = new FranchiseView();

	$('.view-thumb-item').on('click', function(){
		view.viewBig($(this));
	});

	// program intro
	var prgTab = new ProgramTab();

	$('.prg-tab-link').on('click', function(e){
		e.preventDefault();
		prgTab.selectTab($(this));
	});

	// success case link
	var story = new StoryCase();

	$('.story-case-link-item').on('mouseenter', function(){
		story.showEachCase($(this), $('.story-case-image-item'));
	});

	// footer family site link
	var familySite = new FamilySite();

	$('.footer-family-title').data('open', 'false').on('click', function(){
		familySite.toggleFamilySiteList($(this));
	});

	/*
		success case
	 */

	// success case category tab
	var successTab = new SuccessTab();

	$('.search-tab-link').on('click', function(){
		successTab.tabOn( $(this) );
	});

	// popup close
	$('.popup-close').on('click', function(){
		$('.popup').hide();
	});

	/*
		online reservation
	 */

	$('.cal-table td').on('click', function(){

		$('.cal-table td').removeClass('on');
		$(this).addClass('on');

	});

	/* quick menu */
	$("#quick-menu-a").animate( { "top": $(document).scrollTop() + 225 +"px" }, 200 );
	$(window).scroll(function(){
		$("#quick-menu-a").stop();
		$("#quick-menu-a").animate( { "top": $(document).scrollTop() + 225 + "px" }, 500 );
	});



});