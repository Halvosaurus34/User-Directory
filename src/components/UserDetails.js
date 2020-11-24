import React from "react";

function UserDetails(props) {
  return (
    <tr>
      <td><img src={props.picture} alt={props.firstname}/></td>
      <td>{props.firstname}</td>
      <td>{props.lastname}</td>
      <td>{props.email}</td>
    </tr>
  );
}

export default UserDetails;
