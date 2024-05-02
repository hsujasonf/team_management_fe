import TeamMembers from "./pages/TeamMembers";

import AddTeamMember from "./pages/AddTeamMember";
import EditTeamMember from "./pages/EditTeamMember";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeamMembers />} />
        <Route path="/add" element={<AddTeamMember />} />
        <Route path="/edit" element={<EditTeamMember />} />
      </Routes>
    </Router>
  );
}

export default App;
