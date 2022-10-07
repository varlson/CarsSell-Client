import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosCost from "../config/axios";

function Cadastrar() {
  const [nome, setNome] = useState();
  const [ano, setAno] = useState();
  const [modelo, setModelo] = useState();
  const [preco, setPreco] = useState();
  const [image, setImage] = useState();

  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("img", image);
    console.log(image);
    console.log(formdata);
    axiosCost
      .post(
        "/add-cars",
        { formdata },
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      .then((res) => {
        navigate("/carros");
      })
      .catch((error) => {
        console.log(`error ${error}`);
      });
  };
  return (
    <div>
      <form
        enctype="multipart/form-data"
        onSubmit={submitHandle}
        className="border  grid grid-cols-12 px-2 py-3"
      >
        <div className="bg-teal-500 drop-shadow-2xl col-span-8 gap-3 col-start-3 p-3 grid grid-cols-2  ">
          <input
            className="px-10 py-2 rounded-xl my-1"
            placeholder="Marca"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="px-10 py-2 rounded-xl my-1"
            placeholder="Modelo"
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />

          <input
            className="px-10 py-2 rounded-xl my-1"
            placeholder="Preço"
            type="text"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />

          <input
            className="px-10 py-2 rounded-xl my-1"
            placeholder="Ano"
            type="text"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />

          <input
            name="img"
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
          />

          <button
            className="bg-green-500 text-white text-center rounded font-semibold py-2 px-2 hover:bg-green-600 col-span-2"
            type="submit"
          >
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cadastrar;
