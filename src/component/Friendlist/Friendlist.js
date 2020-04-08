import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import './Friendlist.css';

const Friendlist = (props) => {
    const { img, name, username, email, salary, company, phone } = props.fl;
    return (
        <div className="titlee">

            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="namee"><b><i>Name : {name}</i></b></h4>
                <h4 className="namee"><b><i>Nick Name : {username}</i></b></h4>
                <h4 className="namee"><b><i>Email : {email}</i></b></h4>
                <h4 className="namee"><b><i>Company : {company.name}</i></b></h4>
                <h4 className="namee"><b><i>Salary : {salary}</i></b></h4>
                <h4 className="namee"><b><i>Phone : {phone}</i></b></h4>
                <button className="main-button" onClick={()=>props.handle(props.fl)}><FontAwesomeIcon icon={faUserFriends} /><b><i>Add Friend</i></b></button>
            </div>
        </div>
    );
};



export default Friendlist;