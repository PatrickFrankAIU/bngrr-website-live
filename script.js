document.addEventListener('DOMContentLoaded', function() {
    var content = document.querySelector('.additional-content');
    // Explicitly set the initial display state
    content.style.display = 'none'; // Ensures consistency

    document.getElementById('expand-btn').addEventListener('click', function() {
        // Toggle based on the current state
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
        // Adjust button text accordingly
        this.textContent = content.style.display === 'block' ? 'Read Less' : 'Read More';
    });

    var expandBtnImage = document.querySelector('.expand-btn-image');
    var imageContent = document.querySelector('.image-content');
    // Assuming imageContent is visible by default as per previous adjustments
    expandBtnImage.addEventListener('click', function() {
        imageContent.style.display = imageContent.style.display === 'none' ? 'block' : 'none';
        this.textContent = imageContent.style.display === 'block' ? 'Read Less' : 'Read More';
    });
});
