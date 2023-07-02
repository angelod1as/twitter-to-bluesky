# Twitter to Bluesky

🚨 Sadly this project is currently not working... but it's accepting contributions! [How to contribute](CONTRIBUTING.MD).

## Context

> At the far year of 2023, Twitter (an ancient microblogging website) started its decay. After questionable decisions by the Empero... I mean, the owner of the company, less and less enjoyability was found in it, and people decided to migrate from his dictat... oops, from his domain, to a newer, *potentially* better land.
>
> *Excerpt from "Exodus 2.0", chapter 3, verse 2*

## What is going on with the code

In an attempt to export all of the people I was following on Twitter, I tried taking advantage of the API just to find out it's blocked under a paywall. So, the next step was to try scraping the website, automatically going after my following list and getting *one by one* into a list.

### This project is successful in

- Logging in Twitter;
- Saving the auth information locally so you don't have to login again;
- Getting the number of people you follow;
- Navigating to the following list;
- Getting *almost* all of the people you follow into an array;

And there's where I need help: it stops there.

### This project not successful in

- Getting the entire list of people you are following

## Next steps

As soon as I get:

- A close-to-real following list;
- A way to stop the "scroll down to get more people" loop.

... I'll implement the "log in to Bsky and search for people with the same handles". For now, that's impossible because *I can't break the loop*.

![Alt Text](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3Ryb2N0eWQzbmpqb3VnaWpoM3I1cm1iYnVtYnYwbTh0bjI1NzdiMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mCsEY24fPYTUL5V0n4/giphy.gif)
