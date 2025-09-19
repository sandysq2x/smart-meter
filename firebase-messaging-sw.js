// Import Firebase
importScripts("https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging.js");

// Firebase Config (same as your app)
const firebaseConfig = {
  apiKey: "AIzaSyBKymhtFhKq9PDQnBetwcqgwpHSG8CZ26E",
  authDomain: "prasactronics-b28eb.firebaseapp.com",
  databaseURL: "https://prasactronics-b28eb-default-rtdb.firebaseio.com",
  projectId: "prasactronics-b28eb",
  storageBucket: "prasactronics-b28eb.firebasestorage.app",
  messagingSenderId: "1022798223455",
  appId: "1:1022798223455:web:d26fb82f59cf3ac318a3ea",
  measurementId: "G-7ESX735R8F"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// 🔹 Background Notification
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification("Smart Meter Alert", {
    body: payload.notification.body,
    icon: "/meter.png", // optional icon
    data: { url: "/payment.html" }
  });
});

// 🔹 Handle notification click
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
