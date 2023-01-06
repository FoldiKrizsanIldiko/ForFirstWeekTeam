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
        name: "Földi Krizsán Ildikó",
        birthday:
            {    
                year: 1979,
                month: 3,
                day: 13
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
                        characters: ["Nesta", "Cassian", "Feyre", "Rhys"],
                        age:2023-2021,
                    },
                    {
                        title: "A titoktunder",
                        author: "Beck Andrea",
                        year: 2015,
                        isNewerThan2000: true,
                        characters: ["Toby", "Lola", "Polly", "Carola"],
                        age:2023-2015,   
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
                        red:204,
                        green:153,
                        blue:255
                    },
        
            },
    },
    {
        name: "Member2",
        birthday:
            {    
                year: 2000,
                month: 3,
                day: 13
            },
        location:
            {
                country: "Hungary",
                city: "Szeged"
            },
        codingLevel: 50,
        favorites:
            {
                favMovies:
                    [{
                        title: "",
                        year: 1999,
                        rating: 8.7,
                        description: "",
                        directors: ["", ""],
                        writers: ["L", ""],
                        stars: ["", "Le", "Cs"],
                        genres: ["A", "i"]
                    },
                    {
                        title: "T",
                        year: 200,
                        rating: 5.3,
                        description: "a 108-year-old vampire.",
                        directors: ["e"],
                        writers: ["Mrg","Ster"] ,
                        stars: ["Krt", "Rn","Bie"],
                        genres:["Da", "Fy", "Rce"]
                    },
                    {
                        title: "T",
                        year: 197,
                        rating: 7,
                        description: "Imic weapon to keep Evil and Mr. Zorg at bay.",
                        directors: ["Ln"],
                        writers: ["Romen", "Lon"],
                        stars: ["Bris", "Mch", "Gan"],
                        genres: ["Aon", "Advees", "Sfi"]
                    },
                    {
                
                        title: "Hr˙s Stone",
                        year: 201,
                        rating: 7.6,
                        description: "An terrible evil that haunts the magical world.",
                        directors: ["Chmbus"],
                        writers: ["J.ng", "Steves"],
                        stars: ["Danffe", "Rut", "Riris"],
                        genres: ["Are", "Famy", "Ftasy"]
                    }],
                favoriteBooks : 
                    [{
                        title: "As",
                        author: "SMaas",
                        year: 201,
                        isNewerThan2000: true,
                        characters: ["Neta", "Cn", "Fe", "Rys"]
                    },
                    {
                        title: "Ar",
                        author: "Beea",
                        year: 2015,
                        isNewerThan2000: true,
                        characters: ["Toy", "La", "Poy", "Cala"]    
                    }],
            },
            colorCombination:
            {
                primary:
                    {
                        red:2,
                        green:25,
                        blue:0
                    },
                secondary:
                    {
                        red:204,
                        green:13,
                        blue:25
                    },
        
            },
    },
    {
        name: "Member3",
        birthday:
            {    
                year: 1990,
                month: 3,
                day: 13
            },
        location:
            {
                country: "Hungary",
                city: "Szeged"
            },
        codingLevel: 50,
        favorites:
            {
                favMovies:
                    [{
                        title: "",
                        year: 1999,
                        rating: 8.7,
                        description: "",
                        directors: ["", ""],
                        writers: ["L", ""],
                        stars: ["", "Le", "Cs"],
                        genres: ["A", "i"]
                    },
                    {
                        title: "T",
                        year: 200,
                        rating: 5.3,
                        description: "a 108-year-old vampire.",
                        directors: ["e"],
                        writers: ["Mrg","Ster"] ,
                        stars: ["Krt", "Rn","Bie"],
                        genres:["Da", "Fy", "Rce"]
                    },
                    {
                        title: "T",
                        year: 197,
                        rating: 7,
                        description: "Imic weapon to keep Evil and Mr. Zorg at bay.",
                        directors: ["Ln"],
                        writers: ["Romen", "Lon"],
                        stars: ["Bris", "Mch", "Gan"],
                        genres: ["Aon", "Advees", "Sfi"]
                    },
                    {
                
                        title: "Hr˙s Stone",
                        year: 201,
                        rating: 7.6,
                        description: "An terrible evil that haunts the magical world.",
                        directors: ["Chmbus"],
                        writers: ["J.ng", "Steves"],
                        stars: ["Danffe", "Rut", "Riris"],
                        genres: ["Are", "Famy", "Ftasy"]
                    }],
                favoriteBooks : 
                    [{
                        title: "As",
                        author: "SMaas",
                        year: 201,
                        isNewerThan2000: true,
                        characters: ["Neta", "Cn", "Fe", "Rys"]
                    },
                    {
                        title: "Ar",
                        author: "Beea",
                        year: 2015,
                        isNewerThan2000: true,
                        characters: ["Toy", "La", "Poy", "Cala"]    
                    }],
            },
            colorCombination:
            {
                primary:
                    {
                        red:2,
                        green:25,
                        blue:0
                    },
                secondary:
                    {
                        red:204,
                        green:13,
                        blue:25
                    },
        
            },
    }
    ]
};
//console.log(ourTeam.members[0].favorites.favMovies[0].directors);

