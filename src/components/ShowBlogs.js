import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export default function ShowBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setBlogs(res);
      } catch (e) {
        alert('Error getting blogs: ' + e);
      }
    };
    getBlogs();
  }, [blogs]);

  const renderBlogs = blogs.map((blog) => {
    return (
      <tr>
        <td>{blog.id}</td>
        <td>{blog.title}</td>
        <td>{blog.body}</td>
      </tr>
    );
  });

  return (
    <Table striped bordered hover>
      <thead>
        <th>ID</th>
        <th>Title</th>
        <th>Content</th>
      </thead>
      <tbody>{renderBlogs}</tbody>
    </Table>
  );
}
