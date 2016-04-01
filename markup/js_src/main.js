$(function(){

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

  $(window).orientationchange();

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

  $('.js-toggle-view').data('view', 'false').on('click', function(){

    if( $(this).data('view') == 'false' ){
      $(this).parents('.contents-block').find('.toggle-view').addClass('on');
      $(this).text('닫기').addClass('on').data('view', 'true');
      // article toggle
      if( $('.article-division').hasClass('toggle-article') ){
        $('.article-division.toggle-article').addClass('on');
      }
    } else {
      $(this).parents('.contents-block').find('.toggle-view').removeClass('on');
      $(this).text('더보기').removeClass('on').data('view', 'false');
      // article toggle
      if( $('.article-division').hasClass('toggle-article') ){
        $('.article-division.toggle-article').removeClass('on');
      }
    }



  });

});