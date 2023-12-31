
const getStoredDonation = () => {
    const storedDonation = localStorage.getItem('donation_Cards');
    if (storedDonation){
        return JSON.parse(storedDonation);
    }
    return []; 
}


const saveDonationCard = id => {
    const storedDonations = getStoredDonation();
    const exists = storedDonations.find(donationId => donationId === id);
    if (!exists){
         storedDonations.push(id);
         localStorage.setItem('donation_Cards',
         JSON.stringify(storedDonations))
    }

}

export {saveDonationCard,getStoredDonation }