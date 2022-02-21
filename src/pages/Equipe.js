import axios from "axios";
import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Profil from "../components/Profil";

const Equipe = () => {
  const [profil, setProfil] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [poste, setPoste] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    getrofil();
  }, []);

  const getrofil = () => {
    axios.get("http://localhost:3002/user").then((res) => setProfil(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfil = {
      pic: photo,
      name: name,
      job: poste,
      comment: comment,
    };
    axios.post("http://localhost:3002/user", newProfil).then(() => {
      setPhoto("");
      setName("");
      setPoste("");
      setComment("");
      getrofil();
    });
  };

  return (
    <>
      <div className="equipe">
        <Navigation />
        <h1>EQUIPE</h1>
        <Logo />
        <div className="profil">
          {profil.map((user) => (
            <Profil user={user} key={user.id} />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="lien"
          placeholder="Lien photo :"
          onChange={(e) => setPhoto(e.target.value)}
          value={photo}
        />
        <input
          type="text"
          id="name"
          placeholder="Name:"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          id="poste"
          placeholder="poste:"
          onChange={(e) => setPoste(e.target.value)}
          value={poste}
        />
        <textarea
          placeholder="Comment: "
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        ></textarea>
        <button type="submit" className="submit">
          creer profil
        </button>
      </form>
    </>
  );
};

export default Equipe;
