---
layout: post
title: iScreen Sizes for iOS development
---
How to handle multiple screen sizes on iOS

![_config.yml](/images/i.jpg)

iOS is supporting two different screen sizes (iPad and iPod/iPhone), which could cause panic in developing same product for two different UI sets. So here is bit understanding to adjust screen sizes as per customer/user need.

**iPod/iPhone** : 480x320 pixels ; iPad : 1024x768pixels (132ppi)
**New iphone4** - 960x640 pixels-326 ppi(but developers still develop app for 480x320 and system layer will just take care of mapping that to the higher resolution screen for sharper appearance).

iPhone vs. iPad:
Information that had to be spread over multiple tabs on an iphone can be elegantly displayed on a single screen of iPad. So ipad provides new opportunities for innovative applications. Larger screen of ipad makes it possible to display two level of hierarchy in a navigation based application on one screen, making it faster and easier for the user to move around in your content. For example developer can incorporate Split View controller and Popovers specially designed for iPADs. Other iPAD only features: Popover views; Movie in a view; External Display etc. So you can avail rich set of UI features on iPad, which are not available on iPhone.

So you have two options while developing any iOS application :
* Create **universal application** that will run well on both the iPad and the iPhone, detecting which device it’s on and adjusting as necessary. Best option for user, since they can buy it once in the app store and use it on both their iphone and their ipad. It is worth complicating the code a bit to have a single application that is distributed to everyone.

* Build **separate versions** for each device, if the iPhone and iPad would sell to different audience or your application contains a lot of predefined graphics that take up a lot of space and need to be different for each screen size. If the code is largely same, we can do this with a single project and two build targets otherwise it make sense to create two separate projects that share any common source files but implement different view and controllers.