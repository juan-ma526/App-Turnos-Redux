import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../store";
import Swal from "sweetalert2";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((state) => {
    return state.auth;
  });

  useEffect(() => {
    const role = user?.role;

    if (role) {
      Swal.fire({
        title: "Exito",
        text: "Iniciaste Sesion",
        icon: "success",
        allowOutsideClick: false,
        timer: 1000,
      });
      if (role === "administrator") {
        navigate("/branchList");
      } else if (role === "operator") {
        navigate("/shiftOperatorView");
      } else {
        navigate("/panelShift");
      }
    }
  }, [user]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    if (user === undefined || user === null) {
      Swal.fire({
        title: "Error",
        text: "Error de email o contraseña",
        icon: "error",
        allowOutsideClick: false,
        timer: 1000,
      });
    }
  };

  return (
    <div>
      <div className="clientefinal-login-clientefinal-login">
        <form onSubmit={handleSubmit}>
          <div className="clientefinal-login-login-mail">
            <div className="clientefinal-login-head">
              <span className="clientefinal-login-text">
                <span>Iniciar sesión</span>
              </span>
            </div>
            <div className="clientefinal-login-inputs">
              <div className="clientefinal-login-input-desktop2">
                <div className="clientefinal-login-txt">
                  <span className="clientefinal-login-text02 Regular·14·20">
                    <span>Usuario</span>
                  </span>
                </div>
                <input
                  type="text"
                  className="clientefinal-login-input-desktop1"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="clientefinal-login-input-desktop21">
                <div className="clientefinal-login-txt1">
                  <span className="clientefinal-login-text04 Regular·14·20">
                    <span>Contraseña</span>
                  </span>
                </div>
                <input
                  className="clientefinal-login-input-desktop11"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="clientefinal-login-c-t-a-desktop3">
                <span className="clientefinal-login-text07 Semibold·14·16">
                  <span>¿Olvidaste tu contraseña?</span>
                </span>
              </div>
            </div>
            <button className="clientefinal-login-c-t-a-desktop1">
              <span className="clientefinal-login-text09 Semibold·16·20">
                <span>Ingresar</span>
              </span>
            </button>
            <svg
              className="clientefinal-login-border"
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

            <div className="clientefinal-login-c-t-a-desktop2">
              <span className="clientefinal-login-text11 Semibold·16·20">
                <Link className="link" to="/register">
                  <span>¿No tenés cuenta? Registrate</span>
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
