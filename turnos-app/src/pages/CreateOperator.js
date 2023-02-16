import NavBar from "../components/NavBar";

const CreateOperator = () => {
  return (
    <div>
      <div className="administrador-creacindeoperadores-administrador-creacindeoperadores">
        <NavBar />
        <form>
          <div className="administrador-creacindeoperadores-formulario">
            <span className="administrador-creacindeoperadores-text SemiBold·20·24">
              <span>Creación de operadores</span>
            </span>
            <div className="administrador-creacindeoperadores-input-desktop2">
              <div className="administrador-creacindeoperadores-txt">
                <span className="administrador-creacindeoperadores-text02 Regular·14·20">
                  <span>Nombre</span>
                </span>
              </div>
              <input
                type="text"
                className="administrador-creacindeoperadores-input-desktop1"
              />
            </div>
            <div className="administrador-creacindeoperadores-input-desktop21">
              <div className="administrador-creacindeoperadores-txt1">
                <span className="administrador-creacindeoperadores-text04 Regular·14·20">
                  <span>Correo electrónico</span>
                </span>
              </div>
              <input
                type="email"
                className="administrador-creacindeoperadores-input-desktop11"
              />
            </div>
            <div className="administrador-creacindeoperadores-fila">
              <div className="administrador-creacindeoperadores-input-desktop22">
                <div className="administrador-creacindeoperadores-txt2">
                  <span className="administrador-creacindeoperadores-text06 Regular·14·20">
                    <span>DNI</span>
                  </span>
                </div>
                <input
                  type="text"
                  className="administrador-creacindeoperadores-input-desktop12"
                />
              </div>
              <div className="administrador-creacindeoperadores-input-desktop3">
                <div className="administrador-creacindeoperadores-txt3">
                  <span className="administrador-creacindeoperadores-text08 Regular·14·20">
                    <span>Sucursal</span>
                  </span>
                </div>
                <div className="administrador-creacindeoperadores-input-desktop13">
                  <select className="administrador-creacindeoperadores-text10 Regular·14·20">
                    <option>Villa Crespo</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="administrador-creacindeoperadores-horario">
              <div className="administrador-creacindeoperadores-input-desktop23">
                <div className="administrador-creacindeoperadores-txt4">
                  <span className="administrador-creacindeoperadores-text12 Regular·14·20">
                    <span>Contraseña</span>
                  </span>
                </div>
                <input
                  type="password"
                  className="administrador-creacindeoperadores-input-desktop14"
                />
              </div>
              <div className="administrador-creacindeoperadores-input-desktop31">
                <div className="administrador-creacindeoperadores-txt5">
                  <span className="administrador-creacindeoperadores-text14 Regular·14·20">
                    <span>Repetir contraseña</span>
                  </span>
                </div>
                <input
                  type="password"
                  className="administrador-creacindeoperadores-input-desktop15"
                />
              </div>
            </div>
            <button className="administrador-creacindeoperadores-c-t-a-desktop1">
              <span className="administrador-creacindeoperadores-text16 Semibold·16·20">
                <span>Enviar</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOperator;
