import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import NavBar from "../components/NavBar";
import { updateUser } from "../store";

const ProfileAdmin = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [id, setId] = useState(user.id);
  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [dni, setDni] = useState(user.dni);
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
      <div className="perfil-administrador-perfil-administrador">
        <NavBar />
        <form onSubmit={handleSubmit}>
          <div className="perfil-administrador-formulario">
            <span className="perfil-administrador-text SemiBold·20·24">
              <span>Mis datos</span>
            </span>
            <div className="perfil-administrador-input-desktop2">
              <div className="perfil-administrador-txt">
                <span className="perfil-administrador-text02 Regular·14·20">
                  <span>Nombre</span>
                </span>
              </div>
              <input
                type="text"
                className="perfil-administrador-input-desktop1"
                value={fullName}
                disabled
              />
            </div>
            <div className="perfil-administrador-input-desktop21">
              <div className="perfil-administrador-txt1">
                <span className="perfil-administrador-text04 Regular·14·20">
                  <span>Correo electrónico</span>
                </span>
              </div>
              <input
                type="email"
                className="perfil-administrador-input-desktop11"
                value={email}
                disabled
              />
            </div>
            <div className="perfil-administrador-input-desktop22">
              <div className="perfil-administrador-txt2">
                <span className="perfil-administrador-text06 Regular·14·20">
                  <span>DNI</span>
                </span>
              </div>
              <input
                type="text"
                className="perfil-administrador-input-desktop12"
                value={dni}
                disabled
              />
            </div>
            <div className="perfil-administrador-horario">
              <div className="perfil-administrador-input-desktop23">
                <div className="perfil-administrador-txt3">
                  <span className="perfil-administrador-text08 Regular·14·20">
                    <span>Contraseña</span>
                  </span>
                </div>
                <input
                  type="password"
                  className="perfil-administrador-input-desktop13"
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="perfil-administrador-input-desktop3">
                <span className="perfil-administrador-txt4">
                  Editar contraseña
                </span>
              </div>
            </div>
            <button className="perfil-administrador-c-t-a-desktop1">
              <span className="perfil-administrador-text10 Semibold·16·20">
                <span>Aceptar</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileAdmin;
