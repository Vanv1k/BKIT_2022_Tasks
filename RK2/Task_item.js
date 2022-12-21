// Примеры компонентов из проекта

import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal_task from './modal_task';

function Task_item(props) {
    const [modalShow, setModalShow] = React.useState(false);
    console.log(props);
    console.log(props.task_list[0].task.date);
    return (
        
        <Card bg='white'
        text='black'
        style={{ width: '20rem' }}
        className="mb-2">
            <Card.Header>{props.task_list[0].task.date}</Card.Header> 
          <Card.Body>
            <Card.Title>Plans on {props.task_list[0].task.date}</Card.Title>
            <Card.Text> 
                {props.task_list.map((task) => {
                    <h1>{task.title}</h1>
                })}
            </Card.Text>
          </Card.Body>
        </Card>

    );
}

export default Task_item;
