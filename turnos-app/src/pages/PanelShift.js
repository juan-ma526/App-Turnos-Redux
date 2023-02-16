import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/slices/authSlice";
import NavBar from "../components/NavBar";

const PanelShift = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => {
    return state.auth;
  });

  useEffect(() => {
    dispatch(addUser());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      {user}
    </div>
  );
};

export default PanelShift;
