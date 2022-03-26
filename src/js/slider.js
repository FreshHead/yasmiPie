const totalImages = 124;
function shiftImage(x) {
	const galleryImage = document.getElementById("gallery-image");
	const imagePath = getComputedStyle(galleryImage).backgroundImage;
	var imageNumber = parseInt(imagePath.match(/(\d*)\.jpg/)[1]) + x;

	if (imageNumber === 0) {
		imageNumber = totalImages;
	} else if (imageNumber == totalImages + 1) {
		imageNumber = 1;
	}
	galleryImage.style.backgroundImage = imagePath.replace(/\d*\.jpg/, imageNumber + ".jpg");
}
