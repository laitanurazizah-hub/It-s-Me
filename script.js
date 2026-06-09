document.addEventListener('DOMContentLoaded', () => {
    // Optional interactive hover effects for glass panels
    const panels = document.querySelectorAll('.glass-panel');

    panels.forEach(panel => {
        panel.addEventListener('mousemove', (e) => {
            const rect = panel.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

        });
    });
});
