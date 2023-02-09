import { GoKebabVertical } from "react-icons/go";

function Card({ title ,party,age,qualification}) {
  return (
    <div className="card-container">
      <div className="title-sec">
        <h3>{title}</h3>
        <div className="menu-icon-sec">
          <GoKebabVertical />
        </div>
      </div>
      <div className="content-sec">
        <p> <b>Party :</b> {party} <br/>
          <b>Age :</b>  {age} <br/>
          <b>Qualification : </b> {qualification}
        </p>
      </div>
    </div>
  );
}

export default Card;
