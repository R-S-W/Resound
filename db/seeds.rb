# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#NOT SEEDED YET 

require 'open-uri'


User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!(User.table_name)
User.create(username:"Ray" ,email:"mond@.com" ,password:"iamawesome" )
User.create(username:"Abe" ,email: "lincoln@gmail.com",password:'fourscore' )
User.create(username:"Barry" ,email:"barium@.com" ,password:"barryum" )
User.create(username:"Cathy" ,email:"katherine@.com" ,password:"zetaJones" )
User.create(username:"DesCartes" ,email:"ilovegeometry@.com" ,password:"cogitoergosum" )
User.create(username:"Tats" ,email:"bigWave@.com" ,password:"cooldude" )
User.create(username:"Natasha" ,email:"cats@.com" ,password:"bleghb" )

#Our DemoUser.  Very important
User.create(username:"Guest", email: "demoUser@demomail.com", password:'demodemo')




#remember songs also have genres.
Song.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!(Song.table_name)


rt = Song.create(name: "Ride on Time", length:230 , info: "A cool, catchy and funky song",artist_name:"Tatsuro Yamashita")
# file = open('https://resound-seeds.us-east-1.amazonaws.com/Ride_on_time.mp3')
audio_file  = URI.open('https://resound-seeds.s3.amazonaws.com/Ride_on_Time.mp3')
album_cover_file = URI.open('https://resound-seeds.s3.amazonaws.com/Ride_on_Time.jpeg')
rt.audio.attach(io:audio_file, filename: 'Ride_on_Time.mp3')
rt.album_cover.attach(io:album_cover_file, filename: 'Ride_on_Time.jpeg')


s2 = Song.create(name: "Song2", length: 100, info: "A bangin' instrumental",artist_name:"Ray Wu")
audio_file = URI.open('https://resound-seeds.s3.amazonaws.com/Song_2_clip.mp3')
album_cover_file = URI.open('https://resound-seeds.s3.amazonaws.com/RLWB.png')
s2.audio.attach(io:audio_file, filename: 'Song_2_clip.mp3')
s2.album_cover.attach(io:album_cover_file, filename: 'RLWB.png')


jta  = Song.create(name: "Journey to Arnhemland Clip", length: 14, info: "funky", artist_name: 'Jamiroquai')
audio_file = URI.open("https://resound-seeds.s3.amazonaws.com/Journey_to_Arnhemland_clip.mp3")
album_cover_file = URI.open('https://resound-seeds.s3.amazonaws.com/Return_of_the_Space_Cowboy.png')
jta.audio.attach(io:audio_file, filename: "Journey_to_Arnhemland_clip.mp3")
jta.album_cover.attach(io: album_cover_file, filename: 'Return_of_the_Space_Cowboy.png')



aoa = Song.create(name: "Ace of Aces", length:10 , info: "Aces", artist_name:'Fearless Flyers')
audio_file = URI.open("https://resound-seeds.s3.amazonaws.com/Ace_of_Aces.mp3")
album_cover_file = URI.open('https://resound-seeds.s3.amazonaws.com/Ace_of_Aces.png')
aoa.audio.attach(io:audio_file, filename: "Ace_of_Aces.mp3")
aoa.album_cover.attach(io: album_cover_file, filename: 'Ace_of_Aces.png')




cdltm = Song.create(name: "Claire de Lune TRAP REMIX", length:10 , info: "Cool", artist_name:'Debussy' )
audio_file = URI.open("https://resound-seeds.s3.amazonaws.com/Clair_De_Lune_TRAP_REMIX.mp3")
album_cover_file = URI.open('https://resound-seeds.s3.amazonaws.com/Claire_De_Lune_TRAP_REMIX.png')
cdltm.audio.attach(io:audio_file, filename: "Clair_De_Lune_TRAP_REMIX.mp3")
cdltm.album_cover.attach(io: album_cover_file, filename: 'Clair_De_Lune_TRAP_REMIX.png')


cs = Song.create(name: "Cosmic Sans", length:10 , info: "Cool", artist_name: 'Cory Wong' )
audio_file = URI.open("https://resound-seeds.s3.amazonaws.com/Cosmic_Sans.mp3")
album_cover_file = URI.open('https://resound-seeds.s3.amazonaws.com/Cosmic_sans.png')
cs.audio.attach(io:audio_file, filename: "Cosmic_Sans.mp3")
cs.album_cover.attach(io: album_cover_file, filename: 'Cosmic_sans.png')   #####


