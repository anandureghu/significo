import React from "react";

interface Props {
  url: string;
  width?: string;
  height?: string;
  alt?: string;
  position?: string;
}

const Avatar: React.FC<Props> = ({ url, width, height, alt, position }) => {
  return (
    <div>
      <img
        src={url}
        alt={alt}
        style={{
          width,
          height,
          objectPosition: position,
        }}
        className={`object-cover rounded-full`}
      />
    </div>
  );
};

export default Avatar;
