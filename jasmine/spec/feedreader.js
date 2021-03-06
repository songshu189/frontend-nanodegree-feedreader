/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("'s each feed has a URL defined and that the URL is not empty", function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url).toBeTruthy();
            });
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("'s each feed has a name defined and that the name is not empty", function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name).toBeTruthy();
            });
         });
    });


    /* Write a new test suite named "The menu" */
    describe('The menu', function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('is hidden by default', function() {
            expect(document.body.getAttribute('class')).toMatch('menu-hidden');
         });

         /* Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('displays when the menu-icon is clicked and is hidden when clicked again', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.trigger('click');
            expect(document.body.getAttribute('class')).not.toMatch('menu-hidden');
            menuIcon.trigger('click');
            expect(document.body.getAttribute('class')).toMatch('menu-hidden');
        });
    });

    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should have at least one .entry element', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
        /* Here the done call is not needed, as long as there is no additional code
         * waiting for this it to finish. Also, apart from deleting the done() call,
         * the done parameter must be deleted as well.
         */
    });

    /* Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var container = $('.feed');
        var feed0 = null, feed1 = null;

        beforeEach(function(done){
            loadFeed(0, function(){
                feed0 = container.text();
                loadFeed(1, function(){
                    feed1 = container.text();
                    done();
                });
            });
        });

        it('makes the content changes', function(){
            expect(feed0).not.toEqual(feed1);
        });
    });

    /* Write a new test suite named "Out-of-bound-array access" */
    describe('Out-of-bound array access', function() {
        /* Write a test that ensures when calling loadFeed with out
         * of bound index, there is no exception throw.
         */

        it('should not throw error', function() {
            expect(function(){loadFeed(-1)}).not.toThrow();
            expect(function(){loadFeed(4)}).not.toThrowError(TypeError);
        });
    });

}());