igf = Song.create(name: "It Gets Funkier", length:10 , info: "Cool", artist_name: 'Vulfpeck' )
audio_file = URI.open("https://resound-seeds.s3.amazonaws.com/It_Gets_Funkier.mp3")
album_cover_file = URI.open('https://resound-seeds.s3.amazonaws.com/It_Gets_Funkier.png')
igf.audio.attach(io:audio_file, filename: "It_Gets_Funkier.mp3")
igf.album_cover.attach(io: album_cover_file, filename: 'It_Gets_Funkier.png')


round = Song.create(name: "Roundabout", length:10 , info: "Cool", artist_name: 'Yes' )
audio_file = URI.open("https://resound-seeds.s3.amazonaws.com/Roundabout.mp3")
album_cover_file = URI.open('https://resound-seeds.s3.amazonaws.com/Roundabout.png')
round.audio.attach(io:audio_file, filename: "Roundabout.mp3")
round.album_cover.attach(io: album_cover_file, filename: 'Roundabout.png')



Sein= Song.create(name: "Seinfeld", length: 10 , info: "Cool", artist_name:'Newman' )
audio_file = URI.open("https://resound-seeds.s3.amazonaws.com/Seinfeld.mp3")
album_cover_file = URI.open('https://resound-seeds.s3.amazonaws.com/Seinfeld.png')
Sein.audio.attach(io:audio_file, filename: "Seinfeld.mp3")
Sein.album_cover.attach(io: album_cover_file, filename: 'Seinfeld.png')



tr= Song.create(name: "Titanic Recorder", length:10 , info: "Cool", artist_name:'Joe' )
audio_file = URI.open("https://resound-seeds.s3.amazonaws.com/Titanic_Recorder.mp3")
album_cover_file = URI.open('https://resound-seeds.s3.amazonaws.com/Titanic_Recorder.png')
tr.audio.attach(io:audio_file, filename: "Titanic_Recorder.mp3")
tr.album_cover.attach(io: album_cover_file, filename: 'Titanic_Recorder.png')



ultra= Song.create(name: "Ultrafox", length:10 , info: "Cool", artist_name: 'Django Reinhardt & Stephan Grappelli' )
audio_file = URI.open("https://resound-seeds.s3.amazonaws.com/Ultrafox.mp3")
album_cover_file = URI.open('https://resound-seeds.s3.amazonaws.com/Ultrafox.png')
ultra.audio.attach(io:audio_file, filename: "Ultrafox.mp3")
ultra.album_cover.attach(io: album_cover_file, filename: 'Ultrafox.png')




wam = Song.create(name: "What About Me", length:10 , info: "Cool", artist_name: 'Snarky Puppy' )
audio_file = URI.open("https://resound-seeds.s3.amazonaws.com/What_About_Me.mp3")
album_cover_file = URI.open('https://resound-seeds.s3.amazonaws.com/What_About_Me.png')
wam.audio.attach(io:audio_file, filename: "What_About_Me.mp3")
wam.album_cover.attach(io: album_cover_file, filename: 'What_About_Me.png')






# Song.create(name: "Sparkle", length: 180, info: "A great song",artist_id: 6,album_name:""1)
# Song.create(name: "Song3", length:60 , info: "A chill song",artist_id:1 ,album_name:"")
# Song.create(name: "Bleghb", length:2 , info: "blegh",artist_id:7 ,album_name:"")
# Song.create(name: "Howdy", length:10 , info: "The cowboy song",artist_id:5 ,album_name:"")






Album.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!(Album.table_name)
# Album.create(name: "")
Album.create(name: "Great Songs", artist_id:1)
Album.create(name: "Okay Songs", artist_id: 2)

Comment.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!(Comment.table_name)
# Comments.create(content: '', user_id: , song_id:)
Comment.create(content: 'Wow, great song!', user_id:2 , song_id:1)
Comment.create(content: 'Nice', user_id: 2, song_id:2)
Comment.create(content: 'Meh', user_id: 3, song_id:3)
