import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  console.log('CardList');

  const cardArray = robots.map(robot => (
    <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
  ));

  return <div>{cardArray}</div>;
};

export default CardList;
