import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/slices/authSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rol, setRole] = useState("");
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const role = user?.role;

    if (role) {
      setRole(role);
    }
  }, [user]);

  const handleLogout = async (e) => {
    dispatch(logout());
    navigate("/register");
  };

  const renderedUser = (
    <div className="header-header">
      <div className="header-c-t-a-desktop2">
        <span className="header-text">
          <span>Reservar</span>
        </span>
      </div>
      <div className="header-men">
        <div className="header-c-t-a-desktop3">
          <span className="header-text2">
            <Link to="/shiftUser">
              <span>Mis reservas</span>
            </Link>
          </span>
          <svg
            className="header-user-interface"
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.625 0.5C4.27982 0.5 4 0.779822 4 1.125H1.5C1.15482 1.125 0.875 1.40482 0.875 1.75V4.25V4.875V14.25C0.875 14.5952 1.15482 14.875 1.5 14.875H16.5C16.8452 14.875 17.125 14.5952 17.125 14.25V4.25V3.625V1.75C17.125 1.40482 16.8452 1.125 16.5 1.125H14C14 0.779822 13.7202 0.5 13.375 0.5C13.0298 0.5 12.75 0.779822 12.75 1.125H5.25C5.25 0.779822 4.97018 0.5 4.625 0.5ZM2.125 2.375H4C4 2.72018 4.27982 3 4.625 3C4.97018 3 5.25 2.72018 5.25 2.375H12.75C12.75 2.72018 13.0298 3 13.375 3C13.7202 3 14 2.72018 14 2.375H15.875V3.625H2.125V2.375ZM2.125 4.875H15.875V13.625H2.125V4.875ZM10.25 6.75C9.90482 6.75 9.625 7.02982 9.625 7.375V11.125C9.625 11.4702 9.90482 11.75 10.25 11.75H14C14.3452 11.75 14.625 11.4702 14.625 11.125V7.375C14.625 7.02982 14.3452 6.75 14 6.75H10.25ZM4.3 7.375C4.13431 7.375 4 7.50931 4 7.675V8.325C4 8.49069 4.13431 8.625 4.3 8.625H4.95C5.11569 8.625 5.25 8.49069 5.25 8.325V7.675C5.25 7.50931 5.11569 7.375 4.95 7.375H4.3ZM6.8 7.375C6.63431 7.375 6.5 7.50931 6.5 7.675V8.325C6.5 8.49069 6.63431 8.625 6.8 8.625H7.45C7.61569 8.625 7.75 8.49069 7.75 8.325V7.675C7.75 7.50931 7.61569 7.375 7.45 7.375H6.8ZM10.875 8H13.375V10.5H10.875V8ZM4.3 9.875C4.13431 9.875 4 10.0093 4 10.175V10.825C4 10.9907 4.13431 11.125 4.3 11.125H4.95C5.11569 11.125 5.25 10.9907 5.25 10.825V10.175C5.25 10.0093 5.11569 9.875 4.95 9.875H4.3ZM6.8 9.875C6.63431 9.875 6.5 10.0093 6.5 10.175V10.825C6.5 10.9907 6.63431 11.125 6.8 11.125H7.45C7.61569 11.125 7.75 10.9907 7.75 10.825V10.175C7.75 10.0093 7.61569 9.875 7.45 9.875H6.8Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="header-c-t-a-desktop31 my-account">
          <span className="header-text4">
            <Link to="/profileUser">
              <span>Mi Cuenta</span>
            </Link>
          </span>
          <svg
            className="header-user-interface1"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00004 0.5C4.43061 0.5 2.33337 2.6449 2.33337 5.27273C2.33337 6.90436 3.14696 8.35305 4.37504 9.21449C2.18021 10.1694 0.601763 12.2999 0.364398 14.834C0.330061 15.2006 0.631851 15.5 1.00004 15.5C1.36823 15.5 1.66257 15.2001 1.70478 14.8344C2.01912 12.1108 4.24285 10.0455 7.00004 10.0455C9.75723 10.0455 11.981 12.1108 12.2953 14.8344C12.3375 15.2001 12.6319 15.5 13 15.5C13.3682 15.5 13.67 15.2006 13.6357 14.834C13.3983 12.2999 11.8199 10.1694 9.62504 9.21449C10.8531 8.35305 11.6667 6.90436 11.6667 5.27273C11.6667 2.6449 9.56947 0.5 7.00004 0.5ZM7.00004 1.86364C8.84889 1.86364 10.3334 3.38186 10.3334 5.27273C10.3334 7.16359 8.84889 8.68182 7.00004 8.68182C5.1512 8.68182 3.66671 7.16359 3.66671 5.27273C3.66671 3.38186 5.1512 1.86364 7.00004 1.86364Z"
              fill="black"
            />
          </svg>
          <div className="navbar_menu">
            <div>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderedOperator = (
    <div className="header-header">
      <div className="header-men">
        <div className="header-c-t-a-desktop3">
          <span className="header-text">
            <span>Reservas</span>
          </span>
          <svg
            className="header-user-interface"
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.625 0.5C4.27982 0.5 4 0.779822 4 1.125H1.5C1.15482 1.125 0.875 1.40482 0.875 1.75V4.25V4.875V14.25C0.875 14.5952 1.15482 14.875 1.5 14.875H16.5C16.8452 14.875 17.125 14.5952 17.125 14.25V4.25V3.625V1.75C17.125 1.40482 16.8452 1.125 16.5 1.125H14C14 0.779822 13.7202 0.5 13.375 0.5C13.0298 0.5 12.75 0.779822 12.75 1.125H5.25C5.25 0.779822 4.97018 0.5 4.625 0.5ZM2.125 2.375H4C4 2.72018 4.27982 3 4.625 3C4.97018 3 5.25 2.72018 5.25 2.375H12.75C12.75 2.72018 13.0298 3 13.375 3C13.7202 3 14 2.72018 14 2.375H15.875V3.625H2.125V2.375ZM2.125 4.875H15.875V13.625H2.125V4.875ZM10.25 6.75C9.90482 6.75 9.625 7.02982 9.625 7.375V11.125C9.625 11.4702 9.90482 11.75 10.25 11.75H14C14.3452 11.75 14.625 11.4702 14.625 11.125V7.375C14.625 7.02982 14.3452 6.75 14 6.75H10.25ZM4.3 7.375C4.13431 7.375 4 7.50931 4 7.675V8.325C4 8.49069 4.13431 8.625 4.3 8.625H4.95C5.11569 8.625 5.25 8.49069 5.25 8.325V7.675C5.25 7.50931 5.11569 7.375 4.95 7.375H4.3ZM6.8 7.375C6.63431 7.375 6.5 7.50931 6.5 7.675V8.325C6.5 8.49069 6.63431 8.625 6.8 8.625H7.45C7.61569 8.625 7.75 8.49069 7.75 8.325V7.675C7.75 7.50931 7.61569 7.375 7.45 7.375H6.8ZM10.875 8H13.375V10.5H10.875V8ZM4.3 9.875C4.13431 9.875 4 10.0093 4 10.175V10.825C4 10.9907 4.13431 11.125 4.3 11.125H4.95C5.11569 11.125 5.25 10.9907 5.25 10.825V10.175C5.25 10.0093 5.11569 9.875 4.95 9.875H4.3ZM6.8 9.875C6.63431 9.875 6.5 10.0093 6.5 10.175V10.825C6.5 10.9907 6.63431 11.125 6.8 11.125H7.45C7.61569 11.125 7.75 10.9907 7.75 10.825V10.175C7.75 10.0093 7.61569 9.875 7.45 9.875H6.8Z"
              fill="#A442F1"
            />
          </svg>
        </div>
        <div className="header-c-t-a-desktop31 my-account">
          <span className="header-text2">
            <span>Mi Cuenta</span>
          </span>
          <svg
            className="header-user-interface1"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99992 0.5C4.43049 0.5 2.33325 2.6449 2.33325 5.27273C2.33325 6.90436 3.14684 8.35305 4.37492 9.21449C2.18009 10.1694 0.60164 12.2999 0.364276 14.834C0.329939 15.2006 0.631729 15.5 0.999919 15.5C1.36811 15.5 1.66245 15.2001 1.70466 14.8344C2.019 12.1108 4.24273 10.0455 6.99992 10.0455C9.7571 10.0455 11.9808 12.1108 12.2952 14.8344C12.3374 15.2001 12.6317 15.5 12.9999 15.5C13.3681 15.5 13.6699 15.2006 13.6356 14.834C13.3982 12.2999 11.8197 10.1694 9.62492 9.21449C10.853 8.35305 11.6666 6.90436 11.6666 5.27273C11.6666 2.6449 9.56935 0.5 6.99992 0.5ZM6.99992 1.86364C8.84876 1.86364 10.3333 3.38186 10.3333 5.27273C10.3333 7.16359 8.84876 8.68182 6.99992 8.68182C5.15107 8.68182 3.66658 7.16359 3.66658 5.27273C3.66658 3.38186 5.15107 1.86364 6.99992 1.86364Z"
              fill="black"
            />
          </svg>
          <div className="navbar_menu">
            <div>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const renderedAdmin = (
    <div className="header-header">
      <div className="header-c-t-a-desktop2">
        <span className="header-text">
          <span>Crear sucursal</span>
        </span>
      </div>
      <div className="header-c-t-a-desktop21">
        <span className="header-text02">
          <span>Crear Operador</span>
        </span>
      </div>
      <div className="header-men">
        <div className="header-c-t-a-desktop3">
          <span className="header-text04">
            <span>Sucursales</span>
          </span>
          <svg
            className="header-location"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.125 0.5C2.77982 0.5 2.5 0.779822 2.5 1.125V2.78516L0.742188 5.12891L0.625 5.28516V5.5C0.625 6.52841 1.47159 7.375 2.5 7.375V14.875C2.5 15.2202 2.77982 15.5 3.125 15.5H11.875C12.2202 15.5 12.5 15.2202 12.5 14.875V9.875H13.75V14.875C13.75 15.2202 14.0298 15.5 14.375 15.5H16.875C17.2202 15.5 17.5 15.2202 17.5 14.875V7.375C18.5284 7.375 19.375 6.52841 19.375 5.5V5.28516L19.2578 5.12891L17.5 2.78516V1.125C17.5 0.779822 17.2202 0.5 16.875 0.5H3.125ZM3.75 1.75H16.25V2.375H3.75V1.75ZM3.4375 3.625H16.5625L18.0664 5.63672C17.998 5.9079 17.7932 6.125 17.5 6.125C17.3299 6.125 17.1762 6.05793 17.0638 5.94865C16.8658 5.75616 16.6511 5.5 16.375 5.5H16.125C15.8489 5.5 15.6342 5.75616 15.4362 5.94865C15.3238 6.05793 15.1701 6.125 15 6.125C14.8299 6.125 14.6762 6.05793 14.5638 5.94865C14.3658 5.75616 14.1511 5.5 13.875 5.5H13.625C13.3489 5.5 13.1342 5.75616 12.9362 5.94865C12.8238 6.05793 12.6701 6.125 12.5 6.125C12.3299 6.125 12.1762 6.05793 12.0638 5.94865C11.8658 5.75616 11.6511 5.5 11.375 5.5H11.125C10.8489 5.5 10.6342 5.75616 10.4362 5.94865C10.3238 6.05793 10.1701 6.125 10 6.125C9.82989 6.125 9.6762 6.05793 9.56379 5.94865C9.3658 5.75616 9.15114 5.5 8.875 5.5H8.625C8.34886 5.5 8.1342 5.75616 7.93621 5.94865C7.8238 6.05793 7.67011 6.125 7.5 6.125C7.32989 6.125 7.1762 6.05793 7.06379 5.94865C6.8658 5.75616 6.65114 5.5 6.375 5.5H6.125C5.84886 5.5 5.6342 5.75616 5.43621 5.94865C5.3238 6.05793 5.17011 6.125 5 6.125C4.82989 6.125 4.6762 6.05793 4.56379 5.94865C4.3658 5.75616 4.15114 5.5 3.875 5.5H3.625C3.34886 5.5 3.1342 5.75616 2.93621 5.94865C2.8238 6.05793 2.67011 6.125 2.5 6.125C2.20682 6.125 2.00195 5.9079 1.93359 5.63672L3.4375 3.625ZM3.75 6.88672C4.08305 7.18733 4.52058 7.375 5 7.375C5.31905 7.375 5.61954 7.29189 5.88304 7.14769C6.10794 7.0246 6.39206 7.0246 6.61696 7.14769C6.88046 7.29189 7.18095 7.375 7.5 7.375C7.81905 7.375 8.11954 7.29189 8.38304 7.14769C8.60794 7.0246 8.89206 7.0246 9.11696 7.14769C9.38046 7.29189 9.68095 7.375 10 7.375C10.319 7.375 10.6195 7.29189 10.883 7.14769C11.1079 7.0246 11.3921 7.0246 11.617 7.14769C11.8805 7.29189 12.181 7.375 12.5 7.375C12.819 7.375 13.1195 7.29189 13.383 7.14769C13.6079 7.0246 13.8921 7.0246 14.117 7.14769C14.3805 7.29189 14.681 7.375 15 7.375C15.4794 7.375 15.917 7.18733 16.25 6.88672V14.25H15V9.25C15 8.90482 14.7202 8.625 14.375 8.625H11.875C11.5298 8.625 11.25 8.90482 11.25 9.25V14.25H3.75V6.88672ZM5.625 8.625C5.27982 8.625 5 8.90482 5 9.25V12.375C5 12.7202 5.27982 13 5.625 13H9.375C9.72018 13 10 12.7202 10 12.375V9.25C10 8.90482 9.72018 8.625 9.375 8.625H5.625ZM6.25 9.875H8.75V11.75H6.25V9.875Z"
              fill="#A442F1"
            />
          </svg>
        </div>
        <div className="header-c-t-a-desktop31">
          <span className="header-text06">
            <span>Operadores</span>
          </span>
          <svg
            className="header-communication"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0.875C4.22159 0.875 1.125 3.97159 1.125 7.75V8.70703C0.746943 9.113 0.5 9.64414 0.5 10.25C0.5 11.2466 1.14239 12.0047 1.98438 12.418C2.69379 15.0844 5.09629 17.125 8 17.125C10.0449 17.125 11.8522 16.168 12.9805 14.625H13C14.2085 14.625 15.2084 13.7722 15.4414 12.6328C15.5645 12.5762 15.6766 12.4952 15.7734 12.3984C16.0091 12.1628 16.125 11.8264 16.125 11.5V8.375C16.125 8.04861 16.0091 7.71221 15.7734 7.47656C15.5378 7.24092 15.2014 7.125 14.875 7.125H14.8359C14.5179 3.6352 11.5684 0.875 8 0.875ZM8 2.125C10.729 2.125 13.0031 4.09006 13.5078 6.67578C13.3943 6.63289 13.281 6.60327 13.1758 6.57812C12.7319 6.47209 12.3021 6.44271 11.9062 6.34375C11.5104 6.24479 11.1916 6.10253 10.9492 5.79688C10.7068 5.49122 10.5 4.97059 10.5 4H9.25C9.25 5.23295 8.89694 5.7287 8.37109 6.05078C7.84525 6.37286 7.01087 6.48114 6.10547 6.5C5.20007 6.51886 4.26766 6.44843 3.42969 6.61719C3.07608 6.6884 2.71477 6.80036 2.41406 7.02734C2.77313 4.27195 5.14991 2.125 8 2.125ZM9.83594 6.36328C9.88166 6.43347 9.92206 6.51431 9.97266 6.57812C10.4334 7.15919 11.0521 7.41927 11.5938 7.55469C12.1354 7.6901 12.6431 7.72713 12.9023 7.78906C12.984 7.80858 12.9801 7.81653 13 7.82812V12.125V12.75H13.625H14.0938C13.8924 13.1343 13.5063 13.375 13 13.375H9.19141C9.06401 13.0085 8.7224 12.75 8.3125 12.75C7.79473 12.75 7.375 13.1697 7.375 13.6875C7.375 14.2053 7.79473 14.625 8.3125 14.625H11.3203C10.4512 15.4107 9.29196 15.875 8 15.875C5.61289 15.875 3.61652 14.1489 3.11719 11.9297L3.03906 11.5781L2.6875 11.4609C2.10533 11.2818 1.75 10.8571 1.75 10.25C1.75 9.72596 2.16843 9.19661 2.53125 9.09766L3 8.98047V8.49219C3 8.2163 3.05584 8.14189 3.13672 8.0625C3.2176 7.98311 3.37992 7.90488 3.66406 7.84766C4.23234 7.73321 5.17493 7.7702 6.14453 7.75C7.11413 7.7298 8.15475 7.64472 9.03516 7.10547C9.33864 6.91959 9.61461 6.66862 9.83594 6.36328ZM14.25 8.375H14.875V11.5H14.25V8.375ZM5.8125 9C5.29473 9 4.875 9.41973 4.875 9.9375C4.875 10.4553 5.29473 10.875 5.8125 10.875C6.33027 10.875 6.75 10.4553 6.75 9.9375C6.75 9.41973 6.33027 9 5.8125 9ZM10.1875 9C9.66973 9 9.25 9.41973 9.25 9.9375C9.25 10.4553 9.66973 10.875 10.1875 10.875C10.7053 10.875 11.125 10.4553 11.125 9.9375C11.125 9.41973 10.7053 9 10.1875 9Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="header-c-t-a-desktop32">
          <span className="header-text08">
            <span>Reportes</span>
          </span>
          <svg
            className="header-files"
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.375 0.875C1.02982 0.875 0.75 1.15482 0.75 1.5V16.5C0.75 16.8452 1.02982 17.125 1.375 17.125H12.625C12.9702 17.125 13.25 16.8452 13.25 16.5V5.25C13.25 5.08654 13.1895 4.92887 13.0801 4.80737L13.0742 4.80078L9.32422 1.05078L9.31763 1.04485C9.19613 0.935505 9.03846 0.875 8.875 0.875H1.375ZM2 2.125H8.25V5.25C8.25 5.59518 8.52982 5.875 8.875 5.875H12V15.875H2V2.125ZM9.5 3.02344L11.1016 4.625H9.5V3.02344ZM4.5 7.125C4.15482 7.125 3.875 7.40482 3.875 7.75C3.875 8.09518 4.15482 8.375 4.5 8.375H9.5C9.84518 8.375 10.125 8.09518 10.125 7.75C10.125 7.40482 9.84518 7.125 9.5 7.125H4.5ZM4.5 9.625C4.15482 9.625 3.875 9.90482 3.875 10.25C3.875 10.5952 4.15482 10.875 4.5 10.875H9.5C9.84518 10.875 10.125 10.5952 10.125 10.25C10.125 9.90482 9.84518 9.625 9.5 9.625H4.5ZM4.5 12.125C4.15482 12.125 3.875 12.4048 3.875 12.75C3.875 13.0952 4.15482 13.375 4.5 13.375H9.5C9.84518 13.375 10.125 13.0952 10.125 12.75C10.125 12.4048 9.84518 12.125 9.5 12.125H4.5Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="header-c-t-a-desktop33 my-account">
          <span className="header-text10">
            <span>Mi Cuenta</span>
          </span>
          <svg
            className="header-user-interface"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99992 0.5C4.43049 0.5 2.33325 2.6449 2.33325 5.27273C2.33325 6.90436 3.14684 8.35305 4.37492 9.21449C2.18009 10.1694 0.60164 12.2999 0.364276 14.834C0.329939 15.2006 0.631729 15.5 0.999919 15.5C1.36811 15.5 1.66245 15.2001 1.70466 14.8344C2.019 12.1108 4.24273 10.0455 6.99992 10.0455C9.7571 10.0455 11.9808 12.1108 12.2952 14.8344C12.3374 15.2001 12.6317 15.5 12.9999 15.5C13.3681 15.5 13.6699 15.2006 13.6356 14.834C13.3982 12.2999 11.8197 10.1694 9.62492 9.21449C10.853 8.35305 11.6666 6.90436 11.6666 5.27273C11.6666 2.6449 9.56935 0.5 6.99992 0.5ZM6.99992 1.86364C8.84876 1.86364 10.3333 3.38186 10.3333 5.27273C10.3333 7.16359 8.84876 8.68182 6.99992 8.68182C5.15107 8.68182 3.66658 7.16359 3.66658 5.27273C3.66658 3.38186 5.15107 1.86364 6.99992 1.86364Z"
              fill="black"
            />
          </svg>
          <div className="navbar_menu">
            <div>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return rol === "client"
    ? renderedUser
    : rol === "administrator"
    ? renderedAdmin
    : rol === "operator"
    ? renderedOperator
    : "";
};

export default NavBar;
