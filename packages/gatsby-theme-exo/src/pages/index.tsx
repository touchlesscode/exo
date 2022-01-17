import React, { useRef, useState, useEffect } from 'react';
import { graphql, navigate } from 'gatsby';
import { Box, Theme } from 'theme-ui';
import Badge from '@exoTheme/components/Badge';
import Button from '@exoTheme/components/Button';
import Card from '@exoTheme/components/Card';
import ExpandableCard from '@exoTheme/components/Card/variants/Expandable';
import GatsbyImage from '@exoTheme/components/GatsbyImage';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import ImageWithLabel from '@exoTheme/components/ImageWithLabel';
import ListDivided from '@exoTheme/components/ListDivided';
import TextBlock from '@exoTheme/components/TextBlock';
import SlimArrow from '@exoTheme/images/development/slim-arrow.inline.svg';
import { slideUp } from '@exoTheme/theme/animations';
import Flex from '@exoTheme/components/Flex';
import GatsbyImageBg from '@exoTheme/components/GatsbyImageBg';
import Slider from '@exoTheme/components/Slider';
import CardWithImage from '@exoTheme/components/Card/variants/CardWithImage';
import useWindowSize from '@exoTheme/hooks/useWindowSize';
import Review from '@exoTheme/components/Review';

type sourceType = {
  id: number;
  name: string;
  image: {
    asset: IGatsbyImageData;
  };
};

