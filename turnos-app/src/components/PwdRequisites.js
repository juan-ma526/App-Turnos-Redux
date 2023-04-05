const PwdRequisites = ({
  capsLetterFlag,
  numberFlag,
  pwdLengthFlag,
  specialCharFlag,
  neutral,
}) => {
  return (
    <div className="clientefinal-registro-advertencia">
      <div className="clientefinal-registro-head1">
        <span className="clientefinal-registro-text16">
          <span>La contraseña debe contener:</span>
        </span>
        <svg
          className="clientefinal-registro-border"
          width="476"
          height="1"
          viewBox="0 0 476 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="0.5" x2="476" y2="0.5" stroke="#E1E1E1" />
        </svg>
      </div>
      <div className="clientefinal-registro-content">
        <div className="clientefinal-registro-fila2">
          <div className="clientefinal-registro-fila3">
            <span className="clientefinal-registro-text18 ">
              <span className={capsLetterFlag + neutral}>ABC</span>
            </span>
            <span className="clientefinal-registro-text20 ">
              <span className={capsLetterFlag + neutral}>
                Una letra mayúscula
              </span>
            </span>
          </div>
          <div className="clientefinal-registro-fila4">
            <span className="clientefinal-registro-text22 ">
              <span className={specialCharFlag + neutral}>abc</span>
            </span>
            <span className="clientefinal-registro-text24 ">
              <span className={specialCharFlag + neutral}>
                Una letra minúscula
              </span>
            </span>
          </div>
        </div>
        <div className="clientefinal-registro-fila5">
          <div className="clientefinal-registro-fila6">
            <span className="clientefinal-registro-text26 ">
              <span className={numberFlag + neutral}>123</span>
            </span>
            <span className="clientefinal-registro-text28 ">
              <span className={numberFlag + neutral}>Un número</span>
            </span>
          </div>
          <div className="clientefinal-registro-fila7">
            <span className="clientefinal-registro-text30 ">
              <span className={pwdLengthFlag + neutral}>***</span>
            </span>
            <span className="clientefinal-registro-text32 ">
              <span className={pwdLengthFlag + neutral}>
                Mínimo 8 caracteres
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PwdRequisites;
