---
title: How to audit landing pages
description: How to audit landing pages.
slug: "how-to-audit-landing-pages"
date: '2022-5-08'
categories:
- Google Ads
- Google Ads Audit
- PPC [pay per click] for busy people
published: true
author: "PPC Panos"
banner: "/how-to-audit-landing-pages.png"
---





# How to audit landing pages


Landing pages need to be fast for the visitors and accessible to the bots.  
In order to audit the landing pages, you will need to use the following free tools.

1st step  
Start by testing your landing page URLs with the following tools.

Note, you will have to select the nearest testing point regarding the location of your target audience.  
Eg if your audience is in the USA, then you should choose testing locations in the USA  
Also, it is better if you test for mobile devices regardless of the connection speed.

Options

1st option  
GTmetrix  
https://gtmetrix.com/

2nd option  
Webpagetest  
https://www.webpagetest.org/

3rd option *optional*  
Fetch and render  
https://technicalseo.com/tools/fetch-render/

Here you get to test the HTTP load time, render time, and further technical details. Do note that, compared to the previous services, this is location agnostic.

2nd step  
Before you audit the numbers, it is best to learn what each number is.

Speed Index

Speed Index (SI) is a performance metric that measures how quickly your page is visually complete above-the-fold.

SI is dependent on the size of the browser view port and differs from other metrics like First Contentful Paint (FCP) or Largest Contentful Paint (LCP) because it is not a milestone on your page’s loading timeline.

SI is very much tied to other page load timings. This makes it a useful overall benchmark for assessing your website’s performance in its entirety.

First Contentful Paint [FCP]

First Contentful Paint (FCP) is a performance metric that measures how quickly visitors can view actual content (i.e., text, images, video, etc.) on your page.

Your page’s FCP is the total time taken from the beginning of your page load to the point any content is rendered on the screen.

A low FCP time contributes to a positive user experience, as your visitors perceive the page to be loading fast if content is delivered sooner.

Time to interactive [TTI]

Time to Interactive (TTI) is a performance metric that measures a page’s load responsiveness and helps identify situations where a page looks interactive but actually isn’t.

TTI measures the earliest time after First Contentful Paint (FCP) when the page is reliably ready for user interactivity.

In simple terms, a fast TTI helps ensure that the page is usable.

Total blocking time [TBT]

Total Blocking Time (TBT) is a Lighthouse Performance metric introduced in 2020 that quantifies your page’s load responsiveness to user input.

In the simplest terms, TBT measures the total amount of time your webpage was blocked, preventing the user from interacting with your page.

Largest Contentful paint [LCP]

Largest Contentful Paint (LCP) is a performance metric introduced in 2020 by Lighthouse to better measure the perceived loading experience for users.

In the simplest terms, LCP measures how long it takes for the largest “content element” (e.g., hero image, heading text, etc.) on your page to become visible within your visitor’s viewport.

Cumulative layout shift [CLS]

CLS measures the unexpected shifting of web elements while the page is being rendered. This measurement is then quantified as an aggregate score of all the individual layout shifts on your page.

Time to first byte [TTFB]

Time to First Byte (TTFB) is the total amount of time from the start of the request to when we receive the first byte of the response.

Some ways to improve the TTFB include: optimizing application code, implementing caching, fine-tuning your web server configuration, or upgrading server hardware.

Onload time

Onload Time occurs when the processing of the page is complete and all the resources on the page (images, CSS, etc.) have finished downloading.

This is also the same time that DOM complete occurs and the JavaScript window.onload event fires.

Note that there may be JavaScript that initiates subsequent requests for more resources, which is why Fully Loaded Time is preferred.

DOM interactive time

DOM Interactive Time is the point at which the browser has finished loading and parsing HTML, and the DOM (Document Object Model) Tree has been built.

The DOM is how the browser internally structures the HTML so that it can render it.

DOM Content Loaded time

DOM Content Loaded Time (DOM Loaded or DOM Ready for short) is the point at which the DOM is ready (i.e., DOM Interactive) and there are no stylesheets blocking JavaScript execution.

If there are no stylesheets blocking JavaScript execution and there is no parser blocking JavaScript, then this will be the same as DOM Interactive Time.

Since this event is often used by many JavaScript frameworks as the starting point and delays in this event can mean delays in rendering, it’s important to make sure that style and script order are optimized and that parsing of JavaScript is deferred.

Fully loaded time

Fully Loaded Time is the point after all of the following have occurred:

First Contentful Paint has fired  
Onload has fired  
Network and CPU are idle (5.25s)

Render times

Render time points to the time it took for the AdsBot-Google [Google Ads bot] to render your landing page. Anything above 10 seconds will be detrimental to your conversion rates.

HTTP status

The status of a landing page should be 200 in order to be functional

Render

Render shows you how the page looks and the time it takes, for each bot.

Note  
If you can’t access the URLs, then you should check with your firewall settings.

Thoughts  
There are no right or wrong answers when it comes to landing page speed. That said, your pages need to be as fast as possible in order to provide the best possible user experience.

If you want to know more about Google Ads audits, then visit the following link

[Google Ads Audit guide & free [Notion & Google Sheets] template](https://ppcpanos.com/free-google-ads-audit-template-v1/)
