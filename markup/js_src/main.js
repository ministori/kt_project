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