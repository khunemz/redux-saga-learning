import React from 'react'

export const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-title">{props.user.username}</div>
        <div className="card-body">
          <h5>{props.user.company.name}</h5>
          <p className="card-text">{props.user.company.catchPhrase}</p>
        </div>
      </div>
    </>
  )
}
