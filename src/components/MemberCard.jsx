import "./MemberCard.css";
import PropTypes from "prop-types";

const MemberCard = ({ member, handleClickEdit }) => {
  return (
    <div
      key={member.id}
      className="TeamMember"
      onClick={(e) => handleClickEdit(e, member)}
    >
      <hr />
      <div>
        {member.first_name} {member.last_name}{" "}
        {member.role === "admin" ? "(admin)" : ""}
      </div>
      <div>{member.phone_number}</div>
      <div>{member.email}</div>
    </div>
  );
};

MemberCard.propTypes = {
  member: PropTypes.object,
  handleClickEdit: PropTypes.func.isRequired,
};
export default MemberCard;
