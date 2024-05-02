import PropTypes from "prop-types";

import "./MemberForm.css";

const MemberForm = ({
  type,
  handleSubmit,
  setFormData,
  formData,
  handleDelete,
}) => {
  const isAdd = type === "add";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="AddEditTeamMemberComponent">
      <h2>{isAdd ? "Add a Team Member" : "Edit a team Member"}</h2>
      <hr />
      <form onSubmit={handleSubmit} className="AddEditMemberForm">
        <h3>Info</h3>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <div>
          <h3>Role</h3>
          <div className="RadioOptions">
            <div className="RadioOption">
              <input
                type="radio"
                name="role"
                value="regular"
                onChange={handleChange}
                checked={formData.role === "regular"}
                placeholder="regular"
              />
              <label>Regular - Can't Delete Members</label>
            </div>
            <div className="RadioOption">
              <input
                type="radio"
                name="role"
                value="admin"
                onChange={handleChange}
                checked={formData.role === "admin"}
                placeholder="admin"
              />
              <label>Admin - Can Delete Members</label>
            </div>
          </div>
        </div>
        <div className="FormButtons">
          <button type="submit">Save</button>
          {!isAdd && (
            <button type="submit" onClick={handleDelete}>
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

MemberForm.propTypes = {
  type: PropTypes.string,
  memberData: PropTypes.object,
  handleSubmit: PropTypes.func,
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default MemberForm;
