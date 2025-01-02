document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
});
<script>
    // Disable right-click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Disable specific keyboard shortcuts
    document.addEventListener('keydown', event => {
        if (event.key === 'u' && (event.ctrlKey || event.metaKey)) {
            event.preventDefault();
            alert('Viewing the source code has been disabled!');
        }
    });
</script>
