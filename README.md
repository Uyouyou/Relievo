# Relievo — A Multilingual, Offline-First Disaster Aid Wallet

Team 28 
Submitted for: Open Data Unleash Hackathon 2025  
Theme: Natural Disaster Management & Climate Resilience  


##  Executive Summary

Relievo is an inclusive, multilingual digital wallet that empowers disaster victims — especially in underserved, low-literacy, and low-connectivity communities — to request, receive, and track humanitarian aid in their local languages and also alerts them to weather forecasts.  

It overcomes the barriers of language, connectivity, and transparency in aid delivery by providing a simple experience that works even offline.


## 🛑 The Problem

In natural disasters, many survivors face critical challenges:

- They do not speak English or cannot read.
- They do not have access to the internet.
- They cannot trust or understand digital aid platforms.
- NGOs and governments cannot verify who has received what or where aid is delayed.

As a result, the most vulnerable often get left behind.


## 💡 Our Solution

Relievo is a digital solution that provides:

- A multilingual interface for aid registration and updates.
- An offline wallet that syncs when reconnected.
- A QR-based identity system for verification at aid centers.
- An admin dashboard for NGOs/governments to track and allocate aid.
- A public blockchain ledger to increase donor trust and transparency.



## 👥 Target Users

| User Type | Needs | Pain Points |
|-----------|-------|-------------|
| Disaster Survivors| Aid access, updates, proof of receipt | No English, no data, no literacy |
| NGOs & Agencies | Track aid delivery, manage logistics | Low visibility, no transparency |
| Government Responders | Real-time data, community prioritization | Delayed insights, risk of fraud |



## 🧭 User Journey

1. First-Time Use: User selects preferred language (stored locally).
2. Aid Request: Fills a simple form (e.g., “I need food + medicine”).
3. Receives QR Code: Acts as a digital ID for verification.
4. Tracks Status: “Request Received” → “Processing” → “Aid Delivered”.
5. Admin Portal: NGOs view and assign aid per region and user ID.



## 🔍 Core Features

- 🌐 Multilingual UI – Supports English, Hausa, Igbo, Yoruba, Arabic, Swahili (expandable).
- 📴 Offline-First Mode – Fully functional without internet; auto-syncs when reconnected.
- 📱 Aid Wallet Profile – Tracks aid requests, approvals, and history.
- 🔲 QR Code ID – Survivors use this at aid collection points.
- 📋 Admin Dashboard – Manage aid requests, assign support and track delivery.
- 🔗 Blockchain Integration (optional) – Verifiable, immutable public aid records.



## 🛠️ Technical Architecture

| Layer | Tools |
|-------|-------|
| Frontend | React.js|
| Backend | Node.js + Express |
| Real-Time Sync | Firebase |
| Offline Storage | SQLite / AsyncStorage |
| QR / ID Generator | QR Code Generator Package |
| Localization | `react-i18next` using `.json` files |
| Blockchain  | Algorand Smart Contracts|
| Hosting | Vercel|



## 🧠 Offline-First Strategy

- Local forms & request data stored with `AsyncStorage`/SQLite.
- Auto-detects connectivity:
  - Offline → Enables “Offline Mode”
  - Reconnected → Auto-posts data, fetches latest status
- Ensures users can register or check aid without internet.



## 🈳 Multilingual Strategy

- User selects language once, → saves it locally.
- Translations handled with `.json` files for scalability.
- Text-to-Speech (TTS) API support for low-literacy users.



## 👩🏽‍💻 Team Roles

| Role | Responsibility |
|------|----------------|
| Frontend Developer | Build multilingual UI |
| Backend Developer | APIs, aid matching, syncing logic |
| UX Designer | Inclusive, icon-friendly design |
| Blockchain Dev | Aid record smart contracts |



## 📈 MVP Success Criteria

| Goal | Success Metric |
|------|----------------|
| Works Offline | Can register and track aid with no internet |
| Multilingual Support | At least 3+ local languages in UI |
| Aid Request | Users can submit requests with QR verification |
| Admin Dashboard | NGO/admin can assign aid and monitor distribution |
| QR Code | Unique to each survivor and usable at aid stations |



## 🚀 Future Scope

- 🔐 Biometric identity (face or voice).
- 🧠 Smart prioritization using open disaster datasets.
- 🌍 Cross-border wallet portability.
- 📢 In-app notifications for urgent needs.
- 📊 Dashboards for donor and impact transparency.



## 🔚 Conclusion

Relievo ensures that no one is left out of disaster response due to language or technology limitations.  

It offers a robust, user-friendly, and trusted platform that bridges the digital divide, especially for underserved and vulnerable populations.  

> Inspired by the Kare Survivor Wallet, built with simplicity and empathy by Team 28.


