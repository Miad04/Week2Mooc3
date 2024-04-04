function upDate(previewPic) {
    var imageURL = previewPic.src;
    document.getElementById('image').style.backgroundImage = "url('" + imageURL + "')";
  
    var altText = previewPic.alt;
    document.getElementById('image').innerHTML = altText;
}

function unDo()
{ 
    document.getElementById('image').style.backgroundImage = "url('')";
    var originalText = "Hover over an image below to display here.";
    document.getElementById('image').innerHTML = originalText;
		
}