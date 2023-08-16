---
title: How to audit utm parameters
description: How to audit utm parameters.
slug: "how-to-audit-utm-parameters"
date: '2022-12-12'
categories:
- Google Ads Audit
- Google Ads
- PPC [pay per click] for busy people
published: true
author: "PPC Panos"
banner: "/audit-utm-parameters.png"
---





# How to audit utm parameters


## What is a UTM link?

Let’s start by defining what a query string is:

A  **query string**  is a part of a  [uniform resource locator](https://en.wikipedia.org/wiki/Uniform_resource_locator "Uniform resource locator")  (URL) that assigns values to specified parameters. A query string commonly includes fields added to a base URL by a Web browser or other client application, for example as part of an HTML, choosing the appearance of a page, or jumping to positions in multimedia content.

A UTM link is a link that contains the original URL plus the query string that in turn contains the parameters dictated by each marketer at the beginning of each campaign. The parameters can be dynamic or static [hard-coded].

Personally, and wherever possible, I always opt for dynamic parameters. It allows me to better understand how each ad contributes to a Multi-attribution environment.

Visually, it will look something like this

[https://ppcpanos.com/free-google-ads-audit-template-v1/?utm_source=notion&utm_medium=template&utm_campaign=google_ads_audit_checklist](https://ppcpanos.com/free-google-ads-audit-template-v1/?utm_source=notion&utm_medium=template&utm_campaign=google_ads_audit_checklist)

Notice that everything after the [?] are the UTM parameters

## What are UTM parameters?

Urchin Tracking Module (UTM) parameters are five variants of URL parameters used by marketers to track the effectiveness of online marketing campaigns across traffic sources and publishing media. It allows businesses to gain a better understanding of their online visitor behavior.  
The parameters consist of various inputs such as: source, medium, campaign, term, content, etc.  
Each parameter serves a different purpose  
eg identification of the site that sent the traffic to your landing pages.

**Note**  
The source parameter is a required parameter.

## Wait, What does UTM stand for

UTM stands for the_  **_Urchin Tracking Module_**_.  
Urchin was originally a web analytics software, developed by Urchin Software Corporation and designed to track the behavior of unique website visitors.  
Google bought it in 2005 and the acquisition led to the creation of Google Analytics, which became the most popular web data analytics tool across the internet.

UTM is a fascinating piece of tech and if you want to know more, then I suggest you visit the  [Urchin Tracking Module (UTM) overview](https://support.google.com/urchin/answer/28307?hl=en)  provided by Google.

## What are the available UTM parameters

Before we begin we need to state that  
ValueTrack parameters are used to track information about the source of an ad click. By adding these parameters to your ads and campaigns, you can identify if people who clicked on your ads used mobile devices, where they were located when they clicked your ads, and much more.

That said, ValueTrack parameters are compatible with the following campaigns: Search Network, Display Network, Shopping, Video, and App campaigns.

Here are all the available Google Ads ValueTrack parameters lists

Final URL, tracking template, or custom parameter

![value track final url](/value-track-final-url.png "How to audit utm parameters")

Shopping campaigns

![valuetrack shopping](/valuetrack-shopping.png "How to audit utm parameters")

Video campaigns

![valuetrack video](/valuetrack-video.png "How to audit utm parameters")

Hotel campaigns

![valuetrack hotel](/valuetrack-hotel.png "How to audit utm parameters")

Discovery campaigns

![valuetrack discovery](/valuetrack-discovery.png "How to audit utm parameters")

Visit the link, in case you want to know more about  [ValueTrack parameters](https://support.google.com/google-ads/answer/6305348?hl)

## How do I audit them in Google Ads?

You can find the UTM parameters and the tracking template inside the Account > Account Settings> Tracking and it should look something like this but with the sections filled

image

You can also find them in each and every ad.

Best practice: Create a tracking template with UTM parameters at the account level in order to validate if the links are sending back the correct information.

## Google Ads UTM parameters common pitfalls

The most common Google Ads UTM problems are:  
Using UTM parameters that you shouldn’t  
Using UTM parameters with spaces and errors  
Using UTM parameters with ValueTrack parameters that aren’t compatible with each and every network eg Discovery  
Using shortened URLs alongside the tracking template  
Using UTM parameters on both the account and the ad level

## Should I be using UTM parameters?

Undoubtedly, yes.  
UTM parameters will provide insights on website traffic, sessions, on-page behavior, pages per session, revenue per user, time to conversion, keyword performance, creative performance, ad copy performance, and so much more.  
With that data insights, you can increase conversions and reduce your CPA without much effort.

## How do I know it works?

Click the test button at the lower right and you should see a success message.

Also, you can click on the image/text inside Google ads in order to open the landing page of your ad in a new tab inside your browser. After that, open your Google Analytics, and navigate to Realtime > Traffic Sources > Active Users (Last 30 mins) and you should see CPC / google inside the table.  
If you are seeing, none/direct then the URL parameters and/or tracking template is set up incorrectly.

## How does UTM parameters affect MTA?

MTA stands for Multi-Touch attribution. MTA is a method that attempts to pass credit for a conversion to one or more touchpoints in the customer’s journey.  
By “passing” information back to the system, you get a bird’s eye view of what is and isn’t working regarding marketing activities. By having enough information about the volume and quality of interactions and outcomes, you can start allocating budget to marketing channels more suitable to your business objectives.

If you want to know more about Google Ads audits, then visit the following link

[Google Ads Audit guide & free [Notion & Google Sheets] template](https://ppcpanos.com/free-google-ads-audit-template-v1/)


