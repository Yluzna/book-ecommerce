import 'bootstrap/dist/css/bootstrap.min.css';
import './Tabla.css'
import React, { useState, useEffect } from 'react';
import apiData from '../../../api/book.json';
import { Table, Button } from 'reactstrap';
import Buttons from '../buttons/buttons';
import EditModal from '../EditModal/EditModal';
import AddModal from '../AddModal/AddModal';

const Tabla = () => {
    const [apiProducts, setApiProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editedProductName, setEditedProductName] = useState('');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    useEffect(() => {
        setApiProducts(apiData);
    }, []);
    const handleAddSubmit = (newProductName) => {

        const newBook = {
            id: apiProducts.length + 1,
            name: newProductName,
            price: 0, 
            calification: 0,
            img: ''
        };
    
        setApiProducts([...apiProducts, newBook]);
    

        setIsAddModalOpen(false);
    };
    
    const handleEdit = (productId) => {

        console.log(`Editar libro con ID: ${productId}`);
        setSelectedProductId(productId);
    };

    const handleDelete = (productId) => {

        console.log(`Eliminar libro con ID: ${productId}`);
    };

    const handleEditSubmit = (editedName) => {

        setApiProducts(
            apiProducts.map((product) =>
                product.id === selectedProductId
                    ? { ...product, name: editedName }
                    : product
            )
        );
        setSelectedProductId(null);
        setIsEditModalOpen(false);
    }

    return (
        <div>
            <h1 className="title">Dashboard</h1>
            <Button color="success" onClick={() => setIsAddModalOpen(true)}>Agregar Libro</Button>

            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Calification</th>
                        <th>Img</th>
                    </tr>
                </thead>
                <tbody>
                    {apiProducts.map((product) => (
                        <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.calification}</td>
                            <td><img src={product.img} style={{ width: '100px', height: '100px' }} /></td>
                            <td>
                                <Buttons
                                    onEdit={() => handleEdit(product.id)}
                                    onDelete={() => handleDelete(product.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <EditModal
                isOpen={isEditModalOpen}
                onEdit={(editedName) => handleEditSubmit(editedName)}
                onCancel={() => setIsEditModalOpen(false)}
                editedProductName={editedProductName}
            />

            
            <AddModal
                isOpen={isAddModalOpen}
                onAdd={(newProductName) => handleAddSubmit(newProductName)}
                onCancel={() => setIsAddModalOpen(false)}
            />

        </div>
    );
};

export default Tabla;
