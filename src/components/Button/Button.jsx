import React from 'react'

const Button = ({ label, onClick }) => {

    return (
        <div className="container-contact100-form-btn">
            <div className="wrap-contact100-form-btn">
                <div className="contact100-form-bgbtn"></div>
                <button className="contact100-form-btn" onClick={onClick}>
                    <span>{label}</span>
                </button>
            </div>
        </div>
    )
}

export default Button
