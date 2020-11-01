---
title: HEY’s privacy limitations
date: 2020-07-07 00:00:00 Z
---

I didn't subscribe to [HEY] because of its [privacy features][hey-spy-trackers]. I don't think it was anyone's primary reason. I think the [Basecamp] team did a great job of promoting privacy to people who weren't already engaged in the fight for privacy. I am worried that it gives a false sense of security though.

## What HEY does right

HEY tackles the first (and most aggressive) line of privacy invasion: the spy pixel. It’s a very simple mechanism:

1. You open an email
2. The email client loads all of the images for the email---one of those images is a single transparent pixel, the spy pixel
3. As the spy pixel is loaded from the emailing service, all the information in the request is stored: time, date, device, software versions, IP address

The spy pixel itself is unique to your email, so they know you opened it. Your IP address can also be used to [approximate your location][ip-geolocation].

Generally, this information is aggregated and used to report on how successful a marketing email was. Sometimes it is creepier, like monitoring if a specific person opened your sales email. At worst it can be targeted monitoring of a specific person's movements.

[HEY blocks known pixel trackers][hey-blocking-feature]. They are not loaded when you view an email, so none of your information is revealed to the sender. HEY also proxies all the remaining images through their own servers, so senders can only get information about HEY's servers rather than you.

## What HEY misses

As soon as you open the email though, you're on your own. Every link offers the same potential risk: click capturing. It's also a pretty straightforward approach. Here's an example using links from a recent [Oddbox] email[^1]:

1. The person preparing an email provides a link for a reader to find out more: `https://www.oddbox.co.uk/blog/how-to-have-a-low-waste-picnic?utm_source=customers&utm_medium=email`
2. Their software replaces this generic link with one specifically made for each recipient of the email: `https://oddbox.us10.list-manage.com/track/click?u=bbd360f497062673aaad306ad&id=dac30849ac&e=ed24f41d12`
3. You open the email and want to learn more about how to have a low waste picnic so click on the link
4. Your browser loads the specific link and the software records that you clicked on that particular link the this particular email
5. The software then redirects you to the original generic link

All the same information as the pixel tracking is available for collection via this method.

In the example above, I'm less worried. I'm going from an Oddbox email, to Oddbox's newsletter redirection, to Oddbox's website (where I'm most likely picked up by their analytics). None of that is a surprise.

I get a bit more anxious when third-parties are involved. Suppose a big brand sent me a roundup of cool independent labels. A click would go from the big brand's email, to the big brand's newsletter redirection, to the independent label's website. The big brand has captured my click and knows that I wanted to read more about one particular thing.

HEY does nothing to prevent this. The Oddbox link above was taken from HEY on my iPad. This is why I think HEY can provide a false sense of security.

There are big banners at the top of an email announcing: 'You're protected. We blocked a spy tracker in this thread'. Nothing indicates that this protection is lost as soon as you click on a link.

## How could HEY provide further protection?

I explained how HEY loads images so that senders only get details about HEY's servers rather than you. The same principle could apply to links:

1. HEY receives your latest marketing email
2. HEY visits each link, follows the redirection and arrives at the original generic link
3. HEY replaces the specific links which tie the click to your email in your copy of the email
4. You view the email and can freely click on any link without any further information being exposed

We can refer to this as sanitising links.

As soon as you land on the new website, you are subject to all the analytics and tracking that happens on the internet. But at least that tracking cannot be connected to you having opened the email.

However, there is a problem.

## The biggest challenge to sanitising links

Some emails include links which are designed to be helpful:

- Click here to confirm your account
- Click here to log in automatically
- Click here to reset your password
- Click here to unsubscribe
- Click here to cancel the order

Usually, clicking on one of these links does something immediately. If HEY (or anyone else) introduced the process I outlined above, a lot of accounts might be confirmed, log-ins automatically happening, passwords reset, newsletters unsubscribed from and orders cancelled.

In a way, this is a result of poor design. Clicking a link [should only retrieve data and should have no other effect][http-methods]. Following any of these links should take you to a page that supports the actual action.

But the reality is that this is not always the case. Many of these links exist and applying link sanitising to all emails could cause some havoc.

So rather than a blanket approach to find all of these links, it might be possible to identify which ones are likely provided by popular tracking software. This is the approach used to identify the spy pixels.

The [current list of spy pixels blocked by HEY][tracker-blocking-gist] is a collection of patterns which are used to identify images that are likely to be spy pixels. The same approach could potentially identify click-capturing links.

## But it's still better than nothing

Without link sanitising, HEY is still doing a lot more for the privacy of its users than most other email services. My concern is the false sense of security that can be provided by big banners that suggest 'everything is safe now'.

Cleaning up the links would close the loop and at least make email a separate entity. Whilst HEY can't change the internet, it can at least change your imbox.

I'm a proud subscriber to HEY though, and would welcome your thoughts on this: [johnb@hey.com].

---

[^1]: I'm just using Oddbox as an example here. This link tracking stuff is enabled by default in all major email marketing software and can be difficult to turn off. I don't mean to pass judgement on them, it is an industry practice.

[basecamp]: https://basecamp.com
[hey]: https://hey.com
[hey-blocking-feature]: https://hey.com/features/spy-pixel-blocker/
[hey-imbox]: https://itsnotatypo.com
[hey-spy-trackers]: https://hey.com/spy-trackers/
[http-methods]: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods
[ip-geolocation]: https://en.wikipedia.org/wiki/Geolocation_software
[johnb@hey.com]: mailto:johnb@hey.com
[oddbox]: https://www.oddbox.co.uk
[tracker-blocking-gist]: https://gist.github.com/dhh/360f4dc7ddbce786f8e82b97cdad9d20
