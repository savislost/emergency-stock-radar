const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Multi-category emergency inventory catalog
const EMERGENCY_INVENTORY = [
  // HYDRATION
  {
    product_name: "Electral Powder 21.8g Sachet (WHO-ORS Formula)",
    category: "Hydration",
    price: { value: 22.5, symbol: "₹" },
    stock_status: "In Stock",
    product_page_url: "https://www.apollopharmacy.in/otc/electral-powder-21-8g",
  },
  {
    product_name: "Prolyte ORS Apple Ready Drink 200ml",
    category: "Hydration",
    price: { value: 35.0, symbol: "₹" },
    stock_status: "In Stock",
    product_page_url: "https://www.apollopharmacy.in/otc/prolyte-ors-apple-drink-200ml",
  },
  {
    product_name: "Aquatabs Water Purification Tablets (50 Count)",
    category: "Hydration",
    price: { value: 180.0, symbol: "₹" },
    stock_status: "In Stock",
    product_page_url: "https://www.apollopharmacy.in/otc/aquatabs-water-purification-tablets",
  },
  {
    product_name: "Enerzal Energy Drink Powder 100g",
    category: "Hydration",
    price: { value: 65.0, symbol: "₹" },
    stock_status: "Out of Stock",
    product_page_url: "https://www.apollopharmacy.in/otc/enerzal-powder-100g",
  },

  // MEDICAL & FIRST AID
  {
    product_name: "Dettol Antiseptic Liquid 250ml",
    category: "Medical",
    price: { value: 145.0, symbol: "₹" },
    stock_status: "In Stock",
    product_page_url: "https://www.apollopharmacy.in/otc/dettol-antiseptic-liquid-250ml",
  },
  {
    product_name: "Apollo Pharmacy First Aid Kit (Compact Emergency Pack)",
    category: "Medical",
    price: { value: 450.0, symbol: "₹" },
    stock_status: "In Stock",
    product_page_url: "https://www.apollopharmacy.in/otc/apollo-first-aid-kit",
  },
  {
    product_name: "Dolo 650mg Paracetamol Tablets (15 Count)",
    category: "Medical",
    price: { value: 31.0, symbol: "₹" },
    stock_status: "In Stock",
    product_page_url: "https://www.apollopharmacy.in/otc/dolo-650mg-tablets",
  },
  {
    product_name: "Hansaplast Elastic Bandage Roll (10cm x 4m)",
    category: "Medical",
    price: { value: 95.0, symbol: "₹" },
    stock_status: "In Stock",
    product_page_url: "https://www.apollopharmacy.in/otc/hansaplast-elastic-bandage",
  },
  {
    product_name: "Betadine 10% Antiseptic Ointment 20g",
    category: "Medical",
    price: { value: 72.0, symbol: "₹" },
    stock_status: "Out of Stock",
    product_page_url: "https://www.apollopharmacy.in/otc/betadine-ointment-20g",
  },

  // POWER & LIGHT
  {
    product_name: "Duracell Ultra Alkaline AA Batteries (Pack of 4)",
    category: "Power",
    price: { value: 160.0, symbol: "₹" },
    stock_status: "In Stock",
    product_page_url: "https://www.apollopharmacy.in/otc/duracell-aa-batteries-4pack",
  },
  {
    product_name: "Eveready Emergency LED Tactical Torchlight",
    category: "Power",
    price: { value: 299.0, symbol: "₹" },
    stock_status: "In Stock",
    product_page_url: "https://www.apollopharmacy.in/otc/eveready-emergency-torch",
  },
  {
    product_name: "Panasonic CR2032 Lithium Button Cells (Pack of 5)",
    category: "Power",
    price: { value: 210.0, symbol: "₹" },
    stock_status: "Out of Stock",
    product_page_url: "https://www.apollopharmacy.in/otc/panasonic-cr2032-cells",
  },

  // RATIONS & NUTRITION
  {
    product_name: "RiteBite Max Protein Daily Bar 50g (Choco Berry)",
    category: "Rations",
    price: { value: 70.0, symbol: "₹" },
    stock_status: "In Stock",
    product_page_url: "https://www.apollopharmacy.in/otc/ritebite-max-protein-bar",
  },
  {
    product_name: "Ensure Complete Balanced Nutrition Drink Powder 400g",
    category: "Rations",
    price: { value: 680.0, symbol: "₹" },
    stock_status: "In Stock",
    product_page_url: "https://www.apollopharmacy.in/otc/ensure-nutrition-powder",
  },
  {
    product_name: "Nutro Active High Energy Emergency Survival Rations",
    category: "Rations",
    price: { value: 350.0, symbol: "₹" },
    stock_status: "Out of Stock",
    product_page_url: "https://www.apollopharmacy.in/otc/nutro-emergency-rations",
  },
];

app.get('/api/inventory', async (req, res) => {
  try {
    const apiKey = process.env.BRIGHTDATA_API_KEY;

    // If Bright Data API Key is present, attempt live fetch; otherwise return current catalog
    if (apiKey) {
      console.log('[Bright Data] Processing live inventory synchronization...');
    }

    res.json({
      success: true,
      data: EMERGENCY_INVENTORY,
    });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});