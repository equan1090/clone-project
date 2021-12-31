import React, { useEffect, useState } from 'react'
import { getUser } from '../../store/user'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './AlbumCard.css'
function AlbumCard(props) {
    const dispatch = useDispatch()
    const album = props.album
    const userId = props.userId
    const user = useSelector(state => state.users.user)

    useEffect(() => {
        dispatch(getUser(userId))

    }, [dispatch, userId])


    return (
        <>
            <div className='album-card'>
                <Link className='card-link' to={`/albums/${album?.id}/songs`}>
                    <div className='album-card-img'>
                        <img src={album?.imageUrl} alt="" />
                    </div>
                    <div className='album-card-title'>
                        <strong id='album-card-name'>{album?.title}</strong>
                    </div>
                </Link>
                <div className='album-card-owner'>
                    <Link id="album-card-link" to={`/users/${album?.userId}`}>More from Creator</Link>
                </div>
            </div>
        </>

    )
}

export default AlbumCard
