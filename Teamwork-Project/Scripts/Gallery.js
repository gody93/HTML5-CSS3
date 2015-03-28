var imagesCount = 11;
var path = 'Images/GalleryDB/';
var currImage = 1;

function loadNextImage() {
    currImage++;
    if(currImage > imagesCount) {
        currImage = 1;
    }
    document.getElementById("current-image").src = path + currImage + '.jpg';

    changeLeftAsideImage();
    changeRightAsideImage();
}

function loadPreviousImage() {
    currImage--;
    if(currImage < 1) {
        currImage = imagesCount;
    }
    document.getElementById("current-image").src = path + currImage + '.jpg';

    changeLeftAsideImage();
    changeRightAsideImage();
}

function changeLeftAsideImage() {
    if (currImage != 1) {
        document.getElementById("left-image").src = path + (currImage - 1) + '.jpg';
    } else {
        document.getElementById("left-image").src = path + 11 + '.jpg';
    }
}

function changeRightAsideImage() {
    if (currImage != 11) {
        document.getElementById("right-image").src = path + (currImage + 1) + '.jpg';
    } else {
        document.getElementById("right-image").src = path + 1 + '.jpg';
    }
}
