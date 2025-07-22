# 🖥️ UserActivityMonitor

**UserActivityMonitor** is a lightweight JavaScript-based application that tracks and logs user activity within a web page. It can be used for productivity tracking, session timeout alerts, or analytics on user behavior patterns.

## 🚀 Features

- ⏱️ Tracks mouse movements, key presses, and clicks
- 🔄 Automatically logs activity timestamps
- 📄 Displays activity logs in real-time on the page
- 💾 Easy to customize for integration into web apps
- 🌐 Pure HTML, CSS, and JavaScript — no dependencies

## 📁 Folder Structure

```
UserActivityMonitor/
│
├── index.html            # Main HTML file
├── style.css             # Basic styling for the page
└── script.js             # Core JavaScript for activity monitoring
```

## 🛠️ How It Works

1. The script initializes and attaches event listeners to capture:
   - Mouse movement
   - Keyboard input
   - Mouse clicks

2. Each event is timestamped using `Date.toLocaleString()` and appended to the activity log on the webpage.

3. The console also logs each activity for debugging or further tracking.

## 💡 Use Cases

- Track user interaction for idle timeout
- Monitor engagement on landing pages
- Audit and log admin panel activity
- Productivity tracking on internal tools

## 🧪 Usage

1. Clone or download the repository.
2. Open `index.html` in any modern browser.
3. Interact with the page to see activity logs generated in real time.

## 🖼️ Screenshot

> *(Include a screenshot here if desired)*

## 📌 To-Do / Future Enhancements

- Save logs to local storage or server
- Idle detection and timeout alerts
- Export logs as CSV
- User session summary

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

**Made with ❤️ using HTML, CSS, and JS**