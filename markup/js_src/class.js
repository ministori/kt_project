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
