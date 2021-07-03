import React from 'react';

type Props = {
  circleAndCross: 'X' | 'O' | '';
  onClick: any;
}

const Square: React.FC<Props> = (props) => {
  return (
    <button
      className="square"
      onClick={() => props.onClick()}
    >
      {props.circleAndCross}
    </button>
  );
}

export default Square;
