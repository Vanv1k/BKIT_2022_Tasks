import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Task_item from './Task_item';
import Row from 'react-bootstrap/Row';

function Done() {
    //then we need to get data from server with axios
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
        {
            task_list: [  // task_list3
                {
                    task:
                    {
                        key: 5,
                        title: "it's title number 4",
                        text: "it's text number 4",
                        date: "it's 04.04"
                    }
                },
                {
                    task:
                    {
                        key: 6,
                        title: "it's title2",
                        text: "it's text2",
                        date: "it's 04.04"
                    }
                }]
        },
        {
            task_list: [  // task_list4
                {
                    task:
                    {
                        key: 7,
                        title: "it's titledfn",
                        text: "it's textfdhn",
                        date: "it's 01.12"
                    }
                },
                {
                    task:
                    {
                        key: 8,
                        title: "it's title2as",
                        text: "it's texast2",
                        date: "it's 01.12"
                    }
                }]
        },
        {
            task_list: [  // task_list5
                {
                    task:
                    {
                        key: 7,
                        title: "it's titledfn",
                        text: "it's textfdhn",
                        date: "it's 01.12"
                    }
                },
                {
                    task:
                    {
                        key: 8,
                        title: "it's title2as",
                        text: "it's texast2",
                        date: "it's 01.12"
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

export default Done;