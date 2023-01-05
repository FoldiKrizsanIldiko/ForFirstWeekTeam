/*Our Team
Create an ourTeam variable and add an object as a value.
Add a name (add a name for the team), and a members (an array where the members and their details go) key to the object.*/

let ourTeam=
{
    name:"Team Name",
    members:
    [{    

        /*In the members array, (the details of) each member is an object with following keys filled: name (string), 
        birthday (object with three keys: year, month, day), location (object, keys: country, city), codingLevel (integer between 0 and 99).*/
        name: "Member1",
        birthday:
            {    
                year: 2000,
                month: 3,
                day: 1
            },
        location:
            {
                country: "Hungary",
                city: "Szeged"
            },
        codingLevel: 30,
        /*Create a favorites key (object) in each member's array.
Add the favorite movies list from the solo project solutions to a favMovies key.
Add the favorite books list from the solo project solutions to a favBooks key.*/
        favorites:
            {
                favMovies:
                    [{
                        title: "The Matrix",
                        year: 1999,
                        rating: 8.7,
                        description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
                        directors: ["Lana Wachowski", "Lilly Wachowski"],
                        writers: ["Lilly Wachowski", "Lana Wachowski"],
                        stars: ["Keanu Reeves", "Laurence Fishburne", "Carrie - Anne Moss"],
                        genres: ["Action", "sci-fi"]
                    },
                    {
                        title: "Twilight",
                        year: 2008,
                        rating: 5.3,
                        description: "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire.",
                        directors: ["Catherine Hardwicke"],
                        writers: ["Melissa Rosenberg","Stephenie Meyer"] ,
                        stars: ["Kristen Stewart", "Robert Pattinson","Billy Burke"],
                        genres:["Drama", "Fantasy", "Romance"]
                    },
                    {
                        title: "The Fifth Element",
                        year: 1997,
                        rating: 7.6,
                        description: "In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr. Zorg at bay.",
                        directors: ["Luc Besson"],
                        writers: ["Robert Mark Kamen", "Luc Besson"],
                        stars: ["Bruce Willis", "Milla Jovovich", "Gary Oldman"],
                        genres: ["Action", "Adventures", "Sci-fi"]
                    },
                    {
                
                        title: "Harry Potter and the Sorcerer˙s Stone",
                        year: 2001,
                        rating: 7.6,
                        description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
                        directors: ["Chris Columbus"],
                        writers: ["J.K. Rowling", "Steve Kloves"],
                        stars: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
                        genres: ["Adventure", "Family", "Fantasy"]
                    }],
                favoriteBooks : 
                    [{
                        title: "A court of silver flames",
                        author: "Sarah J Maas",
                        year: 2021,
                        isNewerThan2000: true,
                        characters: ["Nesta", "Cassian", "Feyre", "Rhys"]
                    },
                    {
                        title: "A titoktunder",
                        author: "Beck Andrea",
                        year: 2015,
                        isNewerThan2000: true,
                        characters: ["Toby", "Lola", "Polly", "Carola"]    
                    }],
            },
            //Choose theme for each Member color
        colorCombination:
            {
                primary:
                    {
                        red:255,
                        green:255,
                        blue:0
                    },
                secondary:
                    {
                        red:255,
                        green:0,
                        blue:0
                    },
        
            },
    },
    {
        name: "Member2",
        birthday:{
             year: 2000,
             month: 3,
              day: 1},
        location:{
            country: "Hungary",
            city: "Szeged"},
        codingLevel: 30,
        favorites:{
            favMovies:[{
                title:'',
                direcor:"",
                id:""},
            {
                title:'',
                direcor:"",
                id:""  
            }],
            favBooks:[{
                    title:"",
                    writer:"",
                    year:"",},
                {
                    title:"",
                    writer:"",
                    year:"",  
                },
            ],
        },
        colorCombination:{
            primary:{
                red:"",
                green:"",
                bue:"",
            },
            secondary:""
        },
    },
        {
            name: "Member3",
            birthday:{
                 year: 2000,
                 month: 3,
                  day: 1},
            location:{
                country: "Hungary",
                city: "Szeged"},
            codingLevel: 30,
            favorites:{
                favMovies:[{
                    title:'',
                    direcor:"",
                    id:""},
                {
                    title:'',
                    direcor:"",
                    id:""  
                }],
                favBooks:[{
                        title:"",
                        writer:"",
                        year:"",},
                    {
                        title:"",
                        writer:"",
                        year:"",  
                    },
                ],
            },
            colorCombination:{
                primary:{
                    red:"",
                    green:"",
                    bue:"",
                },
                secondary:""
            },
        }
    ]
};
console.log(ourTeam.members[0].favorites.favMovies[0].directors);

/*In the members array of the ourTeam variable, update the favorites key (object) with a new key (favSongs).
Add an array of the top three songs.
The object of the favSongs array must contain the following keys: title (string), artist (string), and genres (array of strings).*/

/*Add a new review key to each book, movie, and song object. As the value of these keys, 
each member must write why they like that book, movie, or song and why they recommend it. 
Also, remove the following keys and their values: the description keys of the movies, the isNewerThan2000 and age keys of the books.  */

//Calculate the average age (in an averageAge variable) and average coding level (into an averageCodingLevel).

/*In the members array of the ourTeam variable, update the favorites key (object) with a new key (favSongs).
Add an array of the top three songs.
The object of the favSongs array must contain the following keys: title (string), artist (string), and genres (array of strings).*/

/*Add a new review key to each book, movie, and song object. As the value of these keys, 
each member must write why they like that book, movie, or song and why they recommend it. 
Also, remove the following keys and their values: the description keys of the movies, the isNewerThan2000 and age keys of the books.  */

//Calculate the average age (in an averageAge variable) and average coding level (into an averageCodingLevel).

//Find the youngest member (calculate it as a value of a youngestMember variable). Important: you only have to compare the values of the year keys
//Find the oldest member (calculate it as a value of an oldestMember variable). Important: you only have to compare the values of the year keys 
//Find out if some people are from the same location.
//Common music styles
//Choose theme for each Member color
//Add an image

