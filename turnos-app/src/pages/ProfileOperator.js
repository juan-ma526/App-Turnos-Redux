import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import NavBar from "../components/NavBar";
import { updateUser } from "../store";

const ProfileOperator = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.users);
  const operador = data.filter((usuario) => usuario.id === user.id);
  const [id, setId] = useState(operador[0].id);
  const [fullName, setFullName] = useState(operador[0].fullName);
  const [email, setEmail] = useState(operador[0].email);
  const [dni, setDni] = useState(operador[0].dni);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id, password }));
    Swal.fire({
      title: "Exito",
      text: "Contraseña Actualizada con exito",
      icon: "success",
      allowOutsideClick: false,
    });
  };

  return (
    <div>
      <div className="operador-operador">
        <NavBar />
        <form onSubmit={handleSubmit}>
          <div className="operador-formulario">
            <span className="operador-text SemiBold·20·24">
              <span>Mis datos</span>
            </span>
            <div className="operador-input-desktop2">
              <div className="operador-txt">
                <span className="operador-text02 Regular·14·20">
                  <span>Nombre</span>
                </span>
              </div>
              <input
                type="text"
                className="operador-input-desktop1"
                value={fullName}
                disabled
              />
            </div>
            <div className="operador-input-desktop21">
              <div className="operador-txt1">
                <span className="operador-text04 Regular·14·20">
                  <span>Correo electrónico</span>
                </span>
              </div>
              <input
                type="email"
                className="operador-input-desktop11"
                value={email}
                disabled
              />
            </div>
            <div className="operador-fila">
              <div className="operador-input-desktop22">
                <div className="operador-txt2">
                  <span className="operador-text06 Regular·14·20">
                    <span>DNI</span>
                  </span>
                </div>
                <input
                  type="text"
                  className="operador-input-desktop12"
                  value={dni}
                  disabled
                />
              </div>
              <div className="operador-input-desktop3">
                <div className="operador-txt3">
                  <span className="operador-text08 Regular·14·20">
                    <span>Sucursal</span>
                  </span>
                </div>
                <select className="operador-input-desktop13" disabled>
                  <option className="operador-text10 Regular·14·20">
                    {operador[0].nameBranch}
                  </option>
                </select>
              </div>
            </div>
            <div className="operador-horario">
              <div className="operador-input-desktop23">
                <div className="operador-txt4">
                  <span className="operador-text12 Regular·14·20">
                    <span>Contraseña</span>
                  </span>
                </div>
                <input
                  type="password"
                  className="operador-input-desktop14"
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="operador-input-desktop31">
                <span className="operador-txt5">Editar contraseña</span>
              </div>
            </div>
            <button className="operador-c-t-a-desktop1">
              <span className="operador-text14 Semibold·16·20">
                <span>Aceptar</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileOperator;
