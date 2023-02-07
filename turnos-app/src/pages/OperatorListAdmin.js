const OperatorListAdmin = () => {
  return (
    <div>
      <div className="administrador-listadodeoperadores-administrador-listadodeoperadores">
        <span className="administrador-listadodeoperadores-text SemiBold·20·24">
          <span>Operadores</span>
        </span>
        {/*Desde el div de abajo empezar a mapear para mostrar los datos*/}
        <div className="administrador-listadodeoperadores-reservas">
          <div className="administrador-listadodeoperadores-pedido-mi-cuenta">
            <div className="administrador-listadodeoperadores-info">
              <span className="administrador-listadodeoperadores-text002 Regular·12·16">
                <span>Nombre</span>
              </span>
              <span className="administrador-listadodeoperadores-text004 Semibold·14·16">
                <span>Ivan Cruce</span>
              </span>
            </div>
            <div className="administrador-listadodeoperadores-info01">
              <span className="administrador-listadodeoperadores-text006 Regular·12·16">
                <span>Mail</span>
              </span>
              <span className="administrador-listadodeoperadores-text008 Semibold·14·16">
                <span>ivan@e-cruce.com</span>
              </span>
            </div>
            <div className="administrador-listadodeoperadores-info02">
              <span className="administrador-listadodeoperadores-text010 Regular·12·16">
                <span>Sucursal</span>
              </span>
              <span className="administrador-listadodeoperadores-text012 Semibold·14·16">
                <span>Villa Crespo</span>
              </span>
            </div>
            <div className="administrador-listadodeoperadores-info03">
              <span className="administrador-listadodeoperadores-text014 Regular·12·16">
                <span>Contraseña</span>
              </span>
              <span className="administrador-listadodeoperadores-text016 Semibold·14·16">
                <span>***************</span>
              </span>
            </div>
            <div className="administrador-listadodeoperadores-c-t-a-desktop4">
              <span className="administrador-listadodeoperadores-text018 Semibold·15·20">
                <span>Editar</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorListAdmin;
