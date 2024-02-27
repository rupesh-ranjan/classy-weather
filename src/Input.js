import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search from location.."
          value={this.props.location}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Input;