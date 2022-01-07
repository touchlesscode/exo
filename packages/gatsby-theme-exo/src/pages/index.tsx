import Badge from '@exoTheme/components/Badge';
import Button from '@exoTheme/components/Button';
import Card from '@exoTheme/components/Card';
import ExpendableCard from '@exoTheme/components/Card/variants/expendable';
import GatsbyImage from '@exoTheme/components/GatsbyImage';
import ImageWithLabel from '@exoTheme/components/ImageWithLabel';
import ListDivided from '@exoTheme/components/ListDivided';
import TextBlock from '@exoTheme/components/TextBlock';
import SlimArrow from '@exoTheme/images/development/slim-arrow.inline.svg';
import { slideUp } from '@exoTheme/theme/animations';
import { graphql, Link } from 'gatsby';
import * as React from 'react';
import { Box, Grid, Theme } from 'theme-ui';
import Flex from '@exoTheme/components/Flex';
import GatsbyImageBg from '@exoTheme/components/GatsbyImageBg';
import Slider from '@exoTheme/components/Slider';
import CardWithImage from '@exoTheme/components/Card/variants/CardWithImage';
import useWindowSize from '@exoTheme/hooks/useWindowSize';
import SliderWheel from '@exoTheme/components/Slider/variants/SliderWheel';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Recview from '@exoTheme/components/Review';
import TypographyWithLine from '@exoTheme/components/Typography/variants/TypographyWithLine';

const badges = [
  'Electric Cars',
  'Family Cars',
  'Work Cars',
  'City Cars',
  'See All'
];

