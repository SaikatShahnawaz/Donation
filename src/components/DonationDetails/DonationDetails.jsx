import { useLoaderData, useParams } from "react-router-dom";
import { saveDonationCard } from "../../utility/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    


const handleDonate = () =>{
        saveDonationCard(makeDonation.id);
        toast("Sucessfully donated");
        
    }

    // Check if data is an array before using find
    if (!Array.isArray(donations)) {
        console.error('Data is not an array:', donations);
        return (
            <div>
                <h1>Error: Data is not an array</h1>
            </div>
        );
    }

    const makeDonation = donations.find(donation => donation.id == id);
    console.log(makeDonation);
    if (!makeDonation) {
        // Handle the case where the donation with the specified id is not found
        console.error(`Donation with id ${id} not found.`);
        return (
            <div>
                <h1>Donation not found</h1>
            </div>
        );
    }
    return (
        
        <div>
            <div className=" ">

                <img className=" text-centers " src={makeDonation.picture} alt="Donation" />
            </div>
            <button onClick= {handleDonate} style={{ backgroundColor: makeDonation.card_bg }} className=" -mt-96 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Donate:{makeDonation.price}</button>
            <ToastContainer />
        </div>
        
    );

};

export default DonationDetails;