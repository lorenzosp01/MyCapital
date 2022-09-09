import React from "react";

const HomePage = () => {
    return (
        <div class="grid lg:grid-rows-8 md:grid-cols-1 md:gap-4  md:grid-rows-5  lg:grid-cols-4 lg:gap-6 w-1/2 h-screen">
            <div class="md:row-span-1  md:col-span-1 lg:row-span-4 lg:col-span-2 bg-white rounded-lg md:mt-4">
                <div class="lg:h-1/6 mt-4 font-medium ml-4">
                    Saldo attuale
                </div>
                <div>

                </div>
            </div>
            <div class="md:row-span-1 lg:row-span-4 lg:col-span-1 bg-white rounded-lg lg:mt-4">
                <div class="lg:h-1/6 mt-4 font-medium ml-4">
                    Guadagni
                </div>
            </div>
            <div class="md:row-span-1 lg:row-span-4 lg:col-span-1 bg-white rounded-lg lg:mt-4">
                <div class="lg:h-1/6 mt-4 font-medium ml-4">
                    Spese
                </div>
                <div>

                </div>
            </div>
            <div class="md:row-span-1 lg:row-span-2 lg:col-span-4 bg-white rounded-lg">
                <div class="lg:h-1/6 mt-4 font-medium ml-4">
                    Ultimi movimenti
                </div>
                <div>
                    
                </div>
            </div>
            <div class="md:row-span-1 lg:row-span-2 lg:col-span-4 bg-white rounded-lg md:mb-4">
                
            </div>
        </div>
    
    )
}

export default HomePage;