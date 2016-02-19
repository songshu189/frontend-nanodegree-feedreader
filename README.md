## Project Overview

In . The original developer of this application clearly saw the value in testing, they've already included  and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

This project is for udacity front-end web developer nano-degree program. The application reads RSS feeds. The [Jasmine](http://jasmine.github.io/) test suites test the application. The github page is [here](http://songshu189.github.io/frontend-nanodegree-feedreader/).

## What I did for this project?

1. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. Write a new test suite named "The menu". Write a test that ensures the menu element is hidden by default. Write a test that ensures the menu changes visibility when the menu icon is clicked.
4. Write a test suite named "Initial Entries". Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
5. Write a test suite named "New Feed Selection". Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
6. Write a test suite named "Out-of-bound-array access". Write a test that ensures when calling loadFeed with out of bound index, there is no exception throw.
7. Add codes to process out-of-bound indext in loadFeed function, so the new test suite not throw error.
8. Remove all google API dependence code from app.js and index.html, since the app doesn't use google RSS feed reader anymore.
9. When complete - all the tests pass.
