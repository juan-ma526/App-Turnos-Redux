import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import { getBranch } from "../store/thunks/getBranch";

const BranchListAdmin = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.branch);

  useEffect(() => {
    dispatch(getBranch());
  }, [dispatch]);

  if (isLoading) {
    return <div>Esta Cargando.....</div>;
  }
  if (error) {
    return <div>Hubo un error en la obtencion de datos</div>;
  }

  const renderedBranch = data.map((branch) => {
    return (
      <div
        key={branch._id}
        className="administrador-listadodesucursales-pedido-mi-cuenta"
      >
        <div className="administrador-listadodesucursales-info">
          <span className="administrador-listadodesucursales-text">
            <span>Nombre</span>
          </span>
          <span className="administrador-listadodesucursales-text002">
            <span>{branch.name}</span>
          </span>
        </div>
        <div className="administrador-listadodesucursales-info01">
          <span className="administrador-listadodesucursales-text004">
            <span>Mail</span>
          </span>
          <span className="administrador-listadodesucursales-text006">
            <span>{branch.email}</span>
          </span>
        </div>
        <div className="administrador-listadodesucursales-info02">
          <span className="administrador-listadodesucursales-text008">
            <span>Capacidad máxima</span>
          </span>
          <span className="administrador-listadodesucursales-text010">
            {branch.capMax}
          </span>
        </div>
        <div className="administrador-listadodesucursales-info03">
          <span className="administrador-listadodesucursales-text011">
            <span>Horario de Inicio y Cierre</span>
          </span>
          <span className="administrador-listadodesucursales-text013">
            <span>
              {branch.beginTime}hs - {branch.closeTime}hs
            </span>
          </span>
        </div>
        <div className="administrador-listadodesucursales-c-t-a-desktop4">
          <span className="administrador-listadodesucursales-text015">
            <span>Editar</span>
          </span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="administrador-listadodesucursales-administrador-listadodesucursales">
        <NavBar />
        <div className="administrador-listadodesucursales-reservas">
          {renderedBranch}
          {/*Empezar a mapear desde el div de abajo*/}
          {/* <div className="administrador-listadodesucursales-pedido-mi-cuenta">
            <div className="administrador-listadodesucursales-info">
              <span className="administrador-listadodesucursales-text">
                <span>Nombre</span>
              </span>
              <span className="administrador-listadodesucursales-text002">
                <span>Iván Cruce</span>
              </span>
            </div>
            <div className="administrador-listadodesucursales-info01">
              <span className="administrador-listadodesucursales-text004">
                <span>Mail</span>
              </span>
              <span className="administrador-listadodesucursales-text006">
                <span>ivan@e-cruce.com</span>
              </span>
            </div>
            <div className="administrador-listadodesucursales-info02">
              <span className="administrador-listadodesucursales-text008">
                <span>Capacidad máxima</span>
              </span>
              <span className="administrador-listadodesucursales-text010">
                2
              </span>
            </div>
            <div className="administrador-listadodesucursales-info03">
              <span className="administrador-listadodesucursales-text011">
                <span>Horario de Inicio y Cierre</span>
              </span>
              <span className="administrador-listadodesucursales-text013">
                <span>8:00 - 19:30 hs</span>
              </span>
            </div>
            <div className="administrador-listadodesucursales-c-t-a-desktop4">
              <span className="administrador-listadodesucursales-text015">
                <span>Editar</span>
              </span>
            </div>
          </div> */}
        </div>
        <span className="administrador-listadodesucursales-text119">
          <span>Sucursales</span>
        </span>
      </div>
    </div>
  );
};

export default BranchListAdmin;
