# Wildfire Tracker Web Application 
Made by: Aaliyah English

Description: A full-stack web application designed to monitor and visualize active global wildfires in real time. This application fetches satellite telemetry from NASA's Earthdata APIs and overlays spatial data onto dynamic maps using the Google MapsAPI.

## 🌟 Key Features
* **Real-Time Data Visualization:** Displays active fire data using heatmaps, custom markers, and interactive overlays.
* **Geospatial API Integration:** Fetches and parses satellite telemetry directly from NASA's Earthdata REST endpoints.
* **Dynamic Search & Filtering:** Filter fire events by location, confidence rating, and date ranges.
* **Asynchronous State Handling:** Optimized data fetching and state management to parse large JSON payloads without blocking UI rendering.

## 🛠️ Tech Stack

* **Frontend:** React, JavaScript, HTML, CSS
* **APIs:** Google Maps JavaScript API, NASA EarthdataAPI
* **Version Control:** Visual Studio Code, Git, GitHub

---

## 🚀 Getting Started

### Prerequisites
* Node.js
* npx or yarn
* Google Maps API Key
* NASA Earthdata API Key


## ⏳ In Development / Future Roadmap

This application is actively being developed. Upcoming features and architectural improvements include:
- [ ] **UI/UX Enhancements:** Integrate custom Google Maps styling, marker clustering for dense fire zones, and dynamic fire detail modal cards.
- [ ] **Data Filtering & Search:** Implement multi-criteria filtering by date range, fire intensity, and geographic radius.
- [ ] **Unit & Component Testing:** Add testing suites using React Testing Library and Jest to ensure code reliability across core state updates.
