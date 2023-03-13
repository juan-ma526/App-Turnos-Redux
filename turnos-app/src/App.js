import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PanelShift from "./pages/PanelShift";
import ProfileUser from "./pages/ProfileUser";
import CancelledShift from "./pages/CancelledShift";
import ShiftUser from "./pages/ShiftUser";
import ShiftOperatorView from "./pages/ShiftOperatorView";
import ProfileOperator from "./pages/ProfileOperator";
import FinalPanelShift from "./pages/FinalPanelShift";
import BranchListAdmin from "./pages/BranchListAdmin";
import OperatorListAdmin from "./pages/OperatorListAdmin";
import ProfileAdmin from "./pages/ProfileAdmin";
import CreateBranch from "./pages/CreateBranch";
import CreateOperator from "./pages/CreateOperator";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/panelShift" element={<PanelShift />} />
        <Route path="/shiftUser" element={<ShiftUser />} />
        <Route path="/branchList" element={<BranchListAdmin />} />
        <Route path="/operatorList" element={<OperatorListAdmin />} />
        <Route path="/createBranch" element={<CreateBranch />} />
        <Route path="/createOperator" element={<CreateOperator />} />
        <Route path="/profileAdmin" element={<ProfileAdmin />} />
        <Route path="/shiftOperatorView" element={<ShiftOperatorView />} />
        <Route path="/profileOperator" element={<ProfileOperator />} />
        <Route path="/profileUser" element={<ProfileUser />} />
      </Routes>
    </div>
  );
}

export default App;
