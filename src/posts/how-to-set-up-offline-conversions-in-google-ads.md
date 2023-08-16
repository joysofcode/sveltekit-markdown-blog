
---

title: How to set up offline conversion imports in Google Ads
description: A "simple" 2-part process that will help you and Google Ads understand what drives sales.
slug: "how-to-set-up-offline-conversions-in-google-ads"
date: '2021-10-16'
categories:
- Google Ads
- PPC [pay per click] for busy people
published: true
author: "PPC Panos"
banner: "/performance-marketing-services.png"

---


# How to set up offline conversion imports in Google Ads


## Before setting up offline conversion imports in Google Ads you should be aware of the following

### There are 2 types of offline conversion imports

Offline conversions imports from clicks  
Offline conversions imports from calls

Offline conversions from clicks are everything that a visitor can click on the website eg lead forms, telephone number clicks, directions, etc.  
Offline conversions from calls are Google forwarding numbers that are available in the  [following countries](https://support.google.com/google-ads/answer/2382961)

The former is more widely used than the latter.

### There are multiple types of offline conversion imports

Direct Google Ads Conversion import  
Salesforce Google Ads Conversion import  
Zapier offline conversion tracking  
Hubspot’s Google Ads optimization event tool

### Offline conversions require the following

Mandatory Google Ads unique ID [GCLID]  
GCLID is case sensitive  
Auto-tagging needs to be enabled in the Google Ads account  
90 days is the maximum cycle for Click-to-Conversion. Offline Conversions uploaded after that time period, won’t show in the conversion statistics.

## Now let’s start setting up the offline conversion imports in Google Ads

### Process

For this example, we are going to use a ‘Submit lead form’ that came from a website

Create the conversion action inside Google Ads by navigating to

Tools & settings > Measurement > Conversions

Press the “+” button and choose “Import” > “Other data sources or CRMs” > “Track conversions from clicks” and press “Continue”

![start tracking offline conversions Google Ads](/start-tracking-offline-conversions-Google-Ads.png "How to set up offline conversion imports in Google Ads")

Now create the conversion as shown in the picture below.

Category: Submit Lead Form  
Conversion name: “Case sensitive”  
Value: use different values  
Count: One conversion  
Click-through conversion window: 90 days  
Include in ‘Conversions’: Yes  
Attribution Model: Linear

![Create a conversion action to upload conversions from clicks Google Ads](/Create-a-conversion-action-to-upload-conversions-from-clicks-Google-Ads.png "How to set up offline conversion imports in Google Ads")

Note that you can change:  
Conversion name | Value | Click-through conversion window | Include in ‘Conversions’ | Attribution Model to anything you like or works best for you & your business.

### Now for the second part

For the second part, you will have to configure your website and/or the lead tracking system.

As stated earlier we are going to use a ‘Submit lead form’. This can be anything that came through the various contact forms of a website. The most common contact form found on a WordPress site is Contact Form 7. In order to pass the GCLID value, you will have to enable the ‘hidden field’. Your Contact Form 7 form settings should look something like this

Campaign Name:  
[utm_campaign]

Campaign Source:  
[utm_source]

Campaign Medium:  
[utm_medium]

Campaign Term:  
[utm_term]

Campaign Content:  
[utm_content]

**Gclid:**  
**[gclid]**

If you don’t have Contact Form 7 then you can talk with your developer and edit the form in order [for the form] to look something like this in the backend

**example**

<form action=”” name=”myForm”>  
Name: <input type=”text” name=”name”>  
<input type=”hidden” id=”gclid_field” name=”gclid_field” value=””>  
<input type=”submit” value=”Submit Form” name=”btnSubmit”>  
</form>

If everything goes according to plan then you should have the GCLID along with other information. Now that you have all that data, you will have to curate the data in order for Google Ads to accept the values as offline conversion imports. The simplest way is to upload the data in the form of a CSV file.

In order to import the offline conversions via CSV, your columns must have the following values

Google Click ID: GCLID  
Conversion name: eg MQL or contract signed  
Conversion time: eg MM/dd/yyyy HH:mm:ss  
Conversion Value: optional  
Conversion Currency: optional

With that, you should be able to connect your Google Ads clicks to offline conversions and understand what drives sales.

More information can be found here

About  
[https://support.google.com/google-ads/answer/2998031?hl=en](https://support.google.com/google-ads/answer/2998031?hl=en&authuser=0)  
Setup  
[https://support.google.com/google-ads/answer/7012522?hl=en](https://support.google.com/google-ads/answer/7012522?hl=en&authuser=0)  
Import  
[https://support.google.com/google-ads/answer/7014069](https://support.google.com/google-ads/answer/7014069?authuser=0)  
Contact form 7  
[https://mixedanalytics.com/blog/send-ga-client-id-wordpress-contact-form-7/](https://mixedanalytics.com/blog/send-ga-client-id-wordpress-contact-form-7/)  
Import phone call conversions  
[https://support.google.com/google-ads/answer/6275629](https://support.google.com/google-ads/answer/6275629?authuser=0)

Additional Videos

If you want to know more about Google Ads audits, then visit the following link

[Google Ads Audit guide & free [Notion & Google Sheets] template](https://ppcpanos.com/free-google-ads-audit-template-v1/)
