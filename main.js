// Main Application Logic

// Format currency
function formatCurrency(amount) {
    if (amount >= 10000000) {
        return '₹' + (amount / 10000000).toFixed(2) + ' Cr';
    } else if (amount >= 100000) {
        return '₹' + (amount / 100000).toFixed(2) + ' L';
    } else {
        return '₹' + amount.toLocaleString('en-IN');
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
}

// Format timestamp
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const dateStr = date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    return `${dateStr} ${timeStr}`;
}

// Initialize Dashboard
function initDashboard() {
    // Update summary cards
    document.getElementById('totalAUM').textContent = formatCurrency(summaryData.totalAUM);
    document.getElementById('activeClients').textContent = summaryData.activeClients;
    document.getElementById('avgReturns').textContent = summaryData.avgReturns + '%';
    document.getElementById('transactionsToday').textContent = summaryData.transactionsToday;

    // Initialize charts
    setTimeout(() => {
        initPerformanceChart();
        initAllocationChart();
        initRiskGauges();
        initMonthlyChart();
    }, 100);

    // Populate tables
    populateTopClientsTable();
    populateRecentTransactionsTable();
}

// Populate Top Clients Table
function populateTopClientsTable() {
    const tableContainer = document.getElementById('topClientsTable');
    if (!tableContainer) return;

    let html = `
        <table>
            <thead>
                <tr>
                    <th>Client</th>
                    <th>Portfolio</th>
                    <th>Returns</th>
                    <th>Assets</th>
                </tr>
            </thead>
            <tbody>
    `;

    topClients.forEach(client => {
        html += `
            <tr>
                <td>
                    <div class="client-info">
                        <div class="client-avatar">${client.initials}</div>
                        <div class="client-details">
                            <div class="client-name">${client.name}</div>
                            <div class="client-id">${client.id}</div>
                        </div>
                    </div>
                </td>
                <td style="font-weight: 600;">${formatCurrency(client.portfolio)}</td>
                <td class="positive-value">+${client.returns}%</td>
                <td>${client.assets}</td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    tableContainer.innerHTML = html;
}

// Populate Recent Transactions Table
function populateRecentTransactionsTable() {
    const tableContainer = document.getElementById('recentTransactionsTable');
    if (!tableContainer) return;

    let html = `
        <table>
            <thead>
                <tr>
                    <th>Client</th>
                    <th>Type</th>
                    <th>Asset</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
    `;

    recentTransactions.forEach(txn => {
        const statusClass = txn.status.toLowerCase();
        const typeColor = txn.type === 'BUY' ? 'color: #10b981; font-weight: 600;' : 'color: #ef4444; font-weight: 600;';
        
        html += `
            <tr>
                <td>${txn.client}</td>
                <td style="${typeColor}">${txn.type}</td>
                <td>${txn.asset}</td>
                <td style="font-weight: 600;">${formatCurrency(txn.amount)}</td>
                <td><span class="status-badge ${statusClass}">${txn.status}</span></td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    tableContainer.innerHTML = html;
}

// Initialize Clients Page
function initClientsPage() {
    const clientsGrid = document.getElementById('clientsGrid');
    if (!clientsGrid) return;

    let html = '';

    allClients.forEach(client => {
        const gainClass = client.gain >= 0 ? 'positive-value' : 'negative-value';
        const riskColor = client.risk === 'Low' ? '#10b981' : client.risk === 'Moderate' ? '#f59e0b' : '#ef4444';

        html += `
            <div class="client-card">
                <div class="client-card-header">
                    <div class="client-card-avatar">${client.initials}</div>
                    <div class="client-card-info">
                        <h3>${client.name}</h3>
                        <p>${client.id} • ${client.type}</p>
                    </div>
                </div>
                <div class="client-card-stats">
                    <div class="stat-item">
                        <div class="stat-item-label">Portfolio Value</div>
                        <div class="stat-item-value">${formatCurrency(client.portfolio)}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-item-label">Returns</div>
                        <div class="stat-item-value positive-value">+${client.returns}%</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-item-label">Total Gain</div>
                        <div class="stat-item-value ${gainClass}">${formatCurrency(client.gain)}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-item-label">Risk Level</div>
                        <div class="stat-item-value" style="color: ${riskColor}; font-size: 16px;">${client.risk}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-item-label">Assets</div>
                        <div class="stat-item-value">${client.assets}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-item-label">Join Date</div>
                        <div class="stat-item-value" style="font-size: 14px; color: #6b7280;">${formatDate(client.joinDate)}</div>
                    </div>
                </div>
            </div>
        `;
    });

    clientsGrid.innerHTML = html;
}

// Initialize Portfolio Page
function initPortfolioPage() {
    const portfolioTable = document.getElementById('portfolioTable');
    if (!portfolioTable) return;

    // Calculate totals
    let totalInvested = 0;
    let totalCurrent = 0;

    portfolioHoldings.forEach(holding => {
        totalInvested += holding.invested;
        totalCurrent += holding.current;
    });

    const totalGain = totalCurrent - totalInvested;
    const totalReturns = ((totalGain / totalInvested) * 100).toFixed(2);

    // Update summary cards
    document.getElementById('totalPortfolioValue').textContent = formatCurrency(totalCurrent);
    document.getElementById('totalInvested').textContent = formatCurrency(totalInvested);
    document.getElementById('totalGains').textContent = formatCurrency(totalGain);
    document.getElementById('totalReturns').textContent = totalReturns + '% Returns';

    let html = `
        <div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th style="text-align: left; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Asset</th>
                        <th style="text-align: left; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Category</th>
                        <th style="text-align: right; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Quantity</th>
                        <th style="text-align: right; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Avg Price</th>
                        <th style="text-align: right; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Current Price</th>
                        <th style="text-align: right; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Invested</th>
                        <th style="text-align: right; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Current Value</th>
                        <th style="text-align: right; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Returns</th>
                        <th style="text-align: right; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Gain/Loss</th>
                        <th style="text-align: center; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Actions</th>
                    </tr>
                </thead>
                <tbody>
    `;

    portfolioHoldings.forEach((holding, index) => {
        const returnsClass = holding.returns >= 0 ? 'positive-value' : 'negative-value';
        const gainClass = holding.gain >= 0 ? 'positive-value' : 'negative-value';

        html += `
            <tr>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; font-weight: 600;">${holding.asset}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${holding.category}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; text-align: right;">${holding.quantity.toLocaleString()}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; text-align: right;">₹${holding.avgPrice.toLocaleString()}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; text-align: right; font-weight: 600;">₹${holding.currentPrice.toLocaleString()}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; text-align: right;">${formatCurrency(holding.invested)}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; text-align: right; font-weight: 600;">${formatCurrency(holding.current)}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; text-align: right;" class="${returnsClass}">${holding.returns > 0 ? '+' : ''}${holding.returns.toFixed(2)}%</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; text-align: right; font-weight: 600;" class="${gainClass}">${holding.gain > 0 ? '+' : ''}${formatCurrency(holding.gain)}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; text-align: center;">
                    <button class="action-btn delete" onclick="removeAsset(${index})" title="Remove Asset">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });

    html += '</tbody></table></div>';
    portfolioTable.innerHTML = html;
}

// Remove Asset
function removeAsset(index) {
    if (confirm('Are you sure you want to remove this asset from the portfolio?')) {
        portfolioHoldings.splice(index, 1);
        initPortfolioPage();
        
        // Show success message
        showNotification('Asset removed successfully!', 'success');
    }
}

// Add Asset
function addAsset(assetData) {
    const invested = assetData.quantity * assetData.avgPrice;
    const current = assetData.quantity * assetData.currentPrice;
    const gain = current - invested;
    const returns = ((gain / invested) * 100);

    const newAsset = {
        asset: assetData.name,
        category: assetData.category,
        quantity: parseFloat(assetData.quantity),
        avgPrice: parseFloat(assetData.avgPrice),
        currentPrice: parseFloat(assetData.currentPrice),
        invested: invested,
        current: current,
        returns: returns,
        gain: gain
    };

    portfolioHoldings.unshift(newAsset);
    initPortfolioPage();
    
    // Show success message
    showNotification('Asset added successfully!', 'success');
}

// Show Notification
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 30px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 600;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Modal Management
function setupModal() {
    const modal = document.getElementById('addAssetModal');
    const addAssetBtn = document.getElementById('addAssetBtn');
    const closeModal = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const addAssetForm = document.getElementById('addAssetForm');

    if (addAssetBtn) {
        addAssetBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            addAssetForm.reset();
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            addAssetForm.reset();
        });
    }

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            addAssetForm.reset();
        }
    });

    // Handle form submission
    if (addAssetForm) {
        addAssetForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const assetData = {
                name: document.getElementById('assetName').value,
                category: document.getElementById('assetCategory').value,
                quantity: document.getElementById('assetQuantity').value,
                avgPrice: document.getElementById('avgPrice').value,
                currentPrice: document.getElementById('currentPrice').value
            };
            
            addAsset(assetData);
            modal.classList.remove('active');
            addAssetForm.reset();
        });
    }
}

// Initialize Transactions Page
function initTransactionsPage() {
    const transactionsTable = document.getElementById('transactionsTable');
    if (!transactionsTable) return;

    let html = `
        <div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th style="text-align: left; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Transaction ID</th>
                        <th style="text-align: left; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Client</th>
                        <th style="text-align: left; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Type</th>
                        <th style="text-align: left; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Asset</th>
                        <th style="text-align: left; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Category</th>
                        <th style="text-align: right; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Quantity</th>
                        <th style="text-align: right; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Price</th>
                        <th style="text-align: right; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Amount</th>
                        <th style="text-align: left; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Status</th>
                        <th style="text-align: left; padding: 12px; font-size: 13px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Timestamp</th>
                    </tr>
                </thead>
                <tbody>
    `;

    allTransactions.forEach(txn => {
        const statusClass = txn.status.toLowerCase();
        const typeColor = txn.type === 'BUY' ? 'color: #10b981; font-weight: 600;' : 'color: #ef4444; font-weight: 600;';

        html += `
            <tr>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 13px; color: #6b7280;">${txn.id}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${txn.client}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; ${typeColor}">${txn.type}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; font-weight: 600;">${txn.asset}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${txn.category}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; text-align: right;">${txn.quantity.toLocaleString()}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; text-align: right;">₹${txn.price.toLocaleString()}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; text-align: right; font-weight: 600;">${formatCurrency(txn.amount)}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px;"><span class="status-badge ${statusClass}">${txn.status}</span></td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 13px; color: #6b7280;">${formatTimestamp(txn.timestamp)}</td>
            </tr>
        `;
    });

    html += '</tbody></table></div>';
    transactionsTable.innerHTML = html;
}

// Navigation handling
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page-content');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Hide all pages
            pages.forEach(page => page.classList.add('hidden'));
            
            // Show selected page
            const pageId = item.getAttribute('data-page') + '-page';
            const selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.classList.remove('hidden');
                
                // Initialize page-specific content
                if (pageId === 'clients-page') {
                    initClientsPage();
                } else if (pageId === 'portfolio-page') {
                    initPortfolioPage();
                } else if (pageId === 'transactions-page') {
                    initTransactionsPage();
                }
            }
        });
    });
}

// Menu toggle for mobile
function setupMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            }
        });
    }
}

// Update current date
function updateCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        dateElement.textContent = new Date().toLocaleDateString('en-IN', options);
    }
}

// Chart filter buttons
function setupChartFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // In a real app, this would update the chart data
            console.log('Filter changed to:', btn.getAttribute('data-period'));
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentDate();
    setupNavigation();
    setupMenuToggle();
    setupChartFilters();
    setupModal();
    initDashboard();
    
    // Update date every minute
    setInterval(updateCurrentDate, 60000);
    
    // Add notification animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Handle window resize for responsive charts
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('active');
    }
});
