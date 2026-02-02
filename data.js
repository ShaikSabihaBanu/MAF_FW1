// Comprehensive Portfolio Management Data

// Summary Statistics
const summaryData = {
    totalAUM: 12450000000, // ₹124.5 Cr
    activeClients: 24,
    avgReturns: 14.8,
    transactionsToday: 37
};

// Top Performing Clients Data
const topClients = [
    {
        id: "CL001",
        name: "Rajesh Kumar",
        initials: "RK",
        portfolio: 8500000,
        returns: 18.5,
        assets: 12,
        joinDate: "2022-03-15"
    },
    {
        id: "CL002",
        name: "Priya Sharma",
        initials: "PS",
        portfolio: 6200000,
        returns: 16.8,
        assets: 9,
        joinDate: "2021-11-20"
    },
    {
        id: "CL003",
        name: "Amit Patel",
        initials: "AP",
        portfolio: 7800000,
        returns: 15.2,
        assets: 15,
        joinDate: "2022-01-10"
    },
    {
        id: "CL004",
        name: "Sneha Reddy",
        initials: "SR",
        portfolio: 5400000,
        returns: 14.9,
        assets: 8,
        joinDate: "2023-02-28"
    },
    {
        id: "CL005",
        name: "Vikram Singh",
        initials: "VS",
        portfolio: 9100000,
        returns: 17.3,
        assets: 18,
        joinDate: "2021-09-05"
    }
];

// Recent Transactions Data
const recentTransactions = [
    {
        id: "TXN2024020201",
        client: "Rajesh Kumar",
        type: "BUY",
        asset: "HDFC Bank",
        amount: 250000,
        status: "Success",
        timestamp: "2024-02-02 10:15:30"
    },
    {
        id: "TXN2024020202",
        client: "Priya Sharma",
        type: "SELL",
        asset: "Reliance Industries",
        amount: 180000,
        status: "Success",
        timestamp: "2024-02-02 09:45:22"
    },
    {
        id: "TXN2024020203",
        client: "Amit Patel",
        type: "BUY",
        asset: "Gold ETF",
        amount: 320000,
        status: "Pending",
        timestamp: "2024-02-02 11:20:15"
    },
    {
        id: "TXN2024020204",
        client: "Sneha Reddy",
        type: "BUY",
        asset: "SBI Bluechip Fund",
        amount: 150000,
        status: "Success",
        timestamp: "2024-02-02 08:30:45"
    },
    {
        id: "TXN2024020205",
        client: "Vikram Singh",
        type: "SELL",
        asset: "Bitcoin",
        amount: 420000,
        status: "Failed",
        timestamp: "2024-02-02 12:10:00"
    }
];

