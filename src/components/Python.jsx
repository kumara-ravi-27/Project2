import React from 'react';
import profilePic from "./assets/python_dt.png";

const pythonQA = [

  
  {
    question: "What is FastAPI and how does it compare to other Python web frameworks?",
    answer: "FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints. It offers automatic interactive API docs, validation, and asynchronous support, often faster than Flask or Django REST Framework."
  },
  {
    question: "How do you create an asynchronous API endpoint in FastAPI?",
    answer: "By defining the endpoint function with async def, FastAPI supports async operations allowing better concurrency."
  },
  {
    question: "How does FastAPI utilize Python type hints for request validation?",
    answer: "FastAPI uses Pydantic models and Python type hints to validate inputs automatically, ensuring well-structured and typed request data."
  },
  {
    question: "How do you handle dependency injection in FastAPI?",
    answer: "FastAPI provides a Depends mechanism that injects dependencies like database sessions or authentication services into endpoints."
  },
  {
    question: "How do you deploy a FastAPI app on AWS? What AWS services are common choices?",
    answer: "FastAPI apps are commonly deployed on AWS EC2 instances, AWS Elastic Beanstalk, or containerized using Amazon ECS/EKS. AWS Lambda with API Gateway can also host FastAPI using serverless approaches."
  },
  {
    question: "How do Python developers interact with AWS services?",
    answer: "Using AWS SDK for Python, called boto3, developers can programmatically interact with services like S3, DynamoDB, Lambda, and EC2."
  },
  {
    question: "What AWS services are often used for deploying scalable Python applications?",
    answer: "AWS Elastic Beanstalk, EC2, Lambda (serverless), DynamoDB (NoSQL DB), S3 (object storage), and API Gateway."
  },
  {
    question: "How do you manage secrets and credentials securely in AWS for Python apps?",
    answer: "Using AWS Secrets Manager or AWS Systems Manager Parameter Store, integrated with environment variables or injected via IAM roles."
  },
  {
    question: "How is Git used in Python and FastAPI development workflows?",
    answer: "Git is used for version control, managing code branches, merging features, and collaborating across teams with CI/CD pipelines automating testing and deployment."
  },
  {
    question: "What are common Git branching strategies for multi-developer API projects?",
    answer: "GitFlow, feature branching, trunk-based development, and pull request workflows are commonly used."
  },
  {
    question: "How do you integrate AWS deployment with Git-based CI/CD pipelines?",
    answer: "Using AWS CodePipeline, GitHub Actions, GitLab CI, or Jenkins to automate build, test, and deployment steps triggered by Git commits/pull requests."
  },
  {
    question: "How do you rollback a deployment in AWS when a FastAPI version causes issues?",
    answer: "Use versioned deployments with AWS Elastic Beanstalk or ECS task definitions to revert to previous versions, or manage Lambda versions with aliases for quick rollback."
  }
];

const Python = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Python / FastAPI / AWS / Git Interview Questions & Answers</h1>
      {pythonQA.map(({ question, answer }, index) => (
        <div key={index} style={styles.qaBlock}>
          <h3 style={styles.question}>{index + 1}. {question}</h3>
          <p style={styles.answer}>{answer}</p>
        </div>
      ))}

      
      <img src={profilePic} alt="Ravi Kumar" className="profile-pic" />
      

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

export default Python;
