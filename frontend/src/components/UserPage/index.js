import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";


function UserPage() {
    const dispatch = useDispatch();
    
    // const sessionUser = useSelector((state) => state.session.user);

    return(
        <div>
            Hello
        </div>
    )
}

export default UserPage;
