import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosCost from "../config/axios";
import API_requires from "../config/requests";
function Cadastrar() {
  const [car, setCars] = useState({ nome: "", modelo: "", ano: "", preco: "" });
  const [image, setImage] = useState();

  const setVlueHandle = (e) => {
    const { name, value } = e.target;
    console.log("from handlevballues " + name + " " + value);
    setCars((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const navigate = useNavigate();
  const deleteHandle = (e) => {
    const res = API_requires.remove(e.target.id);
    console.log(res);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("img", image);
    for (let [key, value] of Object.entries(car)) {
      formdata.append(key, value);
    }

    const headers = {
      "Content-Type": "multipart/form-data",
    };
    axiosCost
      .post("/add-cars", formdata, { headers: headers })
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
        encType="multipart/form-data"
        onSubmit={submitHandle}
        className="border  grid grid-cols-12 px-2 py-3"
      >
        <div className="bg-teal-500 drop-shadow-2xl col-span-8 gap-3 col-start-3 p-3 grid grid-cols-2  ">
          <input
            name="nome"
            className="px-10 py-2 rounded-xl my-1"
            placeholder="Marca"
            type="text"
            value={car.nome}
            onChange={(e) => setVlueHandle(e)}
          />
          <input
            name="modelo"
            className="px-10 py-2 rounded-xl my-1"
            placeholder="Modelo"
            type="text"
            value={car.modelo}
            onChange={(e) => setVlueHandle(e)}
          />

          <input
            name="preco"
            className="px-10 py-2 rounded-xl my-1"
            placeholder="Preço"
            type="text"
            value={car.preco}
            onChange={(e) => setVlueHandle(e)}
          />

          <input
            name="ano"
            className="px-10 py-2 rounded-xl my-1"
            placeholder="Ano"
            type="text"
            value={car.ano}
            onChange={(e) => setVlueHandle(e)}
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
