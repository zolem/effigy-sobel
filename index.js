const Sobel = require('sobel');
exports.getElement = () => {
    var div = $('<li>').css("padding", 0);
    var btn = $('<a href="#">').appendTo(div);
    btn.html("<i class='fa fa-bolt'></i>&nbsp;Sobel");
    btn.on('click', (e) => {
        btn.trigger('runOperation');
    });
    return div;
}

/**
 * @description Takes pixelData object (data:byteArray, width:number, height:number)
 */

exports.runOperation = (pixelData) => {
    let d = $.Deferred();
    var rowLength = 4;

    var sobelData = Sobel(pixelData);
    let imageData = new ImageData(sobelData, pixelData.width, pixelData.height);

    d.resolve(imageData);
    return d.promise();
}