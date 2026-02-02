# AssetVault - Multi-Asset Portfolio Management Dashboard

## Overview
A comprehensive, fully responsive portfolio management dashboard for vendors managing multiple client portfolios. Built with pure HTML, CSS, and JavaScript (no frameworks).

## Features

### Dashboard
- **Real-time Summary Cards**: Total AUM, Active Clients, Average Returns, Daily Transactions
- **Performance Charts**: Interactive line charts showing portfolio performance over time
- **Asset Allocation**: Pie chart with detailed breakdown of investments across asset classes
- **Top Performing Clients**: Table showing best performing portfolios
- **Recent Transactions**: Live transaction feed with status indicators
- **Risk Analysis**: Visual gauges for portfolio risk and market volatility
- **Monthly Comparison**: Bar charts comparing current vs previous month

### Clients Page
- **Client Grid View**: Cards for all 24 clients with key metrics
- **Filtering & Sorting**: Filter by client type, sort by various parameters
- **Detailed Stats**: Portfolio value, returns, gains, risk levels, join dates
- **Client Categories**: High Net Worth (HNW) and Regular clients

### Portfolio Page
- **Holdings Table**: Complete breakdown of all portfolio positions
- **Real-time Pricing**: Current prices vs average purchase prices
- **Performance Metrics**: Returns and gain/loss for each holding
- **Asset Categories**: Equity, Debt, Gold, Real Estate, Crypto

### Transactions Page
- **Complete Transaction History**: Detailed logs of all buy/sell orders
- **Transaction Stats**: Summary of buy orders, sell orders, and net flow
- **Status Tracking**: Success, Pending, and Failed transaction indicators
- **Comprehensive Details**: Quantity, price, amount, timestamps

## Technology Stack
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid layouts
- **Vanilla JavaScript**: No dependencies or frameworks
- **Canvas API**: Custom charts and visualizations

## Data Overview

### Hardcoded Data Includes:
- **24 Clients** with complete portfolios
- **Total AUM**: ₹124.5 Crores
- **12 Different Assets**: Stocks, Mutual Funds, ETFs, Bonds, Gold, REITs, Crypto
- **Performance History**: 12 months of portfolio data
- **Recent Transactions**: 10+ transactions with full details
- **Asset Allocation**: Across 5 major categories

## File Structure
```
portfolio-dashboard/
│
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Complete styling
├── js/
│   ├── data.js           # All hardcoded data
│   ├── charts.js         # Chart rendering logic
│   └── main.js           # Application logic & interactivity
└── README.md             # This file
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design
- **Desktop**: Full featured experience (1200px+)
- **Tablet**: Optimized layout (768px - 1200px)
- **Mobile**: Compact view with hamburger menu (< 768px)

## Key Metrics Displayed

### Summary Statistics
- Total Assets Under Management (AUM)
- Number of Active Clients
- Average Portfolio Returns
- Daily Transaction Count

### Asset Allocation
- Equity: 45% (₹56.03 Cr)
- Debt: 25% (₹31.13 Cr)
- Gold: 12% (₹14.94 Cr)
- Real Estate: 10% (₹12.45 Cr)
- Crypto: 8% (₹9.96 Cr)

### Client Performance
- Returns ranging from 13.5% to 18.8%
- Portfolios from ₹35 Lakhs to ₹11.5 Crores
- Risk profiles: Low, Moderate, High

## Usage Instructions

1. **Open index.html** in any modern web browser
2. **Navigate** using the sidebar menu
3. **Explore** different sections:
   - Dashboard: Overview and key metrics
   - Clients: Detailed client information
   - Portfolios: Holdings and performance
   - Transactions: Transaction history
4. **Responsive**: Works on all screen sizes

## Customization

### To Update Data
Edit `js/data.js` and modify:
- `summaryData` - Overall statistics
- `allClients` - Client information
- `portfolioHoldings` - Asset holdings
- `allTransactions` - Transaction records

### To Change Colors
Edit `css/styles.css` and modify CSS variables:
```css
:root {
    --primary-color: #1e3a8a;
    --secondary-color: #3b82f6;
    --success-color: #10b981;
    /* etc. */
}
```

## Performance Features
- Lazy loading of page content
- Debounced resize handlers
- Efficient canvas rendering
- Minimal DOM manipulation

## Professional Features
- Clean, modern UI inspired by Groww and leading fintech platforms
- Intuitive navigation
- Real-time data visualization
- Status indicators and badges
- Color-coded metrics (gains/losses)
- Responsive tables
- Interactive charts

## Future Enhancements (Not Implemented)
- API integration for real-time data
- Export functionality (PDF/Excel)
- Advanced filtering and search
- User authentication
- Backend database integration
- Email notifications
- Report generation

## License
This is a demo/presentation project. Free to use and modify.

## Notes
- All data is hardcoded for demonstration purposes
- Charts are rendered using Canvas API
- No external libraries or frameworks required
- Fully self-contained (works offline)

## Author
Created for portfolio management demonstration and client presentation.

---

**Ready to use!** Simply open index.html in your browser.
