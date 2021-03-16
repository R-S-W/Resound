# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#NOT SEEDED YET 
User.create(username:"Ray" ,email:"mond@.com" ,password:"iamawesome" )
User.create(username:"Abe" ,email: "lincoln@gmail.com",password:'fourscore' )
User.create(username:"Barry" ,email:"barium@.com" ,password:"barryum" )
User.create(username:"Cathy" ,email:"katherine@.com" ,password:"zetaJones" )
User.create(username:"DesCartes" ,email:"ilovegeometry@.com" ,password:"cogitoergosum" )
User.create(username:"Tats" ,email:"bigWave@.com" ,password:"cooldude" )
User.create(username:"Natasha" ,email:"cats@.com" ,password:"blegh" )

#remember songs also have genres.
Song.create(name: "Sparkle", length: 180, info: "A great song",artist_id: 6,album_id: 1)
Song.create(name: "Song2", length: 100, info: "A bangin' instrumental",artist_id: 1 ,album_id:2)
Song.create(name: "Song3", length:60 , info: "A chill song",artist_id:1 ,album_id:2)
Song.create(name: "Ride on Time", length:230 , info: "A cool, catchy and funky song",artist_id:6 ,album_id:1)
Song.create(name: "Bleghb", length:2 , info: "blegh",artist_id:7 ,album_id:1)
Song.create(name: "Howdy", length:10 , info: "The cowboy song",artist_id:5 ,album_id:1)


# Album.create(name: "")
Album.create(name: "Great Songs")
Album.create(name: "Okay Songs")


# Comments.create(content: '', user_id: , song_id:)
Comments.create(content: 'Wow, great song!', user_id:2 , song_id:1)
Comments.create(content: 'Nice', user_id: 2, song_id:2)
Comments.create(content: 'Meh', user_id: 3, song_id:3)