// @ts-ignore
const Index = ({ data }) => {
  const isMobile = useWindowSize().type === 'sm';
  const isTablet = useWindowSize().type === 'md';
  const [expended, setExpended] = React.useState(false);
  const [brandExpended, setBrandExpended] = React.useState(false);
  const [bodyTypeExpended, setBodyTypeExpended] = React.useState(false);
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
  const brandsImages = brands.nodes.map(
    ({ logo }): { id: string; image: IGatsbyImageData } => ({
      id: logo?.svg?.asset?.id,
      image: logo?.svg?.asset
    })
  );
  const bodyTypeImages = [image1, image2, image3, image4, image5, image6].map(
    (type, idx) => ({
      id: idx.toString(),
      image: type
    })
  );
  const px = 6;

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
            textAlign: 'center',
            mx: 'auto'
          }}
        >
          <TextBlock
            heading="Hassle-free car buying"
            headingProps={{
              as: 'h1',
              sx: {
                textAlign: 'center',
                width: ['100%'],
                maxWidth: ['290px', '390px', '450px', 'unset'],
                mx: 'auto',
                mb: 6,
                fontSize: [null, 55, 65, 75],
                whiteSpace: [null, null, null, 'nowrap']
              }
            }}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            textProps={{
              sx: {
                textAlign: 'center',
                fontSize: 18,
                maxWidth: (theme: Theme) => [
                  '450px',
                  theme.breakpoints?.[0],
                  // theme.breakpoints?.[2],
                  theme.breakpoints?.[0]
                ],
                mx: 'auto'
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
        <Grid
          columns={['1fr', '1fr 1fr']}
          gap={8}
          sx={{
            px
          }}
        >
          <ExpendableCard
            expended={brandExpended}
            onClick={() => setBrandExpended(true)}
            onClose={() => setBrandExpended(false)}
            bg="white"
            elevated
            radius="16px"
          >
            <Box
              sx={{
                pt: brandExpended ? 10 : 0,
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <SliderWheel
                slideOnScrollingY
                itemsToShow={5}
                spacing={20}
                options={{
                  loop: false
                }}
                sx={{
                  height: [97, 112],
                  alignItems: 'center'
                }}
              >
                {brandsImages.map(
                  ({ image, id }: { id: string; image: IGatsbyImageData }) => (
                    <GatsbyImage
                      key={id}
                      image={image}
                      alt="test"
                      objectFit="contain"
                      sx={{
                        mx: 'auto',
                        height: 55,
                        minWidth: '20%'
                      }}
                    />
                  )
                )}
              </SliderWheel>
              <Box
                sx={{
                  p: 6
                }}
              >
                <TextBlock
                  heading="Browse by brand"
                  text="Review all the numbers and finalize everything without needing to visit us."
                  headingProps={{
                    as: 'p',
                    sx: { fontWeight: 'bold', fontSize: 20, mb: 2 }
                  }}
                />
              </Box>
              {brandExpended ? (
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
          <ExpendableCard
            expended={bodyTypeExpended}
            onClick={() => setBodyTypeExpended(true)}
            onClose={() => setBodyTypeExpended(false)}
            bg="white"
            elevated
            radius="16px"
          >
            <Box
              sx={{
                pt: bodyTypeExpended ? 10 : 0,
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <SliderWheel
                slideOnScrollingY
                itemsToShow={3.5}
                spacing={20}
                options={{
                  loop: false
                }}
                sx={{
                  height: [97, 112],
                  alignItems: 'center'
                }}
              >
                {bodyTypeImages.map(
                  ({ image, id }: { id: string; image: IGatsbyImageData }) => (
                    <GatsbyImage
                      key={id}
                      image={image}
                      alt="test"
                      objectFit="contain"
                      sx={{
                        height: [55, 95],
                        minWidth: '20%'
                      }}
                    />
                  )
                )}
              </SliderWheel>
              <Box
                sx={{
                  p: 6
                }}
              >
                <TextBlock
                  heading="Browse by body type"
                  text="Review all the numbers and finalize everything without needing to visit us."
                  headingProps={{
                    as: 'p',
                    sx: { fontWeight: 'bold', fontSize: 20, mb: 2 }
                  }}
                />
              </Box>
              {bodyTypeExpended ? (
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
        </Grid>
        <Box
          sx={{
            height: ['400px', '200px'],
            position: 'relative',
            px
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
                  height: expended ? ['20%', '10%'] : '100%',
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
        <Box
          sx={{
            width: '100%'
          }}
        >
          <Box
            sx={{
              px
            }}
          >
            <TypographyWithLine
              width={['100%', '150%']}
              sx={{
                width: ['50%', '100%'],
                fontWeight: 'semiBold',
                fontSize: '32',
                display: ['none', 'none', 'block'],
                mb: 5
              }}
            >
              Why Us
            </TypographyWithLine>
          </Box>
          <Slider
            itemsToShow={[1.15, 1.07, 3]}
            spacing={16}
            options={{
              loop: false,
              slides: {
                origin: isMobile ? 'center' : 'auto'
              }
            }}
            sx={{
              maxWidth: [null, null, `calc(100% - ${2 * px * 4}px)`],
              mx: 'auto'
            }}
          >
            {Array.from({ length: 3 }).map((_, idx) => (
              <Card
                key={idx}
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
              >
                <Link to="#">
                  <GatsbyImageBg
                    image={twoPeople}
                    alt="test"
                    sx={{
                      height: ['250px', '238px'],
                      p: 6,
                      backgroundSize: 'cover',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <TypographyWithLine
                      color="white"
                      sx={{ fontSize: 20, fontWeight: 'semiBold' }}
                      width="60%"
                    >
                      Shop Your Way, at Us
                    </TypographyWithLine>
                  </GatsbyImageBg>
                </Link>
              </Card>
            ))}
          </Slider>
        </Box>
        <Flex
          gap="8"
          sx={{
            flexDirection: ['column', 'row'],
            px
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
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  height: '100%'
                }}
              >
                <GatsbyImageBg
                  image={ServicesCar}
                  alt="test"
                  objectFit="contain"
                  sx={{
                    height: '100%'
                  }}
                >
                  <Flex
                    direction="column"
                    justify="space-between"
                    sx={{
                      px: 6,
                      py: 8,
                      height: '100%'
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
                      text="Review all the numbers and finalize everything without needing to visit us."
                    />
                    <Button bg="primaryNavy" sx={{ px: 0 }}>
                      Book Service Appointment
                    </Button>
                  </Flex>
                </GatsbyImageBg>
              </Box>
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
        <Box
          sx={{
            height: 'max-content',
            px
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
                  <Recview
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
                  borderRadius: 0
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
        gatsbyImageData(quality: 70, placeholder: NONE)
      }
    }
    homePageBgSm: file(absolutePath: { regex: "/home-hero-bg-sm/" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, placeholder: NONE)
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
