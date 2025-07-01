import react from "react";

const Card = ({ title, description }) => {
    return (
        <div className="card" style={{width: "18rem"}}> 
          <img className="card-img-top" 
          src="https://media.istockphoto.com/id/454439027/photo/rat.jpg?s=612x612&w=0&k=20&c=C7JmJkLxQaLk8hjZcQUe6fERP-bBuwLcc30ObD0m0BM="
           alt="Card image cap" /> 
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
    );
};

export default Card; // We export the component so we can use it in other files