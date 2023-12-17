import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
  // using context
  const { loggedInUser, setUser } = useContext(UserContext);
  return (
    <div
      className="flex-1 bg-gray-100 rounded-md p-2 flex flex-col gap-4"
      style={{ alignItems: "center" }}
    >
      <h1 className="text-4xl">Contact page</h1>
      <h2 className="text-3xl">Theres no team contact mail here</h2>
      <h3 className="text-2xl">Sorry, but you cant contact me.</h3>
      <input
        placeholder="change user"
        value={loggedInUser}
        className="rounded-lg border border-purple-500 focus:shadow-lg p-2"
        onChange={(e) => setUser(e.target.value)}
      />

      <h3 className="text-xl">
        I'm kidding just use the form below, I will totally respond back.
      </h3>
      <form className="flex flex-col gap-3">
        <input
          className="rounded-lg border border-violet-900 focus:shadow-lg p-2"
          type="text"
          placeholder="enter your email"
        ></input>
        <input
          className="rounded-lg border border-teal-900 focus:shadow-lg p-2"
          type="text"
          placeholder="enter your concern"
        ></input>
        <button
          className="rounded-lg border border-purple-500 focus:shadow-lg p-2"
          type="text"
        >
          Submit
        </button>
      </form>

      <img src="https://media.tenor.com/XDvKdTXUiQsAAAAi/brown-and-cony-bear.gif"></img>
    </div>
  );
};

export default Contact;

// rafce => automatically creates components
