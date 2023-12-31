import { Link } from "react-router-dom";




const Card = ({ card }) => {
    const {id} = card;
    
    return (
        <div >

            <Link to ={`/donation/${id}`}>
            <div  style={{ backgroundColor: card.category_bg }}
                className="rounded-xl">
                <div className="card card-compact w-76    shadow-xl">
                    <figure><img src={card.picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 style={{ backgroundColor: card.card_bg }} className={`card-title  justify-center`}>{card.category}</h2>
                        <p className="text-center">{card.title}</p>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Card;