var totalImages = 5;

function shiftImage(x) {
	var imageSource =  document.getElementById('categories').src;
	var imageNumber =  parseInt(imageSource.match(/\d/)[0]) + x;
	if(imageNumber == 0) {
		imageNumber = totalImages;
	} else if(imageNumber == totalImages + 1){
		imageNumber = 1;
	}
	document.getElementById('categories').src = imageSource.replace(/\d/, imageNumber);
	console.log(document.getElementById('categories').src);
}
