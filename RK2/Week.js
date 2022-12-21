// Примеры компонентов из проекта

import React from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Task_item from './Task_item';

function Week(props) {
    // console.log(props);
    return (
        <Container>
            <h1></h1>
            <h1>{props.task_list1[1].task.date}</h1> 
            <Row>
                <Col><Task_item task_list = {props.task_list1}/></Col>
                <Col><Task_item task_list = {props.task_list1 }/></Col>
                <Col><Task_item task_list = {props.task_list1}/></Col>
            </Row>
            <Row>
                <Col><Task_item task_list = {props.task_list1}/></Col>
                <Col><Task_item task_list = {props.task_list1}/></Col>
                <Col><Task_item task_list = {props.task_list1}/></Col>
            </Row>
            <Row>
                <Col><Task_item task_list = {props.task_list1}/></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Week;
