import React, { useEffect } from "react";
import PieChart from "../components/PieChart";
import { FaCheck, FaLock, FaTimes } from "react-icons/fa";
import NavBar from "../components/NavBar";
import Advertising from "../components/Advertising";
import { useDispatch, useSelector } from "react-redux";
import { getAllShiftByUser } from "../store";

const Reports = () => {
  const dispatch = useDispatch();
  const { allDataShift } = useSelector((state) => {
    return state.shift;
  });

  useEffect(() => {
    dispatch(getAllShiftByUser());
  }, []);

  const asistencia = allDataShift.filter((shift) => {
    return shift.statusHour === "finished";
  });
  const faltas = allDataShift.filter((shift) => {
    return shift.statusHour === "cancelled";
  });
  const porcentajeAsistencias = (asistencia.length * 100) / allDataShift.length;
  const porcentajeFaltas = (faltas.length * 100) / allDataShift.length;
  const porcentajeAsistenciasRedondeado = porcentajeAsistencias.toFixed(2);
  const porcentajeFaltasRedondeado = porcentajeFaltas.toFixed(2);

  return (
    <div>
      <div className="administrador-reportes-administrador-reportes">
        <Advertising />
        <NavBar />
        <div className="administrador-reportes-cards">
          <div className="administrador-reportes-card">
            <div className="administrador-reportes-content">
              <div className="administrador-reportes-txt">
                <span className="administrador-reportes-text">
                  <span>{allDataShift.length}</span>
                </span>
                <span className="administrador-reportes-text02">
                  <span>Total de reservas</span>
                </span>
              </div>
              <FaLock className="administrador-reportes-user-interface" />
            </div>
            <div className="administrador-reportes-base"></div>
          </div>
          <div className="administrador-reportes-card1">
            <div className="administrador-reportes-content1">
              <div className="administrador-reportes-txt1">
                <span className="administrador-reportes-text04">
                  <span>{faltas.length}</span>
                </span>
                <span className="administrador-reportes-text06">
                  <span>Total cancelaciones</span>
                </span>
              </div>

              <FaTimes className="administrador-reportes-user-interface1" />
            </div>
            <div className="administrador-reportes-base1"></div>
          </div>
          <div className="administrador-reportes-card2">
            <div className="administrador-reportes-content2">
              <div className="administrador-reportes-txt2">
                <span className="administrador-reportes-text08">
                  <span>{asistencia.length}</span>
                </span>
                <span className="administrador-reportes-text10">
                  <span>Asistencias</span>
                </span>
              </div>

              <FaCheck className="administrador-reportes-user-interface2" />
            </div>
            <div className="administrador-reportes-base2"></div>
          </div>
        </div>
        <div className="administrador-reportes-example2">
          <div className="administrador-reportes-head">
            <div className="administrador-reportes-txt3">
              <img
                src="/playground_assets/border1288-q7ia.svg"
                alt="Border1288"
                className="administrador-reportes-border"
              />
              <span className="administrador-reportes-text12">
                <span>Asistencias</span>
              </span>
            </div>
            <div className="administrador-reportes-txt4">
              <img
                src="/playground_assets/border1291-ryrc.svg"
                alt="Border1291"
                className="administrador-reportes-border1"
              />
              <span className="administrador-reportes-text14">
                <span>Cancelaciones</span>
              </span>
            </div>
          </div>
          <div className="administrador-reportes-grfico"></div>
          {/*  <div className="administrador-reportes-das">
            <span className="administrador-reportes-text40">
              <span>Lunes</span>
            </span>
            <span className="administrador-reportes-text42">
              <span>Martes</span>
            </span>
            <span className="administrador-reportes-text44">
              <span>Miércoles</span>
            </span>
            <span className="administrador-reportes-text46">
              <span>Jueves</span>
            </span>
            <span className="administrador-reportes-text48">
              <span>Viernes</span>
            </span>
            <span className="administrador-reportes-text50">
              <span>Sábado</span>
            </span>
          </div> */}
        </div>
        <div className="administrador-reportes-reservasvs-asistencias">
          <div className="administrador-reportes-head1">
            <span className="administrador-reportes-text52 Semibold·14·20">
              <span>Cancelaciones vs Asistencias</span>
            </span>
            <div className="administrador-reportes-input-desktop1">
              <span className="administrador-reportes-text54">
                <span>Mensual</span>
              </span>
            </div>
          </div>
          <div className="administrador-reportes-info">
            <div className="administrador-reportes-grfico1">
              <PieChart data={allDataShift} />
            </div>
            <div className="administrador-reportes-referencias">
              <div className="administrador-reportes-referencia">
                <div className="administrador-reportes-rectangle1"></div>
                <span className="administrador-reportes-text56 Regular·14·20">
                  <span>Asistencia</span>
                </span>
                <span className="administrador-reportes-text58 Regular·14·20">
                  <span>{porcentajeAsistenciasRedondeado}%</span>
                </span>
              </div>
              <div className="administrador-reportes-referencia1">
                <div className="administrador-reportes-rectangle11"></div>
                <span className="administrador-reportes-text60 Regular·14·20">
                  <span>Cancela.</span>
                </span>
                <span className="administrador-reportes-text62 Regular·14·20">
                  <span>{porcentajeFaltasRedondeado}%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="administrador-reportes-ct-desktop2">
            <span className="administrador-reportes-text64 Semibold·16·20">
              <span>Ver reporte</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
