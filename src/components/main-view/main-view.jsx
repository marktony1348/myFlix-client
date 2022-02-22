import React from 'react';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';



export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [
                {_id: '61fd8b4a876c314b85de2b69', Title: 'Naruto Shipudden', Description: 'Naruto, an adolescent ninja, dreams of becoming the Hokage in his village.', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/NarutoCoverTankobon1.jpg/220px-NarutoCoverTankobon1.jpg', featured: true, Genre: {Name:'Action', Description:'Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats.'}, Director:{Name: 'Mashashi Kishimoto', Bio: 'Masashi Kishimoto is a Japanese manga artist. His best known work, Naruto, was in serialization from 1999 to 2014 and has sold over 250 million copies worldwide in 46 countries as of May 2019.', Birth: 1974-11-08}},
                {_id: '61fd8cd3074ce295db47284f', Title: 'Vinland Saga', Description: 'Thorfinn pursues a journey with his father\'s killer in order to take revenge and end his life in a duel as an honorable warrior and pay his father a homage.', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/5/51/Vinland_Saga_volume_01_cover.jpg', featured: false, Genre: {Name:'Adventure', Description:'The adventure genre consists of books where the protagonist goes on an epic journey, either personally or geographically. Often the protagonist has a mission and faces many obstacles in his way.'}, Director:{Name: 'Makoto Yukimura', Bio: 'Makoto Yukimura is a Japanese manga artist. Yukimura made his debut with the hard science fiction manga Planetes, serialized in Weekly Morning magazine from 1999 to 2004 and adapted into a 26-episode anime series by Sunrise. Before that, he worked as an assistant for Shin Morimura', Birth: 1978-05-08}},
                {_id: '61fd9e80986730c619143ebb', Title: 'Jungle Book', Description: 'The stories tell mostly of Mowgli, an Indian boy who is raised by wolves and learns self-sufficiency and wisdom from the jungle animals.', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/a/a4/The_Jungle_Book_%282016%29.jpg', featured: false, Genre: {Name:'Family', Description:'Family film is a genre that is contains appropriate content for younger viewers. Family film aims to appeal not only to children, but to a wide range of ages.'}, Director:{Name: 'Jon Favreau', Bio: 'Jonathan Kolia Favreau is an American actor and filmmaker. As an actor, Favreau has appeared in the films Rudy, PCU, Swingers, Very Bad Things, Deep Impact. Plus he is the famous crooner of the award winning family film jungle book.', Birth: 1966-10-19}}, 
            ],
            selectedMovie: null
        };
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;


        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
                    ))
                }
            </div>
        );
    }

}