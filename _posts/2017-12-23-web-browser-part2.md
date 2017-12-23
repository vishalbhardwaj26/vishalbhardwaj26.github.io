---
layout: post
title: Web Browser Basics - Examples and Updates
---

In case you have read through my previous blog on [Web Browser Basics](https://vishalbhardwaj26.github.io/web-browser/)  last week, let's take few examples on popular browsers and their recent updates to understand the topic more effectively, though points are randomly organized here:

### Chromium

 -  Open-source web browser project, which used **Webkit** as rendering engine and **V8** as JS engine.
 -  Google Chrome draws its source code from Chromium by adding more features such as GoogleUpdate,   Adobe Flash Player etc.
 - Designed to have a minimalist user interface with tabbed window manager or shell for web. 
 - Google Chrome was first introduced in September 2008, and along with its release, the Chromium source code was also made available allowing builds to be constructed from it.
 - Other chromium based browser: Blisk, Inox, Opera, Vivaldi etc.
 
Recently Google Chromium Project team have decided to fork the WebKit-rendering engine for Chrome and calling this new branch as "**Blink**", open source browser rendering engine, with the mission, "To improve the open web through technical innovation.

 - Chief motives behind above shift include a need to improve performance, speed, stability, and security of the web platform in Chrome, so this will be a good thing for growing population of Chrome browser users
 - On the other hand, this could be business/political move. With Apple having a large stake in the WebKit-rendering engine, it made good business sense for Chrome to distance itself and create a rendering engine of its own.


I was investigating **Qt Web engine** last year and found few more interesting facts

 - WebKit (rendering engine) open source project nowadays has became the most widely used browser engine in the world. Qt port of WebKit was pretty much the first non-Apple port of WebKit, many other projects and companies joined the project over the years to follow.
 - The Chromium project took an especially big role in the project and became over time the biggest contributor to WebKit (followed by Apple and with Qt on the third place).
 - When Google decided to leave the WebKit project in favor of their own fork of WebKit, Blink. Since then, Blink, which really is a very integrated part of Chromium, and WebKit have been going separate ways, and the two code bases have been rapidly diverging. Because of this, the Qt R&D WebKit team investigated and decided to base their future Web engine on Chromium with following reasons: 

    1. Chromium has a cross-platform focus, with the browser being available on all major desktop platforms and Android. The same is no longer true of WebKit.
    2. Many things that are available out-of-the box from Chromium, which would require a lot of work for us to support ourselves in WebKit.
    3. Chromium simplifies handling the OS integration, this allows us to spend additional time to focus on the upper layers to provide a great and easy-to-use API and a seamless integration into Qt
    4. Chromium is being developed with very strict control on quality.
