import * as React from 'react';
import Flex from '@exoTheme/components/Flex';
import { nanoid } from 'nanoid';
import { RatingProps } from '@exoTheme/components/Rating/types';

const Rating: React.FC<RatingProps> = ({
  stars = 5,
  rated = stars,
  fillColor = '#F1C928'
}) => {
  const starsArr = Array.from({ length: stars });
  const [fullyFilled, setFullyFilled] = React.useState<number>(0);
  const [rest, setRest] = React.useState<number>(0);
  React.useEffect(() => {
    const fillArr = rated.toString().split('.');
    const rest = Number(fillArr[1]?.slice(0, 2));
    setFullyFilled(Number(fillArr[0]));
    setRest(rest < 10 ? rest * 10 : rest || 0);

    return () => {
      setFullyFilled(0);
      setRest(0);
    };
  }, [rated]);

  return (
    <Flex gap="1" align="center">
      {starsArr.map((_, idx) => {
        const id = nanoid(10);
        return (
          <svg
            key={id}
            width="14px"
            height="14px"
            focusable="false"
            aria-hidden="true"
            strokeWidth="1px"
            stroke="#F1C928"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <linearGradient id={id}>
              <stop
                offset={
                  idx < fullyFilled
                    ? '100%'
                    : fullyFilled < rated && rated > idx
                    ? `${rest}%`
                    : '0%'
                }
                stopColor={fillColor}
              />
              <stop stopColor="white" />
            </linearGradient>
            <path
              d="M7.20268 1.38335L5.38879 5.06112L1.33046 5.65279C0.602682 5.75835 0.311016 6.65557 0.838794 7.16946L3.7749 10.0306L3.08046 14.0722C2.95546 14.8028 3.7249 15.35 4.36935 15.0083L7.99991 13.1L11.6305 15.0083C12.2749 15.3472 13.0443 14.8028 12.9193 14.0722L12.2249 10.0306L15.161 7.16946C15.6888 6.65557 15.3971 5.75835 14.6693 5.65279L10.611 5.06112L8.79713 1.38335C8.47213 0.727791 7.53046 0.719458 7.20268 1.38335Z"
              fill={`url(#${id})`}
            />
          </svg>
        );
      })}
    </Flex>
  );
};

export default Rating;
