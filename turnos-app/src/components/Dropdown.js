import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ shift }) => {
  const edit = "edit";
  const cancel = "cancel";
  const [valueDropdown, setValueDropdown] = useState(0);
  const [name, setName] = useState("");
  const handleDropdown = (e) => {
    const array = e.target.value.split(",");

    setValueDropdown(array[0]);
    setName(array[1]);
  };
  console.log(name);
  if (name === "cancel") {
    <Link to="/cancelledShift" state={{ id: valueDropdown }}></Link>;
  }
  return (
    <div className="clientefinal-reservadelcliente-c-t-a-desktop44">
      <form>
        <select
          onChange={handleDropdown}
          className="clientefinal-reservadelcliente-text088"
        >
          <option value="" key={0}>
            Seleccionar..
          </option>
          <option value={[shift._id, edit]} key={1}>
            Edit
          </option>

          <option value={[shift._id, cancel]} key={2}>
            Cancel
          </option>
        </select>
      </form>
    </div>
  );
};

export default Dropdown;
