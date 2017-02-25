# Alt-Tweet

### UP & RUNNING
* `npm install`
* `npm run serve`
* visit `http://localhost:8080/`

### About
**v.1.0.0**
Alt-Tweet is hosted on heroku [here](https://alt-tweet.herokuapp.com/#/)

Alt-Tweet is a Webpack 2, React, Redux, and Sass application that uses the Twitter Server code hosted on [heroku](https://alt-tweet-be.herokuapp.com/). All fake tweets and twitter users are stored in reducers, so please do not refresh your browser while going through the work flow.  

### Features
Start at the home page, which doubles as the list for fake tweets, and click on the `tweet` button in the upper right. You will change routes to a different container, create tweet. Here you can click X to navigate back, or start typing! Heroku takes a minute to fire up so when testing `@xx` give it a few seconds for the dropdown to appear. Arrow keys and enter can be used as long as focus isn't lost on the textarea, once focus is lost the arrow keys do get a lil obsolete. Always more reliable is the mouse click on the user you want to autocomplete. If no results, the dropdown will not show up. Once clicked it will replace what your typed input was with the username. Then click Tweet (will not submit if over 140 characters) and you will be brought to the home page to see a list of tweets. There is a 404 page for unmatched routes.

### Future Improvements
* Refactor how multiple twitter users search is done.
* Clean up arrow key usage so focus won't be an issue.
* Use React-Router 4
