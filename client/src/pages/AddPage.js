import React, { useEffect, useState } from "react";
import axiosCost from "../config/axios";
import { Link } from "react-router-dom";

function AddPage() {
  const [Cars, setCars] = useState([]);
  const [del, setDel] = useState(false);

  const deleteHandle = (e) => {
    const id = e.target.id;
    const img = e.target.attributes
      .getNamedItem("data-img")
      .value.split("=")[2];
    console.log(img);
    axiosCost
      .post(`delete/${e.target.id}`, { id: img })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    setDel(!del);
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
  }, [del]);
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
            <div className="grid grid-col-4 gap-2  w-10/12 col-span-4 p-1">
              <img
                src={cars.imagem}
                className="col-span-4 object-cover h-48 w-full justify-self-center rounded-md"
                alt=""
              />

              <span className="col-span-4 text-md font-semibold text-center">
                {`${cars.nome} ${cars.modelo}`}
              </span>
              <div className="col-span-4 font-bold text-xl text-center">
                {cars.preco} R$
              </div>
              <button className="hover:bg-green-600 bg-green-500 text-white text-center col-start-3 rounded py-0.5 px-1">
                Editar
              </button>
              <button
                id={cars._id}
                data-img={cars.imagem}
                onClick={(e) => deleteHandle(e)}
                className="bg-red-500 text-white text-center hover:bg-red-600 rounded py-0.5 px-1"
              >
                Exluir
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AddPage;
