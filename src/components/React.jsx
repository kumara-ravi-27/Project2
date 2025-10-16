import React from 'react';

const reactQA = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library developed by Facebook for building user interfaces, especially for single-page applications using a component-based architecture."
  },
  {
    question: "What are components in React?",
    answer: "Components are reusable, independent pieces of UI in React. They can be functional or class-based."
  },
  {
    question: "What is JSX?",
    answer: "JSX stands for JavaScript XML. It allows writing HTML-like syntax within JavaScript, which React components use to describe the UI."
  },
  {
    question: "What is the Virtual DOM?",
    answer: "The Virtual DOM is a lightweight in-memory representation of the real DOM. React updates the Virtual DOM first, then efficiently updates the real DOM via a diffing algorithm."
  },
  {
    question: "What are props in React?",
    answer: "Props are inputs passed to React components from their parent, used to pass data and event handlers."
  },
  {
    question: "What is state in React?",
    answer: "State is a built-in object in React components used to store data that can change over time and affect rendering."
  },
  {
    question: "What are hooks in React?",
    answer: "Hooks are special functions introduced in React 16.8 for using state and other React features in functional components without writing class components."
  },
  {
    question: "Explain useState hook.",
    answer: "useState is a hook that lets you add React state to functional components. It returns a stateful value and a function to update it."
  },
  {
    question: "What is the useEffect hook?",
    answer: "useEffect is a hook to perform side effects (like data fetching, subscriptions) in functional components. It runs after render."
  },
  {
    question: "What is the difference between state and props?",
    answer: "Props are read-only and passed from parent to child, while state is managed within the component and can change over time."
  },
  {
    question: "What is lifting state up?",
    answer: "Lifting state up means moving the state to a common parent to share it among multiple child components."
  },
  {
    question: "What are controlled components?",
    answer: "Controlled components are form elements whose value is controlled by React state, with event handlers managing changes."
  },
  {
    question: "What are higher-order components (HOC)?",
    answer: "HOCs are functions that take a component and return a new component, used for code reuse, logic abstraction, and manipulating props."
  },
  {
    question: "What is React context?",
    answer: "Context provides a way to pass data through the component tree without passing props down manually at every level."
  },
  {
    question: "How does React handle events?",
    answer: "React wraps native events into Synthetic Events, which provide a consistent interface across browsers."
  },
  {
    question: "What is reconciliation in React?",
    answer: "Reconciliation is the process through which React updates the DOM by comparing the Virtual DOM with previous versions to apply minimal changes."
  },
  {
    question: "What are fragments in React?",
    answer: "Fragments let you group a list of children without adding extra nodes to the DOM, using syntax <></> or <React.Fragment>."
  },
  {
    question: "How do you optimize performance in React?",
    answer: "Techniques include using React.memo, useMemo, useCallback, code-splitting, lazy loading, and avoiding unnecessary re-renders."
  },
  {
    question: "What is the difference between React and ReactDOM?",
    answer: "React is the core library for building components, while ReactDOM provides DOM-specific methods to mount and manage React components in the browser."
  }
];

const ReactComponent = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ReactJS Interview Questions & Answers</h1>
      {reactQA.map(({ question, answer }, index) => (
        <div key={index} style={styles.qaBlock}>
          <h3 style={styles.question}>{index + 1}. {question}</h3>
          <p style={styles.answer}>{answer}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#282c34',
    marginBottom: '24px',
  },
  qaBlock: {
    marginBottom: '14px',
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  question: {
    color: '#3f51b5',
    marginBottom: '6px',
  },
  answer: {
    color: '#333',
    marginTop: 0,
    lineHeight: 1.5,
  }
};

export default ReactComponent;
