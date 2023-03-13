import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 10) minutes = "0" + minutes;
  if (seconds <= 10) seconds = "0" + seconds;

  return minutes + ":" + seconds;
};

const Countdown = ({ tiempo }) => {
  const [contador, setContador] = useState(tiempo);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setContador((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (contador <= 0) {
      clearInterval(timerId.current);
      Swal.fire({
        title: "Expiro el tiempo",
        text: "Finalizo el tiempo para reservar el turno, vuelva a intentarlo",
        icon: "info",
        allowOutsideClick: false,
      });
    }
  }, [contador]);

  return (
    <div className="clientefinal-paneldereservas-contador">
      <span className="clientefinal-paneldereservas-text101">
        <span>{contador ? formatTime(contador) : "05:00"}</span>
      </span>
    </div>
  );
};

export default Countdown;
