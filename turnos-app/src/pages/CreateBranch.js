import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import { createBranch } from "../store";
import Swal from "sweetalert2";

const CreateBranch = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [capMax, setCapMax] = useState("");
  const [beginTime, setBeginTime] = useState("");
  const [closeTime, setCloseTime] = useState("");

  const { error } = useSelector((state) => state.branch);

  const arrayCapMax = [];
  const arrayBeginTime = [];
  const arrayCloseTime = [];

  const llenarArray = () => {
    for (let i = 10; i <= 100; i += 10) {
      arrayCapMax.push(i);
    }
    for (let j = 0; j < 24; j++) {
      for (let k = 0; k <= 30; k += 30) {
        if (k === 0) {
          arrayBeginTime.push(j + ":" + k + "0");
          arrayCloseTime.push(j + ":" + k + "0");
        } else {
          arrayBeginTime.push(j + ":" + k);
          arrayCloseTime.push(j + ":" + k);
        }
      }
    }
  };

  llenarArray();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleCapMaxChange = (e) => {
    setCapMax(e.target.value);
  };
  const handleBeginTimeChange = (e) => {
    setBeginTime(e.target.value);
  };
  const handleCloseTimeChange = (e) => {
    setCloseTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createBranch({ name, email, phone, capMax, beginTime, closeTime })
    );
    Swal.fire({
      title: "Exito",
      text: "Sucursal Creada con Exito",
      icon: "success",
      allowOutsideClick: false,
    });
  };

  if (error) {
    Swal.fire({
      title: "Error",
      text: "Hubo un error en la creacion de la Sucursal",
      icon: "error",
      allowOutsideClick: false,
    });
  }
  return (
    <div>
      <div className="administrador-creacindesucursales-administrador-creacindesucursales">
        <NavBar />
        <form onSubmit={handleSubmit}>
          <div className="administrador-creacindesucursales-formulario">
            <span className="administrador-creacindesucursales-text SemiBold·20·24">
              <span>Crear una nueva sucursal</span>
            </span>
            <div className="administrador-creacindesucursales-input-desktop2">
              <div className="administrador-creacindesucursales-txt">
                <span className="administrador-creacindesucursales-text02 Regular·14·20">
                  <span>Nombre</span>
                </span>
              </div>
              <input
                type="text"
                className="administrador-creacindesucursales-input-desktop1"
                onChange={handleNameChange}
                value={name}
              />
            </div>
            <div className="administrador-creacindesucursales-input-desktop21">
              <div className="administrador-creacindesucursales-txt1">
                <span className="administrador-creacindesucursales-text04 Regular·14·20">
                  <span>Correo electrónico</span>
                </span>
              </div>
              <input
                type="email"
                className="administrador-creacindesucursales-input-desktop11"
                onChange={handleEmailChange}
                value={email}
              />
            </div>
            <div className="administrador-creacindesucursales-fila">
              <div className="administrador-creacindesucursales-input-desktop22">
                <div className="administrador-creacindesucursales-txt2">
                  <span className="administrador-creacindesucursales-text06 Regular·14·20">
                    <span>Teléfono</span>
                  </span>
                </div>
                <input
                  type="text"
                  className="administrador-creacindesucursales-input-desktop12"
                  onChange={handlePhoneChange}
                  value={phone}
                />
              </div>
              <div className="administrador-creacindesucursales-input-desktop3">
                <div className="administrador-creacindesucursales-txt3">
                  <span className="administrador-creacindesucursales-text08 Regular·14·20">
                    <span>Capacidad máxima</span>
                  </span>
                </div>
                <div className="administrador-creacindesucursales-input-desktop13">
                  <select
                    onChange={handleCapMaxChange}
                    className="administrador-creacindesucursales-text10 Regular·14·20"
                  >
                    <option key={0} value={0}>
                      Seleccionar capacidad maxima..
                    </option>
                    {arrayCapMax.map((capacidad) => {
                      return (
                        <option key={capacidad} value={capacidad}>
                          {capacidad}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="administrador-creacindesucursales-horario">
              <div className="administrador-creacindesucursales-input-desktop23">
                <div className="administrador-creacindesucursales-txt4">
                  <span className="administrador-creacindesucursales-text11 Regular·14·20">
                    <span>Horario de Inicio</span>
                  </span>
                </div>
                <div className="administrador-creacindesucursales-input-desktop14">
                  <select
                    onChange={handleBeginTimeChange}
                    className="administrador-creacindesucursales-text13 Regular·14·20"
                  >
                    <option key={0} value={0}>
                      Seleccione un Horario
                    </option>
                    {arrayBeginTime.map((horaInicio) => {
                      return (
                        <option key={horaInicio} value={horaInicio}>
                          {horaInicio}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="administrador-creacindesucursales-input-desktop31">
                <div className="administrador-creacindesucursales-txt5">
                  <span className="administrador-creacindesucursales-text15 Regular·14·20">
                    <span>Horario de Cierre</span>
                  </span>
                </div>
                <div className="administrador-creacindesucursales-input-desktop15">
                  <select
                    onChange={handleCloseTimeChange}
                    className="administrador-creacindesucursales-text17 Regular·14·20"
                  >
                    <option key={0}>Seleccione Horario de Cierre</option>
                    {arrayCloseTime.map((horaCierre) => {
                      return (
                        <option key={horaCierre} value={horaCierre}>
                          {horaCierre}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <button className="administrador-creacindesucursales-c-t-a-desktop1">
              <span className="administrador-creacindesucursales-text19 Semibold·16·20">
                <span>Enviar</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBranch;
