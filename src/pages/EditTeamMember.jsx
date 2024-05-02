import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { patch, del } from "../api/apiService";
import MemberForm from "../components/MemberForm";
import useError from "../hooks/useError";
import { validateForm } from "../utils";

const EditTeamMember = () => {
  const location = useLocation();
  const { member } = location.state;
  const [formData, setFormData] = useState({
    first_name: member.first_name,
    last_name: member.last_name,
    phone_number: member.phone_number,
    email: member.email,
    role: member.role,
  });

  const navigate = useNavigate();
  const [renderError, showError, clearError] = useError(3000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(formData)) {
      showError("Please fill out all fields");
      return;
    }
    try {
      const data = await patch(`/team-members/${member.id}/`, formData);
      console.log("Success:", data);
      clearError();
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    del(`/team-members/${member.id}/`)
      .then((response) => {
        if (!response) {
          throw new Error("Something went wrong");
        }
        console.log("Success: Team member deleted");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      {renderError}
      <MemberForm
        type="edit"
        setFormData={setFormData}
        formData={formData}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default EditTeamMember;
