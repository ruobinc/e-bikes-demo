# E-Bikes Demo Script

## Context
E-Bikes is a manufacturer of electronic bikes. They are using a partner network of retail stores to distribute their e-bikes to their customers. This is a typical scenario for our embedding customers who want to share internal data with their external partners. 

In this demo, there are 2 actors
1. Mario, who is employed by e-bikes and is responsible for the partner relations
2. McKenzie, who is the owner of a retail store selling the e-bikes

The demo shows Analyst features for Mario, and Business User capabilies for McKenzie

The application is setup in such a way that you can jump immediately to specific capabilities (see below) if there is something specific that you want to show or see, but you can also follow the story to get a journey of all available options in Tableau Embedding.

## Story

| **Story** | **Do** | **See** |
|----|-----|-----|
| McKenzie logs in into the e-bikes application to gain insights into the health of her business. | Click on the McKenzie tile ([jump to](/McKenzie/Home)) | The home page |
| She opens the Product Catalog to see the dashboard | Click on Product Catalog in the header ([jump to](/McKenzie/product-catalog)) | Notice that the data of the dashboard is filtered to only the data for her retail store (Data Security), which is done with [User Attribute Functions](https://www.tableau.com/blog/unlock-power-personalized-analytics-user-attribute-functions) |
| With one quick overview she can immediately see what bikes are selling well and which ones are struggling with the $ signs on the bikes | n/a | The applciation uses VizQL Data Service, Tableau's Headless BI solution, which allows API (programmatic) access to the same published data source as the data source that is powering the dashboards on the right | n/a | The returned data is used to determine which bikes should get how many $ signs |
| She notices the big spike in returns in the dashboard and want to get more insight. She decides that this is a great time to upgrade to the Premium license | Click on the 'Upgrade to premium' link | The premium license gives her access to notifications (in the header), trendline data for individual bikes, and YoY comparisons in the dashboard |
| While moving her mouse, she notices there is trendlines for the sales and returns behind the bike tiles. After flipping a few tiles she notices that the returns are not limited to a single bike | Hover over the bike tiles | These sparklines are created with VizQL Data Service using a open source charting library ([recharts](https://www.npmjs.com/package/recharts)) |  
| Also she sees the notification about the Bike Returns in the top right, and decide to Analyze more | Click on the Analyze link ([jump to](/McKenzie/Analyze)) | The alert is powered by the Pulse APIs. In this case it shows from the subscribed Pulse metrics the first one with a negative sentiment (this notification is dynamic, so it might show a notification about Sales or no notification at all) |
| McKenzie has just started her day and hasn't finished her first cup of coffee yet, so the pink is a bit harsh on the eyes. She toggles the page to dark mode | Click on Dark Mode | Notice that not only the background of the page is going into dark mode, but that the Pulse metrics are styled accordingly |
| She notices a big jump in returns on the metrics and in her further analysis she notices there is a specific battery type that has high number of returns | Scroll down (if needed) to get access to the detail Pulse metric and click on Breakdown. Click on some dimensions, including the Battery Type | Notice that the Battery Type has one clear reason for the high number of returns
| McKenzie decides to ask Pulse the question to make certain that the battery type is also impacting the sales numbers | The question 'Q1' is seeded with the correct text to ask, no action needed | The AI generated answer across the Sales and Returns metrics. Note that the question sometimes doesn't give back an answer due to insufficient data, in that case just proceed to next step. You can point out that this is a scripted question for speeding up the demo, you can click Q2 for another question or type in any question to get any correlation between the Sales and Returns metrics |
| McKenzie decides to give Mario a call to notify him about this | Click on the profile icon in the top right ([jump to](/)) | You have returned to the login screen |
| Before Mario takes any action, he decides to some some analysis himself | Click on Analyze in the header ([jump to](/Mario/Analyze)) | The full Tableau experience shows up. In this case, an empty workbook is presented which is already connected to the same published data source |
| Mario doesn't have a lot of Tableau experience and wants the help of Tableau Agent | Click on the Tableau Agent icon in the top right (next to Show Me), and click on Got It in the Tableau Agent window and type 'Show me the returns by battery type' | Tableau Agent generated the Viz that shows the number of returns by battery type |
| He now sees that the problem is related to the 300Wh battery type, and he recalls that they recently switched to another factory for that battery. He can now flag this with his management to resolve the issue | n/a | | 

## Capability Overview
### Embedded Dashboards ([jump to](/McKenzie/product-catalog))
* Fully functional dashboards
* Data security with User Attribute Functions (McKenzie only sees data for her retail store Wheelworks)
* Bi-directional communication (filter data by selecting bike)
* Monetization with User Attribute Functions (Upgrade to premium)

### Headless BI (VizQL Data Service) to query data programmatically ([jump to](/McKenzie/product-catalog))
* Create custom charts with open source frameworks
* Visualize data intuitively ($ signs on the bikes)
* Create actions (notifications)

### Pulse ([jump to](/McKenzie/Analyze))
* Render the Pulse metrics in 3 formats (BAN, Card, Default)
* Custom styling

### Pulse API to get access to all Pulse data ([jump to](/McKenzie/Analyze))
* Pulse data for custom rendering
* Pulse AI generated summaries (when [upgraded to Premium](/McKenzie/product-catalog))
* Pulse Enhanced Q&A to get answers with correlations between multiple metrics (Tableau Plus license needed)

### Embedded Web Authoring ([jump to](/Mario/Analyze))
* Ad-hoc analysis
* Tableau Agent (Tableau Plus license needed)
