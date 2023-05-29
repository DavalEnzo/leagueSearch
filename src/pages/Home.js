import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Account from "../components/Account";

function Home() {
    const {name} = useParams();
    const [value, setValue] = useState('');

    const getValue = (e) => {
        setValue(e.target.value);
    }

    if(!name) {
        return (
            <div className="m-auto">
                <header className="header sticky top-0 bg-white shadow-md flex px-8 py-2">
                    <div className="flex items-center gap-2">
                        <h1 className="font-bold text-xl">
                            <a href="/">
                                League Search
                            </a>
                        </h1>

                        <hr className="border-2 h-10 border-green-400"></hr>
                    </div>
                </header>
                <h1 className="text-center text-5xl my-12">
                    Bienvenue sur League Search !
                </h1>

                <div className="flex justify-center items-center my-32 flex-col gap-5">
                    <div>
                        <h3 className="text-2xl">Sélectionner un compte à rechercher</h3>
                    </div>
                    <div className="w-1/2 flex justify-center items-center gap-3">
                        <input onChange={getValue} className="w-full border border-slate-300 border-solid px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 ring-blue-500" placeholder="Compte à rechercher" type="text"></input>
                        <Link to={`/${value}`} className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 active:ring-2">Go!</Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="m-auto">
                <header className="header sticky top-0 bg-white shadow-md flex px-8 py-2">
                    <div className="flex items-center gap-2">
                        <h1 className="font-bold text-xl">
                            <a href="/">
                                League Search
                            </a>
                        </h1>

                        <hr className="border-2 h-10 border-green-400"></hr>
                    </div>
                </header>
                <h1 className="text-center text-5xl my-12">
                    Bienvenue sur League Search !
                </h1>

                <div className="flex justify-center items-center my-32 flex-col gap-5">
                    <div>
                        <h3 className="text-2xl">Sélectionner un compte à rechercher</h3>
                    </div>
                    <div className="w-1/2 flex justify-center items-center gap-3">
                        <input onChange={getValue} className="w-full border border-slate-300 border-solid px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 ring-blue-500" placeholder="Compte à rechercher" type="text"></input>
                        <Link to={`/${value}`} className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 active:ring-2">Go!</Link>
                    </div>
                    <Account name={name}/>
                </div>
            </div>
        )
    }
}

export default Home;
