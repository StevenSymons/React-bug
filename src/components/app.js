import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Board from "./Board";
import uuid from "uuid";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addIdea = this.addIdea.bind(this);
    this.createIdea = this.createIdea.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.sortArray = this.sortArray.bind(this);
    this.state = {
      ideas: [
        {
          id: uuid(),
          project: "test1",
          text: "Information about test1",
          createdAt: moment()
            .subtract(4, "days")
            .valueOf(),
          priority: 2
        },
        {
          id: uuid(),
          project: "test2",
          text: "Information about test2",
          createdAt: moment()
            .add(4, "days")
            .valueOf(),
          priority: 5
        },
        {
          id: uuid(),
          project: "test3",
          text: "Information about test3",
          createdAt: moment()
            .add(2, "days")
            .valueOf(),
          priority: 1
        }
      ],
      filter: "date"
    };
  }
  createIdea() {
    return {
      id: uuid(),
      project: "test",
      text: "Information about test",
      createdAt: moment().valueOf(),
      priority: 10
    };
  }

  addIdea() {
    this.setState(prevState => {
      return {
        ideas: [...prevState.ideas, this.createIdea()]
      };
    });
  }

  changeFilter(e) {
    console.log(e.target.value);
    const filter = e.target.value;
    this.setState(() => {
      return {
        ...this.state,
        filter
      };
    });
    console.log(this.state);
    this.sortArray();
  }

  sortArray() {
    if (this.state.filter.sortBy === "date") {
      this.state.ideas.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));
    } else if (this.state.filter.sortBy === "priority") {
      this.state.ideas.sort((a, b) => (a.priority > b.priority ? 1 : -1));
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Board
          changeFilter={this.changeFilter}
          ideas={this.state.ideas}
          addIdea={this.addIdea}
          sortBy={this.state.filter.sortBy}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
