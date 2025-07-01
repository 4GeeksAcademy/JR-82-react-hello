import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import JumboTron from "./Jumbo";
import Card from "./card";
import Footer from "./footer";

const cardArray = [
 {title: "Rat Just", description: "This is the first Rat",}
,{title: "Rat Edward", description: "This is the second Rat",}
,{title: "Rat Ricardo", description: "This is the third Rat",}
,{title: "card Luke", description: "This is the fourth Rat",}


];

//create your first component
const Home = () => {
	return (
 <div>
	<Navbar />
	<JumboTron />
	
<div className="d-flex justify-content-center gap-3">
    {cardArray.map((card, idx) => 
        <Card key={idx} title={card.title} description={card.description} />
    )}
</div>

 	<Footer />
 </div>
	);
};

export default Home;