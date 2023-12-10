import React from "react";
import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="main-body"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "0px",
        }}
      >
        <h1>About page</h1>
        <h2>
          This a practise project developed to learn the functionalities of the
          react library.
        </h2>
        <h3>Made with love and mistakes by Yeshwin!</h3>
        <User name={"Admin"} bio={"I'm from Cardiff"} contact={"@yeshw"} />
        {/* <User name={"User"} loc={"Mumbai"} contact={"@user"} /> */}
        <img src="https://media.tenor.com/nu9XqB4pQGsAAAAi/line-sticker-thank-you-sticker.gif"></img>
      </div>
    );
  }
}

export default About;
