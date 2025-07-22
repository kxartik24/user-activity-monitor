export class UserActivityMonitor {
    constructor(language = "en") {
        this.language = language;
        this.initStyles();
        this.initLoggingArea();
        this.setupEventListeners();
        this.startInitialChecks();
    }

    getTimeStamp() {
        const now = new Date();
        return now.toLocaleTimeString() + " - " + now.toLocaleDateString();
    }

    logMessage(enMessage, deMessage) {
        const message = this.language === "de" ? deMessage : enMessage;
        const logLine = document.createElement("p");
        logLine.textContent = `${this.getTimeStamp()}: ${message}`;
        this.logContainer.appendChild(logLine);
        console.log(`${this.getTimeStamp()}: ${message}`);
    }

    initStyles() {
        document.body.style.fontFamily = "monospace";
        document.body.style.backgroundColor = "#111";
        document.body.style.color = "#0f0";
        document.body.style.padding = "10px";
    }

    initLoggingArea() {
        this.logContainer = document.createElement("div");
        document.body.appendChild(this.logContainer);
    }

    setupEventListeners() {
        window.onblur = () => {
            this.logMessage("Tab switched or window left", "Tab gewechselt oder Fenster verlassen");
        };

        window.onfocus = () => {
            this.logMessage("Returned to the tab", "Zurück im Tab");
        };

        document.addEventListener("fullscreenchange", () => this.checkFullScreenStatus());
    }

    async requestCameraAndMicrophone() {
        if (!navigator.mediaDevices?.getUserMedia) {
            this.logMessage("Media devices API not supported", "Media Devices API nicht unterstützt");
            return;
        }

        try {
            await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            this.logMessage("Camera and microphone access granted successfully", "Kamera- und Mikrofonzugriff erfolgreich gewährt");
        } catch {
            this.logMessage("Camera and microphone access denied or failed", "Kamera- und Mikrofonzugriff verweigert oder fehlgeschlagen");
        }
    }

    requestNotificationPermission() {
        if (!("Notification" in window)) {
            this.logMessage("Notifications not supported", "Benachrichtigungen nicht unterstützt");
            return;
        }

        Notification.requestPermission().then(permission => {
            this.logMessage(`Notifications permission: ${permission}`, `Benachrichtigungen-Berechtigung: ${permission}`);
        });
    }

    checkFullScreenStatus() {
        if (document.fullscreenElement) {
            this.logMessage("Browser is in fullscreen mode", "Browser ist im Vollbildmodus");
        } else {
            this.logMessage("Browser exited fullscreen mode", "Browser hat den Vollbildmodus verlassen");
        }
    }

    startInitialChecks() {
        this.requestCameraAndMicrophone();
        this.requestNotificationPermission();
        this.checkFullScreenStatus();

        setTimeout(() => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().then(() => {
                    this.logMessage("Fullscreen mode manually activated", "Vollbildmodus manuell aktiviert");
                }).catch(() => {
                    this.logMessage("Fullscreen mode could not be activated", "Vollbildmodus konnte nicht aktiviert werden");
                });
            }
        }, 2000);
    }
}
