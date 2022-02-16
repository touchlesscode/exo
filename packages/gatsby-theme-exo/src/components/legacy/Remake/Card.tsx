import { Link } from 'gatsby';
import * as React from 'react';
import { Box, Flex, Image, Text, ThemeUIStyleObject } from 'theme-ui';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { CardsDataType, ListingType } from '@hooks/filters/types';
import formatVdpLink from '@utils/formatVdpLink';
import formatter from "@utils/currency";
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import Skeleton from './Skeleton'
import { keyframes } from '@emotion/react';

interface CardProps {
  item?: CardsDataType
  lazyLoad?: boolean
  showSkeleton?: boolean;
  fadein?: boolean;
  placeholderImage?: any
  duration?: number
}

const Card: React.FC<CardProps> = ({ item, fadein, duration, lazyLoad, showSkeleton, placeholderImage }) => {
  const gatsbyPlaceholder = getImage(placeholderImage)
  const itemImage = getImage(item?.image)
  const itemImageOrPlaceholder = itemImage || gatsbyPlaceholder
  const ref = React.useRef<HTMLAnchorElement | null>(null)
  const entry = useIntersectionObserver(ref, { freezeOnceVisible: true })
  const isVisible = !!entry?.isIntersecting

  const cardStyles: ThemeUIStyleObject = {
    borderRadius: "0.625rem",
    height: "100%",
    zIndex: 1,
    transform: 'translateY(0)',
    overflow: "hidden",
    boxShadow: "0 18px 25px 0 rgba(0, 0, 0, 0.06)",
    backfaceVisibility: "hidden",
    transition: "transform 150ms ease-in-out",
    flexDirection: 'column',
    "&:hover": {
      boxShadow: item ? "0 18px 25px 0 rgba(0, 0, 0, 0.10) !important;" : 'none',
      top: item ? "-1px" : '0',
    },
  };
  
  const listingTypeColors: Record<ListingType, string> = {
    "U": "#0E6655",
    "N": "#2669B0",
  }

  const listingTypeLabels: Record<ListingType, string> = {
    "U": "USED",
    "N": "NEW"
  }

  const cardInfoStyle = {
    topText: {
      fontSize: "0.775rem",
      lineHeight: "1.313rem",
      fontWeight: "medium",
    },
    titleLeft: {
      fontSize: "1.03rem",
      lineHeight: "1.375rem",
      fontWeight: "500",
      color: "#333333",
      display: '-webkit-box',
      overflow: 'hidden',
      WebkitLineClamp: '2',
      WebkitBoxOrient: 'vertical',
      textOverflow: 'ellipsis',
    },
    tagLabel: {
      fontSize: "0.8rem",
      fontWeight: "300",
      lineHeight: "normal",
    },
    certificationLabel: {
      fontSize: "0.8rem",
      fontWeight: "300",
      lineHeight: "normal",
      color: "#E67E22",
    }
  };

  const textContainer: ThemeUIStyleObject = {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: "0.3rem 0",
    padding: "1rem",
    flexGrow: 1
  }

  return (
    <Box
      as={item ? Link : 'div'}
      ref={ref}
      to={item ? formatVdpLink({
        year: item?.year,
        brand: item?.brand,
        model: item?.model,
        vin: item?.vin,
      }) : undefined}
      sx={{
        pointerEvents: !item && 'none',
        textDecoration: "none",
        height: "100%",
        display: 'block',
        opacity: fadein ? 0 : 1,
        animation: fadein ? `${fadeIn} ${duration?.toString() || 500}ms forwards` : 'none'
      }}
      state={{ returnPath: "/" }}
    >
      {(isVisible && lazyLoad) || (!lazyLoad && !showSkeleton) ? (
        <Flex
          sx={cardStyles}
        >
          <Box
            sx={{
              width: '100%',
              height: 'unset',
              aspectRatio: '1.5',
            }}
          >
            {(!item?.imageUrl && itemImageOrPlaceholder) ? (
              <GatsbyImage
                alt={item?.title}
                image={itemImageOrPlaceholder}
                style={{
                  width: '100%',
                  height: 'unset',
                  aspectRatio: '1.5',
                  objectFit: 'cover'
                }}
              />
            ) : item?.imageUrl ? (
              <Image
                src={item?.imageUrl}
                loading="lazy"
                sx={{
                  width: '100%',
                  height: 'unset',
                  aspectRatio: '1.5',
                  objectFit: 'cover'
                }}
              />
              ) : (
                <Skeleton animated={false} />
            )}
          </Box>
          <Flex
            sx={textContainer}
          >
            {item?.certification && (
              <Text sx={cardInfoStyle.certificationLabel}>CERTIFIED</Text>
            )}
            {(item?.certification === undefined || item?.certification === "") && (
              <Text
                style={item?.listing ? { color: listingTypeColors[item.listing] } : {}}
                sx={cardInfoStyle.tagLabel}>
                  { listingTypeLabels[item?.listing] || " " }
              </Text>
            )}
            <Text
              as='h2'
              sx={cardInfoStyle.titleLeft}
            >
              {item?.title}
            </Text>
            <Flex
              style={{
                marginTop: "0.5rem",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <Text
                sx={{
                  fontSize: ".84rem",
                  lineHeight: "1.525rem",
                  fontWeight: "600",
                  color: "#656565",
                }}
              >
                {item?.odometerMi
                  ? `${parseFloat(item?.odometerMi).toLocaleString()} mi`
                  : "New arrival"}
              </Text>
              {item?.price ? (
                <Text
                    as='p'
                    sx={{
                    fontSize: "1.15rem",
                    lineHeight: "1.375rem",
                    fontWeight: "500",
                    color: "#333333",
                    }}
                >
                    {formatter.format(item.price)}
                </Text>
              ):(
                <Text
                sx={{
                  fontSize: ".84rem",
                  lineHeight: "1.525rem",
                  fontWeight: "400",
                  color: "#656565",
                }}
              >
                Ask for price
              </Text>
              )}
            </Flex>
          </Flex>
        </Flex>
      ) : (
          <Box
            sx={{
              ...cardStyles,
              boxShadow: 'none',
              border: '1px solid #eee',
              width: '100%',
              height: 'unset',
              objectFit: 'cover',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: 'unset',
                aspectRatio: '1.5',
                objectFit: 'cover'
              }}
            >
              <Skeleton />
            </Box>
            <Flex
              sx={{ ...textContainer }}
            >
              <Skeleton height='19px' width='20%' />
              <Skeleton height='22px' />
              <Flex
                sx={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: 2
                }}
              >
                <Skeleton height='14px' width='40%' />
                <Box sx={{ py: '2.5px', width: '40%' }}>
                  <Skeleton height='22px' />
                </Box>
              </Flex>
            </Flex>
          </Box>
      )}
    </Box>
  );
}

export default Card;

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
})