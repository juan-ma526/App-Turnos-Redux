import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { getAllShiftByUser } from "../store";

const ShiftUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => {
    return state.auth;
  });
  const [idUser, setIdUser] = useState(user.id);

  const { allDataShift } = useSelector((state) => {
    return state.shift;
  });

  useEffect(() => {
    dispatch(getAllShiftByUser());
  }, []);

  const shiftsUser = allDataShift.filter((shift) => shift.idUser === idUser);

  const renderedShiftUser = shiftsUser.map((shift, index) => {
    return (
      <div
        key={index}
        className="clientefinal-reservadelcliente-pedido-mi-cuenta"
      >
        <div className="clientefinal-reservadelcliente-info">
          <span className="clientefinal-reservadelcliente-text">
            <span>Nombre y Apellido</span>
          </span>
          <span className="clientefinal-reservadelcliente-text002">
            <span>{shift.infoUser.name}</span>
          </span>
        </div>
        <div className="clientefinal-reservadelcliente-info01">
          <span className="clientefinal-reservadelcliente-text004">
            <span>Reserva</span>
          </span>
          <span className="clientefinal-reservadelcliente-text006">
            <span>{shift.dateBooking}</span>
          </span>
        </div>
        <div className="clientefinal-reservadelcliente-info02">
          <span className="clientefinal-reservadelcliente-text008">
            <span>Sucursal</span>
          </span>
          <span className="clientefinal-reservadelcliente-text010">
            <span>Villa Crespo</span>
          </span>
        </div>
        <div className="clientefinal-reservadelcliente-info03">
          <span className="clientefinal-reservadelcliente-text012">
            <span>N° de la reserva</span>
          </span>
          <span className="clientefinal-reservadelcliente-text014">
            <span>{index}</span>
          </span>
        </div>
        <button className="clientefinal-reservadelcliente-c-t-a-desktop44">
          <span className="clientefinal-reservadelcliente-text088">Editar</span>
        </button>
        <Link
          className="link-cancel-button"
          to="/cancelledShift"
          state={{ id: shift._id }}
        >
          <button className="clientefinal-reservadelcliente-c-t-a-desktop44">
            <span className="clientefinal-reservadelcliente-text088">
              Cancelar
            </span>
          </button>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <div className="clientefinal-reservadelcliente-clientefinal-reservadelcliente">
        <NavBar />
        <div className="clientefinal-reservadelcliente-reservas">
          {renderedShiftUser}
        </div>
        <span className="clientefinal-reservadelcliente-text126">
          <span>Reservas</span>
        </span>
      </div>
    </div>
  );
};

export default ShiftUser;
