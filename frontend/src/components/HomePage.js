import React, { useState, useEffect } from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';


const HomePage = () => {

    const [movimenti, setMovimenti] = useState([]);

    const data = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
    ];

    const renderMovimento = (mov,color) => {

        return (
            <tr className={color}>
                <td className="border-2 border-slate-300">{mov.categoria}</td>
                <td className="border-2 border-slate-300">{mov.descrizione}</td>
                <td className="border-2 border-slate-300">{mov.costo}</td>
            </tr>
        )
    }

    const renderMovimenti = () => {
        return (
            <div class="md:row-span-1 lg:row-span-4 shadow-md lg:col-span-4 h-fit mb-4 bg-white rounded-lg">
                    <div class="lg:h-8 mt-4 font-medium ml-4">
                        Movimenti di oggi
                    </div>
                    <div className="ml-4 mr-4 max-h-72 mb-4 overflow-scroll">
                        <table className="w-full table-auto border-2">
                            <thead>
                                <tr>
                                    <th className="text-left border-2 border-slate-300">Categoria</th>
                                    <th className="text-left border-2 border-slate-300">Descrizione</th>
                                    <th className="text-left border-2 border-slate-300">Costo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movimenti.map((mov, ind) => {
                                    if (ind % 2 == 0)
                                        return renderMovimento(mov, "bg-slate-200");
                                    else
                                        return renderMovimento(mov, "bg-white");
                                })}
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }

    const calcolaSaldo = () => {
        
        let saldo = 0;
        movimenti.forEach((mov) => {
            if (mov.tipo === 'Entrata')
                saldo += mov.costo;
            else
                saldo -= mov.costo;
        })

        return saldo;
    }
    useEffect( () => {
        fetch("/api/movimenti")
        .then((response) => response.json())
        .then((data) => {
            setMovimenti(data);
        })
    }, []);    

    return (
        <div class="grid lg:grid-rows-8 md:grid-cols-1 md:gap-4  md:grid-rows-5  lg:grid-cols-4 lg:gap-6 w-1/2 h-screen">
            <div class="md:row-span-1 shadow-md md:col-span-1 lg:row-span-4 lg:col-span-2 bg-white rounded-lg md:mt-4">
                <div class="lg:h-1/6 mt-4 font-medium ml-4">
                    Saldo attuale
                </div>
                <div class = "h-3/6">
                    <VictoryBar></VictoryBar>
                </div>
            </div>
            <div class="md:row-span-1 lg:row-span-4 shadow-md lg:col-span-1 bg-white rounded-lg lg:mt-4">
                <div class="lg:h-1/6 mt-4 font-medium ml-4">
                    Guadagni
                </div>
            </div>
            <div class="md:row-span-1 lg:row-span-4 shadow-md lg:col-span-1 bg-white rounded-lg lg:mt-4">
                <div class="lg:h-1/6 mt-4 font-medium ml-4">
                    Spese
                </div>
                <div>

                </div>
            </div>
            {movimenti.length > 0 ? renderMovimenti() : null}
        </div>
    
    )
}

export default HomePage;