document.getElementById('subscriptionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const package = document.getElementById('package').value;
    const frequency = document.getElementById('frequency').value;
    const email = document.getElementById('email').value;

    if (package && frequency && email) {
        console.log("Tilmelding:", { package, frequency, email });

        this.style.display = 'none';
        document.getElementById('confirmation').style.display = 'block';
    }
});

function share(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Jeg har tilmeldt mig luksus tøj abonnement – tjek det ud!");

    let shareUrl = "";
    if (platform === "facebook") {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === "linkedin") {
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    }

    window.open(shareUrl, '_blank');
}