import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import { createOperator, getBranch } from "../store";
import Swal from "sweetalert2";

const CreateOperator = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.branch);
  const { user } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.users);

  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [repetedPassword, setRepetedPassword] = useState("");
  const [email, setEmail] = useState("");
  const [idBranch, setIdBranch] = useState("");
  const [dni, setDni] = useState("");
  const [id, setId] = useState("");
  const [nameBranch, setNameBranch] = useState("");

  useEffect(() => {
    dispatch(getBranch());
    setId(user.id);
  }, [dispatch]);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRepetedPasswordChange = (e) => {
    setRepetedPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleDniChange = (e) => {
    setDni(e.target.value);
  };
  const handleIdBranchChange = (e) => {
    const prueba = e.target.value.split(",");
    setIdBranch(prueba[0]);
    setNameBranch(prueba[1]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      password === repetedPassword &&
      id &&
      fullName &&
      email &&
      idBranch &&
      nameBranch &&
      dni
    ) {
      dispatch(
        createOperator({
          id,
          fullName,
          password,
          email,
          idBranch,
          nameBranch,
          dni,
        })
      );
      Swal.fire({
        title: "Exito",
        text: "Operador Creado con Exito",
        icon: "success",
        allowOutsideClick: false,
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Complete los datos con las caracteristicas requeridas",
        icon: "error",
        allowOutsideClick: false,
      });
    }
  };

  /* if (error) {
    return Swal.fire({
      title: "Error",
      text: "Ocurrio un error en la creacion del operador",
      icon: "error",
      allowOutsideClick: false,
    });
  } */

  return (
    <div>
      <div className="administrador-creacindeoperadores-administrador-creacindeoperadores">
        <NavBar />
        <form onSubmit={handleSubmit}>
          <div className="administrador-creacindeoperadores-formulario">
            <span className="administrador-creacindeoperadores-text SemiBold·20·24">
              <span>Creación de operadores</span>
            </span>
            <div className="administrador-creacindeoperadores-input-desktop2">
              <div className="administrador-creacindeoperadores-txt">
                <span className="administrador-creacindeoperadores-text02 Regular·14·20">
                  <span>Nombre</span>
                </span>
              </div>
              <input
                type="text"
                className="administrador-creacindeoperadores-input-desktop1"
                onChange={handleFullNameChange}
                value={fullName}
              />
            </div>
            <div className="administrador-creacindeoperadores-input-desktop21">
              <div className="administrador-creacindeoperadores-txt1">
                <span className="administrador-creacindeoperadores-text04 Regular·14·20">
                  <span>Correo electrónico</span>
                </span>
              </div>
              <input
                type="email"
                className="administrador-creacindeoperadores-input-desktop11"
                onChange={handleEmailChange}
                value={email}
              />
            </div>
            <div className="administrador-creacindeoperadores-fila">
              <div className="administrador-creacindeoperadores-input-desktop22">
                <div className="administrador-creacindeoperadores-txt2">
                  <span className="administrador-creacindeoperadores-text06 Regular·14·20">
                    <span>DNI</span>
                  </span>
                </div>
                <input
                  type="text"
                  className="administrador-creacindeoperadores-input-desktop12"
                  onChange={handleDniChange}
                  value={dni}
                />
              </div>
              <div className="administrador-creacindeoperadores-input-desktop3">
                <div className="administrador-creacindeoperadores-txt3">
                  <span className="administrador-creacindeoperadores-text08 Regular·14·20">
                    <span>Sucursal</span>
                  </span>
                </div>
                <div className="administrador-creacindeoperadores-input-desktop13">
                  <select
                    onChange={handleIdBranchChange}
                    className="administrador-creacindeoperadores-text10 Regular·14·20"
                  >
                    <option value={0} key={0}>
                      Seleccione una Sucursal..
                    </option>
                    {data.map((sucursal) => {
                      return (
                        <option
                          value={[sucursal._id, sucursal.name]}
                          key={sucursal.name}
                        >
                          {sucursal.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="administrador-creacindeoperadores-horario">
              <div className="administrador-creacindeoperadores-input-desktop23">
                <div className="administrador-creacindeoperadores-txt4">
                  <span className="administrador-creacindeoperadores-text12 Regular·14·20">
                    <span>Contraseña</span>
                  </span>
                </div>
                <input
                  type="password"
                  className="administrador-creacindeoperadores-input-desktop14"
                  onChange={handlePasswordChange}
                  value={password}
                />
              </div>
              <div className="administrador-creacindeoperadores-input-desktop31">
                <div className="administrador-creacindeoperadores-txt5">
                  <span className="administrador-creacindeoperadores-text14 Regular·14·20">
                    <span>Repetir contraseña</span>
                  </span>
                </div>
                <input
                  type="password"
                  className="administrador-creacindeoperadores-input-desktop15"
                  onChange={handleRepetedPasswordChange}
                  value={repetedPassword}
                />
              </div>
            </div>
            <button className="administrador-creacindeoperadores-c-t-a-desktop1">
              <span className="administrador-creacindeoperadores-text16 Semibold·16·20">
                <span>Enviar</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOperator;
