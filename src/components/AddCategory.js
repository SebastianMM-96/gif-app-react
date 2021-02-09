import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            /** Recibir el setCategories */
            setCategories(ctg => [inputValue, ...ctg]);
            setInputValue('');
        }
        console.log("Enviado exitosamente");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type = "text"
                    value = {inputValue}
                    onChange = {handleInputChange}
                    placeholder = "Search some GIF'S..."
                />
            </form>
        </div>
    )
}

/**
 * Candado para la funcion
 */
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
