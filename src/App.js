import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog';
import ShowBlogs from './components/ShowBlogs';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShowBlogs />} />
          <Route path="/edit" element={<EditBlog />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
