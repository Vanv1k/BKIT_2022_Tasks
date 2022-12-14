// Примеры компонентов из проекта

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Task_item from './Task_item';
import Row from 'react-bootstrap/Row';

function Undone() {
    const [task_lists, setMyCards] = React.useState([
        {
            task_list: [  // task_list1
                {
                    task:
                    {
                        key: 1,
                        title: "it's title number 1",
                        text: "it's text number 1",
                        date: "it's 02.12"
                    }
                },
                {
                    task:
                    {
                        key: 2,
                        title: "it's title number 2",
                        text: "it's text2",
                        date: "it's 02.12"
                    }
                }]
        },
        {
            task_list: [  // task_list2
                {
                    task:
                    {
                        key: 3,
                        title: "it's title number 3",
                        text: "it's text2",
                        date: "it's 03.11"
                    }
                },
                {
                    task:
                    {
                        key: 4,
                        title: "it's title number 3",
                        text: "it's text number 3",
                        date: "it's 03.11"
                    }
                }]
        },
    ])
    return (
        <>
            <Container style={{ margin: '5% 10% 0 10%' }}>
                <Row style={{ margin: '5% 0 0 10%' }}>
                    {task_lists.map((item) => <Task_item task_list={item.task_list} />)}
                </Row>
            </Container>
        </>
    );
}

export default Undone;