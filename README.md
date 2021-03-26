## Resound

[Resound](https://dashboard.heroku.com/apps/resound-music) is a Soundcloud clone that emulates its music player.  Users can play any song that appears on the page and control playback with the song player.  
<img width="1280" alt="Screen Shot 2021-03-26 at 10 53 30 AM" src="https://user-images.githubusercontent.com/73966827/112650249-8fa5ba00-8e21-11eb-889d-a59e0d3b393c.png">

Audio tag, ajax request, react-redux, 
### Technologies:
The application was built using a rails backend that accessed the database and managed http requests connected to a frontend that used React-Redux to build the app.  
AJAX requests are used for database accession to provide an uninterrupted user experience.  

### Main Focuses

#### Song Player
The audio player allows users to control the audio by pausing and playing the media, choosing where in the song to start, changing the volume, and looping the song.  A main feature of the soundcloud player is its persistence  as one navigates different pages.  The resound player does the same, as all pages are made via frontend routes that do not send an http request.

The player uses an html audio tag, controlling it with buttons and sliders connected via Refs in React.  The reference, this.audioRef, points to the audio tag, allowing me to manipulate it:  
<img width="325" alt="Screen Shot 2021-03-26 at 10 03 41 AM" src="https://user-images.githubusercontent.com/73966827/112643292-97ae2b80-8e1a-11eb-908b-6b2d542d5903.png">  
<img width="287" alt="Screen Shot 2021-03-26 at 10 05 17 AM" src="https://user-images.githubusercontent.com/73966827/112643488-ccba7e00-8e1a-11eb-9c78-6782e693a46d.png">  
I use .play(), .pause(), as well as accessors like .currentTime, the current location of the song, to manipulate the player.  The callback function above is used in the play button, while currentTime is used as a getter in the time display and a setter in the scrubber component.  
<img width="400" alt="Screen Shot 2021-03-26 at 10 09 43 AM" src="https://user-images.githubusercontent.com/73966827/112644214-8a457100-8e1b-11eb-9098-1461acd32bc5.png">  
<img width="523" alt="Screen Shot 2021-03-26 at 10 10 43 AM" src="https://user-images.githubusercontent.com/73966827/112644246-93364280-8e1b-11eb-8e58-bcfef84cf93d.png">  

I ran across some difficulties using the audio tag: some functionalities like autoplay are not available.  A main challenge was that the audio tag was not updating after renders.  The solution was to add a unique key property that would register as a change of state for the audio tag to trigger a rerender.  I realized later on that some properties go unnoticed by the audio element. One cannot change the song of the audio tag with a simple update of the src attribute: it is necessary to pause and reload, the song in the audio tag.




#### User Authentication
Users can use forms to login and sign up to the site.  For a login, when the form is submitted, an AJAX call is sent with the data to the backend, where he username and password combination is checked to see if the user exists and the password matches.  If so, a session token is created and stored, allowing the user to remain logged in even after reloading the page.  Like soundcloud, Resound also allows one to use either a username or password to login.  
<img width="545" alt="Screen Shot 2021-03-26 at 10 55 19 AM" src="https://user-images.githubusercontent.com/73966827/112650458-c8de2a00-8e21-11eb-916c-8b4dddc310a7.png">





### Further functionality: 
* A song page that allows you to access info on a song and comment on it
* A user page that allows you to see the tracks and albums created by them
* A playlist feature


