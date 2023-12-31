const Banner = () => {

    const handleSearch = () =>{
        console.log('clicked')
    }
    const handleSearch1 = () =>{
        console.log('on clicked')
    }
    return (
        <div>
            
            <div className="w-full h-96 bg-gradient-to-tr from-white to-slate-400  bg-center relative">
                <img className="w-full h-full object-cover absolute mix-blend-overlay" src="https://i.postimg.cc/kM6QX46C/four-young-multicultural-volunteers-in-white-t-shirt.jpg" alt=""  />

                <div className="p-28 align-middle text-center">
                    <h1 className=" sm:text-2xl md: text-3xl lg:text-5xl">I GROW BY HELPING PEOPLE IN NEED</h1>
                    <div className=" my-10">
                        <input className="p-3 rounded-l-xl" type="text" name="" id="" defaultValue="Search " />
                        <button 
                        onClick={handleSearch1}
                        className="bg-orange-700 text-white text-xl p-2 rounded-r-lg" >Search</button> 
                                              
                    </div>
                </div>
            </div>
        </div>







    );
};

export default Banner;