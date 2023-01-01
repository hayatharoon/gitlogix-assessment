import React from 'react';

export default function Facebook(props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' {...props}>
      <path
        d='M 30.140625 2 C 26.870375 2 24.045399 2.9969388 22.0625 4.9667969 C 20.079601 6.936655 19 9.823825 19 13.367188 L 19 18 L 13 18 A 1.0001 1.0001 0 0 0 12 19 L 12 27 A 1.0001 1.0001 0 0 0 13 28 L 19 28 L 19 47 A 1.0001 1.0001 0 0 0 20 48 L 28 48 A 1.0001 1.0001 0 0 0 29 47 L 29 28 L 36 28 A 1.0001 1.0001 0 0 0 36.992188 27.125 L 37.992188 19.125 A 1.0001 1.0001 0 0 0 37 18 L 29 18 L 29 14 C 29 12.883334 29.883334 12 31 12 L 37 12 A 1.0001 1.0001 0 0 0 38 11 L 38 3.3457031 A 1.0001 1.0001 0 0 0 37.130859 2.3554688 C 36.247185 2.2382213 33.057174 2 30.140625 2 z M 30.140625 4 C 32.578477 4 34.935105 4.195047 36 4.2949219 L 36 10 L 31 10 C 28.802666 10 27 11.802666 27 14 L 27 19 A 1.0001 1.0001 0 0 0 28 20 L 35.867188 20 L 35.117188 26 L 28 26 A 1.0001 1.0001 0 0 0 27 27 L 27 46 L 21 46 L 21 27 A 1.0001 1.0001 0 0 0 20 26 L 14 26 L 14 20 L 20 20 A 1.0001 1.0001 0 0 0 21 19 L 21 13.367188 C 21 10.22255 21.920305 7.9269075 23.472656 6.3847656 C 25.025007 4.8426237 27.269875 4 30.140625 4 z'
        fill={props.color ? props.color : '#fff'}
      />
    </svg>
  );
}