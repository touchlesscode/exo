import Badge from '@exoTheme/components/Badge';
import Button from '@exoTheme/components/Button';
import Card from '@exoTheme/components/Card';
import CardWithSlidingHeader from '@exoTheme/components/Card/variants/CardWithSlidingHeader';
import ExpendableCard from '@exoTheme/components/Card/variants/expendable';
import GatsbyImage from '@exoTheme/components/GatsbyImage';
import ImageWithLabel from '@exoTheme/components/ImageWithLabel';
import ListDivided from '@exoTheme/components/ListDivided';
import TextBlock from '@exoTheme/components/TextBlock';
import SlimArrow from '@exoTheme/images/development/slim-arrow.inline.svg';
import { slideUp } from '@exoTheme/theme/animations';
import { graphql } from 'gatsby';
import * as React from 'react';
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
  const isMobile = (typeof window !== "undefined") ? useWindowSize().type === 'sm' : true;
  const [expended, setExpended] = React.useState(false);
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
    id: logo.svg.asset.id,
    image: logo.svg.asset
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
            bg="white"
            elevated
            radius="16px"
            images={brandsImages}
            sliderOptions={{
              itemsToShow: 4,
              spacing: 20,
              sx: {
                height: '65px',
                pt: 4
              }
            }}
            content={{
              heading: 'Browse by brand',
              text: 'Review all the numbers and finalize everything without needing to visit us.',
              headingProps: { as: 'h4', sx: { fontSize: [24, 28], mb: 2 } }
            }}
          />
          <CardWithSlidingHeader
            bg="white"
            elevated
            radius="16px"
            images={bodyTypeImages}
            sliderOptions={{
              itemsToShow: 5,
              spacing: 20,
              sx: {
                height: '65px',
                pt: 4
              }
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
          <ExpendableCard
            elevated
            radius="16px"
            expended={expended}
            onClick={() => setExpended(true)}
            onClose={() => setExpended(false)}
            overlayed
            overlay={{
              colors: [
                {
                  direction: 'to bottom',
                  linear: [
                    'rgba(0,0,0,1)',
                    `rgba(0,0,0, ${expended ? '0' : '1'}) 55%`,
                    'rgba(0,0,0,0)'
                  ]
                },
                {
                  direction: 'to right',
                  linear: ['#242952', '#242952 55%', 'rgba(0,0,0,0)']
                }
              ],
              zIndex: 1
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
              <Flex
                sx={{
                  flexDirection: ['column', 'row'],
                  width: '100%',
                  height: expended ? ['fit-content', '200px'] : '100%',
                  justifyContent: expended ? 'start' : 'space-between',
                  bg: 'black'
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
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
                      position: expended ? 'absolute' : 'static',
                      pt: expended ? [68, 0] : [8, 0]
                    }}
                  />
                  {!expended && (
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
              {expended ? (
                <Box
                  sx={{
                    bg: 'white',
                    position: 'relative',
                    zIndex: 2,
                    overflow: 'auto',
                    flexGrow: 1
                  }}
                >
                  <Box
                    sx={{
                      px: 6,
                      py: 8,
                      background: 'white',
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
                        />
                      ))}
                    </ListDivided>
                  </Box>
                </Box>
              ) : null}
            </Box>
          </ExpendableCard>
        </Box>
        <Slider
          itemsToShow={[1.15, 3]}
          spacing={16}
          options={{
            loop: false,
            slides: {
              origin: 'center'
            }
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
            <Card
              elevated
              radius="16px"
              overlayed
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
                  py: 8,
                  height: '100%',
                  position: 'relative',
                  zIndex: 2
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
                  text="Review all the numbers and finalize everything without needing to visit."
                />
                <GatsbyImage
                  image={ServicesCar}
                  alt="test"
                  objectFit="contain"
                  sx={{
                    position: 'absolute',
                    right: 0,
                    width: ['80%', '95%'],
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 0
                  }}
                />

                <Button bg="primaryBlue">Book Service Appointment</Button>
              </Flex>
            </Card>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: 'auto'
            }}
          >
            <CardWithImage elevated radius="16px" image={tradeIn} alt="hety">
              <TextBlock
                heading="Trade-In Your Car"
                headingProps={{
                  withLine: true,
                  sx: {
                    mb: 2
                  }
                }}
                text="Review all the numbers and finalize everything without needing to visit us."
                sx={{
                  p: 6
                }}
              />
              <Button color="primaryNavy" Icon={SlimArrow} space="2">
                Learn more
              </Button>
            </CardWithImage>
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
        gatsbyImageData(quality: 100)
      }
    }
    image1: file(absolutePath: { regex: "/type-image-1/" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    image2: file(absolutePath: { regex: "/type-image-2/" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    image3: file(absolutePath: { regex: "/type-image-3/" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    image4: file(absolutePath: { regex: "/type-image-4/" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    image5: file(absolutePath: { regex: "/type-image-5/" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    image6: file(absolutePath: { regex: "/type-image-6/" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    homePageBg: file(absolutePath: { regex: "/home-hero-bg-toyota/" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    homePageBgSm: file(absolutePath: { regex: "/home-hero-bg-sm/" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    twoPeople: file(absolutePath: { regex: "/two-people/" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    ServicesCar: file(absolutePath: { regex: "/services-cars/" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    tradeIn: file(absolutePath: { regex: "/trade-in/" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
      }
    }
    brands: allSanityBrand(
      limit: 15
      filter: { tags: { regex: "/vehicle/" } }
    ) {
      nodes {
        logo {
          svg {
            asset {
              gatsbyImageData
              id
            }
          }
        }
      }
    }
  }
`;
