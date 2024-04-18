
window.addEventListener("load",function(event) {
    lightGallery(document.getElementById('lightgallery'), {
        download:true,
        plugins: [lgZoom, lgFullscreen , lgHash, lgPager, lgRotate,  lgThumbnail, lgMediumZoom],
        speed: 500,
        
    });
})

