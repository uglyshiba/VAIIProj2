document.addEventListener('DOMContentLoaded', function () {
    const defaultProfilePicture = document.getElementById("registerProfilePicture")
    if(defaultProfilePicture) {
        defaultProfilePicture.src = resizeImage(defaultProfilePicture);
    }
})

function resizeImage (image) {
    if(image) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 200;
        canvas.height = 200;
        ctx.drawImage(image, 0, 0, 200, 200);
        return canvas.toDataURL('image/jpeg', 1.0);
    } else {
        return null;
    }
}