const brandsNames = [
  'Kia',
  'Lexus',
  'Toyota',
  'Ford',
  'Chevrolet',
  'Jeep',
  'Hyundai'
];
const Index = ({ data }) => {
  const [
    brandParentRef,
    brandRef,
    bodyPrentRef,
    bodyRef,
    popularityParentRef,
    popularityRef,
    servicesParentRef,
    servicesRef,
    carouselParentRef0,
    carouselRef0,
    carouselParentRef1,
    carouselRef1,
    carouselParentRef2,
    carouselRef2
  ] = Array.from(Array(14)).map(
    () => useRef() as React.MutableRefObject<HTMLDivElement>
  );
  const isMobile = useWindowSize()?.type === 'sm';
  const isTablet = useWindowSize()?.type === 'md';
  const [expanded, setexpanded] = useState(false);
  const [active, setActive] = useState(0);
  const [reviewsToShow, setReviewsToShow] = useState(
    isMobile || isTablet ? 2 : 3
  );
  const [showAllReviews, setshowAllReviews] = useState(false);
  useEffect(() => {
    isMobile || isTablet ? setReviewsToShow(2) : setReviewsToShow(3);
  }, [isMobile, isTablet]);
  const [selectedpopularList, setSelectedPopularList] = useState(
    [] as {
      id: number;
      name: string;
      image: IGatsbyImageData;
    }[]
  );
  const {
    brands,
    body,
    options,
    hero,
    heroSm,
    carouselImages,
    cardsImages,
    reviewImage
  } = data;

  let optionsIcons = {} as {
    [x: string]: IGatsbyImageData;
  };
  // @ts-ignore
  options.nodes.map((node: sourceType) => {
    if (node === undefined) return;
    const {
      name,
      image: { asset }
    } = node;
    optionsIcons = { ...optionsIcons, [name]: asset };
    return;
  });

  const brandsImages = brands.nodes.map(
    ({
      logo,
      name
    }: {
      logo: { svg: { asset: { id: number } } };
      name: string;
    }) => ({
      id: logo?.svg?.asset?.id,
      image: logo?.svg?.asset,
      name: name
    })
  );
  const sortedBrands = brandsNames
    .map((brandName) =>
      brandsImages.find(({ name }: { name: string }) => name === brandName)
    )
    .filter((item) => item !== undefined);

  const bodyTypeImages = body.nodes
    .map(({ icon }: { icon: sourceType[] }) => {
      if (icon[0] === undefined) return;
      const {
        id,
        name,
        image: { asset }
      } = icon[0];
      return {
        id: id,
        name: name,
        image: asset
      };
    })
    .filter((item: sourceType) => item !== undefined);

  const sliderImages = carouselImages.nodes.map(
    ({ id, name, image: { asset } }) => {
      return {
        id: id,
        name: name,
        image: asset
      };
    }
  );
  const cardsObj = {} as {
    [x: string]: {
      id: number;
      name: string;
      image: { asset: IGatsbyImageData };
    };
  };
  cardsImages.nodes.map(({ id, name, image: { asset } }) => {
    cardsObj[name] = {
      id: id,
      name: name,
      image: asset
    };
    return;
  });

  const popularCars = [
    {
      type: 'Electric Cars',
      list: sortedBrands
    },
    {
      type: 'Family Cars',
      list: sortedBrands
    },
    {
      type: 'Work Cars',
      list: sortedBrands
    },
    {
      type: 'City Cars',
      list: sortedBrands
    },
    {
      type: 'See All',
      list: sortedBrands
    }
  ];
  const reviews = [
    {
      image: reviewImage?.image?.asset,
      name: 'Jhon Jhonson',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5
    },
    {
      image: reviewImage?.image?.asset,
      name: 'Jhon Jhonson',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5
    },
    {
      image: reviewImage?.image?.asset,
      name: 'Jhon Jhonson',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5
    },
    {
      image: reviewImage?.image?.asset,
      name: 'Jhon Jhonson',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5
    },
    {
      image: reviewImage?.image?.asset,
      name: 'Jhon Jhonson',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5
    }
  ];
  const carouselData = [
    {
      position: 'left',
      parentRef: carouselParentRef0,
      ref: carouselRef0,
      title: 'Shop Your Way',
      image: sliderImages[0].image,
      actionText: 'Shop Now',
      list: [
        { title: 'Request a callback', icon: optionsIcons['callback'] },
        { title: 'Buy online or in-store', icon: optionsIcons['online'] },
        {
          title: 'Virtual walkaround videos/feature tours',
          icon: optionsIcons['virtual']
        },
        { title: 'In-home test drives', icon: optionsIcons['inhome'] },
        { title: '24/7 online support', icon: optionsIcons['support'] }
      ]
    },
    {
      position: 'center',
      parentRef: carouselParentRef1,
      ref: carouselRef1,
      title: 'Peace of Mind',
      image: sliderImages[1].image,
      actionText: 'Read More',
      list: [
        { title: 'Exchange policy', icon: optionsIcons['exchange'] },
        {
          title: 'Free Vehicle History Report with all cars',
          icon: optionsIcons['history']
        },
        {
          title: 'Insurance and protection products available',
          icon: optionsIcons['insurance']
        },
        {
          title: '0% financing for all services/repairs',
          icon: optionsIcons['financing']
        }
      ]
    },
    {
      position: 'right',
      parentRef: carouselParentRef2,
      ref: carouselRef2,
      title: 'Our People',
      image: sliderImages[2].image,
      actionText: 'Meet Our Team',
      list: [
        {
          title: 'Voted best places to work (11 years in a row)',
          icon: optionsIcons['voted']
        },
        { title: 'languages spoken', icon: optionsIcons['language'] },
        {
          title: 'Average employee tenure 10+ years',
          icon: optionsIcons['empolyee']
        },
        {
          title: 'rating across 100,000+ reviews',
          icon: optionsIcons['rating']
        }
      ]
    }
  ];

  return (
    <>
      <GatsbyImageBg
        image={isMobile ? heroSm?.image?.asset : hero?.image?.asset}
        alt="heey"
        height="100vh"
        objectPosition="bottom"
        sx={{
          pt: [128, 100],
          width: '95%',
          mx: 'auto'
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: ['414px', '535px'],
            mx: 'auto'
          }}
        >
          <TextBlock
            heading="Hassle-free car buying"
            headingProps={{
              as: 'h1',
              sx: {
                textAlign: 'center',
                width: ['289px', '100%'],
                mx: 'auto',
                mb: 16,
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '40px',
                lineHeight: '48px',
                letterSpacing: ' -0.02em',
                zIndex: '3'
              }
            }}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            textProps={{
              sx: {
                textAlign: 'center',
                fontSize: [18, 16],
                fontWeight: ' 500',
                color: '#151F2A'
              }
            }}
          />
          <Flex
            sx={{
              mt: 32,
              gap: 16,
              justifyContent: 'center',
              mb: ['315px', '488px']
            }}
          >
            <Button
              onClick={() => navigate('/')}
              role="button"
              aria-label="Browse Cars"
              bg="primaryNavy"
              sx={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#D3DBE2',
                width: ['165px', '149px'],
                height: ['48px', '40px'],
                padding: '8px 24px',
                whiteSpace: 'nowrap',
                '&:hover': {
                  bg: 'primaryBlue'
                },
                '&:focus': {
                  bg: 'primarySkyBlue'
                }
              }}
            >
              Browse Cars
            </Button>
            <Button
              onClick={() => navigate('/')}
              role="button"
              aria-label="Sell My Car"
              color="primaryNavy"
              sx={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '24px',
                color: 'primaryNavy',
                width: ['165px', '149px'],
                height: ['48px', '40px'],
                padding: '8px 24px',
                whiteSpace: 'nowrap',
                border: (theme: Theme) =>
                  `2px solid ${theme.colors?.primaryNavy}`,
                '&:hover': {
                  border: '2px solid',
                  borderColor: 'primaryBlue',
                  color: 'primaryBlue'
                },
                '&:focus': {
                  border: '2px solid',
                  borderColor: 'primarySkyBlue',
                  color: 'primarySkyBlue'
                }
              }}
            >
              Sell My Car
            </Button>
          </Flex>
        </Box>
      </GatsbyImageBg>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          pt: [8, 0],
          pb: '100px',
          width: '100%',
          maxWidth: ['100%', '971px'],
          mx: 'auto',
          mt: ['0', '-100px']
        }}
      >
        <Flex
          gap="8"
          sx={{
            px: ['1.5rem', '1.5rem', '1.5rem', 0],
            width: '100%',
            flexDirection: ['column', 'column', 'row'],
            mb: '32px'
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: ['366px', '366px', '471px'],
              margin: ['0 auto', '0 auto', '0 auto 0 0'],
              minHeight: '225px',
              borderRadius: '16px'
            }}
          >
            <ExpandableCard
              parentRef={brandParentRef}
              ref={brandRef}
              elevated
              radius="16px"
              expanded={expanded && active === 1}
              onClick={() => {
                setActive(1);
                setexpanded(true);
              }}
              onClose={() => {
                setActive(0);
                setexpanded(false);
              }}
              bg="white"
              parentStyles={{
                cursor: expanded ? 'auto' : 'pointer'
              }}
              expandTo={{
                width: isMobile ? '100%' : '414px',
                height: isMobile
                  ? 'calc(var(--vh, 1vh) * 100)'
                  : 'calc(var(--vh, 1vh) * 100 - 80px)'
              }}
            >
              <Box
                sx={{
                  pt: 0,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {(!expanded || active !== 1) && (
                  <Card>
                    <Flex
                      sx={{
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        bg: 'white',
                        borderRadius: '16px',
                        boxShadow: '0px 8px 24px rgba(84, 84, 84, 0.26)',
                        width: '100%',
                        maxWidth: ['366px', '366px', '471px'],
                        height: '100%',
                        minHeight: ['216px', '216px', '225px'],
                        p: 6
                      }}
                    >
                      <Box
                        sx={{
                          height: '65px',
                          pl: ['0', '0'],
                          pointerEvents: 'none'
                        }}
                      >
                        <Flex>
                          {sortedBrands.map(
                            ({
                              image,
                              id
                            }: {
                              image: IGatsbyImageData;
                              id: string;
                            }) => (
                              <Box
                                key={id}
                                sx={{
                                  maxHeight: '53px',
                                  height: '100%',
                                  width: 'auto',
                                  m: 'auto',
                                  minWidth: ['27%', '27%', '23%'],
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <GatsbyImage
                                  image={image}
                                  alt="test"
                                  objectFit="contain"
                                  sx={{
                                    height: 'auto',
                                    maxHeight: '100%',
                                    width: '100%',
                                    maxWidth: '73px'
                                  }}
                                />
                              </Box>
                            )
                          )}
                        </Flex>
                      </Box>
                      <TextBlock
                        {...{
                          heading: 'Shop by brand',
                          text: 'Some descriptive text about choosing any of your favorite brands that folks in Virginia love.',
                          headingProps: {
                            as: 'h4',
                            sx: {
                              fontFamily: 'Poppins',
                              fontStyle: 'normal',
                              fontWeight: 'bold',
                              fontSize: '20px',
                              lineHeight: '30px',
                              letterSpacing: '-0.02em',
                              color: '#151F2A',
                              mb: 2,
                              zIndex: '3'
                            }
                          }
                        }}
                      />
                    </Flex>
                  </Card>
                )}
                {expanded && active === 1 ? (
                  <>
                    <Flex
                      direction="column"
                      justify="flex-end"
                      sx={{
                        px: 6,
                        pt: expanded && active === 1 ? 6 : [8, 6],
                        pb: 8,
                        position: 'relative',
                        zIndex: 2,
                        height: ['296px', '296px', '296px'],
                        minHeight: ['unset', 'unset', '296px'],
                        maxHeight: ['50vh', '50vh', '296px']
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          height: '100%',
                          width: '100%',
                          pointerEvents: 'none',
                          zIndex: '1',
                          backgroundImage:
                            'linear-gradient(0.17deg, #242952 0.14%, rgba(29, 33, 67, 0.92) 2.34%, rgba(36, 41, 82, 0) 36.94%)'
                        }}
                      ></Box>

                      <TextBlock
                        heading={'Shop by brand'}
                        headingProps={{
                          withLine: true,
                          line: {
                            align: 'top',
                            space: '2',
                            width: '120%',
                            color: '#ffffff'
                          },
                          sx: {
                            mb: 2,
                            color: '#ffffff',
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '28px',
                            lineHeight: '38px',
                            letterSpacing: '-0.02em',
                            zIndex: '3'
                          }
                        }}
                      />
                      <GatsbyImage
                        image={cardsObj.popular?.image}
                        alt="Shop by brand"
                        objectFit="cover"
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%,-50%)',
                          height: '100%',
                          width: '100%',
                          zIndex: 0
                        }}
                      />
                    </Flex>
                    <Box
                      sx={{
                        bg: '#ffffff',
                        position: 'relative',
                        zIndex: 2,
                        overflow: 'scroll',
                        flex: 1,
                        flexGrow: 1,
                        '&::-webkit-scrollbar': {
                          width: '0',
                          backgroundColor: 'transparent'
                        },
                        '&::-webkit-scrollbar-thumb': {
                          backgroundColor: 'transparent',
                          outline: 'unset'
                        }
                      }}
                    >
                      <Box
                        sx={{
                          px: 6,
                          py: 8,
                          background: '#ffffff',
                          opacity: 0,
                          animation: `${slideUp} 200ms 200ms forwards`
                        }}
                      >
                        <ListDivided>
                          {sortedBrands.map(
                            ({
                              image,
                              name,
                              id
                            }: {
                              image: IGatsbyImageData;
                              name: string;
                              id: string;
                            }) => (
                              <ImageWithLabel
                                key={id}
                                image={image}
                                label={name}
                                alt="brandsImages"
                                imageVariant="rounded"
                                imageStyles={{
                                  height: 'auto',
                                  maxHeight: '100%',
                                  my: 'auto'
                                }}
                              />
                            )
                          )}
                        </ListDivided>
                      </Box>
                    </Box>
                  </>
                ) : null}
              </Box>
            </ExpandableCard>
          </Box>

          <Box
            sx={{
              width: '100%',
              maxWidth: ['366px', '366px', '471px'],
              margin: ['0 auto', '0 auto', '0 0 0 auto'],
              minHeight: '225px',
              borderRadius: '16px'
            }}
          >
            <ExpandableCard
              parentRef={bodyPrentRef}
              ref={bodyRef}
              elevated
              radius="16px"
              expanded={expanded && active === 2}
              onClick={() => {
                setActive(2);
                setexpanded(true);
              }}
              onClose={() => {
                setActive(0);
                setexpanded(false);
              }}
              bg="white"
              parentStyles={{
                position: 'relative',
                cursor: expanded ? 'auto' : 'pointer'
              }}
              expandTo={{
                width: isMobile ? '100%' : '414px',
                height: isMobile
                  ? 'calc(var(--vh, 1vh) * 100)'
                  : 'calc(var(--vh, 1vh) * 100 - 80px)'
              }}
            >
              <Box
                sx={{
                  pt: 0,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {(!expanded || active !== 2) && (
                  <Card>
                    <Flex
                      sx={{
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        bg: ['#FCF7EA', 'white'],
                        borderRadius: '16px',
                        boxShadow: '0px 8px 24px rgba(84, 84, 84, 0.26)',
                        width: '100%',

                        maxWidth: ['366px', '366px', '471px'],
                        height: '100%',
                        minHeight: ['216px', '216px', '225px'],
                        p: 6,
                        pt: 0
                      }}
                    >
                      <Box
                        sx={{
                          height: '95px',
                          display: 'flex',
                          width: 'auto',
                          m: 'auto'
                        }}
                      >
                        <Flex>
                          {bodyTypeImages.map(
                            ({
                              image,
                              id
                            }: {
                              image: IGatsbyImageData;
                              id: string;
                            }) => (
                              <Box
                                key={id}
                                sx={{
                                  maxHeight: '95px',
                                  height: '100%',
                                  width: 'auto',
                                  m: 'auto',
                                  minWidth: ['35%', '35%', '30.5%'],
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <GatsbyImage
                                  key={id}
                                  image={image}
                                  alt="test"
                                  objectFit="contain"
                                  sx={{
                                    width: 'auto',
                                    height: 'auto',
                                    maxWidth: '100%',
                                    maxHeight: '100%'
                                  }}
                                />
                              </Box>
                            )
                          )}
                        </Flex>
                      </Box>
                      <TextBlock
                        {...{
                          heading: 'Shop by body type',
                          text: 'Some descriptive text about choosing a body type to fit your needs.',
                          headingProps: {
                            as: 'h4',
                            sx: {
                              fontFamily: 'Poppins',
                              fontStyle: 'normal',
                              fontWeight: 'bold',
                              fontSize: '20px',
                              lineHeight: '30px',
                              letterSpacing: '-0.02em',
                              color: '#151F2A',
                              mb: 0,
                              zIndex: '3'
                            }
                          }
                        }}
                      />
                    </Flex>
                  </Card>
                )}
                {expanded && active === 2 ? (
                  <>
                    <Flex
                      direction="column"
                      justify="flex-end"
                      sx={{
                        px: 6,
                        pt: expanded && active === 2 ? 6 : [8, 6],
                        pb: 8,
                        position: 'relative',
                        zIndex: 2,
                        height: ['296px', '296px', '296px'],
                        minHeight: ['unset', 'unset', '296px'],
                        maxHeight: ['50vh', '50vh', '296px']
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          height: '100%',
                          width: '100%',
                          pointerEvents: 'none',
                          zIndex: '1',
                          backgroundImage:
                            'linear-gradient(0.17deg, #242952 0.14%, rgba(29, 33, 67, 0.92) 2.34%, rgba(36, 41, 82, 0) 36.94%)'
                        }}
                      ></Box>

                      <TextBlock
                        heading={'Shop by body type'}
                        headingProps={{
                          withLine: true,
                          line: {
                            align: 'top',
                            space: '2',
                            width: '120%',
                            color: '#ffffff'
                          },
                          sx: {
                            mb: 2,
                            color: '#ffffff',
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '28px',
                            lineHeight: '38px',
                            letterSpacing: '-0.02em',
                            zIndex: '3'
                          }
                        }}
                      />
                      <GatsbyImage
                        image={cardsObj.popular?.image}
                        alt="Shop by brand"
                        objectFit="cover"
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%,-50%)',
                          height: '100%',
                          width: '100%',
                          zIndex: 0
                        }}
                      />
                    </Flex>
                    <Box
                      sx={{
                        bg: '#ffffff',
                        position: 'relative',
                        zIndex: 2,
                        overflow: 'scroll',
                        flex: 1,
                        flexGrow: 1,
                        '&::-webkit-scrollbar': {
                          width: '0',
                          backgroundColor: 'transparent'
                        },
                        '&::-webkit-scrollbar-thumb': {
                          backgroundColor: 'transparent',
                          outline: 'unset'
                        }
                      }}
                    >
                      <Box
                        sx={{
                          px: 6,
                          py: 8,
                          background: '#ffffff',
                          opacity: 0,
                          animation: `${slideUp} 200ms 200ms forwards`
                        }}
                      >
                        <ListDivided>
                          {bodyTypeImages.map(
                            ({
                              image,
                              name,
                              id
                            }: {
                              image: IGatsbyImageData;
                              name: string;
                              id: string;
                            }) => (
                              <ImageWithLabel
                                key={id}
                                image={image}
                                label={name}
                                alt="brandsImages"
                                imageVariant="rounded"
                                imageStyles={{
                                  height: 'auto',
                                  maxHeight: '100%',
                                  my: 'auto'
                                }}
                              />
                            )
                          )}
                        </ListDivided>
                      </Box>
                    </Box>
                  </>
                ) : null}
              </Box>
            </ExpandableCard>
          </Box>
        </Flex>
        <Box
          sx={{
            width: '100%',
            px: ['1.5rem', '1.5rem', '1.5rem', 0],
            height: ['400px', '400px', '200px'],
            position: 'relative',
            mb: '32px'
          }}
        >
          <ExpandableCard
            parentRef={popularityParentRef}
            ref={popularityRef}
            elevated
            radius="16px"
            expanded={expanded && active === 10}
            onClick={() => {
              setActive(10);
              setexpanded(true);
              setSelectedPopularList(
                popularCars.find((item) => item.type === 'See All')?.list as {
                  id: number;
                  name: string;
                  image: IGatsbyImageData;
                }[]
              );
            }}
            onClose={() => {
              setActive(0);
              setexpanded(false);
            }}
            parentStyles={{
              cursor: expanded ? 'auto' : 'pointer'
            }}
            expandTo={{
              width: isMobile ? '100%' : '414px',
              height: isMobile
                ? 'calc(var(--vh, 1vh) * 100)'
                : 'calc(var(--vh, 1vh) * 100 - 80px)'
            }}
          >
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                height: '100%'
              }}
            >
              <Card
                elevated
                radius={expanded && active === 10 ? '0' : '16px'}
                overlayed
                cardStyles={{
                  overflow: 'visible',
                  height:
                    expanded && active === 10
                      ? ['296px', '296px']
                      : ['100%', '100%', '225px'],
                  minHeight:
                    expanded && active === 10
                      ? ['unset', 'unset']
                      : ['100%', '100%', '225px'],
                  maxHeight:
                    expanded && active === 10
                      ? ['50vh', '50vh']
                      : ['100%', '100%', '225px']
                }}
                overlay={
                  !isMobile && !expanded
                    ? {
                        colors: [
                          {
                            direction: 'to right',
                            linear: ['#242952', '#242952 30%', 'rgba(0,0,0,0)']
                          }
                        ],
                        zIndex: 1,
                        sx: {
                          pointerEvents: 'none'
                        }
                      }
                    : isMobile && !expanded
                    ? {
                        zIndex: 1,
                        colors: [
                          {
                            direction: '180.11deg',
                            linear: [
                              '#000000 41.39%',
                              'rgba(0, 0, 0, 0) 99.91%',
                              'transparent'
                            ]
                          }
                        ]
                      }
                    : expanded && active === 10
                    ? {
                        zIndex: 1,
                        colors: [
                          {
                            direction: '0.17deg',
                            linear: [
                              '#242952 0.14%',
                              'rgba(29, 33, 67, 0.92) 2.34%',
                              'rgba(36, 41, 82, 0) 36.94%'
                            ]
                          }
                        ]
                      }
                    : {}
                }
              >
                <Flex
                  sx={{
                    flexDirection:
                      expanded && active === 10
                        ? 'column'
                        : ['column', 'column', 'row'],
                    width: '100%',
                    height:
                      expanded && active === 10 ? ['296px', '296px'] : '100%',
                    minHeight:
                      expanded && active === 10 ? ['unset', 'unset'] : '100%',
                    maxHeight:
                      expanded && active === 10 ? ['50vh', '50vh'] : '100%',
                    justifyContent:
                      expanded && active === 10 ? 'flex-end' : 'space-between',
                    bg: ['black', 'black', '#242951']
                  }}
                >
                  <Box
                    sx={{
                      position: ['relative', 'relative', 'absolute'],
                      zIndex: 2,
                      width: '100%',
                      px: 6,
                      py: [null, 8],
                      maxWidth: ['100%', '100%', '330px'],
                      pr: 0,
                      pb: 0
                    }}
                  >
                    <TextBlock
                      heading="What’s Popular"
                      headingProps={{
                        sx: {
                          fontSize: 28,
                          fontWeight: '600',
                          lineHeight: '38px',
                          letterSpacing: '-0.02em',

                          color: '#FFFFFF'
                        },
                        withLine: true,
                        line: {
                          align: 'top',
                          space: '2'
                        }
                      }}
                      sx={{
                        color: 'white',
                        pt: expanded && active === 10 ? 6 : [8, 0],
                        pb: 8,
                        zIndex: '3'
                      }}
                    />
                    {(!expanded || active !== 10) && (
                      <Flex
                        sx={{
                          flexWrap: 'wrap',
                          gap: 2,
                          position: 'absolute',
                          left: 0,
                          px: 'inherit',
                          maxWidth: '375px'
                        }}
                      >
                        {popularCars.map((item, idx) => (
                          <Button
                            role="button"
                            aria-label={item.type}
                            key={idx}
                            sx={{
                              p: 0
                            }}
                            onClick={(e) => {
                              setActive(10);
                              setexpanded(true);
                              setSelectedPopularList(item.list);
                              e.stopPropagation();
                            }}
                          >
                            <Badge
                              bg="rgba(255, 255, 255, 0.12)"
                              color="white"
                              variant="rounded"
                              sx={{
                                fontFamily: 'Poppins',
                                fontWeight: '500',
                                fontSize: '16px',
                                lineHeight: '23px',
                                letterSpacing: '-0.02em',
                                color: '#FFFFFF',
                                '&:hover, &:focus': {
                                  color: '#242A52',
                                  backgroundColor: '#ffffff'
                                }
                              }}
                            >
                              {item.type}
                            </Badge>
                          </Button>
                        ))}
                      </Flex>
                    )}
                  </Box>
                  <Box
                    sx={{
                      ...{
                        position:
                          expanded && active === 10 ? 'absolute' : 'relative',
                        top: 0,
                        left: 0,
                        height: [
                          `${expanded && active === 10 ? '100%' : '70%'}`,
                          '100%'
                        ],

                        width: '100%',
                        maxWidth: [
                          '100%',
                          '100%',
                          `${expanded && active === 10 ? '100%' : '70%'}`
                        ],
                        marginLeft: ['0', '0', 'auto'],
                        zIndex: 0,
                        borderRadius: ['0', '0', '16px'],
                        overflow: 'hidden'
                      },
                      ...(!expanded
                        ? {
                            '&:hover::after': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              backgroundImage:
                                'linear-gradient(0deg, rgba(37, 42, 83, 0.75), rgba(37, 42, 83, 0.75))',
                              width: '100%',
                              height: '100%',
                              display: 'block',
                              zIndex: '3'
                            }
                          }
                        : {})
                    }}
                  >
                    <GatsbyImage
                      image={
                        isMobile
                          ? cardsObj.popular_sm?.image
                          : cardsObj.popular?.image
                      }
                      objectFit="cover"
                      alt="test"
                      sx={{
                        transition: 'all 1000ms',
                        willChange: 'height width opacity',
                        height: '100%',
                        width: '100%'
                      }}
                    />
                  </Box>
                </Flex>
              </Card>
              {expanded && active === 10 ? (
                <Box
                  sx={{
                    bg: '#242951',
                    position: 'relative',
                    zIndex: 2,
                    overflow: 'scroll',
                    flex: 1,
                    flexGrow: 1,
                    '&::-webkit-scrollbar': {
                      width: '0',
                      backgroundColor: 'transparent'
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: 'transparent',
                      outline: 'unset'
                    }
                  }}
                >
                  <Box
                    sx={{
                      px: 6,
                      py: 8,
                      background: '#242951',
                      opacity: 0,
                      animation: `${slideUp} 200ms 200ms forwards`
                    }}
                  >
                    <ListDivided>
                      {selectedpopularList.map(
                        ({
                          id,
                          name
                        }: // image
                        {
                          id: number;
                          name: string;
                          image: IGatsbyImageData;
                        }) => (
                          <ImageWithLabel
                            key={id}
                            // image={image}
                            image={cardsObj.services?.image}
                            label={name}
                            alt={name}
                            imageVariant="rounded"
                            labelStyle={{ color: 'white' }}
                            imageStyles={{
                              height: 'auto',
                              maxHeight: '100%',
                              my: 'auto'
                            }}
                          />
                        )
                      )}
                    </ListDivided>
                  </Box>
                </Box>
              ) : null}
            </Box>
          </ExpandableCard>
        </Box>
        <Box
          sx={{
            width: '100%',
            px: ['0', '0', '1.5rem', '0'],
            position: 'relative',
            mb: '32px'
          }}
        >
          <TextBlock
            heading="Why Koons"
            headingProps={{
              sx: {
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontSize: '32px',
                fontWeight: '600',
                lineHeight: '38px',
                letterSpacing: '-0.02em',
                color: '#151F2A'
              },
              withLine: true,

              line: {
                align: 'top',
                space: '0',
                color: '#151F2A'
              }
            }}
            sx={{
              mb: 20,
              display: ['none', 'block'],
              pl: ['1.5rem', '1.5rem', '0'],
              zIndex: '3'
            }}
          />
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              minHeight: ['250px', '250px', '225px'],
              height: ['250px', '250px', '225px'],
              overflow: 'hidden',
              borderRadius: 16
            }}
          >
            <Slider
              options={{
                renderMode: 'performance',
                disabled: false,
                loop: false,
                initial: 1,
                slides: {
                  perView: 1.15,
                  spacing: 16,
                  origin: 'center'
                },
                drag: expanded || !isMobile ? false : true,
                breakpoints: {
                  '(min-width: 768.02px)': {
                    initial: 1,
                    slides: {
                      perView: 3,
                      spacing: 25,
                      origin: 'auto'
                    }
                  }
                }
              }}
              slideStyles={{
                height: '100%',
                width: '100%',
                borderRadius: '16px',
                cursor: 'pointer'
              }}
              sliderItem={
                expanded
                  ? { transform: 'unset!important', borderRadius: '0' }
                  : { borderRadius: '16px' }
              }
            >
              {carouselData.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: '100%',
                    minHeight: ['250px', '250px', '225px'],
                    height: ['250px', '250px', '225px']
                  }}
                >
                  <ExpandableCard
                    parentRef={item.parentRef}
                    ref={item.ref}
                    elevated
                    radius="16px"
                    expanded={expanded && active === index + 100}
                    onClick={() => {
                      setActive(index + 100);
                      setexpanded(true);
                    }}
                    onClose={() => {
                      setActive(0);
                      setexpanded(false);
                    }}
                    parentStyles={{
                      cursor: expanded ? 'auto' : 'pointer'
                    }}
                    expandTo={{
                      width: isMobile ? '100%' : '414px',
                      height: isMobile
                        ? 'calc(var(--vh, 1vh) * 100)'
                        : 'calc(var(--vh, 1vh) * 100 - 80px)'
                    }}
                  >
                    <Box
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'flex-start'
                      }}
                    >
                      <Card
                        elevated
                        radius={
                          expanded && active === index + 100 ? '0' : '16px'
                        }
                        overlayed
                        cardStyles={{
                          height:
                            expanded && active === index + 100
                              ? ['296px', '296px', '296px']
                              : '100%',
                          minHeight:
                            expanded && active === index + 100
                              ? ['unset', 'unset', '296px']
                              : '100%',
                          maxHeight:
                            expanded && active === index + 100
                              ? ['50vh', '50vh', '296px']
                              : '100%',
                          position: 'relative'
                        }}
                        overlay={
                          !expanded
                            ? {
                                zIndex: 10,
                                colors: [
                                  {
                                    direction: '38.11deg',
                                    linear: [
                                      '#242952 22.03%',
                                      'rgba(36, 41, 82, 0) 72.39%',
                                      'transparent'
                                    ]
                                  }
                                ],
                                sx: {
                                  backgroundColor: 'transparent!important',
                                  '&:hover': {
                                    backgroundImage: 'unset!important'
                                  },
                                  '&:hover::after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    backgroundImage:
                                      'linear-gradient(0deg, rgba(37, 42, 83, 0.75), rgba(37, 42, 83, 0.75))',
                                    width: '100%',
                                    height: '100%',
                                    display: 'block',
                                    borderRadius: '16px',
                                    overflow: 'hidden'
                                  }
                                }
                              }
                            : expanded && active === index + 100
                            ? {
                                zIndex: 1,
                                colors: [
                                  {
                                    direction: '0.17deg',
                                    linear: [
                                      '#242952 0.14%',
                                      'rgba(29, 33, 67, 0.92) 2.34%',
                                      'rgba(36, 41, 82, 0) 36.94%'
                                    ]
                                  }
                                ]
                              }
                            : {}
                        }
                      >
                        <Flex
                          direction="column"
                          justify="flex-end"
                          sx={{
                            px: 6,
                            pt: expanded && active === index + 100 ? 6 : [8, 6],
                            pb: 8,
                            height: '100%',
                            zIndex: 1
                          }}
                        >
                          <TextBlock
                            heading={item.title}
                            headingProps={{
                              withLine: true,
                              line: {
                                align: 'top',
                                space: '2',
                                width: '120%',
                                color: '#ffffff'
                              },
                              sx: {
                                mb: 2,
                                color: '#ffffff',
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize:
                                  expanded && active === index + 100
                                    ? '28px'
                                    : '20px',
                                lineHeight:
                                  expanded && active === index + 100
                                    ? '33px'
                                    : '25px',
                                letterSpacing: '-0.02em',
                                zIndex: '3'
                              }
                            }}
                          />
                          <GatsbyImage
                            image={item.image}
                            alt="why koons"
                            objectFit="cover"
                            sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%,-50%)',
                              height: '100%',
                              width: '100%',
                              zIndex: 0
                            }}
                          />
                        </Flex>
                      </Card>
                      {expanded && active === index + 100 ? (
                        <Box
                          sx={{
                            bg: '#242951',
                            position: 'relative',
                            zIndex: 2,
                            overflow: 'scroll',
                            flex: 1,
                            flexGrow: 1,
                            '&::-webkit-scrollbar': {
                              width: '0',
                              backgroundColor: 'transparent'
                            },
                            '&::-webkit-scrollbar-thumb': {
                              backgroundColor: 'transparent',
                              outline: 'unset'
                            }
                          }}
                        >
                          <Box
                            sx={{
                              px: 6,
                              py: 8,
                              background: '#242951',
                              opacity: 0,
                              animation: `${slideUp} 200ms 200ms forwards`
                            }}
                          >
                            <ListDivided>
                              {item.list.map((option, idx) => (
                                <ImageWithLabel
                                  key={idx}
                                  image={option.icon}
                                  label={option.title}
                                  alt="electric"
                                  labelStyle={{ color: 'white' }}
                                  imageVariant="rounded"
                                  objectFit="contain"
                                  imageStyles={{
                                    maxHeight: '100%',
                                    width: 'auto',
                                    height: 'auto',
                                    my: 'auto'
                                  }}
                                />
                              ))}
                            </ListDivided>
                          </Box>
                        </Box>
                      ) : null}
                    </Box>
                  </ExpandableCard>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
        <Flex
          gap="8"
          sx={{
            flexDirection: ['column', 'column', 'row'],
            width: '100%',
            px: ['1.5rem', '1.5rem', '1.5rem', 0],
            mb: '32px'
          }}
        >
          <Box
            sx={{
              width: '100%',
              minHeight: '400px',
              height: ['400px', '400px', 'auto']
            }}
          >
            <ExpandableCard
              parentRef={servicesParentRef}
              ref={servicesRef}
              elevated
              radius="16px"
              expanded={expanded && active === 11}
              onClick={() => {
                return;
              }}
              onClose={() => {
                setActive(0);
                setexpanded(false);
              }}
              expandedStyles={{
                cursor: 'auto'
              }}
              expandTo={{
                width: isMobile ? '100%' : '414px',
                height: isMobile
                  ? 'calc(var(--vh, 1vh) * 100)'
                  : 'calc(var(--vh, 1vh) * 100 - 80px)'
              }}
            >
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'flex-start'
                }}
              >
                <Card
                  elevated
                  radius={expanded && active === 11 ? '0' : '16px'}
                  overlayed
                  cardStyles={{
                    height:
                      expanded && active === 11 ? ['296px', '296px'] : 'auto',
                    minHeight:
                      expanded && active === 11 ? ['unset', 'unset'] : '415px'
                  }}
                  overlay={{
                    colors: [
                      {
                        direction: '325deg',
                        linear: ['#F9D499 0%', '#F9D499 15%', '#D9E6F3 30%']
                      }
                    ]
                  }}
                >
                  <Flex
                    direction="column"
                    justify="space-between"
                    sx={{
                      px: 6,
                      pt: [8, 6],
                      pb: 8,
                      height: '100%',
                      position: 'relative',
                      zIndex: 1,
                      justifyContent:
                        expanded && active === 11
                          ? 'flex-end'
                          : 'space-between',
                      backgroundImage:
                        expanded && active === 11
                          ? 'linear-gradient(0.17deg, #242952 0.14%, rgba(29, 33, 67, 0.92) 2.34%, rgba(36, 41, 82, 0) 36.94%)'
                          : 'unset'
                    }}
                  >
                    <TextBlock
                      heading="Our Service"
                      headingProps={{
                        withLine: true,
                        line: {
                          align: 'top',
                          space: '2',
                          width: '120%',
                          color:
                            expanded && active === 11 ? '#ffffff' : '#000000'
                        },
                        sx: {
                          mb: 2,
                          color:
                            expanded && active === 11 ? '#ffffff' : '#000000',
                          fontFamily: 'Poppins',
                          fontStyle: 'normal',
                          fontWeight: '600',
                          fontSize: expanded && active === 11 ? '28px' : '28px',
                          lineHeight:
                            expanded && active === 11 ? '38px' : '42px',
                          letterSpacing: '-0.02em',
                          zIndex: '3'
                        }
                      }}
                      text={
                        !expanded
                          ? 'Review all the numbers and finalize everything without needing to visit our dealership.'
                          : ''
                      }
                    />
                    <GatsbyImage
                      image={cardsObj.services?.image}
                      alt="test"
                      objectFit="contain"
                      sx={{
                        position: 'absolute',
                        right: 0,
                        width: '80%',
                        top: expanded && active === 11 ? '30%' : '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 0,
                        pointerEvents: 'none'
                      }}
                    />

                    {(!expanded || active !== 11) && (
                      <Button
                        role="button"
                        aria-label="Book appointment card flow"
                        onClick={() => {
                          setActive(11);
                          setexpanded(true);
                        }}
                        bg="primaryBlue"
                        sx={{
                          whiteSpace: 'nowrap',
                          '&:hover': {
                            bg: 'primaryBlue'
                          },
                          '&:focus': {
                            bg: 'primarySkyBlue'
                          }
                        }}
                      >
                        Book appointment card flow
                      </Button>
                    )}
                  </Flex>
                </Card>
                {expanded && active === 11 ? (
                  <Box
                    sx={{
                      bg: '#242951',
                      position: 'relative',
                      zIndex: 2,
                      overflow: 'scroll',
                      flex: 1,
                      flexGrow: 1,
                      '&::-webkit-scrollbar': {
                        width: '0',
                        backgroundColor: 'transparent'
                      },
                      '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'transparent',
                        outline: 'unset'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        px: 6,
                        py: 8,
                        background: '#242951',
                        opacity: 0,
                        animation: `${slideUp} 200ms 200ms forwards`
                      }}
                    ></Box>
                  </Box>
                ) : null}
              </Box>
            </ExpandableCard>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: 'auto'
            }}
          >
            <CardWithImage
              elevated
              radius="16px"
              image={cardsObj.trade?.image}
              alt="hety"
              imageSx={{
                maxHeight: '198px',
                borderTopRightRadius: '16px',
                borderTopLeftRadius: '16px'
              }}
              cardStyles={{
                height: 'auto',
                minHeight: '415px'
              }}
              overlayed
              overlay={{
                zIndex: 1,
                colors: [
                  {
                    direction: '0.17deg',
                    linear: ['#fff', 'fff', 'fff']
                  }
                ],
                sx: {
                  pointerEvents: 'none'
                }
              }}
            >
              <TextBlock
                heading="Trade-In Your Car"
                headingProps={{
                  withLine: true,
                  sx: {
                    mb: 2,
                    zIndex: '1',
                    fontWeight: '600',
                    fontSize: '31px',
                    lineHeight: '38px'
                  }
                }}
                text="Review all the numbers and finalize everything without needing to visit our dealership."
                sx={{
                  p: 6,
                  pt: 6,
                  zIndex: '3'
                }}
              />

              <Button
                onClick={() => navigate('/')}
                role="button"
                aria-label="Trade-In Your Car"
                color="primaryNavy"
                Icon={SlimArrow}
                space="2"
                sx={{
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '18px',
                  lineHeight: '27px',
                  color: '#3B6097',
                  pt: 0,
                  pb: '24px',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    color: 'primaryBlue'
                  },
                  '&:focus': {
                    color: 'primarySkyBlue'
                  }
                }}
              >
                Why trade with Koons
              </Button>
            </CardWithImage>
          </Box>
        </Flex>
        <Box
          sx={{
            height: 'max-content',
            px: ['1.5rem', '1.5rem', '1.5rem', 0],
            width: '100%'
          }}
        >
          <Card elevated radius="16px">
            <Box
              sx={{
                px: ['16px', '16px', '24px'],
                py: '24px',
                bg: ['#ffffff', '#ffffff', '#F8F7F6']
              }}
            >
              <Flex>
                <TextBlock
                  heading={
                    isMobile
                      ? 'Customers Feedback'
                      : 'What 100,000+ People Say About Koons'
                  }
                  headingProps={{
                    withLine: true,
                    line: {
                      width: '277px',
                      space: '1'
                    },
                    sx: {
                      width: ['175px', '175px', 'auto'],
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      fontSize: '32px',
                      lineHeight: '38px',
                      letterSpacing: '-0.02em',
                      color: '#151F2A',
                      mb: '8px'
                    }
                  }}
                  text="Review all the numbers and finalize everything without needing to visit us."
                  sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '23px',
                    letterSpacing: '-0.01em',
                    color: 'rgba(21, 31, 42, 0.9)',
                    mb: '16px',
                    zIndex: '3'
                  }}
                />
                {!isMobile && (
                  <Button
                    onClick={() => setshowAllReviews(!showAllReviews)}
                    role="button"
                    aria-label="Read more reviews"
                    color="primaryNavy"
                    Icon={SlimArrow}
                    space="2"
                    sx={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      fontSize: '18px',
                      lineHeight: '27px',
                      color: '#3B6097',
                      ml: 'auto',
                      p: '0 0 0 10px',
                      height: 'max-content',
                      whiteSpace: 'nowrap',
                      '&:hover': {
                        color: 'primaryBlue'
                      },
                      '&:focus': {
                        color: 'primarySkyBlue'
                      }
                    }}
                  >
                    {showAllReviews ? 'Read less reviews' : 'Read more reviews'}
                  </Button>
                )}
              </Flex>

              <Flex
                gap="1"
                sx={{
                  flexDirection: ['column', 'column', 'row'],
                  justifyContent: 'flex-start',
                  flexWrap: 'wrap'
                }}
              >
                {reviews.map((review, index) =>
                  reviewsToShow >= index + 1 || showAllReviews ? (
                    <Review
                      key={index}
                      image={review.image}
                      name={review.name}
                      description={review.description}
                      rated={review.rating}
                      sx={{
                        bg: ['#F8F7F6', 'transparent'],
                        py: [4, 0],
                        px: [2, 4, 0],
                        borderRadius: 6
                      }}
                    />
                  ) : null
                )}
              </Flex>
              {isMobile && (
                <Button
                  onClick={() => setshowAllReviews(!showAllReviews)}
                  color="primaryNavy"
                  Icon={SlimArrow}
                  space="2"
                  sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '18px',
                    lineHeight: '27px',
                    color: '#3B6097',
                    p: '0',
                    pt: '16px',
                    height: 'max-content',
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      color: 'primaryBlue'
                    },
                    '&:focus': {
                      color: 'primarySkyBlue'
                    }
                  }}
                >
                  {showAllReviews ? 'Read less reviews' : 'Read more reviews'}
                </Button>
              )}
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Index;

