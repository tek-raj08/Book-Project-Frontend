import { useState } from "react";
import useFetch from "../useFetch";

const Books = () => {
  const { data, loading, error } = useFetch("https://book-project-git-main-tek-rajs-projects.vercel.app/books");

  const [successMessage, setSuccessMessage] = useState("");
  // console.log(data)
  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`https://book-project-git-main-tek-rajs-projects.vercel.app/books/${bookId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw "Failed to delete book.";
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("Book deleted successfully.");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {data?.book?.map((b) => (
          <li key={b._id}>
            {b.title}{" "}
            <button onClick={() => handleDelete(b._id)}>Delete</button>{" "}
          </li>
        ))}
      </ul>
      <p>{successMessage}</p>
    </div>
  );
};

export default Books;
