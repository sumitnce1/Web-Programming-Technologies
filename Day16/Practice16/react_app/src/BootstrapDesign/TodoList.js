import React, { useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (event) => {
    event.preventDefault();
    const taskName = event.target.elements.taskName.value;
    if (taskName.trim()) {
      setTasks([...tasks, { name: taskName, completed: false }]);
      event.target.reset();
    }
  };

  const toggleCompleted = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <>
      <Form onSubmit={addTask}>
        <Form.Group controlId="formTaskName">
          <Form.Label>Task name</Form.Label>
          <Form.Control type="text" name="taskName" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add task
        </Button>
      </Form>
      <hr />
      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item
            key={index}
            variant={task.completed ? 'success' : ''}
            onClick={() => toggleCompleted(index)}
          >
            {task.name}
            <Button
              variant="danger"
              size="sm"
              className="float-right"
              onClick={() => deleteTask(index)}
            >
              X
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default TodoList;
