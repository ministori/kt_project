/**
              _____       _____       _____             _____
   _______ ______(_)_________(_)________  /________________(_)
   __  __ `__ \_  /__  __ \_  /__  ___/  __/  __ \_  ___/_  /
   _  / / / / /  / _  / / /  / _(__  )/ /_ / /_/ /  /   _  /
   /_/ /_/ /_//_/  /_/ /_//_/  /____/ \__/ \____//_/    /_/   2015.08

 */

/*********
 * Class *
 *********/

/**
 * GNB Event Action
 */
var GnbEvent = function(){

  var _hideSubMenu = function(){
    $('.gnb-sub').removeClass('on');
  };


  this.showSubMenu = function(gnbMenu){
    _hideSubMenu();
    gnbMenu.next('.gnb-sub').addClass('on');
  };

  this.hideSubMenu = function(){
    _hideSubMenu();
  };

};

/**
 * Main success story contents Mouse Event
 */
var StoryCase = function(){

  var _hideCase = function(){
    $('.story-case-image-item').removeClass('on');
    $('.story-case-link-item').removeClass('on');
  };

  this.showEachCase = function( eachCase, caseImage ){
    var index = eachCase.index();
    _hideCase();
    eachCase.addClass('on');
    caseImage.eq(index).addClass('on');
  };

};

/**
 * program intro tab
 */
var ProgramTab = function(){

  var _initTab = function(){
    $('.prg-tab-link').removeClass('on');
    $('.prg-intro').removeClass('on');
  };

  this.selectTab = function(tab){

    _initTab();

    var tabIndex = tab.parents('.prg-tab-item').index();
    tab.addClass('on');
    $('.prg-intro').eq(tabIndex).addClass('on');
  }
};

/**
 * franchise view event
 */
var FranchiseView = function(){

  var _initBig = function(){
    $('.view-big-item').removeClass('on');
  };

  this.viewBig = function(thumb){

    _initBig();

    var thumbIndex = thumb.index();
    $('.view-big-item').eq(thumbIndex).addClass('on');

  }

};

/**
 * success case category tab event
 */
var SuccessTab = function(){

  var _initTab = function(){
    $('.search-tab-link').removeClass('on');
    $('.search-tab-item').removeClass('on on-prev');
  };

  this.tabOn = function(tab){
    _initTab();
    tab.addClass('on').parents('.search-tab-item').addClass('on').prev().addClass('on-prev');
  };
};

/**
 * Footer Family Site
 */
var FamilySite = function(){

  this.toggleFamilySiteList = function(family){
    if( family.data('open') == 'false' ) {
      family.data('open', 'true').next('.footer-family-list').addClass('on');
    } else {
      family.data('open', 'false').next('.footer-family-list').removeClass('on');
    }
  };

};

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