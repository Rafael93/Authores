"use client";
import AuthorForm from "@/components/Forms/Author.form";
import { Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditPage = () => {
  const { id } = useParams();

  const [author, setAuthor] = useState({});

  const updateAuthor = async (data, onSuccess, onFail) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/author/${id}`,
        data
      );
      const result = await response.data;
      onSuccess(result);
    } catch (error) {
      onFail(error);
    }
  };

  const getAuthorInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/author/${id}`
      );
      const result = await response.data;
      setAuthor(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAuthorInfo();
  }, []);
  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        <Link href="/">Home</Link>
      </Typography>
      <Typography variant="h5">Edit Author</Typography>
      <AuthorForm onSubmit={updateAuthor} preset={author} />
    </>
  );
};

export default EditPage;
