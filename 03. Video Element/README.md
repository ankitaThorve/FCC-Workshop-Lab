# HTML Video Element Demo 🎬

This project demonstrates how to use the **HTML5 `<video>` element** to embed video content on a web page with multiple source formats for better browser compatibility.

## 📌 Project Overview

The webpage displays a video player with:
- Playback controls
- Looping enabled
- Muted autoplay-ready setup
- A poster image displayed before playback
- Multiple video formats (`mp4`, `webm`, `ogg`, `mov`) for cross-browser support

## 🛠️ Technologies Used

- **HTML5**
- `<video>` element
- `<source>` tags for multiple formats

## 📂 Code Features Explained

### 1. Video Element
```html
<video width="640" loop controls muted poster="image-url">
```
- width="640" → Sets video width

- controls → Shows play, pause, volume controls

- loop → Replays video automatically

- muted → Starts video muted

- poster → Displays a thumbnail image before playback

### 2. Multiple Source Formats
```html
<source src="video.mp4" type="video/mp4">
<source src="video.webm" type="video/webm">
<source src="video.ogg" type="video/ogg">
<source src="video.mov" type="video/quicktime">
```

## 📖 Learning Outcome

- Understand how the HTML `<video>` element works

- Learn how to add fallback video formats

- Improve accessibility and browser support for media content

## 🧠 Reference

This project is part of the FreeCodeCamp HTML & Accessibility Labs.

### ✨ Author
**Ankita**  
Aspiring Frontend Developer | Learning HTML, CSS & JavaScript with FreeCodeCamp  
Documenting my web development journey through hands-on projects.