export const indexPageQuery = graphql`
  {
    brands: allSanityBrand(
      filter: {
        tags: { regex: "/vehicle/" }
        logo: { svg: { _type: { eq: "image" } } }
        name: {
          in: ["Kia", "Lexus", "Toyota", "Ford", "Chevrolet", "Jeep", "Hyundai"]
        }
      }
    ) {
      nodes {
        name
        logo {
          svg {
            asset {
              gatsbyImageData(placeholder: BLURRED)
              id
            }
          }
        }
      }
    }
    body: allSanityAttribute {
      nodes {
        icon {
          id
          name
          image {
            asset {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                formats: [WEBP, AVIF]
                height: 100
              )
            }
          }
        }
      }
    }
    options: allSanityIcon(
      filter: {
        name: {
          in: [
            "callback"
            "online"
            "virtual"
            "inhome"
            "support"
            "exchange"
            "history"
            "insurance"
            "financing"
            "voted"
            "language"
            "empolyee"
            "rating"
          ]
        }
      }
    ) {
      nodes {
        id
        name
        image {
          asset {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              height: 48
              formats: [WEBP, AVIF]
            )
          }
        }
      }
    }
    hero: sanityIcon(name: { eq: "home_hero" }) {
      name
      image {
        asset {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
            formats: [WEBP, AVIF]
          )
        }
      }
    }
    heroSm: sanityIcon(name: { eq: "home_hero_sm" }) {
      name
      image {
        asset {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
            formats: [WEBP, AVIF]
          )
        }
      }
    }
    reviewImage: sanityIcon(name: { eq: "review" }) {
      name
      image {
        asset {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FIXED
            formats: [WEBP, AVIF]
            height: 32
            width: 32
          )
        }
      }
    }
    carouselImages: allSanityIcon(
      filter: { name: { in: ["carousel1", "carousel2", "carousel3"] } }
    ) {
      nodes {
        id
        name
        image {
          asset {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              formats: [WEBP, AVIF]
              height: 225
            )
          }
        }
      }
    }
    cardsImages: allSanityIcon(
      filter: { name: { in: ["services", "trade", "popular_sm", "popular"] } }
    ) {
      nodes {
        id
        name
        image {
          asset {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              formats: [WEBP, AVIF]
              height: 224
            )
          }
        }
      }
    }
  }
`;
