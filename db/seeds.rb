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
Song.create(name: "Sparkle", length: 180, info: "A great song",artist_id: 6,album_id: 1, path: 'a')
Song.create(name: "Song2", length: 100, info: "A bangin' instrumental",artist_id: 1 ,album_id:2, path: 'b')
Song.create(name: "Song3", length:60 , info: "A chill song",artist_id:1 ,album_id:2, path: 'c')


rt = Song.create(name: "Ride on Time", length:230 , info: "A cool, catchy and funky song",artist_id:6 ,album_id:1, path: 'd')
# file = open('https://resound-seeds.us-east-1.amazonaws.com/Ride_on_time.mp3')
audio_file  = open('https://resound-seeds.s3.amazonaws.com/Ride_on_Time.mp3')
album_cover_file = open('https://resound-seeds.s3.amazonaws.com/Ride_on_Time.jpeg')
rt.audio.attach(io:audio_file, filename: 'Ride_on_Time.mp3')
rt.album_cover.attach(io:album_cover_file, filename: 'Ride_on_Time.jpeg')


Song.create(name: "Bleghb", length:2 , info: "blegh",artist_id:7 ,album_id:1, path: 'e')
Song.create(name: "Howdy", length:10 , info: "The cowboy song",artist_id:5 ,album_id:1, path: 'f')


jta  = Song.create(name: "Journey to Arnhemland Clip", length: 14, info: "funky", artist_id: 2, path: "g")
audio_file = open('https://resound-seeds.s3.amazonaws.com/Journey_to_Arnhemland_clip.mp3')
album_cover_file = open('https://resound-seeds.s3.amazonaws.com/Return_of_the_Space_Cowboy.png')
jta.audio.attach(io:audio_file, filename: 'Journey_to_Arnhemland_clip.mp3')
jta.album_cover.attach(io: album_cover_file, filename: 'Return_of_the_Space_Cowboy.png')




Album.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!(Album.table_name)
# Album.create(name: "")
Album.create(name: "Great Songs", artist_id:1)
Album.create(name: "Okay Songs", artist_id: 1)

Comment.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!(Comment.table_name)
# Comments.create(content: '', user_id: , song_id:)
Comment.create(content: 'Wow, great song!', user_id:2 , song_id:1)
Comment.create(content: 'Nice', user_id: 2, song_id:2)
Comment.create(content: 'Meh', user_id: 3, song_id:3)
