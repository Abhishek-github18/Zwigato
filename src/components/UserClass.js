import React from "react";
import UserContext from "../utils/Usercontext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
      count: 0,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Abhishek-github18");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, bio, avatar_url } = this.state.userInfo;

    const { count } = this.state;
    return (
      <div className="flex flex-col m-4 justify-center items-center bg-slate-100 hover:bg-slate-200 w-60 mx-auto p-2">
        <UserContext.Consumer>
          {({ loggerUser }) => (
            <h1 className="text-xl font-bold">{loggerUser}</h1>
          )}
        </UserContext.Consumer>
        <div className="">
          <img className="" src={avatar_url} alt="profile pic" />
        </div>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h2>Designation : Developer {count}</h2>
      </div>
    );
  }
}

export default UserClass;
