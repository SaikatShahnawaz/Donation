import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localstorage";
import DonationPaid from "../DoantionPaid/DonationPaid";


const Donation = () => {
    const donations = useLoaderData();
    const [datalength , setDatalength] = useState(4);
    const [donationPaids, setDonationPaids] = useState([]);
    useEffect(()=>{

        const donatedId =  getStoredDonation();
        if (donations.length > 0){
            const paidDonation = [];
            for (const id of donatedId){
                const donation = donations.find (donation => donation.id == id)
                if(donation)
                {
                    paidDonation.push(donation);
                    

                }
                setDonationPaids(paidDonation);
            }  
        }


        console.log(donationPaids);



    },[donations])

    
    
    return (
        <div>
            <div className="gap-4 max-w-3xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 ">
            {
                donationPaids.slice(0,datalength).map(donationPaid => <DonationPaid key={donationPaid.id} donationPaid= {donationPaid}></DonationPaid>)
            }
            <div>
                <div className={ datalength == donations.length && 'hidden'}>
                    <button onClick={()=> setDatalength(donations.length)} 
                    className="btn btn-secondary">Show all</button>
                </div>
            </div>
            </div>
            
            
            


        </div>
    );
};

export default Donation;