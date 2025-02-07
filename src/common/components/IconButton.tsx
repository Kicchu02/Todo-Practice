import React from "react";

interface IconButtonProps {
  src: string;
  size: number;
  color: string;
}

export const IconButton = ({
  src,
  size,
  color,
}: IconButtonProps): React.ReactElement => {
  return (
    <button>
      <img src={src} width={size} height={size} color={color} />
    </button>
  );
};