// All Clients Data
const allClients = [
    {
        id: "CL001",
        name: "Rajesh Kumar",
        initials: "RK",
        portfolio: 8500000,
        invested: 7200000,
        returns: 18.5,
        gain: 1300000,
        assets: 12,
        joinDate: "2022-03-15",
        risk: "Moderate",
        type: "HNW"
    },
    {
        id: "CL002",
        name: "Priya Sharma",
        initials: "PS",
        portfolio: 6200000,
        invested: 5300000,
        returns: 16.8,
        gain: 900000,
        assets: 9,
        joinDate: "2021-11-20",
        risk: "Low",
        type: "Regular"
    },
    {
        id: "CL003",
        name: "Amit Patel",
        initials: "AP",
        portfolio: 7800000,
        invested: 6800000,
        returns: 15.2,
        gain: 1000000,
        assets: 15,
        joinDate: "2022-01-10",
        risk: "Moderate",
        type: "HNW"
    },
    {
        id: "CL004",
        name: "Sneha Reddy",
        initials: "SR",
        portfolio: 5400000,
        invested: 4700000,
        returns: 14.9,
        gain: 700000,
        assets: 8,
        joinDate: "2023-02-28",
        risk: "Low",
        type: "Regular"
    },
    {
        id: "CL005",
        name: "Vikram Singh",
        initials: "VS",
        portfolio: 9100000,
        invested: 7800000,
        returns: 17.3,
        gain: 1300000,
        assets: 18,
        joinDate: "2021-09-05",
        risk: "High",
        type: "HNW"
    },
    {
        id: "CL006",
        name: "Ananya Gupta",
        initials: "AG",
        portfolio: 4200000,
        invested: 3600000,
        returns: 16.2,
        gain: 600000,
        assets: 7,
        joinDate: "2022-06-18",
        risk: "Moderate",
        type: "Regular"
    },
    {
        id: "CL007",
        name: "Sanjay Verma",
        initials: "SV",
        portfolio: 11500000,
        invested: 9800000,
        returns: 17.8,
        gain: 1700000,
        assets: 22,
        joinDate: "2021-04-12",
        risk: "High",
        type: "HNW"
    },
    {
        id: "CL008",
        name: "Kavita Mehta",
        initials: "KM",
        portfolio: 3800000,
        invested: 3300000,
        returns: 15.5,
        gain: 500000,
        assets: 6,
        joinDate: "2023-01-25",
        risk: "Low",
        type: "Regular"
    },
    {
        id: "CL009",
        name: "Deepak Joshi",
        initials: "DJ",
        portfolio: 6900000,
        invested: 5900000,
        returns: 17.1,
        gain: 1000000,
        assets: 11,
        joinDate: "2022-08-30",
        risk: "Moderate",
        type: "HNW"
    },
    {
        id: "CL010",
        name: "Neha Kapoor",
        initials: "NK",
        portfolio: 5100000,
        invested: 4500000,
        returns: 13.8,
        gain: 600000,
        assets: 8,
        joinDate: "2023-03-14",
        risk: "Low",
        type: "Regular"
    },
    {
        id: "CL011",
        name: "Rohit Malhotra",
        initials: "RM",
        portfolio: 8200000,
        invested: 7000000,
        returns: 17.5,
        gain: 1200000,
        assets: 14,
        joinDate: "2021-12-08",
        risk: "High",
        type: "HNW"
    },
    {
        id: "CL012",
        name: "Pooja Nair",
        initials: "PN",
        portfolio: 4600000,
        invested: 4000000,
        returns: 15.0,
        gain: 600000,
        assets: 7,
        joinDate: "2022-10-22",
        risk: "Moderate",
        type: "Regular"
    },
    {
        id: "CL013",
        name: "Arun Krishnan",
        initials: "AK",
        portfolio: 7300000,
        invested: 6200000,
        returns: 18.2,
        gain: 1100000,
        assets: 13,
        joinDate: "2022-04-05",
        risk: "Moderate",
        type: "HNW"
    },
    {
        id: "CL014",
        name: "Divya Iyer",
        initials: "DI",
        portfolio: 3500000,
        invested: 3100000,
        returns: 13.5,
        gain: 400000,
        assets: 5,
        joinDate: "2023-05-20",
        risk: "Low",
        type: "Regular"
    },
    {
        id: "CL015",
        name: "Manish Agarwal",
        initials: "MA",
        portfolio: 9800000,
        invested: 8300000,
        returns: 18.8,
        gain: 1500000,
        assets: 19,
        joinDate: "2021-07-15",
        risk: "High",
        type: "HNW"
    },
    {
        id: "CL016",
        name: "Asha Desai",
        initials: "AD",
        portfolio: 4100000,
        invested: 3600000,
        returns: 14.2,
        gain: 500000,
        assets: 6,
        joinDate: "2022-11-30",
        risk: "Low",
        type: "Regular"
    },
    {
        id: "CL017",
        name: "Karthik Rao",
        initials: "KR",
        portfolio: 6700000,
        invested: 5700000,
        returns: 17.9,
        gain: 1000000,
        assets: 10,
        joinDate: "2022-02-18",
        risk: "Moderate",
        type: "HNW"
    },
    {
        id: "CL018",
        name: "Meera Pillai",
        initials: "MP",
        portfolio: 5300000,
        invested: 4600000,
        returns: 15.8,
        gain: 700000,
        assets: 9,
        joinDate: "2023-01-10",
        risk: "Moderate",
        type: "Regular"
    },
    {
        id: "CL019",
        name: "Suresh Bhat",
        initials: "SB",
        portfolio: 10200000,
        invested: 8700000,
        returns: 17.4,
        gain: 1500000,
        assets: 21,
        joinDate: "2021-10-25",
        risk: "High",
        type: "HNW"
    },
    {
        id: "CL020",
        name: "Lakshmi Menon",
        initials: "LM",
        portfolio: 3900000,
        invested: 3400000,
        returns: 14.8,
        gain: 500000,
        assets: 6,
        joinDate: "2023-04-08",
        risk: "Low",
        type: "Regular"
    },
    {
        id: "CL021",
        name: "Rahul Chopra",
        initials: "RC",
        portfolio: 7600000,
        invested: 6500000,
        returns: 16.5,
        gain: 1100000,
        assets: 12,
        joinDate: "2022-05-15",
        risk: "Moderate",
        type: "HNW"
    },
    {
        id: "CL022",
        name: "Swati Bhatt",
        initials: "SB",
        portfolio: 4800000,
        invested: 4200000,
        returns: 14.5,
        gain: 600000,
        assets: 7,
        joinDate: "2022-12-20",
        risk: "Low",
        type: "Regular"
    },
    {
        id: "CL023",
        name: "Arjun Mishra",
        initials: "AM",
        portfolio: 8900000,
        invested: 7600000,
        returns: 17.2,
        gain: 1300000,
        assets: 16,
        joinDate: "2021-08-30",
        risk: "High",
        type: "HNW"
    },
    {
        id: "CL024",
        name: "Ritu Saxena",
        initials: "RS",
        portfolio: 5600000,
        invested: 4900000,
        returns: 14.1,
        gain: 700000,
        assets: 8,
        joinDate: "2023-02-15",
        risk: "Moderate",
        type: "Regular"
    }
];