/*In the members array of the ourTeam variable, update the favorites key (object) with a new key (favSongs).
Add an array of the top three songs.
The object of the favSongs array must contain the following keys: title (string), artist (string), and genres (array of strings).*/
ourTeam.members[0].favorites.favSongs=[
    {
        title:"MMM",
        artist:"Minelli",
        genre:"pop"
    },{
        title:"Natural",
        artist:"Imagine Dragons",
        genre:"pop rock"
    },{
        title:"Lehetetlen nics",
        artist:"Kowalsky Meg a Vega",
        genre:"rock"
    }
];

//console.log(ourTeam.members[0].favorites.favSongs[0]);


/*Add a new review key to each book, movie, and song object. As the value of these keys, 
each member must write why they like that book, movie, or song and why they recommend it. 
Also, remove the following keys and their values: the description keys of the movies, the isNewerThan2000 and age keys of the books.  */
ourTeam.members[0].favorites.favoriteBooks[0].review="Easy to read, if you like fantasy romans, it is a good choice";
ourTeam.members[0].favorites.favoriteBooks[1].review="Children's book, I like how it teaches my child about life";
ourTeam.members[0].favorites.favMovies[0].review="It helps to look at things differently";
ourTeam.members[0].favorites.favMovies[1].review="I like the book too. I like how evil tries to be good ";
ourTeam.members[0].favorites.favMovies[2].review="It's a fun movie, it makes me laugh, and I love the actors who play in it";
ourTeam.members[0].favorites.favMovies[3].review="I've watched it a hundred times with my daughter, one of the must see movie for kids";
ourTeam.members[0].favorites.favSongs[0].review="I like the rhythm of this song, and I like coffee ";
ourTeam.members[0].favorites.favSongs[1].review="I like the message of the text, to find yourself and stand up whatever happened";
ourTeam.members[0].favorites.favSongs[2].review="The lyrics are motivating me, I often tell this to my children";
delete ourTeam.members[0].favorites.favMovies[0].description;
delete ourTeam.members[0].favorites.favMovies[1].description;
delete ourTeam.members[0].favorites.favMovies[2].description;
delete ourTeam.members[0].favorites.favMovies[3].description;
delete ourTeam.members[0].favorites.favoriteBooks[0].isNewerThan2000;
delete ourTeam.members[0].favorites.favoriteBooks[1].isNewerThan2000;
delete ourTeam.members[0].favorites.favoriteBooks[0].age;
delete ourTeam.members[0].favorites.favoriteBooks[1].age;


//console.log(ourTeam.members[0].favorites.favMovies);
//console.log(ourTeam.members[0].favorites.favoriteBooks);
//console.log (ourTeam.members[0]);

//Calculate the average age (in an averageAge variable) and average coding level (into an averageCodingLevel).

let averageAge=0;
for (let age of ourTeam.members){
    averageAge += age.birthday.year;
}
averageAge =2023- (averageAge/ourTeam.members.length);
//console.log(" The average age of our team members is : ",averageAge);

let averageCodingLevel=0;
for (let coding of ourTeam.members){
    averageCodingLevel += coding.codingLevel;
}
averageCodingLevel = averageCodingLevel/ourTeam.members.length;
//console.log("Our teams average coding level is ",averageCodingLevel);

//Find the youngest member (calculate it as a value of a youngestMember variable). Important: you only have to compare the values of the year keys
let youngestMember=ourTeam.members[0];
for (let Y of ourTeam.members){
    if(youngestMember.birthday.year<Y.birthday.year){
        youngestMember=Y;
    }
}
console.log("The youngest member of our team is ", youngestMember.name, ", he/she as born in ", youngestMember.birthday.year);

//Find the oldest member (calculate it as a value of an oldestMember variable). Important: you only have to compare the values of the year keys 

let oldestMember=ourTeam.members[0];
for (let O of ourTeam.members){
    if (oldestMember.birthday.year>O.birthday.year){
        oldestMember = O;
    }
}
console.log("The oldest mmember of our team is ", oldestMember.name, ", he/she was born in ", oldestMember.birthday.year);


//Find out if some people are from the same location.


//Common music styles
//Choose theme for each Member color
//Add an image

