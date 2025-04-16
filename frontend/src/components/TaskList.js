// frontend/src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks on component mount
  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.error('Error fetching tasks:', err);
      });
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} {task.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
