import { useState } from "react";

const BooksForm = () => {


    const [formData, setFormData] = useState({

        title: "",
        author: "",
        publishedYear: "",
        genre: "",
        language: "",
        country: "",
        rating: "",
        summary: "",
        coverImageUrl: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((preState) => ({
            ...preState, [name]: name === "publishedYear" || name === "rating" ? parseInt(value) : value
        }))

    }

    const formHandler = async(event) => {
        event.preventDefault()

        try{
            const response = await fetch("https://hotel-project-backend-git-main-tek-rajs-projects.vercel.app/books", 
                {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            )

            if(!response.ok){
                throw "Failed to add Book."
            }

            const data = await response.json()

            console.log("Add Book", data)

        }catch(error){
            console.log(error)
        }
    }


  return (
    <div>
      <h1>Add New Book</h1>

      <form onSubmit={formHandler}>
        <label htmlFor="title">Title:</label>
        <br />

        <input type="text" name="title" id="title" onChange={handleChange} value={FormData.title} />
        <br />
        <br />

        <label htmlFor="author">Author:</label>
        <br />

        <input type="text" name="author" id="author" onChange={handleChange} value={FormData.author} />
        <br />
        <br />

        <label htmlFor="publishedYear">Published Year:</label>
        <br />

        <input type="number" name="publishedYear" id="publishedYear" onChange={handleChange} value={FormData.publishedYear} />
        <br />
        <br />

        <label htmlFor="genre">Genre:</label>
        <br />

        <input type="text" name="genre" id="genre" onChange={handleChange} value={FormData.genre} />
        <br />
        <br />

        <label htmlFor="language">Language:</label>
        <br />

        <input type="text" name="language" id="language" onChange={handleChange} value={FormData.language} />
        <br />
        <br />

        <label htmlFor="country">Country:</label>
        <br />

        <input type="text" name="country" id="country" onChange={handleChange} value={FormData.country} />
        <br />
        <br />

        <label htmlFor="rating">Rating:</label>
        <br />

        <input type="number" name="rating" id="rating" onChange={handleChange} value={FormData.rating} />
        <br />
        <br />

        <label htmlFor="summary">Summary:</label>
        <br />

        <input type="text" name="summary" id="summary" onChange={handleChange} value={FormData.summary} />
        <br />
        <br />

        
        <label htmlFor="coverImageUrl">CoverImageUrl:</label>
        <br />

        <input type="url" name="coverImageUrl" id="coverImageUrl" onChange={handleChange} value={FormData.coverImageUrl} />
        <br />
        <br />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BooksForm;
