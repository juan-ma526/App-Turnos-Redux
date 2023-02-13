const CreateBranch = () => {
  return (
    <div>
      <div className="administrador-creacindesucursales-administrador-creacindesucursales">
        <form>
          <div className="administrador-creacindesucursales-formulario">
            <span className="administrador-creacindesucursales-text SemiBold·20·24">
              <span>Crear una nueva sucursal</span>
            </span>
            <div className="administrador-creacindesucursales-input-desktop2">
              <div className="administrador-creacindesucursales-txt">
                <span className="administrador-creacindesucursales-text02 Regular·14·20">
                  <span>Nombre</span>
                </span>
              </div>
              <input
                type="text"
                className="administrador-creacindesucursales-input-desktop1"
              />
            </div>
            <div className="administrador-creacindesucursales-input-desktop21">
              <div className="administrador-creacindesucursales-txt1">
                <span className="administrador-creacindesucursales-text04 Regular·14·20">
                  <span>Correo electrónico</span>
                </span>
              </div>
              <input
                type="email"
                className="administrador-creacindesucursales-input-desktop11"
              />
            </div>
            <div className="administrador-creacindesucursales-fila">
              <div className="administrador-creacindesucursales-input-desktop22">
                <div className="administrador-creacindesucursales-txt2">
                  <span className="administrador-creacindesucursales-text06 Regular·14·20">
                    <span>Teléfono</span>
                  </span>
                </div>
                <input
                  type="text"
                  className="administrador-creacindesucursales-input-desktop12"
                />
              </div>
              <div className="administrador-creacindesucursales-input-desktop3">
                <div className="administrador-creacindesucursales-txt3">
                  <span className="administrador-creacindesucursales-text08 Regular·14·20">
                    <span>Capacidad máxima</span>
                  </span>
                </div>
                <div className="administrador-creacindesucursales-input-desktop13">
                  <select className="administrador-creacindesucursales-text10 Regular·14·20">
                    <option value="10">10</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="administrador-creacindesucursales-horario">
              <div className="administrador-creacindesucursales-input-desktop23">
                <div className="administrador-creacindesucursales-txt4">
                  <span className="administrador-creacindesucursales-text11 Regular·14·20">
                    <span>Horario de Inicio</span>
                  </span>
                </div>
                <div className="administrador-creacindesucursales-input-desktop14">
                  <select className="administrador-creacindesucursales-text13 Regular·14·20">
                    <option>10:00</option>
                    <option>10:30</option>
                    <option>11:00</option>
                  </select>
                </div>
              </div>
              <div className="administrador-creacindesucursales-input-desktop31">
                <div className="administrador-creacindesucursales-txt5">
                  <span className="administrador-creacindesucursales-text15 Regular·14·20">
                    <span>Horario de Cierre</span>
                  </span>
                </div>
                <div className="administrador-creacindesucursales-input-desktop15">
                  <select className="administrador-creacindesucursales-text17 Regular·14·20">
                    <option>18:00</option>
                    <option>18:30</option>
                    <option>19:00</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="administrador-creacindesucursales-c-t-a-desktop1">
              <span className="administrador-creacindesucursales-text19 Semibold·16·20">
                <span>Enviar</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBranch;
