# 🤖 Voice Message Analyzer

**AI-Powered Message Intelligence & Automation Assistant**

Voice Message Analyzer is an advanced communication tool designed to manage your digital life while you are busy, driving, or in a meeting. It uses AI logic to summarize long incoming notifications and intelligently interact with your contacts on your behalf.

## ✨ Key Features

*   **🔊 Smart Summarization**: Automatically converts long, complex notifications into concise 2-line summaries read aloud by the AI.
*   **🤖 Selective Auto-Reply**: You choose exactly which contacts or WhatsApp groups the AI is allowed to "talk" to. It will never reply to unselected chats.
*   **📞 Intelligent Call Handling**: If someone calls while your phone is on Mute or DND, the AI sends a personalized SMS: "VSS sir is busy. In a short time, he will call you."
*   **🔗 WhatsApp Sync**: Uses an Accessibility Service to automatically discover and list your WhatsApp groups so you can easily toggle AI integration for each one.
*   **👤 Personalized Identity**: Tell the AI your name, and it will represent you professionally (e.g., "John sir is busy").
*   **🌙 Modern Dark UI**: A sleek, futuristic dashboard with a real-time configuration banner.

## 🛠️ Technical Stack

*   **Language**: Java
*   **Platform**: Android (Min SDK 24)
*   **Core Services**:
    *   `NotificationListenerService` for reading messages.
    *   `AccessibilityService` for chat discovery.
    *   `BroadcastReceiver` for real-time call monitoring.
    *   `TextToSpeech` for summaries.

## 🔐 Privacy & Permissions

This app requires specialized permissions to function:

*   **Notification Access**: To read incoming messages.
*   **Accessibility**: To detect WhatsApp group names for user selection.
*   **SMS & Phone**: To send automated "busy" replies and detect silent calls.

---

**Suggested Tags**: `android` `java` `ai-assistant` `automation` `whatsapp-automation` `sms-reply` `accessibility-service` `intelligent-communication`
