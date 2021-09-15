import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAlbums } from "../../store/album";
import { useParams } from "react-router-dom";
function AlbumPage() {

    const dispatch = useDispatch();
    const params = useParams()
    const albums = useSelector(state => state.albums.albums);
    useEffect(() => {
        dispatch(getUserAlbums(params.userId))
    }, [dispatch])

    return(
        <div>
            {albums?.map((album) => (
                <p>{album.title}</p>
            ))}
        </div>
    )

}

export default AlbumPage;
