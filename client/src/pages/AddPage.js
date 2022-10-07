import React, { useEffect, useState } from "react";
import axiosCost from "../config/axios";
import { Link } from "react-router-dom";

function AddPage() {
  const [Cars, setCars] = useState([]);

  const deleteHandle = (e) => {
    console.log(e.target.id);
    axiosCost
      .get(`delete/${e.target.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axiosCost
      .get("/cars")
      .then((res) => {
        console.log(res.data.cars);
        setCars(res.data.cars);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Cars]);
  return (
    <div className=" ">
      <div className="grid grid-cols-12">
        <div className="col-span-12 grid justify-items-end p-2">
          <Link to="/adicionar">
            <button className="bg-green-600 px-4 text-white py-2 rounded-md">
              Adicionar
            </button>
          </Link>
        </div>
        {!Cars.length ? (
          <p className="col-span-12 text-2xl">
            Ainda nao foram adicionado carros
          </p>
        ) : (
          Cars.map((cars) => (
            <div className="grid grid-col-4 gap-2 col-span-4 p-1">
              <img
                src="https://picsum.photos/id/237/200/200"
                className="col-span-4 object-cover h-56 w-full mb -2 rounded-md"
                alt=""
              />

              <span className="col-span-4 text-xl font-semibold text-center">
                {cars.nome}
              </span>
              <div className="p-2 text-xl">Modelo</div>
              <div className="p-2 font-semibold text-xl">{cars.modelo}</div>
              <button className="bg-green-500 text-white text-center rounded py-1 px-2">
                Editar
              </button>
              <button
                id={cars._id}
                onClick={(e) => deleteHandle(e)}
                className="bg-red-500 text-white text-center rounded py-1 px-2"
              >
                Exluir
              </button>
              <div className="p-2 text-xl">Preço</div>
              <div className="p-2 font-semibold text-xl">{cars.preco}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AddPage;