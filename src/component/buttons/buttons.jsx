import React from 'react'
import { Button } from 'reactstrap';
import './buttons.css'

const Buttons = ({ onEdit, onDelete, onAdd }) => {
    return (
        <div className="buttons">
            
            <Button color="info" onClick={onEdit}>Editar</Button>{' '}
            <Button color="danger" onClick={onDelete}>Eliminar</Button>
        </div>
    );
};
export default Buttons