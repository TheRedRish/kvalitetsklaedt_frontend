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

document.getElementById('subscriptionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const packageType = document.getElementById('package').value;
    const frequency = parseInt(document.getElementById('frequency').value);
    const email = document.getElementById('email').value;

    if (!packageType || !frequency || !email) return;

    fetch('http://localhost:8080/api/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ packageType, frequency, email })
    })
        .then(res => {
            if (!res.ok) throw new Error('Network error');
            return res.json();
        })
        .then(() => {
            document.getElementById('subscriptionForm').style.display = 'none';
            document.getElementById('confirmation').style.display = 'block';
        })
        .catch(err => alert('Noget gik galt. Prøv igen.'));
});