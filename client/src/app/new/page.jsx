"use client";
import AuthorForm from "@/components/Forms/Author.form";
import { Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";

const newPage = () => {
  const createNewAuthor = async (data, onSuccess, onFail) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/author",
        data
      );
      const result = await response.data;
      onSuccess(result);
    } catch (error) {
      onFail(error);
    }
  };
  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        <Link href="/">Home</Link>
      </Typography>
      <Typography variant="h5">Create new Author</Typography>
      <AuthorForm onSubmit={createNewAuthor} />
    </>
  );
};

export default newPage;