// Portfolio Performance Data (Monthly)
const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Portfolio Value (₹ Cr)',
            data: [105, 108, 112, 115, 118, 120, 119, 122, 121, 123, 122, 124.5],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4
        },
        {
            label: 'Invested Amount (₹ Cr)',
            data: [95, 96, 97, 97.5, 98, 98.2, 98.3, 98.3, 98.3, 98.3, 98.3, 98.3],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            tension: 0.4
        }
    ]
};

// Asset Allocation Data
const assetAllocation = {
    labels: ['Equity', 'Debt', 'Gold', 'Real Estate', 'Crypto'],
    data: [45, 25, 12, 10, 8],
    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444'],
    amounts: [5602.5, 3112.5, 1494, 1245, 996] // in lakhs
};

// All Transactions Data
const allTransactions = [
    {
        id: "TXN2024020201",
        client: "Rajesh Kumar",
        clientId: "CL001",
        type: "BUY",
        asset: "HDFC Bank",
        category: "Equity",
        amount: 250000,
        quantity: 150,
        price: 1666.67,
        status: "Success",
        timestamp: "2024-02-02 10:15:30"
    },
    {
        id: "TXN2024020202",
        client: "Priya Sharma",
        clientId: "CL002",
        type: "SELL",
        asset: "Reliance Industries",
        category: "Equity",
        amount: 180000,
        quantity: 65,
        price: 2769.23,
        status: "Success",
        timestamp: "2024-02-02 09:45:22"
    },
    {
        id: "TXN2024020203",
        client: "Amit Patel",
        clientId: "CL003",
        type: "BUY",
        asset: "Gold ETF",
        category: "Gold",
        amount: 320000,
        quantity: 5000,
        price: 64,
        status: "Pending",
        timestamp: "2024-02-02 11:20:15"
    },
    {
        id: "TXN2024020204",
        client: "Sneha Reddy",
        clientId: "CL004",
        type: "BUY",
        asset: "SBI Bluechip Fund",
        category: "Equity",
        amount: 150000,
        quantity: 2500,
        price: 60,
        status: "Success",
        timestamp: "2024-02-02 08:30:45"
    },
    {
        id: "TXN2024020205",
        client: "Vikram Singh",
        clientId: "CL005",
        type: "SELL",
        asset: "Bitcoin",
        category: "Crypto",
        amount: 420000,
        quantity: 0.12,
        price: 3500000,
        status: "Failed",
        timestamp: "2024-02-02 12:10:00"
    },
    {
        id: "TXN2024020206",
        client: "Ananya Gupta",
        clientId: "CL006",
        type: "BUY",
        asset: "ICICI Bank",
        category: "Equity",
        amount: 180000,
        quantity: 200,
        price: 900,
        status: "Success",
        timestamp: "2024-02-02 13:25:10"
    },
    {
        id: "TXN2024020207",
        client: "Sanjay Verma",
        clientId: "CL007",
        type: "BUY",
        asset: "Sovereign Gold Bond",
        category: "Gold",
        amount: 500000,
        quantity: 8000,
        price: 62.5,
        status: "Success",
        timestamp: "2024-02-02 14:40:30"
    },
    {
        id: "TXN2024020208",
        client: "Kavita Mehta",
        clientId: "CL008",
        type: "SELL",
        asset: "Infosys",
        category: "Equity",
        amount: 200000,
        quantity: 140,
        price: 1428.57,
        status: "Success",
        timestamp: "2024-02-02 15:15:45"
    },
    {
        id: "TXN2024020209",
        client: "Deepak Joshi",
        clientId: "CL009",
        type: "BUY",
        asset: "Corporate Bond",
        category: "Debt",
        amount: 350000,
        quantity: 350,
        price: 1000,
        status: "Pending",
        timestamp: "2024-02-02 16:20:00"
    },
    {
        id: "TXN2024020210",
        client: "Neha Kapoor",
        clientId: "CL010",
        type: "BUY",
        asset: "Axis Bluechip Fund",
        category: "Equity",
        amount: 120000,
        quantity: 2000,
        price: 60,
        status: "Success",
        timestamp: "2024-02-01 10:30:15"
    }
];

