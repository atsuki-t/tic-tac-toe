import React from 'react';

type Props = {
  value: number
}

const Square: React.FC<Props> = (props) => {
  return (
    <button>
      {props.value}
    </button>
  );
}

export default Square;
