import React from "react";
import PropTypes from "prop-types";

function User({ title, data, friends }) {
  console.log(data, friends);
  return (
    <div>
      <strong> {title}</strong>
      <div>İsim: {data.name}</div>
      <div>Şehir: {data.city}</div>
      <div>Yaş:{data.age}</div>
      <h3>Arkadaşları</h3>
      {friends.map((friend, i) => (
        <div key={i}>{friend}</div>
      ))}
      <hr />
    </div>
  );
}

User.prototype = {
  data: PropTypes.exact({
    title: PropTypes.string.isRequired,
    name: PropTypes.string,
    city: PropTypes.string,
    age: PropTypes.number,
  }),
};
User.defaultProps = {
  title: "BAŞLIK",
};

export default User;
