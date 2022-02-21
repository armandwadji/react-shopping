import axios from "axios";
import React from "react";
import { useState } from "react/cjs/react.development";
import Delete from "./Delete";

const Profil = (props) => {
  const { user } = props;
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    const editProfil = {
      pic: user.pic,
      name: user.name,
      job: user.job,
      comment: user.comment,
    };
    axios.put("http://localhost:3002/user/" + user.id, editProfil);
    setIsEditing(false);
  };

  return (
    <div className="profil-container">
      <img src={user.pic} alt={"photo " + user.name} />
      {isEditing ? (
        <>
          <h3>
            Name:{" "}
            <textarea
              defaultValue={user.name}
              onChange={(e) => (user.name = e.target.value)}
            ></textarea>
          </h3>
          <p className="profil-container__job">
            Poste:{" "}
            <textarea
              defaultValue={user.job}
              onChange={(e) => (user.job = e.target.value)}
            ></textarea>
          </p>
          <p>
            Comment:{" "}
            <textarea
              defaultValue={user.comment}
              onChange={(e) => (user.comment = e.target.value)}
            ></textarea>
          </p>
        </>
      ) : (
        <>
          <h3>{user.name}</h3>
          <p className="profil-container__job">{user.job}</p>
          <p>{user.comment}</p>
        </>
      )}

      <div className="profil-container__addminus">
        {isEditing ? (
          <i className="fas fa-check" onClick={handleEdit}></i>
        ) : (
          <i
            className="fas fa-user-edit"
            onClick={() => setIsEditing(true)}
          ></i>
        )}

        <Delete id={user.id} key={user.id} />
      </div>
    </div>
  );
};

export default Profil;
