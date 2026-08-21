 Emergency Supply Radar

A real-time disaster response intelligence dashboard tracking availability, stock status, and pricing of vital relief and medical supplies using Bright Data Web Scraper API.
 Problem Statement

During natural disasters and regional emergencies, essential medical supplies (ORS, first aid kits, antiseptics, hydration packs) face acute supply shortages. Emergency response teams and citizens lack real-time visibility into local pharmacy availability, leading to wasted time and delayed relief.
 Solution

Emergency Supply Radar bridges this gap by continuously monitoring pharmacy retail networks via Bright Data. The platform categorizes critical inventory, highlights acute shortages via automated beacon alerts, and provides a spatial UI for scanning supply streams.
 Key Features

    Live Inventory Telemetry: Real-time tracking of essential supplies across local retail endpoints.
    Dynamic Categorization: Automatic tagging for Hydration, Medical, Power, and Rations.
    Critical Shortage Alerts: Automated alert banner highlighting depleted supplies.
    Multi-Filter System: Instant keyword search and stock/category filtering.
    Spatial UI: Glassmorphic 3D interactive tilt cards with trend metrics.

 Tech Stack

    Frontend: React 18, Vite, TanStack Router, Tailwind CSS, Lucide Icons, Framer Motion
    Backend: Node.js, Express.js, CORS
    Data Scraping: Bright Data Web Scraper API (Apollo Pharmacy Network)

 Getting Started
1. Clone the repository

```bash git clone https://github.com/savislost/emergency-stock-radar.git cd emergency-stock-radar ```
2. Backend Setup

```bash cd crisis-radar/backend npm install node server.js ```
3. Frontend Setup

```bash cd ../backend/vision-radar-hq npm install npm run dev ``` Open http://localhost:8080 in your browser.
