"use client";
import {
  Button,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/author");
      const result = await response.data;
      setAuthors(result);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAuthor = async (id, idx) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/author/${id}`
      );
      const result = await response.data;
      setAuthors((prevVal) => {
        const filtered = prevVal.filter((item) => {
          item._id !== id;
        });
        return [...filtered];
      });
    } catch (error) {}
  };

  useEffect(() => {
    getAuthors();
  }, []);

  return (
    <Container maxWidth="xl">
      <Link href="/new">
        <Typography variant="h5">Add an Author</Typography>
      </Link>
      <Typography variant="h6">We have quotes by</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors.map((item, idx) => {
              return (
                <TableRow key={idx}>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2} justifyContent="center">
                      <Link href={`/edit/${item._id}`}>
                        <Button variant="contained" color="info">
                          Edit
                        </Button>
                      </Link>

                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => deleteAuthor(item._id)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
