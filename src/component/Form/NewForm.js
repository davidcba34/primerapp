import React from "react";

import Form from './Form'


const NewForm = (props) => {

    const saveDataHandler = (newForm) =>{
        const formData = {
            ...newForm,
            id: Math.random().toString()
        }
        props.onAddForm(formData)
    }

    return(
        <div className="NewForm">
            <Form onSaveData ={saveDataHandler}/>
        </div>
    );
};
export default NewForm;