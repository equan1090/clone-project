import React, { useContext, useState } from "react";


export const SongContext = React.createContext();

export const SongProvider = ({children}) => {
    const [currentUrl, setCurrentUrl] = useState('')

    return (
        <SongContext.Provider value={{currentUrl, setCurrentUrl}}>
            {children}
        </SongContext.Provider>
    )


}

export const useSongUrl = () => {
    return useContext(SongContext);
}
