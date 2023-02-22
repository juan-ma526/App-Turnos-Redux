import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import NavBar from "../components/NavBar";
import { updateUser } from "../store";

const ProfileUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [fullName, setFullName] = useState(user.fullName);
  const [id, setId] = useState(user.id);
  const [email, setEmail] = useState(user.email);
  const [dni, setDni] = useState(user.dni);
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id, password, phone }));
    Swal.fire({
      title: "Exito",
      text: "Contraseña Actualizada con exito",
      icon: "success",
      allowOutsideClick: false,
    });
  };

  return (
    <div>
      <div className="perfil-clientefinal-perfil-clientefinal">
        <NavBar />
        <form onSubmit={handleSubmit}>
          <div className="perfil-clientefinal-formulario">
            <span className="perfil-clientefinal-text SemiBold·20·24">
              <span>Mis datos</span>
            </span>
            <div className="perfil-clientefinal-input-desktop2">
              <div className="perfil-clientefinal-txt">
                <span className="perfil-clientefinal-text02 Regular·14·20">
                  <span>Nombre</span>
                </span>
              </div>
              <input
                type="text"
                className="perfil-clientefinal-input-desktop1"
                value={fullName}
                disabled
              />
            </div>
            <div className="perfil-clientefinal-input-desktop21">
              <div className="perfil-clientefinal-txt1">
                <span className="perfil-clientefinal-text04 Regular·14·20">
                  <span>Mail</span>
                </span>
              </div>
              <input
                type="email"
                className="perfil-clientefinal-input-desktop11"
                value={email}
                disabled
              />
            </div>
            <div className="perfil-clientefinal-fila">
              <div className="perfil-clientefinal-input-desktop22">
                <div className="perfil-clientefinal-txt2">
                  <span className="perfil-clientefinal-text06 Regular·14·20">
                    <span>DNI</span>
                  </span>
                </div>
                <input
                  type="text"
                  className="perfil-clientefinal-input-desktop12"
                  value={dni}
                  disabled
                />
              </div>
              <div className="perfil-clientefinal-input-desktop3">
                <div className="perfil-clientefinal-txt3">
                  <span className="perfil-clientefinal-text08 Regular·14·20">
                    <span>Teléfono</span>
                  </span>
                </div>
                <input
                  type="text"
                  className="perfil-clientefinal-input-desktop13"
                  onChange={handlePhoneChange}
                />
              </div>
            </div>
            <div className="perfil-clientefinal-horario">
              <div className="perfil-clientefinal-input-desktop23">
                <div className="perfil-clientefinal-txt4">
                  <span className="perfil-clientefinal-text10 Regular·14·20">
                    <span>Contraseña</span>
                  </span>
                </div>
                <input
                  type="password"
                  className="perfil-clientefinal-input-desktop14"
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="perfil-clientefinal-input-desktop31">
                <span className="perfil-clientefinal-text11">
                  Editar Contraseña
                </span>
              </div>
            </div>
            <button className="perfil-clientefinal-c-t-a-desktop1">
              <span className="perfil-clientefinal-text12 Semibold·16·20">
                <span>Aceptar</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUser;
