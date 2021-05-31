import { Component } from "react";
import './MovieCard.css';
class MovieCard extends Component {
    render() {
        let movies = [
            { src: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", title: "The Shawshank Redemptionå", cast: "Tim Robbins, Morgan Freeman", type: "Drama", rating: "9.3/10" },
            { src: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg", title: "The Godfather", cast: "Marlon Brando, Al Pacino, James Caan", type: "Drama", rating: "9.2/10" },
            { src: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg", title: "The Dark Knight", cast: "Christian Bale, Heath Ledger, Aaron Eckhart", type: "Action", rating: "9.0/10" },
            { src: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg", title: "12 Angry Men", cast: " Henry Fonda, Lee J. Cobb, Martin Balsam ", type: "Crime", rating: "9.0/10" },
            { src: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg", title: "Schindler's List", cast: "Liam Neeson, Ralph Fiennes, Ben Kingsley", type: "Biography", rating: "8.9/10" }
        ];
        let cards = movies.map((item, i) => (
            <div key={i} class="card">
                <img src={item.src} />
                <h3>{item.title}</h3>
        <span>{item.type}</span>
                <br />
       <b>Cast:</b> {item.cast}
                <br />
       <b>Rating:</b> {item.rating}
       <br/>
       <button>Book</button>
            </div>
        ));
        return (
            <div>
                {cards}
            </div>
        )
    }
}
export default MovieCard;