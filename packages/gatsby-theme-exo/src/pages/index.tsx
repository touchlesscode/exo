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
import { graphql } from 'gatsby';
import React, { useRef } from 'react';
import { Box, Theme } from 'theme-ui';
import Flex from '@exoTheme/components/Flex';
import GatsbyImageBg from '@exoTheme/components/GatsbyImageBg';
import Slider from '@exoTheme/components/Slider';
import CardWithImage from '@exoTheme/components/Card/variants/CardWithImage';
import useWindowSize from '@exoTheme/hooks/useWindowSize';

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
const Index = ({ data }) => {
  const popularityParentRef =
    useRef() as React.MutableRefObject<HTMLDivElement>;
  const servicesParentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const tradeParentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const popularityRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const servicesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const tradeRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const isMobile =
    typeof window !== 'undefined' ? useWindowSize().type === 'sm' : true;
  const [expanded, setexpanded] = React.useState(false);
  const [active, setActive] = React.useState(0);
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
  const brandsImages = brands.nodes.map(({ logo }) => ({
    id: logo?.svg?.asset?.id,
    image: logo?.svg?.asset
  }));
  const bodyTypeImages = [image1, image2, image3, image4, image5, image6].map(
    (type, idx) => ({
      id: idx.toString(),
      image: type
    })
  );
  const carouselRefs = [
    {
      position: 'left',
      parentRef: useRef() as React.MutableRefObject<HTMLDivElement>,
      ref: useRef() as React.MutableRefObject<HTMLDivElement>,
      title: 'Shop Your Way',
      image: twoPeople,
      list: [...badges, ...badges, ...badges]
    },
    {
      position: 'center',
      parentRef: useRef() as React.MutableRefObject<HTMLDivElement>,
      ref: useRef() as React.MutableRefObject<HTMLDivElement>,
      title: 'Peace of Mind',
      image: twoPeople,
      list: [...badges, ...badges, ...badges]
    },
    {
      position: 'right',
      parentRef: useRef() as React.MutableRefObject<HTMLDivElement>,
      ref: useRef() as React.MutableRefObject<HTMLDivElement>,
      title: 'Our People',
      image: twoPeople,
      list: [...badges, ...badges, ...badges]
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
          gap: 8,
          width: '100%',
          maxWidth: ['100%', '971px'],
          mx: 'auto',
          mt: [null, '-100px'],
          pb: '100px'
        }}
      >
        <Flex direction={['column', 'row']} gap={8}>
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
              ({ image, id }: { image: IGatsbyImageData; id: string }) => (
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
              ({ image, id }: { image: IGatsbyImageData; id: string }) => (
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
        </Flex>
        <Box
          sx={{
            width: ['90%', '100%'],
            height: ['400px', '200px'],
            position: 'relative'
          }}
        >
          <ExpandableCard
            parentRef={popularityParentRef}
            ref={popularityRef}
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
            overlayed
            overlay={
              expanded && active === 1
                ? {
                    colors: [
                      {
                        direction: 'to bottom',
                        linear: ['transparent', 'red', 'transparent']
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
                radius={expanded && active === 1 ? '0' : '16px'}
                overlayed
                cardStyles={{
                  height:
                    expanded && active === 1 ? ['296px', '296px'] : '100%',
                  minHeight:
                    expanded && active === 1 ? ['296px', '296px'] : '100%'
                }}
                overlay={
                  expanded && active === 1
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
                    : {
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
                }
              >
                <Flex
                  sx={{
                    flexDirection: ['column', 'row'],
                    width: '100%',
                    height:
                      expanded && active === 1 ? ['296px', '296px'] : '100%',
                    justifyContent:
                      expanded && active === 1 ? 'start' : 'space-between'
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
                          expanded && active === 1 ? 'absolute' : 'static',
                        pt: expanded && active === 1 ? ['219px', 0] : [8, 0]
                      }}
                    />
                    {!expanded && active !== 1 && (
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
                      height: 'auto',
                      zIndex: '0',
                      top: 0,
                      transition: 'all 5000ms'
                    }}
                  />
                </Flex>
              </Card>
              {expanded && active === 1 ? (
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
            // height: ['400px', '200px'],
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
              display: ['none', 'block']
            }}
          />
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
            {carouselRefs.map((item, index) => (
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
                  onClick={() => {
                    setActive(index + 100);
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
                      radius={expanded && active === index + 100 ? '0' : '16px'}
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
                            {item.list.map((badge, idx) => (
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
        <Flex
          gap="8"
          sx={{
            flexDirection: ['column', 'row'],
            width: ['90%', '100%']
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
              expanded={expanded && active === 2}
              onClick={() => {
                setActive(2);
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
                  radius={expanded && active === 2 ? '0' : '16px'}
                  overlayed
                  cardStyles={{
                    height:
                      expanded && active === 2 ? ['296px', '296px'] : '415px',
                    minHeight:
                      expanded && active === 2 ? ['296px', '296px'] : '415px'
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
                      pt: expanded && active === 2 ? ['219px', 6] : [8, 6],
                      pb: 8,
                      height: '100%',
                      position: 'relative',
                      zIndex: 2,
                      backgroundImage:
                        expanded && active === 2
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
                        top: expanded && active === 2 ? '30%' : '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 0,
                        pointerEvents: 'none'
                      }}
                    />

                    {!expanded && active !== 2 && (
                      <Button
                        bg="primaryNavy"
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
                {expanded && active === 2 ? (
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
            <ExpandableCard
              parentRef={tradeParentRef}
              ref={tradeRef}
              elevated
              radius="16px"
              expanded={expanded && active === 3}
              onClick={() => {
                setActive(3);
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
                <CardWithImage
                  elevated
                  radius={expanded && active === 3 ? '0' : '16px'}
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
                    height:
                      expanded && active === 3 ? ['296px', '296px'] : '415px',
                    minHeight:
                      expanded && active === 3 ? ['296px', '296px'] : '415px'
                  }}
                  overlayed
                  overlay={
                    expanded && active === 3
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
                          ],
                          sx: {
                            pointerEvents: 'none'
                          }
                        }
                      : {
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
                        }
                  }
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
                    text={
                      !expanded
                        ? 'Review all the numbers and finalize everything without needing to visit our dealership.'
                        : ''
                    }
                    sx={{
                      p: 6,
                      pt: expanded && active === 3 ? ['219px', 6] : 6,
                      zIndex: '1'
                    }}
                  />
                  {!expanded && active !== 3 && (
                    <Button
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
                  )}
                </CardWithImage>
                {expanded && active === 3 ? (
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
        </Flex>
      </Box>
    </>
  );
};

export default Index;

export const indexPageQuery = graphql`
  {
    redCar: file(absolutePath: { regex: "/red-car/" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    image1: file(absolutePath: { regex: "/type-image-1/" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    image2: file(absolutePath: { regex: "/type-image-2/" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    image3: file(absolutePath: { regex: "/type-image-3/" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    image4: file(absolutePath: { regex: "/type-image-4/" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    image5: file(absolutePath: { regex: "/type-image-5/" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    image6: file(absolutePath: { regex: "/type-image-6/" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    homePageBg: file(absolutePath: { regex: "/home-hero-bg-toyota/" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    homePageBgSm: file(absolutePath: { regex: "/home-hero-bg-sm/" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    twoPeople: file(absolutePath: { regex: "/two-people/" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    ServicesCar: file(absolutePath: { regex: "/services-cars/" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
    }
    tradeIn: file(absolutePath: { regex: "/trade-in/" }) {
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
