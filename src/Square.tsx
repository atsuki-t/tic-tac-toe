import React from 'react';

type Props = {
  circleAndCross: 'X' | 'O' | '';
  number: number;
  onClick: any;
}

const Square: React.FC<Props> = (props) => {
  return (
    <button
      className={'square square-' + props.number}
      onClick={() => props.onClick()}
    >
      {props.circleAndCross}
    </button>
  );
}

export default Square;
