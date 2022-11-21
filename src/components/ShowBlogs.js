import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export default function ShowBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        // const res = await axios.get(
        //   'https://jsonplaceholder.typicode.com/posts'
        // );
        // console.log(res);

        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const resBlogs = await res.json();
        setBlogs(resBlogs);
      } catch (e) {
        alert('Error getting blogs: ' + e);
      }
    };
    getBlogs();
  }, []);

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
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>{renderBlogs}</tbody>
    </Table>
  );
}
