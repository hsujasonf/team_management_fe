import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../api/apiService";
import MemberCard from "../components/MemberCard";
import useError from "../hooks/useError";
import "./TeamMembers.css";

function TeamMembers() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [renderError, showError, clearError] = useError(3000);
  useEffect(() => {
    const fetchTeamMembers = async () => {
      setLoading(true);
      try {
        const data = await get("/team-members/");
        setTeamMembers(data);
        clearError();
      } catch (error) {
        showError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, [showError, clearError]);

  const handleClickAdd = (e) => {
    e.preventDefault();
    navigate("/add", { state: { type: "add" } });
  };

  const handleClickEdit = (e, member) => {
    e.preventDefault();
    navigate("/edit", { state: { type: "edit", member: member } });
  };

  return (
    <div className="TeamMemberComponent">
      {loading && <p>Loading...</p>}
      {renderError}
      <div onClick={handleClickAdd}>+</div>
      <h2>Team Members</h2>
      <div>You have {teamMembers.length} team members</div>
      {teamMembers.map((member) => (
        <MemberCard
          member={member}
          handleClickEdit={handleClickEdit}
          key={member.id}
        />
      ))}
    </div>
  );
}

export default TeamMembers;
