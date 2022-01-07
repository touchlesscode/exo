import Badge from '@exoTheme/components/Badge';
import Button from '@exoTheme/components/Button';
import Card from '@exoTheme/components/Card';
import CardWithSlidingHeader from '@exoTheme/components/Card/variants/CardWithSlidingHeader';
import ExpandableCard from '@exoTheme/components/Card/variants/Expandables';
import GatsbyImage from '@exoTheme/components/GatsbyImage';
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
import CardWithList from '@exoTheme/components/Card/variants/CardWithList';
import CardWithImage from '@exoTheme/components/Card/variants/CardWithImage';
import useWindowSize from '@exoTheme/hooks/useWindowSize';

const badges = [
  'Electric Cars',
  'Family Cars',
  'Work Cars',
  'City Cars',
  'See All'
];
const benifits = [
  'Voted best places to work(11 years in a row)',
  '20 + languages spoken',
  'Average employee tenure 10 + years',
  '4.8 - star rating across 100, 000 + reviews'
];
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
  return (
    <>
      <GatsbyImageBg
        image={isMobile ? homePageBgSm : homePageBg}
        alt="heey"
        height="100vh"
        objectPosition="bottom"
        sx={{
          pt: 128,
          width: '95%',
          mx: 'auto'
        }}
      >
        <Box
          sx={{
            maxWidth: (theme: Theme) => [
              theme.breakpoints?.[2],
              theme.breakpoints?.[0]
            ],
            mx: 'auto'
          }}
        >
          <TextBlock
            heading="Hassle-free car buying"
            headingProps={{
              as: 'h1',
              sx: {
                textAlign: 'center',
                width: ['50%', '100%'],
                mx: 'auto',
                mb: 6
              }
            }}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            textProps={{
              sx: {
                textAlign: 'center',
                fontSize: 18
              }
            }}
          />
          <Flex
            sx={{
              mt: 32,
              gap: 16,
              justifyContent: 'center'
            }}
          >
            <Button bg="primaryNavy">Browse Cars</Button>
            <Button
              color="primaryNavy"
              sx={{
                border: (theme: Theme) =>
                  `1px solid ${theme.colors?.primaryNavy}`
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
          maxWidth: (theme: Theme) => [null, theme.breakpoints?.[2]],
          mx: 'auto',
          mt: [null, '-100px'],
          pb: '100px'
        }}
      >
        <Flex
          direction={['column', 'row']}
          gap={8}
          sx={{
            width: '90%'
          }}
        >
          <CardWithSlidingHeader
            options={{
              renderMode: 'performance',
              rubberband: false,
              loop: true,
              disabled: false,
              slides: {
                perView: 4,
                spacing: 20
              },
              drag: true,
              breakpoints: {
                '(min-width: 768px.02)': {
                  drag: true
                }
              }
            }}
            slideStyles={{
              height: '69px',
              width: '100%',
              mt: 4
            }}
            cardStyles={{
              bg: 'white',
              borderRadius: '16px',
              boxShadow: '0px 8px 24px rgba(84, 84, 84, 0.26)'
            }}
            images={brandsImages}
            content={{
              heading: 'Browse by brand',
              text: 'Review all the numbers and finalize everything without needing to visit us.',
              headingProps: { as: 'h4', sx: { fontSize: [24, 28], mb: 2 } }
            }}
          />
          <CardWithSlidingHeader
            images={bodyTypeImages}
            options={{
              renderMode: 'performance',
              rubberband: false,
              loop: true,
              disabled: false,
              slides: {
                perView: 3,
                spacing: 20
              },
              drag: true,
              breakpoints: {
                '(min-width: 768px.02)': {
                  drag: true
                }
              }
            }}
            slideStyles={{
              height: '65px',
              width: '100%',
              mt: 4
            }}
            cardStyles={{
              bg: ['#FCF7EA', 'white'],
              borderRadius: '16px',
              boxShadow: '0px 8px 24px rgba(84, 84, 84, 0.26)'
            }}
            content={{
              heading: 'Browse by body type',
              text: 'Review all the numbers and finalize everything without needing to visit us.',
              headingProps: { as: 'h4', sx: { fontSize: [24, 28], mb: 2 } }
            }}
          />
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
                          `rgba(0,0,0, ${
                            expanded && active === 1 ? '0' : '1'
                          }) 55%`,
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
                              'rgba(29, 33, 67, 0.92) 9.34%',
                              'rgba(36, 41, 82, 0) 75.94%'
                            ]
                          }
                        ]
                      }
                    : {
                        zIndex: 1,
                        colors: [
                          {
                            direction: '0.17deg',
                            linear: ['#fff', 'fff', 'fff']
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
                      expanded && active === 1 ? 'start' : 'space-between',
                    bg: 'black'
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
                      heading="Borwse by popularity"
                      headingProps={{
                        sx: {
                          fontWeight: 'medium',
                          fontSize: [24, 28]
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
            drag: true,
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
        >
          {Array(4)
            .fill('')
            .map((item, idx) => (
              <CardWithList
                key={idx}
                color="white"
                elevated
                radius="16px"
                overlayed
                overlay={{
                  zIndex: 1,
                  colors: [
                    {
                      direction: '182.17deg',
                      linear: [
                        'rgba(36, 41, 82, 0) 38.4%',
                        'rgba(36, 41, 82, 0.86) 50%',
                        '#242952 98.18%'
                      ]
                    }
                  ]
                }}
                title="Our People"
                image={twoPeople}
                alt="test"
                list={benifits}
              />
            ))}
        </Slider>
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
                      expanded && active === 2 ? ['296px', '296px'] : '100%',
                    minHeight:
                      expanded && active === 2 ? ['296px', '296px'] : '100%'
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
                          ? 'linear-gradient(0.17deg, #242952 0.14%, rgba(29, 33, 67, 0.92) 9.34%, rgba(36, 41, 82, 0) 75.94%)'
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
                          ? 'Review all the numbers and finalize everything without needing to visit.'
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
                        width: ['80%', '95%'],
                        top: expanded && active === 2 ? '30%' : '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 0
                      }}
                    />

                    {!expanded && active !== 2 && (
                      <Button bg="primaryBlue">Book Service Appointment</Button>
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
                      : {}
                  }
                  cardStyles={{
                    height:
                      expanded && active === 3 ? ['296px', '296px'] : '100%',
                    minHeight:
                      expanded && active === 3 ? ['296px', '296px'] : '100%'
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
                                'rgba(29, 33, 67, 0.92) 9.34%',
                                'rgba(36, 41, 82, 0) 75.94%'
                              ]
                            }
                          ]
                        }
                      : {
                          zIndex: 1,
                          colors: [
                            {
                              direction: '0.17deg',
                              linear: ['#fff', 'fff', 'fff']
                            }
                          ]
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
                        ? 'Review all the numbers and finalize everything without needing to visit us.'
                        : ''
                    }
                    sx={{
                      p: 6,
                      pt: expanded && active === 3 ? ['219px', 6] : 6,
                      zIndex: '1'
                    }}
                  />
                  {!expanded && active !== 3 && (
                    <Button color="primaryNavy" Icon={SlimArrow} space="2">
                      Learn more
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
