---
layout: post
title: Package Manager - Need of iterative rapid experimentaion.
---

Over the last two decades, the technology stack has undergone a speedy evolution to foster rapid experimentation to simulate and test creative ideas. With the advent of open source technologies, industries gradually started promoting reusability and modularity to plug third-party components in a simple and non-disruptive manner, where package manage becomes integral part o f any development to nurture quick innovations.

![_config.yml](/images/header.jpg){:height="200px" width=50% float:right}

Package management for the web has come a long way.  when I first began learning web technologies, there were only two primary way to connect with third party component: either went online, download/ extract a zipped version, and link on the web page; OR in case of faster website needed, we may go to CDN and pick a globally cached version. Here we will be talking about the third option “Package Manager”, which recently got so popular for managing your dependencies.  
  

<span style="color:blue">**_What is package manager?_**  </span>
  
In simple words, Package manager is a framework which manages dependencies for your project in a meaningful and logical manner.

<span style="color:blue">**_Why do we need it now? What problem does it solve?_**  </span>
  
#### Problem Statement: 
External components have always been used in software development either in the form of source code or in the form of reusable libraries. In older days using an external library was less of help and more of pain. Sometime it works on local machine but not on deployment and vice versa. Also, preparing a fresh machine for development was usually a mess to install all the required dependencies from different locations. You must traverse site to site or access CDN for any update or searching new components.  
   
So, every time you need a readymade library in your project, you would search around for a library, locate, download the binaries and copy them to your project for a reference. It could be worse when you run into a bug and needs an update or latest version for same library. This is all manual and you don’t have any option to tell if there's an update ready without going to their respective website.    
  
#### Resolution:    
So, we need a platform that could automates and simplify the process of searching, installing, upgrading, versioning, removing for external libraries in a consistent manner. And here is a package manager as savior.  
  
<span style="color:blue">**_How does it help?_**  </span>
  
In a layman language, package manager eliminates the need for manual installs and updates. Though bit more technically, it provides framework, tools and central repository, which make it very easy for you to distribute reusable libraries and plugins across programming languages and platforms. Since it is automated and consistent across all the machines/platforms, helps people get started on any project easily with same set of dependencies on any machine  
  
<span style="color:blue">**_How does it work?_**</span>  
    
To understand it, let’s talk about a very small unit and understand what is a package all about.  A software package is a combination of a software program binaries and its required metadata in archive format. Metadata actually describes package’s description, version, and its dependencies, which is read by package manager to ensure the integrity and authenticity of the package by verifying the digital certificates and checksums. 
    
Package manager keeps track of all dependencies for your project using a manifest file (ex package.json) to download, install and update reusable piece of software from global repository to local dev machine.
 
<span style="color:blue">**_Any Examples/Use cases?_**</span>

- JS framework: npm, Bower, Yarn
  - Bower is optimized for front-end components. Bower uses a flat dependency tree, requiring only one version for each package, reducing page load to a minimum
  - Unlike Bower, NPM supports nested dependency trees. Meaning, NPM may actually load multiple versions of a component on your machine, makes it great for avoiding dependency conflicts.
  - NPM aims for stability, bower aims for a smaller/faster footprint.
  - Facebook + Google released their own package manager solution, called Yarn.
  - Yarn also take packages from NpmJS or Bower registries. Yarn install all dependencies parallel.
- .Net framework: NuGet
  - package manager that mainly deals with .NET assemblies and nicely integrated within Visual Studio
- Ruby: gem: 
  -	RubyGems is a package manager for the Ruby programming language that provides a standard format for distributing Ruby programs and libraries (in a self-contained format called a "gem")
