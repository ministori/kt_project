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
    $zoomBarcodeSection.addClass('up');
  };

  this.moveDownZoomSection = function($zoomBarcodeSection) {
    $zoomBarcodeSection.removeClass('up');
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

  $(window).on('click', function(){
    console.log( $('.zoom-barcode-image').innerHeight() );
  });

  $(window).orientationchange();

  $('.barcode-zoom-button').on('click', function(){
    barcodeZoom.moveUpZoomSection( $('.zoom-barcode') );
  });

  $('.zoom-barcode-close').on('click', function(){
    barcodeZoom.moveDownZoomSection( $('.zoom-barcode') );
  });

});