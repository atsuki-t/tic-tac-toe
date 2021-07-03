import React from 'react';

type Props = {
  value: number
}

const Square: React.FC<Props> = (props) => {
  return (
    <button className="square">
      {props.value}
    </button>
  );
}

export default Square;
