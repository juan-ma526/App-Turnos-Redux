import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import DropdownOperator from "../components/DropdownOperator";
import NavBar from "../components/NavBar";
import { assistShift, cancelShift, getAllShiftByUser } from "../store";

const ShiftOperatorView = () => {
  const dispatch = useDispatch();
  const { allDataShift } = useSelector((state) => {
    return state.shift;
  });

  useEffect(() => {
    dispatch(getAllShiftByUser());
  }, []);

  const handleClickCancel = (e) => {
    dispatch(cancelShift({ idShift: e }));
    Swal.fire({
      title: "Exito",
      text: "Turno Cancelado",
      icon: "success",
      allowOutsideClick: false,
    });
  };
  const handleClickConfirm = (e) => {
    dispatch(assistShift({ idShift: e }));
    Swal.fire({
      title: "Exito",
      text: "Turno Confirmado",
      icon: "success",
      allowOutsideClick: false,
    });
  };
  const renderedShift = allDataShift.map((shift, index) => {
    return (
      <div
        key={index}
        className="operador-visualizacindereservas-pedido-mi-cuenta"
      >
        <div className="operador-visualizacindereservas-info">
          <span className="operador-visualizacindereservas-text Regular·12·16">
            <span>Nombre</span>
          </span>
          <span className="operador-visualizacindereservas-text002 Semibold·14·16">
            <span>{shift.infoUser.name}</span>
          </span>
        </div>
        <div className="operador-visualizacindereservas-info01">
          <span className="operador-visualizacindereservas-text004 Regular·12·16">
            <span>Reserva</span>
          </span>
          <span className="operador-visualizacindereservas-text006 Semibold·14·16">
            <span>{shift.dateBooking}</span>
          </span>
        </div>
        <div className="operador-visualizacindereservas-info02">
          <span className="operador-visualizacindereservas-text008 Regular·12·16">
            <span>Día de la reserva</span>
          </span>
          <span className="operador-visualizacindereservas-text010 Semibold·14·16">
            <span>{shift.dateShift}</span>
          </span>
        </div>
        <div className="operador-visualizacindereservas-info03">
          <span className="operador-visualizacindereservas-text012 Regular·12·16">
            <span>N° de la reserva</span>
          </span>
          <span className="operador-visualizacindereservas-text014 Semibold·14·16">
            <span>{shift._id}</span>
          </span>
        </div>
        <button
          onClick={() => handleClickConfirm(shift._id)}
          className="clientefinal-reservadelcliente-c-t-a-desktop44"
        >
          <span className="clientefinal-reservadelcliente-text088">
            Confirmar
          </span>
        </button>

        <button
          onClick={() => handleClickCancel(shift._id)}
          className="clientefinal-reservadelcliente-c-t-a-desktop44"
        >
          <span className="clientefinal-reservadelcliente-text088">
            Cancelar
          </span>
        </button>
      </div>
    );
  });
  return (
    <div>
      <div className="operador-visualizacindereservas-operador-visualizacindereservas">
        <NavBar />
        <div className="operador-visualizacindereservas-reservas">
          {renderedShift}
        </div>
        <span className="operador-visualizacindereservas-text126 SemiBold·20·24">
          <span>Reservas</span>
        </span>
      </div>
    </div>
  );
};

export default ShiftOperatorView;
