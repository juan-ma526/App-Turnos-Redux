import NavBar from "../components/NavBar";

const ProfileAdmin = () => {
  return (
    <div>
      <div className="perfil-administrador-perfil-administrador">
        <NavBar />
        <div className="perfil-administrador-formulario">
          <span className="perfil-administrador-text SemiBold·20·24">
            <span>Mis datos</span>
          </span>
          <div className="perfil-administrador-input-desktop2">
            <div className="perfil-administrador-txt">
              <span className="perfil-administrador-text02 Regular·14·20">
                <span>Nombre</span>
              </span>
            </div>
            <input
              type="text"
              className="perfil-administrador-input-desktop1"
            />
          </div>
          <div className="perfil-administrador-input-desktop21">
            <div className="perfil-administrador-txt1">
              <span className="perfil-administrador-text04 Regular·14·20">
                <span>Correo electrónico</span>
              </span>
            </div>
            <input
              type="email"
              className="perfil-administrador-input-desktop11"
            />
          </div>
          <div className="perfil-administrador-input-desktop22">
            <div className="perfil-administrador-txt2">
              <span className="perfil-administrador-text06 Regular·14·20">
                <span>DNI</span>
              </span>
            </div>
            <input
              type="text"
              className="perfil-administrador-input-desktop12"
            />
          </div>
          <div className="perfil-administrador-horario">
            <div className="perfil-administrador-input-desktop23">
              <div className="perfil-administrador-txt3">
                <span className="perfil-administrador-text08 Regular·14·20">
                  <span>Contraseña</span>
                </span>
              </div>
              <input
                type="password"
                className="perfil-administrador-input-desktop13"
              />
            </div>
            <div className="perfil-administrador-input-desktop3">
              <span className="perfil-administrador-txt4">
                Editar contraseña
              </span>
            </div>
          </div>
          <div className="perfil-administrador-c-t-a-desktop1">
            <span className="perfil-administrador-text10 Semibold·16·20">
              <span>Aceptar</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAdmin;
