/**
 * bar code zoom
 */
var BarcodeZoom = function(){

  this.orientation = function($zoomBarcodeImage, orientation){
    if( orientation == 'landscape' ){
      $zoomBarcodeImage.addClass('landscape');
    } else if( orientation == 'portrait' ) {
      $zoomBarcodeImage.removeClass('landscape');
    }
  };

  this.alignBarcode = function($zoomBarcodeSection, $zoomBarcodeImage){

    var barcodeHeight = $zoomBarcodeImage.innerHeight();

    $zoomBarcodeSection.css({
      'margin-top':-(barcodeHeight/2) + 'px'
    });

  };

  this.moveUpZoomSection = function($zoomBarcodeSection) {

    $zoomBarcodeSection.addClass('on');
    setTimeout(function(){
      $zoomBarcodeSection.addClass('up');
    }, 300)
  };

  this.moveDownZoomSection = function($zoomBarcodeSection) {
    $zoomBarcodeSection.removeClass('up');
    setTimeout(function(){
      $zoomBarcodeSection.removeClass('on');
    }, 300)
  };

};

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

});