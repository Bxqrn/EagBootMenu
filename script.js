// Option IDs for functionality
document.getElementById('launchGame').addEventListener('click', function() {
    alert('Launching Eaglercraft...');
    setTimeout(() => {
        window.location.href = 'https://client.eaglercraft.win/eagler-files/1.8/resent4.0/index.html';
    }, 1000);
});

document.getElementById('discordLink').addEventListener('click', function() {
    window.open('https://discord.com', '_blank');
});

document.getElementById('supportLink').addEventListener('click', function() {
    alert('Redirecting to support page...');
    // Replace this with your support URL if needed
});

document.getElementById('exitOption').addEventListener('click', function() {
    alert('Exiting boot menu...');
    window.location.href = 'https://www.youtube.com/@BqrnMC'; // Redirect to homepage or another page
});

