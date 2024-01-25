import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const EditModal = ({ isOpen, onEdit, onCancel, editedProductName }) => {
    const [editedName, setEditedName] = useState(editedProductName);

    const handleEditSubmit = () => {
        onEdit(editedName);
    };

    const handleEditCancel = () => {
        onCancel();
    };

    return (
        <Modal isOpen={isOpen} toggle={handleEditCancel}>
            <ModalHeader toggle={handleEditCancel}>Editar Libro</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="editedName">Nombre:</Label>
                        <Input
                            type="text"
                            name="editedName"
                            id="editedName"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleEditSubmit}>Guardar</Button>{' '}
                <Button color="secondary" onClick={handleEditCancel}>Cancelar</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditModal;