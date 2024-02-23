function redirect(gifUrl) {
    
    // Display gif container
    var gifContainer = document.getElementById('gif-container');
    gifContainer.style.display = 'block';

    // Create and append img element to the gif container
    var imgElement = document.createElement('img');
    imgElement.src = gifUrl;
    gifContainer.appendChild(imgElement); 
}
