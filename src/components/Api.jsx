import React from 'react';
import py1 from "./assets/py1.png";
import py2 from "./assets/py2.png";


const flaskQA = [
  {
    question: "What is Flask?",
    answer: "Flask is a lightweight and micro web framework written in Python. It is designed to be simple and easy to extend with minimal dependencies."
  },
  {
    question: "How does Flask differ from Django?",
    answer: "Flask is micro and minimal, giving developers more control and flexibility. Django is a full-featured, batteries-included framework with an ORM, admin panel, and many builtin tools."
  },
  {
    question: "What are the key features of Flask?",
    answer: "Flask features include a built-in development server, RESTful request dispatching, integrated support for Jinja2 templating, secure cookies, and extensions to add ORM, form validation, etc."
  },
  {
    question: "Explain Flask routing.",
    answer: "Routing in Flask maps URLs to Python functions called view functions. You use the @app.route decorator to bind URL patterns to functions."
  },
  {
    question: "How do you handle form data and JSON in Flask?",
    answer: "Form data can be accessed via `request.form` and JSON data via `request.get_json()` in Flask’s request object."
  },
  {
    question: "What is Flask’s application context and request context?",
    answer: "Flask uses contexts to make certain variables globally accessible during a request or app lifecycle, without passing them explicitly. The request context manages request-specific data, and the application context stores app-level info."
  },
  {
    question: "How do you implement middleware in Flask?",
    answer: "Middleware can be added via WSGI middleware or Flask's before_request and after_request hooks to intercept requests and responses."
  },
  {
    question: "What is a Flask Blueprint?",
    answer: "Blueprints allow you to organize application components and routes separately and later register them on the main app, facilitating modular and scalable design."
  },
  {
    question: "How do you handle database integration in Flask?",
    answer: "Flask supports many ORMs via extensions like Flask-SQLAlchemy for SQL databases, or direct use of database drivers. Flask-Migrate manages database migrations."
  },
  {
    question: "How do you deploy a Flask application?",
    answer: "Flask apps can be deployed via WSGI servers like Gunicorn or uWSGI behind a reverse proxy such as Nginx. Alternatively, platform services like Heroku, AWS Elastic Beanstalk, or Docker containers are popular choices."
  },
  {
    question: "How do you secure a Flask web application?",
    answer: "Common practices include secure session management, CSRF protection (via Flask-WTF), input validation, using HTTPS, authentication (Flask-Login), and proper error handling."
  }
];

const Api = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Python Flask Interview Questions & Answers</h1>
      {flaskQA.map(({ question, answer }, index) => (
        <div key={index} style={styles.qaBlock}>
          <h3 style={styles.question}>{index + 1}. {question}</h3>
          <p style={styles.answer}>{answer}</p>
        </div>
      ))}


      <img src={py1} alt="Python Diagram 1" className="diagram-pic" />
      <img src={py2} alt="Python Diagram 2" className="diagram-pic" />




    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    textAlign: 'center',
    color: '#282c34',
    marginBottom: '24px'
  },
  qaBlock: {
    marginBottom: '14px',
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  question: {
    color: '#3f51b5',
    marginBottom: '6px'
  },
  answer: {
    color: '#333',
    marginTop: 0,
    lineHeight: 1.5
  }
};

export default Api;
