function movies(input) {

    let movieList = [];

    // един for цикъл да ми обиколи всичките
    // проверка дали съдържат ключовите думи
    // при всеки if split-ваме и т.н.
    // създавам обект за всеки филм и попълвам информацията
    // push-вам го в списъка
    // при последвалите проверки виждам дали има такъв

    for (let command of input) {

        let movie = {};

        if (command.includes('addMovie')) {
            movie.name = command.split('addMovie ')[1]
            movieList.push(movie);
        }
        else if (command.includes('directedBy')) {

            let name = command.split(' directedBy ')[0];
            movie.director = command.split(' directedBy ')[1];
            let existedMovie = movieList.find(x => x.name == name);

            if (existedMovie) {
                existedMovie.director = movie.director;
            } else {
                movieList.push(movie);
            }
        } else if (command.includes(' onDate ')) {

            let name = command.split(' onDate ')[0];
            movie.date = command.split(' onDate ')[1];
            let existedMovie = movieList.find(x => x.name == name);

            if (existedMovie) {
                existedMovie.date = movie.date;
            } else {
                movieList.push(movie);
            }
        }
    }
    let finalList = movieList.filter(x => x.name && x.director && x.date)
    finalList.forEach(element => {
        console.log(JSON.stringify(element))
    });
}

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]    
)