import React from "react";

const Search=()=>{
    return (
        <div className="bg-gradient-to-b from-blue-950 to-blue-800 mt-40">
            <span className="flex flex-col items-center justify-center text-6xl text-center text-white font-nunito font-semibold">Welcome.</span>
            <span className="flex flex-col items-center justify-center text-white font-nunito">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
            </span>
            <div className="mt-6 flex flex-row items-center justify-center">
                <input className="w-2/5 rounded-l-full p-4" placeholder="Search for a movie or tv show..."></input>
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-r-full text-white font-nunito p-4">Search</button>
            </div>
        </div>
    )
}

export default Search;