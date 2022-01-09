import React, { useRef, useState } from 'react';
import { graphql, navigate } from 'gatsby';
import { Box, Grid, Image, Text, Theme } from 'theme-ui';
import Badge from '@exoTheme/components/Badge';
import Button from '@exoTheme/components/Button';
import Card from '@exoTheme/components/Card';
import CardWithSlidingHeader from '@exoTheme/components/Card/variants/CardWithSlidingHeader';
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
import CardWithOptions from '@exoTheme/components/Card/variants/CardWithOptions';
const badges = [
  'Electric Cars',
  'Family Cars',
  'Work Cars',
  'City Cars',
  'See All'
];
// const benifits = [
//   'Voted best places to work(11 years in a row)',
//   '20 + languages spoken',
//   'Average employee tenure 10 + years',
//   '4.8 - star rating across 100, 000 + reviews'
// ];
// @ts-ignore

// Options Icons
import phone from '@exoTheme/images/icons/phone.svg';
import mobile from '@exoTheme/images/icons/mobile.svg';
import walkaround from '@exoTheme/images/icons/walkaround.svg';
import inHome from '@exoTheme/images/icons/in_home.svg';
import support from '@exoTheme/images/icons/support.svg';
import exchange from '@exoTheme/images/icons/exchange.svg';
import history from '@exoTheme/images/icons/history.svg';
import insurance from '@exoTheme/images/icons/insurance.svg';
import financing from '@exoTheme/images/icons/financing.svg';
import vote from '@exoTheme/images/icons/vote.svg';
import language from '@exoTheme/images/icons/language.svg';
import employee from '@exoTheme/images/icons/employee.svg';
import rating from '@exoTheme/images/icons/rating.svg';

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
  const [showOptions, setShowOptions] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const {
    redCar,
    brands,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    homePageBg,
    homePageBgSm,
    twoPeople,
    ServicesCar,
    tradeIn
  } = data;

  // @ts-ignore
  const brandsImages = brands.nodes.map(({ logo, name }) => ({
    id: logo?.svg?.asset?.id,
    image: logo?.svg?.asset,
    name: name
  }));
  const bodyTypeImages = [image1, image2, image3, image4, image5, image6].map(
    (type, idx) => ({
      id: idx.toString(),
      image: type
    })
  );
  const carouselData = [
    {
      position: 'left',
      parentRef: carouselParentRef0,
      ref: carouselRef0,
      title: 'Shop Your Way',
      image: twoPeople,
      actionText: 'Shop Now',
      list: [
        { title: 'Request a callback', icon: phone },
        { title: 'Buy online or in-store', icon: mobile },
        { title: 'Virtual walkaround videos/feature tours', icon: walkaround },
        { title: 'In-home test drives', icon: inHome },
        { title: '24/7 online support', icon: support }
      ]
    },
    {
      position: 'center',
      parentRef: carouselParentRef1,
      ref: carouselRef1,
      title: 'Peace of Mind',
      image: twoPeople,
      actionText: 'Read More',
      list: [
        { title: 'Exchange policy', icon: exchange },
        { title: 'Free Vehicle History Report with all cars', icon: history },
        {
          title: 'Insurance and protection products available',
          icon: insurance
        },
        { title: '0% financing for all services/repairs', icon: financing }
      ]
    },
    {
      position: 'right',
      parentRef: carouselParentRef2,
      ref: carouselRef2,
      title: 'Our People',
      image: twoPeople,
      actionText: 'Meet Our Team',
      list: [
        { title: 'Voted best places to work (11 years in a row)', icon: vote },
        { title: 'languages spoken', icon: language },
        { title: 'Average employee tenure 10+ years', icon: employee },
        { title: 'rating across 100,000+ reviews', icon: rating }
      ]
    }
  ];
  return (
    <>
      <GatsbyImageBg
        image={isMobile ? homePageBgSm : homePageBg}
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
                letterSpacing: ' -0.02em'
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
          gap: 8,
          width: '100%',
          maxWidth: ['100%', '971px'],
          mx: 'auto',
          mt: [null, '-100px']
        }}
      >
        <Flex
          direction={['column', 'row']}
          gap={8}
          sx={{ px: ['1.5rem', '1.5rem', 0], width: '100%' }}
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
              minHeight: ['216px', '225px'],
              marginRight: [0, 0, 'auto'],
              marginBottom: ['auto', 'auto', 0]
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
              {!expanded && (
                <CardWithSlidingHeader
                  options={{
                    renderMode: 'performance',
                    rubberband: false,
                    loop: true,
                    disabled: false,
                    slides: {
                      perView: 4,
                      spacing: 0
                    },
                    drag: true,
                    breakpoints: {
                      '(min-width: 768.02px)': {
                        slides: {
                          perView: 4.5,
                          spacing: 0
                        }
                      }
                    }
                  }}
                  sliderParent={{ pl: ['0', '20px'], pointerEvents: 'none' }}
                  slideStyles={{
                    maxHeight: '53px',
                    height: '100%',
                    width: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                  cardStyles={{
                    bg: 'white',
                    borderRadius: '16px',
                    boxShadow: '0px 8px 24px rgba(84, 84, 84, 0.26)',
                    width: '100%',
                    maxWidth: ['366px', '471px'],
                    height: '100%',
                    minHeight: ['216px', '225px']
                  }}
                  content={{
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
                        mb: 2
                      }
                    }
                  }}
                >
                  {brandsImages.map(
                    ({
                      image,
                      id
                    }: {
                      image: IGatsbyImageData;
                      id: string;
                    }) => (
                      <GatsbyImage
                        key={id}
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
                    )
                  )}
                </CardWithSlidingHeader>
              )}
              {expanded && active === 1 ? (
                <>
                  <Flex
                    direction="column"
                    justify="flex-end"
                    sx={{
                      px: 6,
                      pt: expanded && active === 1 ? ['219px', 6] : [8, 6],
                      pb: 8,
                      position: 'relative',
                      zIndex: 2,
                      height: ['296px', '296px'],
                      minHeight: ['296px', '296px']
                    }}
                  >
                    {expanded ? (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          height: '100%',
                          width: '100%',
                          pointerEvents: 'none',
                          zIndex: '999999999',
                          backgroundImage:
                            'linear-gradient(0.17deg, #242952 0.14%, rgba(29, 33, 67, 0.92) 2.34%, rgba(36, 41, 82, 0) 36.94%)'
                        }}
                      ></Box>
                    ) : null}

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
                          fontSize: '20px',
                          lineHeight: '25px',
                          letterSpacing: '-0.02em',
                          zIndex: '999'
                        }
                      }}
                    />
                    <GatsbyImage
                      image={twoPeople}
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
                      bg: '#242951',
                      position: 'relative',
                      zIndex: 2,
                      overflow: 'auto',
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
                        {brandsImages.map(
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
              minHeight: ['216px', '225px'],
              marginLeft: [0, 0, 'auto'],
              marginTop: ['auto', 'auto', 0]
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
              {!expanded && (
                <CardWithSlidingHeader
                  options={{
                    renderMode: 'performance',
                    rubberband: false,
                    loop: true,
                    disabled: false,
                    slides: {
                      perView: 3,
                      spacing: 10
                    },
                    drag: true,
                    breakpoints: {
                      '(min-width: 768.02px)': {
                        slides: {
                          perView: 3.5,
                          spacing: 10
                        }
                      }
                    }
                  }}
                  sliderParent={{ pl: ['0', '10px'], pointerEvents: 'none' }}
                  slideStyles={{
                    height: '65px',
                    width: 'auto',
                    m: 'auto'
                  }}
                  cardStyles={{
                    bg: ['#FCF7EA', 'white'],
                    borderRadius: '16px',
                    boxShadow: '0px 8px 24px rgba(84, 84, 84, 0.26)',
                    width: '100%',
                    maxWidth: ['366px', '471px'],
                    height: '100%',
                    minHeight: ['216px', '225px']
                  }}
                  content={{
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
                        mb: 2
                      }
                    }
                  }}
                >
                  {bodyTypeImages.map(
                    ({
                      image,
                      id
                    }: {
                      image: IGatsbyImageData;
                      id: string;
                    }) => (
                      <GatsbyImage
                        key={id}
                        image={image}
                        alt="test"
                        objectFit="cover"
                        sx={{
                          height: '100%',
                          maxHeight: '100%',
                          width: 'auto'
                        }}
                      />
                    )
                  )}
                </CardWithSlidingHeader>
              )}
              {expanded && active === 2 ? (
                <>
                  <Flex
                    direction="column"
                    justify="flex-end"
                    sx={{
                      px: 6,
                      pt: expanded && active === 2 ? ['219px', 6] : [8, 6],
                      pb: 8,
                      position: 'relative',
                      zIndex: 2,
                      height: ['296px', '296px'],
                      minHeight: ['296px', '296px']
                    }}
                  >
                    {expanded ? (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          height: '100%',
                          width: '100%',
                          pointerEvents: 'none',
                          zIndex: '999999999',
                          backgroundImage:
                            'linear-gradient(0.17deg, #242952 0.14%, rgba(29, 33, 67, 0.92) 2.34%, rgba(36, 41, 82, 0) 36.94%)'
                        }}
                      ></Box>
                    ) : null}
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
                          fontSize: '20px',
                          lineHeight: '25px',
                          letterSpacing: '-0.02em',
                          zIndex: '999'
                        }
                      }}
                    />
                    <GatsbyImage
                      image={twoPeople}
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
                      bg: '#242951',
                      position: 'relative',
                      zIndex: 2,
                      overflow: 'auto',
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
                        {bodyTypeImages.map(
                          ({
                            image,

                            id
                          }: {
                            image: IGatsbyImageData;

                            id: string;
                          }) => (
                            <ImageWithLabel
                              key={id}
                              image={image}
                              label={'body type'}
                              alt="brandsImages"
                              imageVariant="rounded"
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
        </Flex>
        <Box
          sx={{
            width: '100%',
            px: ['1.5rem', '1.5rem', 0],
            height: ['400px', '200px'],
            position: 'relative'
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
            }}
            onClose={() => {
              setActive(0);
              setexpanded(false);
            }}
            overlayed
            overlay={
              expanded && active === 10
                ? {
                    colors: [
                      {
                        direction: 'to bottom',
                        linear: ['transparent', 'transparent', 'transparent']
                      },
                      {
                        direction: 'to bottom',
                        linear: ['transparent', 'transparent', 'transparent']
                      }
                    ],
                    zIndex: 1
                  }
                : {
                    colors: [
                      {
                        direction: 'to bottom',
                        linear: [
                          'rgba(0,0,0,0)',
                          'rgba(0,0,0, 0) 55%',
                          'rgba(0,0,0,0)'
                        ]
                      },
                      {
                        direction: 'to right',
                        linear: ['#242952', '#242952 55%', 'rgba(0,0,0,0)']
                      }
                    ],
                    zIndex: 1
                  }
            }
          >
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'start'
              }}
            >
              <Card
                elevated
                radius={expanded && active === 10 ? '0' : '16px'}
                overlayed
                cardStyles={{
                  height:
                    expanded && active === 10 ? ['296px', '296px'] : '100%',
                  minHeight:
                    expanded && active === 10 ? ['296px', '296px'] : '100%'
                }}
                overlay={
                  expanded && active === 10
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
                    : !expanded && isMobile
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
                    : {
                        sx: {
                          backgroundImage:
                            'linear-gradient(0.17deg, #242952 0.14%, rgba(29, 33, 67, 0.92) 2.34%, rgba(36, 41, 82, 0) 36.94%)',
                          backgroundColor: 'transparent',
                          zIndex: '99',
                          pointerEvents: 'none'
                        }
                      }
                }
              >
                <Flex
                  sx={{
                    flexDirection: ['column', 'row'],
                    width: '100%',
                    height:
                      expanded && active === 10 ? ['296px', '296px'] : '100%',
                    justifyContent:
                      expanded && active === 10 ? 'start' : 'space-between'
                    // bg: 'black'
                  }}
                >
                  <Box
                    sx={{
                      position: ['relative', 'absolute'],
                      zIndex: 2,
                      width: '100%',
                      px: 6,
                      py: [null, 8]
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
                        position:
                          expanded && active === 10 ? 'absolute' : 'static',
                        pt: expanded && active === 10 ? ['219px', 0] : [8, 0]
                      }}
                    />
                    {!expanded && active !== 10 && (
                      <Flex
                        sx={{
                          flexWrap: 'wrap',
                          gap: 2,
                          mt: 4,
                          position: 'absolute',
                          left: 0,
                          px: 'inherit'
                        }}
                      >
                        {badges.map((badge, idx) => (
                          <Badge
                            key={idx}
                            bg="rgba(255, 255, 255, 0.12)"
                            color="white"
                            variant="rounded"
                            sx={{
                              fontFamily: 'Poppins',
                              fontWeight: '500',
                              fontSize: '16px',
                              lineHeight: '23px',
                              letterSpacing: '-0.02em',
                              color: '#FFFFFF'
                            }}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </Flex>
                    )}
                  </Box>
                  <GatsbyImage
                    image={redCar}
                    objectFit="cover"
                    alt="test"
                    sx={{
                      position: 'relative',
                      height: [`${expanded ? '100%' : '70%'}`, 'auto'],
                      zIndex: '0',
                      top: 0,
                      transition: 'all 5000ms'
                    }}
                  />
                </Flex>
              </Card>
              {expanded && active === 10 ? (
                <Box
                  sx={{
                    bg: '#242951',
                    position: 'relative',
                    zIndex: 2,
                    overflow: 'auto',
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
                      {[...badges, ...badges, ...badges].map((badge, idx) => (
                        <ImageWithLabel
                          key={idx}
                          image={redCar}
                          label={badge}
                          alt="electric"
                          imageVariant="rounded"
                          labelStyle={{ color: 'white' }}
                        />
                      ))}
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
            px: ['0', '0', '0'],
            position: 'relative'
          }}
        >
          <TextBlock
            heading="Why Koons"
            headingProps={{
              sx: {
                fontSize: 32,
                fontWeight: '600',
                lineHeight: '38px',
                letterSpacing: '-0.02em',
                color: '#151F2A'
              },
              withLine: true,

              line: {
                align: 'top',
                space: '2',
                color: '#151F2A'
              }
            }}
            sx={{
              mb: 20,
              display: ['none', 'block'],
              pl: ['1.5rem', '1.5rem', '1.5rem']
            }}
          />
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              minHeight: '332px',
              height: ['332px', '332px'],
              overflow: 'hidden',
              borderRadius: 16
            }}
          >
            <CardWithOptions
              show={showOptions}
              onClose={() => {
                setTimeout(() => setShowOptions(false), 0);
                setTimeout(() => setSlideIndex(0), 250);
              }}
              origin={
                slideIndex === 1
                  ? 'left'
                  : slideIndex === 2
                  ? 'center'
                  : slideIndex === 3
                  ? 'right'
                  : ''
              }
              cardStyles={{
                padding: '43px'
              }}
            >
              {carouselData.map((item, idx) =>
                slideIndex === idx + 1 ? (
                  <Flex
                    key={idx}
                    sx={{
                      height: '100%',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <Flex
                      sx={{
                        justifyContent: 'space-between'
                      }}
                    >
                      <Flex
                        key={idx}
                        sx={{
                          justifyContent: 'space-between',
                          m: 'auto 0',
                          width: '100%'
                        }}
                      >
                        {item.list.map((option, index) => (
                          <Flex
                            key={index}
                            sx={{
                              flexDirection: 'column',
                              justifyContent: 'flex-start'
                            }}
                          >
                            <Box
                              sx={{
                                height: '60px'
                              }}
                            >
                              <Image
                                src={option.icon}
                                alt={option.title}
                                sx={{ m: '0 auto 10px', display: 'block' }}
                              />
                              {/* <GatsbyImage
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
                          /> */}
                            </Box>
                            <Text
                              sx={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '16px',
                                lineHeight: '22px',
                                textAlign: 'center',
                                letterSpacing: '-0.01em',
                                color: '#FFFFFF',
                                minWidth: '80px'
                              }}
                            >
                              {option.title}
                            </Text>
                          </Flex>
                        ))}
                      </Flex>
                      <Button
                        bg="primaryNavy"
                        sx={{
                          fontFamily: 'Poppins',
                          fontStyle: 'normal',
                          fontWeight: '500',
                          fontSize: '15px',
                          lineHeight: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          textAlign: 'center',
                          color: '#FFFFFF',
                          width: '126px',
                          height: '32px',
                          m: 'auto 0 auto 50px',
                          background: '#3A5F96',
                          borderRadius: '10px',
                          whiteSpace: 'nowrap',
                          px: '12px',
                          minWidth: 'max-content',
                          '&:hover': {
                            bg: 'primaryBlue'
                          },
                          '&:focus': {
                            bg: 'primarySkyBlue'
                          }
                        }}
                      >
                        {item.actionText}
                      </Button>
                    </Flex>
                  </Flex>
                ) : null
              )}
            </CardWithOptions>
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
                      spacing: 16,
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
                    minHeight: '332px',
                    height: ['332px', '332px']
                  }}
                >
                  <ExpandableCard
                    parentRef={item.parentRef}
                    ref={item.ref}
                    elevated
                    radius="16px"
                    expanded={expanded && active === index + 100}
                    onClick={
                      isMobile
                        ? () => {
                            setActive(index + 100);
                            setexpanded(true);
                          }
                        : () => {
                            setShowOptions(true);
                            setSlideIndex(index + 1);
                          }
                    }
                    onClose={() => {
                      setActive(0);
                      setexpanded(false);
                    }}
                  >
                    <Box
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'start'
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
                              ? ['296px', '296px']
                              : '100%',
                          minHeight:
                            expanded && active === index + 100
                              ? ['296px', '296px']
                              : '100%'
                        }}
                        overlay={{
                          colors: [
                            {
                              direction: '0deg',
                              linear: [
                                '#252A53 0%',
                                'rgba(37, 42, 83, 0) 100%',
                                'transparent 30%'
                              ]
                            }
                          ],
                          sx: {
                            backgroundImage:
                              'linear-gradient(0.17deg, #242952 0.14%, rgba(29, 33, 67, 0.92) 2.34%, rgba(36, 41, 82, 0) 36.94%)',
                            backgroundColor: 'transparent',
                            zIndex: '99',
                            pointerEvents: 'none'
                          }
                        }}
                      >
                        <Flex
                          direction="column"
                          justify="flex-end"
                          sx={{
                            px: 6,
                            pt:
                              expanded && active === index + 100
                                ? ['219px', 6]
                                : [8, 6],
                            pb: 8,
                            height: '100%',
                            position: 'relative',
                            zIndex: 2,
                            backgroundImage:
                              'linear-gradient(0.17deg, #242952 0.14%, rgba(29, 33, 67, 0.92) 2.34%, rgba(36, 41, 82, 0) 36.94%)'
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
                                fontSize: '20px',
                                lineHeight: '25px',
                                letterSpacing: '-0.02em',
                                zIndex: '999'
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
                            overflow: 'auto',
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
                              {badges.map((badge, idx) => (
                                <ImageWithLabel
                                  key={idx}
                                  image={redCar}
                                  label={badge}
                                  alt="electric"
                                  labelStyle={{ color: 'white' }}
                                  imageVariant="rounded"
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
            flexDirection: ['column', 'row'],
            width: '100%',
            px: ['1.5rem', '1.5rem', 0]
          }}
        >
          <Box
            sx={{
              width: '100%',
              minHeight: '400px',
              height: ['400px', 'auto']
            }}
          >
            <ExpandableCard
              parentRef={servicesParentRef}
              ref={servicesRef}
              elevated
              radius="16px"
              expanded={expanded && active === 11}
              onClick={() => {
                setActive(11);
                setexpanded(true);
              }}
              onClose={() => {
                setActive(0);
                setexpanded(false);
              }}
            >
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'start'
                }}
              >
                <Card
                  elevated
                  radius={expanded && active === 11 ? '0' : '16px'}
                  overlayed
                  cardStyles={{
                    height:
                      expanded && active === 11 ? ['296px', '296px'] : '415px',
                    minHeight:
                      expanded && active === 11 ? ['296px', '296px'] : '415px'
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
                      pt: expanded && active === 11 ? ['219px', 6] : [8, 6],
                      pb: 8,
                      height: '100%',
                      position: 'relative',
                      zIndex: 2,
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
                          width: '120%'
                        },
                        sx: {
                          mb: 2
                        }
                      }}
                      text={
                        !expanded
                          ? 'Review all the numbers and finalize everything without needing to visit our dealership.'
                          : ''
                      }
                    />
                    <GatsbyImage
                      image={ServicesCar}
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

                    {!expanded && active !== 11 && (
                      <Button
                        bg="primaryBlue"
                        sx={{
                          '&:hover': {
                            bg: 'primaryBlue'
                          },
                          '&:focus': {
                            bg: 'primarySkyBlue'
                          }
                        }}
                      >
                        Book Service Appointment
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
                      overflow: 'auto',
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
                        {[...badges, ...badges, ...badges].map((badge, idx) => (
                          <ImageWithLabel
                            key={idx}
                            image={redCar}
                            label={badge}
                            alt="electric"
                            labelStyle={{ color: 'white' }}
                            imageVariant="rounded"
                          />
                        ))}
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
              height: 'auto'
            }}
          >
            <CardWithImage
              elevated
              radius="16px"
              image={tradeIn}
              alt="hety"
              imageSx={
                expanded
                  ? {
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%'
                    }
                  : {
                      maxHeight: '198px'
                    }
              }
              cardStyles={{
                height: '415px',
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
                    zIndex: '1'
                  }
                }}
                text="Review all the numbers and finalize everything without needing to visit our dealership."
                sx={{
                  p: 6,
                  pt: 6,
                  zIndex: '1'
                }}
              />

              <Button
                onClick={() => navigate('/')}
                color="primaryNavy"
                Icon={SlimArrow}
                space="2"
                sx={{
                  pt: 0,
                  pb: '24px',
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
            px: ['1.5rem', '1.5rem', 0]
          }}
        >
          <Card elevated radius="16px">
            <Grid
              columns={['1fr', 'repeat(12, 1fr)']}
              sx={{
                px: [3, 6],
                py: 8,
                gap: ['2', '40px 8px']
              }}
            >
              <TextBlock
                heading={
                  isMobile
                    ? 'Customers Feedback'
                    : 'What 100,000+ Folks Say About Us'
                }
                headingProps={{
                  withLine: true,
                  line: {
                    width: ['100%', '50%']
                  },
                  sx: {
                    width: ['50%', '100%'],
                    fontWeight: 'semiBold',
                    fontSize: '32',
                    mb: 2
                  }
                }}
                text="Review all the numbers and finalize everything without needing to visit us."
                sx={{
                  gridColumn: [null, '1 / span 9'],
                  gridRow: 1,
                  px: [0, 2, 0]
                }}
              />
              {Array.from({ length: isMobile || isTablet ? 2 : 3 }).map(
                (_, idx) => (
                  <Review
                    key={idx}
                    image={twoPeople}
                    name="Jhon Jhonson"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    sx={{
                      gridColumn: [null, 'span 6', 'span 6', 'span 4'],
                      gridRow: [null, '2'],
                      bg: ['#F8F7F6', 'transparent'],
                      py: [4, 0],
                      px: [2, 4, 0],
                      borderRadius: 6
                    }}
                  />
                )
              )}
              <Button
                onClick={() => navigate('/')}
                color="primaryNavy"
                Icon={SlimArrow}
                space="2"
                sx={{
                  gridColumn: [null, '10 / span 3'],
                  gridRow: [null, 1],
                  justifySelf: [null, 'end'],
                  p: 0,
                  height: 'max-content',
                  alignSelf: 'top',
                  mt: [6, 0],
                  borderRadius: 0,
                  '&:hover': {
                    color: 'primaryBlue'
                  },
                  '&:focus': {
                    color: 'primarySkyBlue'
                  }
                }}
              >
                Read more reviews
              </Button>
            </Grid>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Index;

export const indexPageQuery = graphql`
  {
    redCar: file(name: { eq: "red-car" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    image1: file(name: { eq: "type-image-1" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    image2: file(name: { eq: "type-image-2" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    image3: file(name: { eq: "type-image-3" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    image4: file(name: { eq: "type-image-4" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    image5: file(name: { eq: "type-image-5" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    image6: file(name: { eq: "type-image-6" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    homePageBg: file(name: { eq: "home-hero-bg-toyota" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    homePageBgSm: file(name: { eq: "home-hero-bg-sm" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    twoPeople: file(name: { eq: "two-people" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    ServicesCar: file(name: { eq: "services-cars" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    tradeIn: file(name: { eq: "trade-in" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    brands: allSanityBrand(
      limit: 15
      filter: {
        tags: { regex: "/vehicle/" }
        logo: { svg: { _type: { eq: "image" } } }
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
  }
`;
