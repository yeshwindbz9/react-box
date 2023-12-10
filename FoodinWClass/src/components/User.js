import React from "react";
import { GITHUB_USER_API } from "../utils/constants";

// class based user component
class User extends React.Component {
  // loading a class based component refers to creating an instance of the class
  constructor(props) {
    super(props);
    // this.props = props;
    this.state = {
      count: 0,
      userInfo: {
        name: "dummy",
        bio: "dummy again",
        login: "dum dum dum",
        avatar_url: "",
      },
    };
    //never update state variables directly
  }

  async componentDidMount() {
    const data = await fetch(GITHUB_USER_API);
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // this.setState({ count: this.state.count + 1 });
  }

  componentWillUnmount() {
    alert("Thanks for checking the about page :)");
  }

  render() {
    // returns a piece of JSX which will be shown in the UI
    const { name, bio, login, avatar_url } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="user-card">
        <img
          width="300px"
          height="300px"
          src={avatar_url}
          style={{ borderRadius: "9px" }}
          alt="userimg"
        ></img>
        <h2>Hi I'm {name}!</h2>
        <h3>{bio}</h3>
        <h4>you can find me @{login}</h4>
        <h5>You've clicked {count} times</h5>
        <button
          className="filter-btn"
          onClick={() => {
            // set state takes a updated state object, only updates the specified state var, not others
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click Counter
        </button>
      </div>
    );
  }
}

export default User;
