// Timeline page interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to timeline items
    const items = document.querySelectorAll('.timeline-item');

    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 200);
    });

    // Click handler for module cards
    const moduleCards = document.querySelectorAll('.module-card:not(.disabled)');

    moduleCards.forEach(card => {
        card.addEventListener('click', function (e) {
            if (!e.target.classList.contains('module-btn')) {
                const href = this.getAttribute('onclick').match(/window\.location\.href='([^']+)'/)[1];
                if (href) {
                    window.location.href = href;
                }
            }
        });
    });
});
