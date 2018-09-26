## RS-wiki-DarkMode
⛔️ DEPRECATED :This is a dark theme for the [Runescape wiki](http://runescape.wikia.com/wiki/RuneScape_Wiki) on the wikia/fandom site. This repository is deprecated and will not receive any updates anymore. For a darkmode on the new [Runescape wiki](https://runescape.wiki/) head over to https://github.com/CephHunter/RS-wiki-Darkmode

## Preview
![preview](Images/Preview.png)
More images: https://imgur.com/a/Ka7sp

## Installing
### Installing as a userstyle:
#### Step 1: Get a stylemanager
* ![firefox](Images/firefox.png) [Stylus](https://addons.mozilla.org/en-US/firefox/addon/styl-us/)
* ![chrome](Images/chrome.png) [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
* ![opera](Images/opera.png) [Stylus](https://addons.opera.com/en-gb/extensions/details/stylus/)

#### Step 2: Install the UserStyle
* Install from [Github](https://raw.githubusercontent.com/CephHunter/RS-wiki-DarkMode-wikia-edition/master/Darkmode.user.css).
### Installing as a userscript
#### Step 1: Get a scriptmanager
* ![firefox](Images/firefox.png) [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) or [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
* ![chrome](Images/chrome.png) [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* ![opera](Images/opera.png) [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=opera)
* ![safari](Images/safari.png) [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=safari)
* ![edge](Images/msedge.png) [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=edge)
#### Step 2: Install the UserScript
* Install from [Github](https://raw.githubusercontent.com/CephHunter/RS-wiki-DarkMode-wikia-edition/master/Darkmode.user.js)

### Installing with a wikia account
* Advantages: You don't need to install any extensions.
* Disadvantages: You need to manually update, and the only way to easily disable the style is by loggin out.
#### Step 1: Wikia account
You can create an account under the "My account" dropdown at the top of any page on the [Runescape wiki](http://runescape.wikia.com/wiki/RuneScape_Wiki). When your account is created make sure you are logged in.
#### Step 2: Installing the style
* Go to https://runescape.wikia.com/wiki/Special:MyPage/common.css
* Click on create page
* Add `@import "https://cdn.rawgit.com/CephHunter/RS-wiki-DarkMode-wikia-edition/c1cfb34/Darkmode.min.css";` to the top of the page.
* Replace `c1cfb34` with the latest commit hash found [here](https://github.com/CephHunter/RS-wiki-DarkMode-wikia-edition/commits/master/Darkmode.min.css) to make sure you have the latest version.
* Save the page. It can take a few minutes before the changes are live and you may have to bypass the browser cache for pages you have recently visited. Instructions on how to bypass your browser cache can by found [here](https://en.wikipedia.org/wiki/Wikipedia:Bypass_your_cache#Bypassing_cache).

### Updating
Stylus, Greasemonkey and Tampermonkey update the style automatically however this can take some time, if you want to force update you can do so by clicking again on the install links found above.
If installed with a wikia account, go to [Special:MyPage/common.css](https://runescape.wikia.com/wiki/Special:MyPage/common.css) and click edit and replace `c1cfb34` in the link with the latest commit hash found [here](https://github.com/CephHunter/RS-wiki-DarkMode-wikia-edition/commits/master/Darkmode.min.css).

## Contributing/reporting issues
Help is always appreciated, the Runescape wiki site is huge and always changing and I may not always notice when stuff gets broken. So if you find any problems make sure your style is updated to the latest version and if your problem still exists you can always [open an issue on github](https://github.com/CephHunter/RS-wiki-DarkMode-wikia-edition/issues) or message me on Discord `@ceph hunter#6854`, I frequently hang out in the [Runscape wiki Discord](http://runescape.wikia.com/wiki/RuneScape:Off-site/Discord).

If you would like to contribute to the stylesheet head over to [.less#readme](.less#readme) for more information.
