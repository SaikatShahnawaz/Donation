

const DonationPaid = ({ donationPaid }) => {
    const {picture , card_bg} = {donationPaid};
    return (
        <div>
            <div className="">
                <div style={{ backgroundColor: donationPaid.category_bg }} className="card card-side shadow-xl">
                    <figure><img className="h-full " src={donationPaid.picture}alt="Movie" /></figure>
                    <div  className="card-body ">
                        <h2 className="card-title">{donationPaid.category}</h2>
                        <p>{donationPaid.title}</p>
                    
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DonationPaid;