// Monthly Comparison Data
const monthlyComparison = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    currentMonth: [28, 32, 35, 37],
    lastMonth: [30, 31, 33, 35]
};

// Portfolio Holdings Data
const portfolioHoldings = [
    {
        asset: "HDFC Bank",
        category: "Equity",
        quantity: 8500,
        avgPrice: 1580,
        currentPrice: 1666,
        invested: 13430000,
        current: 14161000,
        returns: 5.44,
        gain: 731000
    },
    {
        asset: "Reliance Industries",
        category: "Equity",
        quantity: 5200,
        avgPrice: 2650,
        currentPrice: 2769,
        invested: 13780000,
        current: 14398800,
        returns: 4.49,
        gain: 618800
    },
    {
        asset: "Infosys",
        category: "Equity",
        quantity: 6800,
        avgPrice: 1420,
        currentPrice: 1428,
        invested: 9656000,
        current: 9710400,
        returns: 0.56,
        gain: 54400
    },
    {
        asset: "TCS",
        category: "Equity",
        quantity: 3200,
        avgPrice: 3580,
        currentPrice: 3650,
        invested: 11456000,
        current: 11680000,
        returns: 1.95,
        gain: 224000
    },
    {
        asset: "SBI Bluechip Fund",
        category: "Mutual Fund",
        quantity: 85000,
        avgPrice: 58,
        currentPrice: 62,
        invested: 4930000,
        current: 5270000,
        returns: 6.90,
        gain: 340000
    },
    {
        asset: "Gold ETF",
        category: "Gold",
        quantity: 22000,
        avgPrice: 60,
        currentPrice: 64,
        invested: 1320000,
        current: 1408000,
        returns: 6.67,
        gain: 88000
    },
    {
        asset: "Sovereign Gold Bond",
        category: "Gold",
        quantity: 12000,
        avgPrice: 61,
        currentPrice: 63,
        invested: 732000,
        current: 756000,
        returns: 3.28,
        gain: 24000
    },
    {
        asset: "Corporate Bonds",
        category: "Debt",
        quantity: 25000,
        avgPrice: 1000,
        currentPrice: 1015,
        invested: 25000000,
        current: 25375000,
        returns: 1.50,
        gain: 375000
    },
    {
        asset: "Government Securities",
        category: "Debt",
        quantity: 6000,
        avgPrice: 1000,
        currentPrice: 1008,
        invested: 6000000,
        current: 6048000,
        returns: 0.80,
        gain: 48000
    },
    {
        asset: "REIT - Embassy",
        category: "Real Estate",
        quantity: 3500,
        avgPrice: 350,
        currentPrice: 368,
        invested: 1225000,
        current: 1288000,
        returns: 5.14,
        gain: 63000
    },
    {
        asset: "Bitcoin",
        category: "Crypto",
        quantity: 0.28,
        avgPrice: 3200000,
        currentPrice: 3500000,
        invested: 896000,
        current: 980000,
        returns: 9.38,
        gain: 84000
    },
    {
        asset: "Ethereum",
        category: "Crypto",
        quantity: 4.5,
        avgPrice: 180000,
        currentPrice: 195000,
        invested: 810000,
        current: 877500,
        returns: 8.33,
        gain: 67500
    }
];
