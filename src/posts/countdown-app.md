---
title: countdown-app
description: React & Electron app
casestudy: true
thumb: images/countdown-app-thumb-alt.jpg
image_post: /images/countdown-app-post.jpg
repo: https://github.com/tjallen/countdown-app
date: 2016-11-10 12:06:04
page_links:
- link_text: Web build
  link_url: /projects/countdown-app
- link_text: Electron releases
  link_url: https://github.com/tjallen/countdown-app/releases
tags:
- JavaScript
- React
- Electron
- Webpack
---

An impeccably named countdown timer app with web and desktop builds, built with [React](https://facebook.github.io/react/) and [Electron](http://electron.atom.io/).

This began as an hourly chime component, then slowly became a countdown timer.

Features:
- Player controls: pause & resume, clear, reset, add one minute
- Timer loop/repeat controls
- Customiseable timer labels
- Volume controls for the audio alert using my [react-simple-range](https://github.com/tjallen/react-simple-range) module

Timer ticks/updates are fired by a looping setTimeout which attempts to self-correct for drift due to JavaScript's single threaded nature, allowing greater accuracy than would be achievable by setInterval.