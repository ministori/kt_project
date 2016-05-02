$(function(){
  /**
   * UA
   */
  var userAgent = navigator.userAgent;
  //var vendor = navigator.platform;

  //alert(vendor);
  //$('body').text(userAgent);

  if (userAgent.match(/Android/i) != null){
    //alert('samsung');
    $('html').addClass('android')
  } else if ( userAgent.match(/iPhone|iPod/i) != null){
    $('html').addClass('ios');
  }

  /**
   * load zoom barcode
   */

  var barcodeZoom = new BarcodeZoom();

  $(window).on('load orientationchange', function(e){
    barcodeZoom.orientation( $('.zoom-barcode-image'), e.orientation );
    setTimeout(function(){
      barcodeZoom.alignBarcode( $('.zoom-barcode-section'), $('.zoom-barcode-image'), e.orientation );
    }, 300);
  });

  $('.barcode-zoom-button').on('click', function(){
    barcodeZoom.moveUpZoomSection( $('.zoom-barcode') );
  });

  $('.zoom-barcode-close').on('click', function(){
    barcodeZoom.moveDownZoomSection( $('.zoom-barcode') );
  });

  /**
   * on/off toggle button
   */

  $('.js-onoff').data('toggle', 'on').on('click', function(){

    if( $(this).data('toggle') == 'on' ){
      $(this).addClass('off').data('toggle', 'off');
    } else {
      $(this).removeClass('off').data('toggle', 'on');
    }

  });

  /**
   * toggle view button
   */

  $('.js-toggle-view').data('view', 'false').each(function(i){
    if( !$(this).hasClass('fold') ){
      $(this).data('view', 'true');
    }
  }).on('click', function(){

    $(this).parents('.contents-block, .js-board-list')
      .siblings('.contents-block, .js-board-list').find('.toggle-view').removeClass('on');
    $(this).parents('.contents-block, .js-board-list')
      .siblings('.contents-block, .js-board-list').find('.js-toggle-view').data('view', 'false').addClass('fold');

    if( $(this).data('view') == 'false' ){
      $(this).data('view', 'true').removeClass('fold').next('.toggle-view').addClass('on');
      $(this).parents('.js-contents').removeClass('fold')
        .siblings('.js-contents').addClass('fold');
      // scrolling
      var top = $(this).parents('.contents-block').offset().top;
      $('html, body').stop().animate({
        scrollTop : top
      }, 500);
    } else {
      $(this).data('view', 'false').addClass('fold').next('.toggle-view').removeClass('on');
      $(this).parents('.js-contents').addClass('fold');
    }
  });

  /**
   * board category horizontal scroll
   */

  $('.boardCategoryScrollWrap').on('scroll', function(){
    var scrollWidth = $('.boardCategoryList').width() - $('.boardCategoryScrollWrap').width() - 5;
    if( $(this).scrollLeft() >= 5 && $(this).scrollLeft() <= scrollWidth ){
      $('.boardCategoryPrev').show();
      $('.boardCategoryNext').show();
    } else if( $(this).scrollLeft() < 5 ) {
      $('.boardCategoryPrev').hide();
    } else if( $(this).scrollLeft() > scrollWidth ){
      $('.boardCategoryNext').hide();
    }
  });

  /**
   * tab view
   */

  $(window).on('load', function(){
    var $tab = $('.tab-block-list');
    if( $tab.size() != 0 ){
      var numTab = $tab.size();
      $tab.css({
        width : (100 / numTab) + '%'
      });
    }
  });

  $('.js-tab').on('click', function(){
    $('.js-tab').removeClass('on');
    $(this).addClass('on');
    $('.js-tab-view').removeClass('on').eq( $(this).parents('.tab-block-list').index()).addClass('on');;
  });

});