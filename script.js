// Get the canvas element where the chart will be drawn
const ctx = document.getElementById('rainChart').getContext('2d');

// Create a new line chart
const rainChart = new Chart(ctx, {
    type: 'line', // Chart type: line
    data: {
        // X-axis labels (time periods)
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Gallons Collected', // Legend title
            data: [15, 30, 22, 18], // Y-axis data (example values)

            // Chart styling
            backgroundColor: 'rgba(76, 175, 80, 0.2)', // fill under the line
            borderColor: '#4CAF50', // line color
            borderWidth: 2,
            tension: 0.3 // smooth curves
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true // Y-axis starts at 0
            }
        }
    }
});