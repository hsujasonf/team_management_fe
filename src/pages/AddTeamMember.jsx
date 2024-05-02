import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MemberForm from "../components/MemberForm";
import { post } from "../api/apiService";
import useError from "../hooks/useError";
import { validateForm } from "../utils";

const AddTeamMember = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    role: "regular",
  });
  const [renderError, showError, clearError] = useError(3000);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm(formData)) {
      showError("Please fill out all fields");
      return;
    }
    post("/team-members/", formData)
      .then((data) => {
        console.log("Success:", data);
        clearError();
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
        type="add"
        setFormData={setFormData}
        formData={formData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddTeamMember;
