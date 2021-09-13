import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


function SongFormPage() {
    //dispatch any action to the store
    const dispatch = useDispatch();

    //takes the current state as an argument and returns whatever data you want from it
    const sessionUser = useSelector(state => state.session.user);

    if(!sessionUser) {
        <Redirect to='/login' />
    }

    return (
        <form>
            
        </form>
    )
}
