// Chart.js implementation for all visualizations

// Initialize Performance Chart
function initPerformanceChart() {
    const canvas = document.getElementById('performanceChart');
    if (!canvas) return;

    const wrapper = canvas.parentElement;
    canvas.width = wrapper.offsetWidth;
    canvas.height = wrapper.offsetHeight;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw chart
    drawLineChart(ctx, performanceData, width, height);
}

// Draw Line Chart
function drawLineChart(ctx, data, width, height) {
    const padding = 50;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    // Find max value
    const allValues = [...data.datasets[0].data, ...data.datasets[1].data];
    const maxValue = Math.max(...allValues);
    const minValue = Math.min(...allValues);

    // Draw grid
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;

    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();

        // Y-axis labels
        const value = maxValue - ((maxValue - minValue) / 5) * i;
        ctx.fillStyle = '#6b7280';
        ctx.font = '12px Arial';
        ctx.textAlign = 'right';
        ctx.fillText('₹' + value.toFixed(0), padding - 10, y + 4);
    }

    // Draw X-axis labels
    data.labels.forEach((label, index) => {
        const x = padding + (chartWidth / (data.labels.length - 1)) * index;
        ctx.fillStyle = '#6b7280';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(label, x, height - padding + 20);
    });

    // Draw datasets
    data.datasets.forEach((dataset, datasetIndex) => {
        ctx.strokeStyle = dataset.borderColor;
        ctx.lineWidth = 3;
        ctx.beginPath();

        dataset.data.forEach((value, index) => {
            const x = padding + (chartWidth / (data.labels.length - 1)) * index;
            const y = padding + chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight;

            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }

            // Draw point
            ctx.fillStyle = dataset.borderColor;
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.stroke();

        // Fill area under line
        ctx.lineTo(width - padding, height - padding);
        ctx.lineTo(padding, height - padding);
        ctx.closePath();
        ctx.fillStyle = dataset.backgroundColor;
        ctx.fill();
    });

    // Draw legend
    let legendX = padding;
    const legendY = 20;
    data.datasets.forEach((dataset, index) => {
        // Legend color box
        ctx.fillStyle = dataset.borderColor;
        ctx.fillRect(legendX, legendY, 15, 15);

        // Legend text
        ctx.fillStyle = '#111827';
        ctx.font = '13px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(dataset.label, legendX + 20, legendY + 12);

        legendX += ctx.measureText(dataset.label).width + 50;
    });
}

// Initialize Allocation Chart (Pie Chart)
function initAllocationChart() {
    const canvas = document.getElementById('allocationChart');
    if (!canvas) return;

    const wrapper = canvas.parentElement;
    canvas.width = wrapper.offsetWidth;
    canvas.height = wrapper.offsetHeight;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw pie chart
    drawPieChart(ctx, assetAllocation, width, height);

    // Update legend
    updateAllocationLegend();
}

// Draw Pie Chart
function drawPieChart(ctx, data, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 40;

    let currentAngle = -Math.PI / 2;
    const total = data.data.reduce((sum, val) => sum + val, 0);

    data.data.forEach((value, index) => {
        const sliceAngle = (value / total) * Math.PI * 2;

        // Draw slice
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = data.backgroundColor[index];
        ctx.fill();

        // Draw white border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Draw percentage text
        const textAngle = currentAngle + sliceAngle / 2;
        const textX = centerX + Math.cos(textAngle) * (radius * 0.7);
        const textY = centerY + Math.sin(textAngle) * (radius * 0.7);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(value + '%', textX, textY);

        currentAngle += sliceAngle;
    });
}

// Update Allocation Legend
function updateAllocationLegend() {
    const legendContainer = document.getElementById('allocationLegend');
    if (!legendContainer) return;

    legendContainer.innerHTML = '';

    assetAllocation.labels.forEach((label, index) => {
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        legendItem.innerHTML = `
            <div class="legend-color" style="background: ${assetAllocation.backgroundColor[index]}"></div>
            <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 14px;">${label}</div>
                <div style="color: #6b7280; font-size: 13px;">₹${assetAllocation.amounts[index].toFixed(1)} Cr</div>
            </div>
            <div style="font-weight: 700; color: #111827;">${assetAllocation.data[index]}%</div>
        `;
        legendContainer.appendChild(legendItem);
    });
}

// Initialize Risk Gauges
function initRiskGauges() {
    drawRiskGauge('riskGauge1', 65); // 65% risk level
    drawRiskGauge('riskGauge2', 35); // 35% volatility
}

// Draw Risk Gauge
function drawRiskGauge(canvasId, percentage) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    // Set canvas dimensions
    canvas.width = 150;
    canvas.height = 150;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 15;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background arc
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0.75 * Math.PI, 2.25 * Math.PI);
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 18;
    ctx.stroke();

    // Draw colored arc
    const endAngle = 0.75 * Math.PI + (percentage / 100) * 1.5 * Math.PI;
    let color = '#10b981'; // Green
    if (percentage > 33 && percentage <= 66) {
        color = '#f59e0b'; // Orange
    } else if (percentage > 66) {
        color = '#ef4444'; // Red
    }

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0.75 * Math.PI, endAngle);
    ctx.strokeStyle = color;
    ctx.lineWidth = 18;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Draw percentage text
    ctx.fillStyle = '#111827';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(percentage + '%', centerX, centerY);
}

// Initialize Monthly Comparison Chart
function initMonthlyChart() {
    const canvas = document.getElementById('monthlyChart');
    if (!canvas) return;

    const wrapper = canvas.parentElement;
    canvas.width = wrapper.offsetWidth;
    canvas.height = 280;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw bar chart
    drawBarChart(ctx, monthlyComparison, width, height);
}

// Draw Bar Chart
function drawBarChart(ctx, data, width, height) {
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    const barWidth = chartWidth / (data.labels.length * 2 + 1) / 2;
    const maxValue = Math.max(...data.currentMonth, ...data.lastMonth);

    // Draw Y-axis
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.stroke();

    // Draw X-axis
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw bars
    data.labels.forEach((label, index) => {
        const x = padding + (chartWidth / data.labels.length) * index + barWidth;

        // Current month bar
        const currentHeight = (data.currentMonth[index] / maxValue) * chartHeight;
        ctx.fillStyle = '#3b82f6';
        ctx.fillRect(x, height - padding - currentHeight, barWidth, currentHeight);

        // Last month bar
        const lastHeight = (data.lastMonth[index] / maxValue) * chartHeight;
        ctx.fillStyle = '#10b981';
        ctx.fillRect(x + barWidth + 5, height - padding - lastHeight, barWidth, lastHeight);

        // X-axis label
        ctx.fillStyle = '#6b7280';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(label, x + barWidth, height - padding + 20);
    });

    // Draw legend
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(padding, 15, 15, 15);
    ctx.fillStyle = '#111827';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Current Month', padding + 20, 27);

    ctx.fillStyle = '#10b981';
    ctx.fillRect(padding + 120, 15, 15, 15);
    ctx.fillStyle = '#111827';
    ctx.fillText('Last Month', padding + 140, 27);
}

// Update chart on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        initPerformanceChart();
        initAllocationChart();
        initMonthlyChart();
    }, 250);
});
