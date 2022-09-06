import React from "react";

export const Ticket = (props) => {
  return (
    <>
      <h2>Ticket {props.subject}</h2>
      <h4>{props.inquiry}</h4>
      {props.status ? (
        <p className="activeInquiry">{props.status}</p>
      ) : (
        <p className="inactiveInquiry">Not Active</p>
      )}
    </>
  );
};
