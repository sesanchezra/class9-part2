import React from 'react'

const CardUser = ({user,change}) => {

    


    return (
        <div className='CardUser'>
            <div className='user-image'>
                <img src={`${user?.picture.large}`} alt="user-picture" />
            </div>
            <div className='user-info'>
                <p> <span>Name:</span> {`${user?.name.first} ${user?.name.last} `}</p>
                <p> <span>Age:</span> {user?.dob.age} </p>
                <p> <span>Gender: </span> {user?.gender} </p>
                <p> <span>Cellphone: </span> {user?.cell} </p>
            </div>

            <div className='button-change'>
                <button onClick={change}>
                    <ion-icon name="refresh-outline"></ion-icon>
                </button>

            </div>
        </div>
    )
}

export default CardUser
