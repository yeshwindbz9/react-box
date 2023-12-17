import React from "react";
import User from "./User";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="flex-1 bg-gray-100 rounded-md p-2 flex flex-col"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "0px",
        }}
      >
        <h1 className="text-4xl">About page</h1>
        <UserContext>{(data) => <h2>Hi, {data.loggedInUser}</h2>}</UserContext>
        <h2 className="text-3xl">
          This a practise project developed to learn the functionalities of the
          react library.
        </h2>
        <h3 className="text-2xl">Made with love and mistakes by Yeshwin!</h3>
        <User name={"Admin"} bio={"I'm from Cardiff"} contact={"@yeshw"} />
        {/* <User name={"User"} loc={"Mumbai"} contact={"@user"} /> */}
        <img src="https://media.tenor.com/nu9XqB4pQGsAAAAi/line-sticker-thank-you-sticker.gif"></img>
      </div>
    );
  }
}

export default About;
