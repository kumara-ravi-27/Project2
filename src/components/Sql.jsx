import React from "react";
import "./Sql.css";

const sqlQA = [
  {
    question: "What is SQL?",
    answer: "SQL (Structured Query Language) is used to communicate with and manipulate databases.",
  },
  {
    question: "How to find the 2nd highest salary from an Employee table?",
    answer: `SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);`,
  },
  {
    question: "What is the difference between INNER JOIN and LEFT JOIN?",
    answer:
      "INNER JOIN returns matching rows from both tables; LEFT JOIN returns all rows from the left table and matched rows from the right.",
  },
  {
    question: "Write a query to find employees earning more than the average salary.",
    answer: `SELECT * FROM Employee WHERE salary > (SELECT AVG(salary) FROM Employee);`,
  },
  {
    question: "How to find duplicate records in a table?",
    answer: `SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name HAVING COUNT(*) > 1;`,
  },
  {
    question: "What is a primary key?",
    answer: "A primary key uniquely identifies each record in a table.",
  },
  {
    question: "Explain the difference between DELETE and TRUNCATE.",
    answer:
      "DELETE removes rows one by one and can be rolled back; TRUNCATE removes all rows quickly and cannot be rolled back.",
  },
  {
    question: "What are aggregate functions?",
    answer:
      "Functions like COUNT, SUM, AVG, MIN, MAX to compute summary values.",
  },
  {
    question: "Write a query to fetch the top 3 highest salaries.",
    answer: `SELECT DISTINCT salary FROM Employee ORDER BY salary DESC LIMIT 3;`,
  },
  {
    question: "What is a subquery? Give an example.",
    answer: `A query inside another query.\nExample:\nSELECT name FROM Employee WHERE department_id = (SELECT id FROM Department WHERE name='Sales');`,
  },
  {
    question: "What is normalization?",
    answer:
      "Process of organizing data to minimize redundancy and improve integrity.",
  },
  {
    question: "What is a foreign key?",
    answer:
      "A field in a table that uniquely identifies a row in another table, enforcing referential integrity.",
  },
  {
    question: "Explain the use of GROUP BY.",
    answer:
      "Groups rows that have the same values and allows aggregate functions on each group.",
  },
  {
    question: "Difference between UNION and UNION ALL?",
    answer:
      "UNION removes duplicates; UNION ALL includes duplicates.",
  },
  {
    question: "What is an index?",
    answer:
      "A database object to speed up query retrieval.",
  },
  {
    question: "Write a query to delete duplicate records while keeping one.",
    answer: `DELETE FROM Employee WHERE id NOT IN (SELECT MIN(id) FROM Employee GROUP BY column_name);`,
  },
  {
    question: "What are SQL constraints?",
    answer:
      "Rules enforced on data columns like PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK.",
  },
  {
    question: "How to handle NULL values in SQL?",
    answer:
      "Use IS NULL or IS NOT NULL operators; COALESCE to replace NULL with values.",
  },
  {
    question: "What is a VIEW?",
    answer:
      "A virtual table based on the result-set of a query.",
  },
  {
    question: "Explain transaction and its properties.",
    answer:
      "A unit of work with ACID properties (Atomicity, Consistency, Isolation, Durability).",
  },
  {
    question: "Write a query to find employees with no manager (NULL manager_id).",
    answer: `SELECT * FROM Employee WHERE manager_id IS NULL;`,
  },
  {
    question: "What is a JOIN? Name types of JOINs.",
    answer:
      "JOINS combine rows from two or more tables based on a related column. Types: INNER, LEFT, RIGHT, FULL OUTER, CROSS JOIN.",
  },
  {
    question: "Write SQL to find the total sales by year.",
    answer: `SELECT YEAR(sale_date) AS Year, SUM(amount) AS TotalSales FROM Sales GROUP BY YEAR(sale_date);`,
  },
  {
    question: "How to use the ORDER BY clause?",
    answer:
      "Sorts result-set in ascending (default) or descending order.\nExample:\nSELECT * FROM Employee ORDER BY salary DESC;",
  },
  {
    question: "Explain the difference between WHERE and HAVING.",
    answer:
      "WHERE filters rows before grouping; HAVING filters groups after aggregation.",
  },
];




const Sql = () => {
  return (
    <div className="sql-container" style={{ textAlign: "left" }}>
      <h2 className="sql-title">SQL Interview Questions and Answers</h2>
      {sqlQA.map((item, index) => (
        <div key={index} className="sql-item">
          <h4 className="sql-question">{index + 1}. {item.question}</h4>
          <pre className="sql-answer">{item.answer}</pre>
        </div>
      ))}
    </div>
  );
};

export default Sql;
