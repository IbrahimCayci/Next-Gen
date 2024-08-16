import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./AddCourse.css"

const AddCourse = ({ sidebar, setSidebar }) => {
    const [thumbnail, setThumbnail] = useState(null);
    const [introVideo, setIntroVideo] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const handleThumbnailChange = (e) => {
        setThumbnail(URL.createObjectURL(e.target.files[0]));
    };

    const handleIntroVideoChange = (e) => {
        setIntroVideo(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const formData = new FormData();
        formData.append('thumbnail', thumbnail);
        formData.append('introVideo', introVideo);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);

        try {
            const response = await fetch('/api/add-course', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                // Handle success (e.g., redirect to another page or show a success message)
            } else {
                console.error('Error:', response.statusText);
                // Handle error (e.g., show an error message)
            }
        } catch (error) {
            console.error('Network error:', error);
            // Handle network error (e.g., show an error message)
        }
    };

    return (
        <div className="add-course-container">
            <Navbar setSidebar={setSidebar} />
            <Sidebar sidebar={sidebar} />
            <div className={`add-course-form ${sidebar?"":"large-add-course-form"}`} >
                <h2>Add New Course</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="thumbnail">Upload Thumbnail:</label>
                        <input
                            type="file"
                            id="thumbnail"
                            accept="image/*"
                            onChange={handleThumbnailChange}
                        />
                        {thumbnail && <img src={thumbnail} alt="Thumbnail preview" className="thumbnail-preview" />}
                    </div>

                    <div className="form-group">
                        <label htmlFor="introVideo">Upload Intro Video:</label>
                        <input
                            type="file"
                            id="introVideo"
                            accept="video/*"
                            onChange={handleIntroVideoChange}
                        />
                        {introVideo && <video src={introVideo} controls className="video-preview" />}
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">Video Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Video Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="4"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price ($):</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            min="0"
                            step="0.01" // Allows decimal values
                        />
                    </div>

                    <button type="submit" className="submit-button">Add Course</button>
                </form>
            </div>
        </div>
    );
}

export default AddCourse