import { GoKebabVertical } from "react-icons/go";

function MainCard({ title }) {
  return (
    <div className="card-container">
      <div className="title-sec">
        <h3>{title}</h3>
        <div className="menu-icon-sec">
          <GoKebabVertical />
        </div>
      </div>
      <div className="content-sec">
        <p>Card Content Here</p>
      </div>
    </div>
  );
}

export default MainCard;
