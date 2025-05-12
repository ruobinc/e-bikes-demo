# E-Bikes Demo Script

## Context

E-Bikes is a manufacturer of electric bikes that distributes through a partner network of retail stores. This setup mirrors many of our embedded analytics customers who need to securely share internal data with external partners.

In this demo, you’ll follow two personas:

1. **Mario** – an E-Bikes employee managing partner relationships.  
2. **McKenzie** – owner of a retail store selling E-Bikes products.

This walkthrough showcases both Analyst capabilities (Mario) and Business User features (McKenzie). You can follow the full story end-to-end, or jump to specific capabilities depending on your audience's interest.

---

## Demo Story

| **Scenario** | **Action** | **What to Highlight** |
|--------------|------------|------------------------|
| McKenzie logs in to check her store's performance. | Click the **McKenzie** tile ([jump to](/McKenzie/Home)) | Lands on her personalized home page. |
| She opens the **Product Catalog** dashboard. | Click **Product Catalog** in the header ([jump to](/McKenzie/product-catalog)) | Show how the dashboard is filtered to her store only—powered by [User Attribute Functions](https://www.tableau.com/blog/unlock-power-personalized-analytics-user-attribute-functions). |
| She quickly sees which bikes are top sellers based on the number of $ signs. | n/a | The app uses the **VizQL Data Service** to programmatically access the same data powering the dashboard. The number of $ signs reflects sales performance. |
| She spots a spike in returns and wants more insight—time to upgrade. | Click **Upgrade to Premium** | Demonstrates **monetization**: unlocking additional dashboards, more granular data, and features like trendlines, notifications, and YoY comparisons. |
| She notices subtle trendlines behind the bike tiles and explores further. | Hover over bike tiles | These sparklines are generated using **VizQL Data Service** and rendered with [Recharts](https://www.npmjs.com/package/recharts). |
| She also sees a red notification about returns and decides to dig deeper. | Click the **Analyze** link ([jump to](/McKenzie/Analyze)) | This is powered by **Pulse APIs**. The alert dynamically shows a relevant Pulse metric with a negative trend (e.g., returns or sales). |
| The pink theme is too much for a pre-coffee morning—she switches to dark mode. | Click **Dark Mode** | Shows Pulse styling. |
| Digging deeper, she finds a specific battery type is driving returns. | Scroll to the Pulse metric → Click **Breakdown** → Filter by **Battery Type** | Notice how filtering by dimensions reveals clear root causes—in this case, a problematic battery type. |
| She wants to confirm whether this battery type also impacts sales. | Click on question Q1 (auto-seeded) | This uses **Pulse Enhanced Q&A** to correlate across multiple metrics. If no answer returns, move on—Q2 offers another pre-scripted question, or type your own. |
| Concerned, McKenzie calls Mario to report the issue. | Click the profile icon (top right) ([jump to](/)) | Return to the login screen. |
| Mario wants to run his own analysis before taking action. | Click **Analyze** in the header ([jump to](/Mario/Analyze)) | A blank workbook opens, connected to the same published data source. Full Tableau authoring experience. |
| He uses **Tableau Agent** to quickly generate insights. | Click the **Tableau Agent** icon → Click **Got It** → Type: “Show me the returns by battery type” | Tableau Agent creates a viz summarizing return volume by battery type. |
| He identifies the issue: 300Wh batteries. He recalls a recent supplier switch and flags the issue internally. | n/a | Business user to analyst handoff completed with actionable insights. |

---

## Feature Highlights

### 🔹 Embedded Dashboards ([jump to](/McKenzie/product-catalog))
- Secure and personalized using User Attribute Functions.
- Interactive filtering (e.g., select a bike to update visuals).
- Built-in monetization triggers (e.g., Upgrade to Premium).

### 🔹 Headless BI – VizQL Data Service
- Access the data behind the dashboards via API.
- Power custom visualizations (e.g., $ signs).
- Enable interactive front-end elements using open-source libraries (e.g., sparklines).

### 🔹 Pulse for Business Monitoring ([jump to](/McKenzie/Analyze))
- Render metrics as BANs, cards, or default Pulse views.
- Metrics styled to match app themes (including dark mode).
- Uses Pulse API to fetch and display custom real-time metric data.
- AI-generated insights from multiple metrics.

### 🔹 Pulse Enhanced Q&A (Tableau Pluse license required)  
- Ask natural language questions with correlation between KPIs (e.g., Sales vs. Returns).

### 🔹 Embedded Web Authoring for Analysts ([jump to](/Mario/Analyze))
- Live connection to governed data.
- Drag-and-drop ad hoc analysis.
- Boost productivity with **Tableau Agent**—a natural language assistant for building vizzes. (Tableau Plus license required)
