import Searchbar from "./searchbar/Searchbar";
import Cards from "./cards/Cards.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalComp from "./modal/Modal";
import React, { Component } from "react";
import "./modal/modal.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {
          image: "https://i.ebayimg.com/images/g/Mb4AAOSwTuJYqUbs/s-l300.jpg",
          title: "Goodfellas",
          year: "1990",
          ratings: 5
        },
        {
          image: "https://images.justwatch.com/poster/9401436/s592",
          title: "Austin powers",
          year: "2002",
          ratings: 3
        },
        {
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51iGX8l0weL.jpg",
          title: "Requim for a dream",
          year: "2000",
          ratings: 4
        },
        {
          image:
            "https://s.s-bol.com/imgbase0/imagebase3/large/FC/4/0/1/7/9200000052307104.jpg",
          title: "Life is beautiful",
          year: "1997",
          ratings: 4
        },
        {
          image:
            "https://m.media-amazon.com/images/M/MV5BMTg1MTU1Njk5M15BMl5BanBnXkFtZTgwMzc0NTIxMDE@._V1_SY1000_CR0,0,714,1000_AL_.jpg",
          title: "The shining",
          year: "1980",
          ratings: 5
        },
        {
          image: "https://miro.medium.com/max/896/0*bgwD7QzDUJGnK6Y0.jpg",
          title: "Nacho libre",
          year: "2006",
          ratings: 3
        }
      ],
      modal: false,
      searchedmovie: "",
      starCount: 0
    };
  }
  searchText = e => {
    this.setState({
      searchedmovie: e.target.value
    });
  };

  handleClose = () =>
    this.setState({
      ...this.state,
      modal: !this.state.modal
    });
  addNewMovie = x => {
    this.setState({
      movies: this.state.movies.concat(x)
    });
  };
  changeCount = newCount =>
    this.setState({
      starCount: newCount
    });

  render() {
    return (
      <div>
        <Searchbar
          searchText={this.searchText}
          count={this.state.starCount}
          changeCount={this.changeCount}
        />
        <Cards
          movies={this.state.movies.filter(
            el =>
              el.title
                .toLowerCase()
                .includes(this.state.searchedmovie.toLowerCase()) &&
              el.ratings >= this.state.starCount
          )}
        />
        <div className="modals">
          <img
            className="modal-img"
            src="https://image.freepik.com/icones-gratuites/noir-plus-apercu_318-8371.jpg"
            alt="modal"
            onClick={() => this.handleClose()}
          />
        </div>
        <ModalComp
          show={this.state.modal}
          handleClose={this.handleClose}
          addNewMovie={this.addNewMovie}
        />
      </div>
    );
  }
}
