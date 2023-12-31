import { useEffect, useState } from "react";
import Card from "../Card/Card";

const DonationCards = () => {
    const [cards, setCards] = useState([]);
   // const [displayCards, setDisplayCards] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data));

    }, [])

    

    return (
        <div className="mx-auto max-w-7xl mt-14 mb-40">

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    cards.map(card => <Card key={card.id} card={card} ></Card>)
                }
            </div>
        </div>
    );
};

export default DonationCards;