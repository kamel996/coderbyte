import React, { useState } from "react";

const articles = [
  {
    id: 1,
    title: "Deep Dive into Python Decorators",
    content:
      "Python decorators are a powerful feature that allows you to modify the behavior of functions or methods. In this article, we'll explore various use cases and best practices for implementing decorators in your Python projects.",
  },
  {
    id: 2,
    title: "Mastering Asynchronous JavaScript with Promises and Async/Await",
    content:
      "Asynchronous programming is crucial for building responsive and efficient web applications. This article provides a comprehensive guide to working with Promises and the Async/Await syntax in JavaScript, covering common patterns and potential pitfalls.",
  },
  {
    id: 3,
    title: "Exploring the World of Data Structures in C++",
    content:
      "Understanding data structures is fundamental to writing efficient algorithms. This article delves into the realm of C++ data structures, including arrays, linked lists, trees, and graphs. Gain insights into when and how to use each data structure for optimal performance.",
  },
  {
    id: 4,
    title: "Dive into Machine Learning with TensorFlow",
    content:
      "Machine learning is transforming industries, and TensorFlow is at the forefront of this revolution. Learn the basics of machine learning, explore TensorFlow's capabilities, and build your first machine learning model in this comprehensive guide.",
  },
  {
    id: 5,
    title:
      "Building Scalable Microservices Architecture with Node.js and Docker",
    content:
      "Microservices architecture is a popular approach for building scalable and maintainable applications. This article walks you through the process of designing and implementing microservices using Node.js and containerization with Docker. Discover best practices and patterns for creating resilient microservices.",
  },
  {
    id: 6,
    title:
      "Securing Your Web Applications: A Guide to Web Application Security",
    content:
      "Security is a top priority in web development. This article provides an in-depth guide to securing your web applications, covering topics such as HTTPS, input validation, authentication, and authorization. Stay one step ahead of potential threats with practical security tips.",
  },
];

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const highlightText = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");

    console.log(regex, "regex");
    const parts = text.split(regex);
    console.log(parts, "parts");

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div>
      <h1>Search App</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h3>{highlightText(article.title, searchQuery)}</h3>
            <p>{highlightText(article.content, searchQuery)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
