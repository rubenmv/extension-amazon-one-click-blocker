#Amazon 1-Click Lock

**Amazon 1-Click Lock** does a couple of things:
- Protects the 1-Click button from product pages to prevent accidental clicks, now it requires two clicks.
- Completely removes the 1-click buttons from product browsing pages, to buy anything it is necessary to go through the products page first.

Should work with most Amazon domains, if you are presented with any problem, contact me and I'll try to solve it.

VERSION HISTORY
===============

1.7 - 2017.09.17
----------------
- Fixes broken unlock box on spanish site.

1.6 - 2017.08.30
----------------
- Added Amazon Smile to the list of supported domains.
- Firefox: ported to Web Extensions model.

1.5.3 - 2015.11.19
------------------
- Code cleanup, no DOMReady.js dependency and some speed improvements.

1.5.2 - 2015.11.18
------------------
- Opera fix. Changed sync storage to local storage.

1.5.1 - 2015.11.25
------------------
- Name change: "Blocker" to "Lock" so it describes better the function of the extension.
- Improves speed in which the blocker appears, now it won't wait for the page to finish loading.
- Tested and working with multiprocess (Electrolysis).

1.5 - 2015.11.01
----------------
- Fixes some text from the options page.

1.4 - 2015.10.24
----------------
- Bug fix. Some products didn't show the blocker, fixed.
- Added validation for password.

1.3 - 2015.10.16
----------------
- Bug fix. Amazon.com did some changes in the code, ASIN was not found, fixed.
- Bug fix. Some non amazon.com pages show the rating in the suggestions section by the wrong book. Improved class specificity when selecting the correct tag.
- Huge speed improvement when retrieving book info. Now it won't wait for the whole page to finish loading.
 
1.2 - 2015.10.14
----------------
- Bug fix. Don't show anything when book is not found.
- Removes unnecesary content policies from manifest. 

1.1 - 2015.10.13
----------------
- Bug fix and manifest permissions. 

1.0 - 2015.10.13
----------------
- Shows stars from Goodreads.
- Shows numerical rating.
- Shows number of ratings.
- Links to Goodreads page.

##LEGAL STUFF
**Amazon 1-Click Lock** by <a href="https://twitter.com/rub3nmv">**Rub&eacute;n Mart&iacute;nez**</a> is licensed as Apache 2.0.<br>
For bugs report send me an email to
rub3nmv@gmail.com
or visit the github project page at 
https://github.com/rubenmv/extension-amazon-one-click-lock/
