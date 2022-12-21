// Примеры компонентов из проекта

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Week from './Week';

function Favorites() {
  return (
    <Week task_list1={[{task:{title:"Title", text: "Text", date: "It's 11.08"}}, {task:{title:"It's title2", text: "it's text2", date: "it's 12.12"}}]} />
  );
}

export default Favorites;