import axios from "axios";
import React from "react";

const Delete = ({ id }) => {
  const handleDelete = () => {
    axios.delete("http://localhost:3002/user/" + id);
    window.location.reload();
  };
  return (
    <>
      <i
        className="fas fa-trash minus"
        onClick={() => {
          if (window.confirm("Voulez vous supprimer ce profil ?")) {
            handleDelete();
          }
        }}
      ></i>
    </>
  );
};

export default Delete;
