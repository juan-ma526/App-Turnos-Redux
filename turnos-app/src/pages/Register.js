import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PwdRequisites from "../components/PwdRequisites";
import { registerUser } from "../store";
import Swal from "sweetalert2";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [dni, setDni] = useState("");
  const [pwdRequisite, setPwdRequisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    letterToLowerCase: false,
    empty: true,
  });

  const { created } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    if (created) {
      setFullName("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
      setDni("");
      setPwdRequisite("");
      setChecks({
        capsLetterCheck: false,
        numberCheck: false,
        pwdLengthCheck: false,
        letterToLowerCase: false,
        empty: true,
      });
    }
  }, [created]);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleDniChange = (e) => {
    setDni(e.target.value);
  };

  const handleOnFocus = (e) => {
    setPwdRequisite(true);
  };

  const handleOnBlur = () => {
    setPwdRequisite(false);
  };

  const handleOnKeyUp = (e) => {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const letterToLowerCase = /[a-z]/.test(value);
    const empty = !value;

    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      letterToLowerCase,
      empty,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      checks.capsLetterCheck &&
      checks.numberCheck &&
      checks.pwdLengthCheck &&
      checks.letterToLowerCase &&
      password === repeatPassword
    ) {
      dispatch(registerUser({ fullName, email, password, dni }));
      Swal.fire({
        title: "Exito",
        text: "Registro Exitoso",
        icon: "success",
        allowOutsideClick: false,
        timer: 1000,
      });
      navigate("/");
    } else {
      Swal.fire({
        title: "Error",
        text: "Complete los datos con las caracteristicas requeridas",
        icon: "error",
        allowOutsideClick: false,
        timer: 1000,
      });
    }
  };

  return (
    <div>
      <div className="clientefinal-registro-clientefinal-registro">
        <div className="clientefinal-registro-login-mail">
          <div className="clientefinal-registro-head">
            <div className="clientefinal-registro-c-t-a-desktop3">
              <div className="clientefinal-registro-user-interface">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5875 16.4209C10.912 16.0964 10.912 15.5703 10.5875 15.2459L6.17503 10.8334H16.6667C17.1269 10.8334 17.5 10.4603 17.5 10V10C17.5 9.53979 17.1269 9.1667 16.6667 9.1667H6.17503L10.5875 4.7542C10.912 4.42973 10.912 3.90367 10.5875 3.5792V3.5792C10.2631 3.25473 9.737 3.25473 9.41253 3.5792L3.69881 9.29293C3.30828 9.68345 3.30828 10.3166 3.69881 10.7071L9.41253 16.4209C9.737 16.7453 10.2631 16.7453 10.5875 16.4209V16.4209Z"
                    fill="#A442F1"
                  />
                </svg>
              </div>
              <span className="clientefinal-registro-text ">
                <Link className="link" to="/">
                  <span>Atrás</span>
                </Link>
              </span>
            </div>
            <span className="clientefinal-registro-text02">
              <span>Crear cuenta</span>
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="clientefinal-registro-inputs">
              <div className="clientefinal-registro-fila">
                <div className="clientefinal-registro-input-desktop2">
                  <div className="clientefinal-registro-txt">
                    <span className="clientefinal-registro-text04 ">
                      <span>Nombre y Apellido</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="clientefinal-registro-input-desktop11"
                    onChange={handleFullNameChange}
                    value={fullName}
                  />
                </div>
                <div className="clientefinal-registro-input-desktop21">
                  <div className="clientefinal-registro-txt1">
                    <span className="clientefinal-registro-text06 ">
                      <span>DNI</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="clientefinal-registro-input-desktop11"
                    onChange={handleDniChange}
                    value={dni}
                  />
                </div>
              </div>
              <div className="clientefinal-registro-input-desktop22">
                <div className="clientefinal-registro-txt2">
                  <span className="clientefinal-registro-text08 ">
                    <span>Mail</span>
                  </span>
                </div>
                <input
                  type="email"
                  className="clientefinal-registro-input-desktop12"
                  onChange={handleEmailChange}
                  value={email}
                />
              </div>
              <div className="clientefinal-registro-fila1">
                <div className="clientefinal-registro-input-desktop23">
                  <div className="clientefinal-registro-txt3">
                    <span className="clientefinal-registro-text10 ">
                      <span>Contraseña</span>
                    </span>
                  </div>
                  <input
                    className="clientefinal-registro-input-desktop13"
                    type="password"
                    onChange={handlePasswordChange}
                    value={password}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    onKeyUp={handleOnKeyUp}
                  />
                </div>
                <div className="clientefinal-registro-input-desktop24">
                  <div className="clientefinal-registro-txt4">
                    <span className="clientefinal-registro-text13 ">
                      <span>Repetir Contraseña</span>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="clientefinal-registro-input-desktop14"
                    onChange={handleRepeatPasswordChange}
                    value={repeatPassword}
                  />
                </div>
              </div>
              <PwdRequisites
                neutral={checks.empty ? "gris" : ""}
                capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
                numberFlag={checks.numberCheck ? "valid" : "invalid"}
                pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
                specialCharFlag={checks.letterToLowerCase ? "valid" : "invalid"}
              />
            </div>

            <button className="clientefinal-registro-c-t-a-desktop1">
              <span className="clientefinal-registro-text36">
                <span>Registrarme</span>
              </span>
            </button>
          </form>
          <svg
            className="clientefinal-registro-border1"
            width="516"
            height="1"
            viewBox="0 0 516 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="0.5"
              x2="515.5"
              y2="0.5"
              stroke="#E1E1E1"
              strokeLinecap="round"
            />
          </svg>

          <div className="clientefinal-registro-c-t-a-desktop2">
            <span className="clientefinal-registro-text38 Semibold·16·20">
              <Link className="link" to="/">
                <span>¿Ya tenés cuenta? Iniciá sesión</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
