import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import "react-calendar/dist/Calendar.css";
import { getBranch } from "../store";
import Countdown from "../components/Countdown";

const PanelShift = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => {
    return state.auth;
  });
  const { data } = useSelector((state) => state.branch);
  const [value, onChange] = useState(new Date()); // saco el dia y mes que se reserva el turno
  const dayshift = new Date(); // saco el dia que se esta haciendo el turno
  const [beginTime, setBeginTime] = useState(""); // utilizo este dato para sacar el index de el array de horarios
  const [closeTime, setCloseTime] = useState(""); // utilizo este dato para sacar el index de el array de horarios
  const [idBranch, setIdBranch] = useState("");
  const [nameBranch, setNameBranch] = useState("");
  const [capMax, setCapMax] = useState(0);
  const [horaTurno, setHoraTurno] = useState(""); // saco la hora para la que se reservo el turno
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  useEffect(() => {
    dispatch(getBranch());
  }, [dispatch]);

  let prueba = 299;

  const handleBranchChange = (e) => {
    const branch = e.target.value.split(",");
    setIdBranch(branch[0]);
    setNameBranch(branch[1]);
    setBeginTime(branch[2]);
    setCloseTime(branch[3]);
    setCapMax(branch[4]);
  };

  const handleHoraShiftChange = (e) => {
    setHoraTurno(e.target.value);
  };

  const arrayHorario = [];
  const llenarArray = () => {
    for (let j = 0; j < 24; j++) {
      for (let k = 0; k <= 30; k += 30) {
        if (k === 0) {
          arrayHorario.push(j + ":" + k + "0");
        } else {
          arrayHorario.push(j + ":" + k);
        }
      }
    }
  };
  llenarArray();

  const resultadoInicio = arrayHorario.indexOf(beginTime);
  const resultadoFinal = arrayHorario.indexOf(closeTime);

  let horarioFinal = [];
  if (resultadoInicio < resultadoFinal) {
    horarioFinal = arrayHorario.splice(
      resultadoInicio,
      resultadoFinal - resultadoInicio + 1
    );
  } else {
    horarioFinal = arrayHorario.splice(
      resultadoInicio,
      arrayHorario.length - 1
    );

    for (let i = 0; i < resultadoFinal; i++) {
      horarioFinal.push(arrayHorario[i]);
    }
  }

  return (
    <div>
      <div className="clientefinal-paneldereservas-clientefinal-paneldereservas1 ">
        <NavBar />
        <span className="clientefinal-paneldereservas-text1 ">
          <span>Hacer una reserva</span>
        </span>
        <div className="clientefinal-paneldereservas-reserva ">
          <div className="clientefinal-paneldereservas-content">
            <div className="clientefinal-paneldereservas-head">
              <span className="clientefinal-paneldereservas-text002 Semibold·18·24">
                <span>Reserva</span>
              </span>
              <span className="clientefinal-paneldereservas-text004 Regular·14·20">
                <span>Completá el formulario</span>
              </span>
            </div>
            {/* <div className="clientefinal-paneldereservas-stepper">              
            </div>*/}

            <form>
              <div className="clientefinal-paneldereservas-inputs">
                <div className="clientefinal-paneldereservas-input-desktop2">
                  <div className="clientefinal-paneldereservas-txt">
                    <span className="clientefinal-paneldereservas-text012 Regular·14·20">
                      <span>Sucursal</span>
                    </span>
                  </div>
                  <select
                    className="clientefinal-paneldereservas-input-desktop1"
                    onChange={handleBranchChange}
                  >
                    <option
                      className="clientefinal-paneldereservas-text014"
                      value={0}
                      key={0}
                    >
                      Seleccione una Sucursal..
                    </option>
                    {data.map((sucursal) => {
                      return (
                        <option
                          className="clientefinal-paneldereservas-text014"
                          value={[
                            sucursal._id,
                            sucursal.name,
                            sucursal.beginTime,
                            sucursal.closeTime,
                            sucursal.capMax,
                          ]}
                          key={sucursal.name}
                        >
                          {sucursal.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="clientefinal-paneldereservas-input-desktop3">
                  <div className="clientefinal-paneldereservas-txt1">
                    <span className="clientefinal-paneldereservas-text016 Regular·14·20">
                      <span>Horario</span>
                    </span>
                  </div>
                  <select
                    onChange={handleHoraShiftChange}
                    className="clientefinal-paneldereservas-input-desktop11"
                  >
                    <option
                      key={0}
                      value={0}
                      className="clientefinal-paneldereservas-text018"
                    >
                      Selecciona un Horario...
                    </option>
                    {horarioFinal.map((horario) => {
                      return (
                        <option key={horario} value={horario}>
                          {horario}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="clientefinal-paneldereservas-fila">
                  <div className="clientefinal-paneldereservas-input-desktop21">
                    <div className="clientefinal-paneldereservas-txt2">
                      <span className="clientefinal-paneldereservas-text020 Regular·14·20">
                        <span>Nombre y Apellido</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="clientefinal-paneldereservas-input-desktop12"
                      onChange={handleFullNameChange}
                      value={fullName}
                    />
                  </div>
                  <div className="clientefinal-paneldereservas-input-desktop31">
                    <div className="clientefinal-paneldereservas-txt3">
                      <span className="clientefinal-paneldereservas-text022 Regular·14·20">
                        <span>Teléfono</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="clientefinal-paneldereservas-input-desktop13"
                      onChange={handlePhoneChange}
                      value={phone}
                    />
                  </div>
                </div>
                <div className="clientefinal-paneldereservas-input-desktop22">
                  <div className="clientefinal-paneldereservas-txt4">
                    <span className="clientefinal-paneldereservas-text024 Regular·14·20">
                      <span>Mail</span>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="clientefinal-paneldereservas-input-desktop14"
                    onChange={handleEmailChange}
                    value={email}
                  />
                </div>
              </div>
            </form>
          </div>
          <button className="clientefinal-paneldereservas-c-t-a-desktop10">
            <span className="clientefinal-paneldereservas-text026 Semibold·16·20">
              <span>Confirmar reserva</span>
            </span>
          </button>
        </div>
        <div className="clientefinal-paneldereservas-calendar">
          <Calendar
            nextLabel={null}
            next2Label={null}
            prevLabel={null}
            prev2Label={null}
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
      {/* {prueba ? <Countdown tiempo={prueba} /> : ""} */}
    </div>
  );
};

export default PanelShift;
