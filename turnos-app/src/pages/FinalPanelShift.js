import { FiCheck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../components/NavBar";
import { cancelShift } from "../store";

const FinalPanelShift = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dataShift } = useSelector((state) => {
    return state.shift;
  });

  const handleClickCancel = (e) => {
    dispatch(cancelShift({ idShift: dataShift._id }));
    Swal.fire({
      title: "Exito",
      text: "Turno Cancelado",
      icon: "success",
      allowOutsideClick: false,
    }).then(() => navigate("/profileUser"));
  };
  return (
    <div>
      <div className="clientefinal-paneldereservas-clientefinal-paneldereservas2">
        <NavBar />
        <div className="clientefinal-paneldereservas-mensaje5">
          <div className="clientefinal-paneldereservas-user-interface3">
            <FiCheck className="clientefinal-paneldereservas-union3" />
          </div>
          <span className="clientefinal-paneldereservas-text">
            <span>¡Gracias por tu reserva!</span>
          </span>
          <span className="clientefinal-paneldereservas-text02">
            <span>
              <span>
                En hasta 5 minutos, recibirás un correo electrónico en
                {" " + dataShift.infoUser.email} con todos los detalles de tu
                reservación.
              </span>
              <br></br>
              <span>
                Recordá revisar tu buzón de correo no deseado o promociones.
              </span>
            </span>
          </span>
          <div className="clientefinal-paneldereservas-c-t-a-desktop1">
            <span className="clientefinal-paneldereservas-text07">
              <span>¿Quéres imprimir tu comprobante?</span>
            </span>
          </div>
        </div>
        <div className="clientefinal-paneldereservas-pedido3">
          <svg
            className="clientefinal-paneldereservas-border12"
            width="1176"
            height="2"
            viewBox="0 0 1176 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1" x2="1176" y2="1" stroke="#F5F5F5" strokeWidth="2" />
          </svg>

          <div className="clientefinal-paneldereservas-content3">
            <div className="clientefinal-paneldereservas-pedido1">
              <span className="clientefinal-paneldereservas-text09">
                <span>Reserva</span>
                <span className="clientefinal-paneldereservas-text10">
                  {"#" + dataShift._id}
                </span>
              </span>
              <div className="clientefinal-paneldereservas-info">
                <span className="clientefinal-paneldereservas-text12">
                  <span>
                    Hecho el {dataShift.dateShift} para el{" "}
                    {dataShift.dateBooking}
                  </span>
                </span>
              </div>
            </div>
            <div className="clientefinal-paneldereservas-c-t-a">
              <button className="clientefinal-paneldereservas-c-t-a-desktop22">
                <svg
                  className="clientefinal-paneldereservas-user-interface111"
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6248 0.875C8.85608 0.875 6.62478 3.1063 6.62478 5.875C6.62478 6.02158 6.64791 6.22054 6.66384 6.40234L1.31228 11.7539C0.082104 12.9841 0.082104 14.9573 1.31228 16.1875C2.54246 17.4177 4.5157 17.4177 5.74588 16.1875L11.0974 10.8359C11.2792 10.8519 11.4782 10.875 11.6248 10.875C14.3935 10.875 16.6248 8.6437 16.6248 5.875C16.6248 5.02083 16.4048 4.22902 16.0388 3.57031C15.844 3.2099 15.352 3.14389 15.0623 3.43359L12.367 6.10938L11.3904 5.13281L14.0662 2.4375C14.3559 2.1478 14.2899 1.65576 13.9295 1.46094C13.2708 1.09499 12.4789 0.875 11.6248 0.875ZM11.6248 2.125C11.9285 2.125 12.1549 2.25535 12.4256 2.32031L10.0623 4.68359L10.0526 4.69325C9.81146 4.93442 9.81582 5.32675 10.0623 5.5625L11.9373 7.4375C12.173 7.68397 12.5654 7.68832 12.8065 7.44716L12.8162 7.4375L15.1795 5.07422C15.2444 5.34485 15.3748 5.57129 15.3748 5.875C15.3748 7.9813 13.7311 9.625 11.6248 9.625C11.3748 9.625 11.1742 9.62466 11.0193 9.58594L10.6873 9.48828L10.4334 9.74219L4.86697 15.3086C4.09715 16.0784 2.96101 16.0784 2.19119 15.3086L2.17166 15.2891C1.42191 14.5196 1.4281 13.3959 2.19119 12.6328L7.75759 7.06641L8.0115 6.8125L7.91384 6.48047C7.87512 6.32558 7.87478 6.125 7.87478 5.875C7.87478 3.7687 9.51848 2.125 11.6248 2.125Z"
                    fill="#A442F1"
                  />
                </svg>

                <span className="clientefinal-paneldereservas-text14">
                  <span>Editar reserva</span>
                </span>
              </button>

              <button
                onClick={handleClickCancel}
                className="clientefinal-paneldereservas-c-t-a-desktop44"
              >
                <svg
                  className="clientefinal-paneldereservas-user-interface222"
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.266482 11.2338C0.597571 11.5649 1.13437 11.5649 1.46546 11.2338L5.50032 7.19894L9.53519 11.2338C9.86628 11.5649 10.4031 11.5649 10.7342 11.2338C11.0653 10.9027 11.0653 10.3659 10.7342 10.0348L6.6993 5.99996L10.7342 1.9651C11.0653 1.63401 11.0653 1.09721 10.7342 0.766116C10.4031 0.435027 9.86628 0.435027 9.53519 0.766116L5.50032 4.80098L1.46546 0.766115C1.13437 0.435026 0.597571 0.435027 0.266482 0.766116C-0.0646071 1.0972 -0.0646071 1.63401 0.266482 1.9651L4.30135 5.99996L0.266482 10.0348C-0.0646074 10.3659 -0.0646071 10.9027 0.266482 11.2338Z"
                    fill="#E53939"
                  />
                </svg>

                <span className="clientefinal-paneldereservas-text16">
                  <span>Cancelar reserva</span>
                </span>
              </button>
            </div>
          </div>
          <div className="clientefinal-paneldereservas-info1">
            <div className="clientefinal-paneldereservas-informacin">
              <span className="clientefinal-paneldereservas-text18">
                <span>{dataShift.infoUser.name}</span>
              </span>
              <div className="clientefinal-paneldereservas-data">
                <div className="clientefinal-paneldereservas-txt">
                  <span className="clientefinal-paneldereservas-text20">
                    <span>Mail:</span>
                  </span>
                  <span className="clientefinal-paneldereservas-text22">
                    <span>{dataShift.infoUser.email}</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-txt1">
                  <span className="clientefinal-paneldereservas-text24">
                    <span>Teléfono:</span>
                  </span>
                  <span className="clientefinal-paneldereservas-text26">
                    <span>{dataShift.infoUser.phone}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="clientefinal-paneldereservas-informacin1">
              <span className="clientefinal-paneldereservas-text28">
                <span>Reserva</span>
              </span>
              <div className="clientefinal-paneldereservas-data1">
                <div className="clientefinal-paneldereservas-txt2">
                  <span className="clientefinal-paneldereservas-text30">
                    <span>Sucursal:</span>
                  </span>
                  <span className="clientefinal-paneldereservas-text32">
                    <span>Villa Crespo</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-txt3">
                  <span className="clientefinal-paneldereservas-text34">
                    <span>Horario:</span>
                  </span>
                  <span className="clientefinal-paneldereservas-text36">
                    <span>13:00 hs</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="clientefinal-paneldereservas-informacin2">
              <span className="clientefinal-paneldereservas-text38 "></span>
              <div className="clientefinal-paneldereservas-data2">
                <div className="clientefinal-paneldereservas-txt4">
                  <span className="clientefinal-paneldereservas-text39"></span>
                  <span className="clientefinal-paneldereservas-text40"></span>
                </div>
                <div className="clientefinal-paneldereservas-txt5">
                  <span className="clientefinal-paneldereservas-text41"></span>
                  <span className="clientefinal-paneldereservas-text42"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPanelShift;
