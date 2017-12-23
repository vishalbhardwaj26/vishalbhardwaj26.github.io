---
layout: post
title: Web Browser Basics
---

When I began my exploration into web technologies two year back, I gradually started acquainting myself with browser basics, which I found equally important as learning any dynamic dev langauage, so trying to consolidate those findings in a meaningful way if it helps others.

Web browser application follows a modular approach which made it easy to embed web-browser engines in a variety of applications. For example, the same engine, used by a web browser, can be used by an email client to display HTML email. This modular approach includes two main parts:

 - Browser engine - takes a URL, and then retrieves the document corresponding to the URL and paints a graphical representation of it in the given rectangle. It also handles links, forms, cookies, client-side scripting.
 - Host Application - provides the menu bar, address bar, status bar, bookmark manager, history and preferences. It embeds the engine and serves as an interface between the user, the engine, and the underlying operating system

Layout Engine
------------------
 - Known as layout engine or rendering engine, 
 - Program that renders marked up content (HTML,XML) & and formatting information (CSS).

#### Example:
 1.  Webkit - Rendering engine in Apple's Safari and Google's Chrome web browsers. Current versions of Chromium/Chrome (except iOS version) and Opera are based on Blink, a fork of WebKit.
 2. Gecko, the Mozilla project's open-source web browser engine, is used by Firefox web browser.
 3. Trident, the web browser engine from Internet Explorer. Trident has been superseded by EdgeHTML.




|  Engine  	|          Developer(s)         	| Leading application 	|         Target application(s)         	| Programming language 	|
|:--------:	|:-----------------------------:	|:-------------------:	|:-------------------------------------:	|:--------------------:	|
| Blink    	| Google, Opera, Samsung, Intel 	| Google Chrome       	| Google Chrome & Opera from 15.0       	| C++                  	|
| EdgeHTML 	| Microsoft                     	| Edge                	| Edge                                  	| C++                  	|
| Gecko    	| Netscape/Mozilla Foundation   	| Mozilla Firefox     	| Mozilla Firefox & Mozilla Thunderbird 	| C++                  	|
| Presto   	| Opera Software                	| Opera               	| Opera                                 	| C++                  	|
| Trident  	| Microsoft                     	| Internet Explorer   	| Internet Explorer                     	| C++                  	|
| WebKit   	| Apple, KDE, Nokia             	| Apple Safari        	| Apple Safari                          	| C++                  	|

#### More Facts
 - Blink was created by Google by forking WebKit
 - EdgeHTML was created by Microsoft by forking Trident
 - Opera switched to WebKit, then followed Google to Blink
 - WebKit was created by Apple by forking KHTML


Javascript Engine
------------------
It’s important to differentiate between the layout engines that power a browser by laying out web pages, versus the lower-level JavaScript engine that interprets and executes code. Major browser has a graphical engine and an independent JavaScript engine, so let me focus on JS enginehere:

 - Program or library which interpret & executes JavaScript code.  May be a traditional interpreter, or it may utilize just-in-time compilation to bytecode .
 - Takes your source code, breaks it up into strings (a.k.a. lexes it), takes those strings and converts them into bytecode that a compiler can understand, and then executes it. In other words this engine accepts the JavaScript code that a developer writes and convert it to fast, optimized code that can be interpreted by a browser or even embedded into an application.
 - It's not that simple as I described, JavaScriptCore, for example, has six ‘building blocks’ that analyze, interpret, optimize, and garbage collect JavaScript code. 
 - The JavaScript engine gives developers access to functionality (networking, DOM handling, external events, HTML5 video, canvas and data storage) needed to control the web browser.

#### For example, 
First JavaScript engine was created by Brendan Eich at Netscape Communications Corporation for the Netscape Navigator web browser. The engine, code named SpiderMonkey, is implemented in C++. More:

 - Nitro with WebKit; 
 - SpiderMonkey with Gecko; 
 - KJS with KHTML; 
 - Rhino by default has no layout engine. 
 - V8 with Blink in Google Chrome. 

| Browser           | JavaScript Engine                   |
|-------------------|-------------------------------------|
| Netscape, Mozilla | Spidermonkey                        |
| Chrome            | V8                                  |
| Safari         | JavaScriptCore, marketed as "Nitro" |
| IE and Edge       | Chakra                              |
| Node.js       | V8                                  |


The goal of a JavaScript engine’s code parsing and execution process is to generate the most optimized code in the shortest possible time.


### Use case: V8 JavaScript Engine 
 - Open source JavaScript engine developed by The Chromium Project for the Google Chrome web browser
 - Used in many other projects, such as Couchbase, MongoDB, Electron and Node.js.
 - Node.js is an asynchronous, event-driven framework that allows you to use JavaScript on the server-side. Since they are JavaScript-driven tools, they are powered by JavaScript engines.

 [In Continuation: Web Browser Basics - Example and Updates](https://vishalbhardwaj26.github.io/web-browser-part2/)
