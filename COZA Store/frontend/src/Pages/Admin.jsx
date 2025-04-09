import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  TextField, 
  IconButton 
} from '@mui/material';
import { 
  Add as AddIcon, 
  Edit as EditIcon, 
  Delete as DeleteIcon, 
  Dashboard as DashboardIcon 
} from '@mui/icons-material';

const Admin = () => {
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: 'Elegant Smartphone', 
      price: 599.99, 
      category: 'Electronics', 
      stock: 50 
    },
    { 
      id: 2, 
      name: 'Leather Jacket', 
      price: 249.99, 
      category: 'Clothing', 
      stock: 25 
    }
  ]);

  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleAddProduct = (newProduct) => {
    const productToAdd = {
      ...newProduct,
      id: products.length + 1
    };
    setProducts([...products, productToAdd]);
    setOpenAddDialog(false);
  };

  const handleEditProduct = (updatedProduct) => {
    setProducts(products.map(p => 
      p.id === updatedProduct.id ? updatedProduct : p
    ));
    setOpenEditDialog(false);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  const ProductForm = ({ 
    product = { name: '', price: '', category: '', stock: '' }, 
    onSubmit, 
    onClose 
  }) => {
    const [formData, setFormData] = useState(product);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = () => {
      onSubmit({
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock)
      });
    };

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
        <TextField
          name="name"
          label="Product Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="price"
          label="Price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="category"
          label="Category"
          value={formData.category}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="stock"
          label="Stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
          fullWidth
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSubmit}
          >
            Save
          </Button>
          <Button 
            variant="outlined" 
            onClick={onClose}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 4 
        }}
      >
        <DashboardIcon sx={{ mr: 2 }} />
        <Typography variant="h4">Admin Dashboard</Typography>
        <Box sx={{ ml: 'auto' }}>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<AddIcon />}
            onClick={() => setOpenAddDialog(true)}
          >
            Add Product
          </Button>
        </Box>
      </Box>

      <Paper elevation={3}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <IconButton 
                      color="primary"
                      onClick={() => {
                        setCurrentProduct(product);
                        setOpenEditDialog(true);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton 
                      color="error"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Add Product Dialog */}
      <Dialog 
        open={openAddDialog} 
        onClose={() => setOpenAddDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <ProductForm 
            onSubmit={handleAddProduct}
            onClose={() => setOpenAddDialog(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Edit Product Dialog */}
      <Dialog 
        open={openEditDialog} 
        onClose={() => setOpenEditDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <ProductForm 
            product={currentProduct}
            onSubmit={handleEditProduct}
            onClose={() => setOpenEditDialog(false)}
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Admin;