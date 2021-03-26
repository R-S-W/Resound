## Resound

[Resound](https://dashboard.heroku.com/apps/resound-music) is a Soundcloud clone that emulates its music player.  Users can play any song that appears on the page and control playback with the song player.

Audio tag, ajax request, react-redux, 
### Technologies:
The application was built using a rails backend that accessed the database and managed http requests connected to a frontend that used React-Redux to build the app.
AJAX requests are used for database accession to provide an uninterrupted user experience.  

### Main Focuses

#### Song Player
The audio player allows users to control the audio by pausing and playing the media, choosing where in the song to start, changing the volume, and looping the song.

The player uses an html audio tag, controlling it with buttons and sliders connected via Refs in React.  The functionality of the audio tag is accessed in this way:  
<img width="325" alt="Screen Shot 2021-03-26 at 10 03 41 AM" src="https://user-images.githubusercontent.com/73966827/112643292-97ae2b80-8e1a-11eb-908b-6b2d542d5903.png">  
<img width="287" alt="Screen Shot 2021-03-26 at 10 05 17 AM" src="https://user-images.githubusercontent.com/73966827/112643488-ccba7e00-8e1a-11eb-9c78-6782e693a46d.png">










Further functionality: 
* A song page that allows you to access info on a song and comment on it
* A user page that allows you to see the tracks and albums created by them
* A playlist feature


