import { createContext, useContext, useState } from "react";


export const SongContext = createContext();

export const SongProvider = (props) => {
    const [currentUrl, setCurrentUrl] = useState('')

    return (
        <SongContext.Provider value={{currentUrl, setCurrentUrl}}>
            {props.children}
        </SongContext.Provider>
    )


}

export const useSongUrl = () => {
    return useContext(SongContext);
}
