// import Button from '@exoTheme/components/Button';
// import Card from '@exoTheme/components/Card';
// import SlidingHeaderCard from '@exoTheme/components/Card/variants/CardWithSlidingHeader';
// import ImageWithLabel from '@exoTheme/components/ImageWithLabel';
// import ListDivided from '@exoTheme/components/ListDivided';
// import Typography from '@exoTheme/components/Typography';
// import useToggle from '@exoTheme/hooks/useToggle';
// import { slideUp } from '@exoTheme/theme/animations';
// import { graphql, Link } from 'gatsby';
// import * as React from 'react';
// import { Box, Flex, Theme } from 'theme-ui';
// import Slider from '@exoTheme/components/Slider';
// import SlimArrow from '@exoTheme/images/development/slim-arrow.inline.svg'
// import CardWithImage from '@exoTheme/components/Card/variants/CardWithImage';
// import TextBlock from '@exoTheme/components/TextBlock';
// import CardWithOverlay from '@exoTheme/components/Card/variants/CardWithOverlay';
// import Badge from '@exoTheme/components/Badge';
// import GatsbyImage from '@exoTheme/components/GatsbyImage';
// import Overlay from '@exoTheme/components/Overlay';

// const badges = ['Electric Cars', 'Family Cars', 'Work Cars', 'City Cars', 'See All']

// const Index = ({ data }) => {
//   const [BBPopen, setBBPopen] = useToggle()
//   const redCarImage = data.image
//   const { brands, servicesBg, homeHeroBg, twoPeople, tradeIn } = data
//   const brandsImages = brands.nodes.map((brand) => (
//     {
//       image: brand.logo.svg.asset,
//       id: brand.logo.svg.asset.id
//     })
//   )

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 8
//       }}
//     >
//       <Card
//         bgImage={homeHeroBg.childImageSharp.gatsbyImageData.images.fallback.src}
//         sx={{
//           height: '100vh',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center bottom',
//           px: 8,
//           pt: 128
//         }}
//       >
//         <Box
//           sx={{
//             maxWidth: (theme: Theme) => theme.breakpoints?.[2],
//             mx: 'auto'
//           }}
//         >
//           <Typography
//             as='h1'
//             sx={{
//               textAlign: 'center',
//               width: '100%',
//               mx: 'auto',
//               mb: 6
//             }}
//           >
//             Hassle-free <br /> car buying
//           </Typography>
//           <Typography
//             sx={{
//               textAlign: 'center',
//               fontSize: 18,
//             }}
//           >
//             Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit,
//             sed do eiusmod tempor incididunt ut
//             labore et dolore magna aliqua.
//           </Typography>
//           <Flex
//             sx={{
//               mt: 32,
//               gap: 16,
//               justifyContent: 'center'
//             }}
//           >
//             <Button bg='primaryNavy' >
//               Browse Cars
//             </Button>
//             <Button
//               color='primaryNavy'
//               sx={{
//                 border: (theme: Theme) => `1px solid ${theme.colors?.primaryNavy}`
//               }}
//             >
//               Sell My Car
//             </Button>
//           </Flex>
//         </Box>
//       </Card>
//       <SlidingHeaderCard
//         images={brandsImages}
//         title='Browse by brand'
//         description='Review all the numbers and finalize everything without needing to visit our dealership.'
//         sx={{
//           width: ['90%', '366px'],
//           mx: 'auto',
//           pt: 6
//         }}
//       />
//       <SlidingHeaderCard
//         images={brandsImages}
//         title='Browse by body type'
//         description='Review all the numbers and finalize everything without needing to visit our dealership.'
//         sx={{
//           width: ['90%', '366px'],
//           mx: 'auto',
//           pt: 6
//         }}
//       />
//       <CardWithOverlay
//         expendable
//         expendTo={{
//           width: '100vw'
//         }}
//         expended={BBPopen}
//         onClick={setBBPopen}
//         onClose={setBBPopen}
//         title="Browse by popularity"
//         bgOverlay='#000'
//         shadow='full-md'
//         variant='rounded'
//         sx={{
//           width: ['90%', '366px'],
//           mx: 'auto',
//           height: '438px'
//         }}
//         overlay={{
//           direction: 'to bottom',
//           transitioned: BBPopen,
//           transitionDuration: 200,
//           height: BBPopen ? '20%' : '100%',
//           colors: ['rgba(0,0,0,1) 0%', 'rgba(0,0,0,1) 45%', 'rgba(0,0,0,0) 100%'],
//         }}
//       >
//         <Box
//           sx={{
//             height: BBPopen ? '350px' : '438px',
//             position: 'relative',
//             transition: 'height 200ms'
//           }}
//         >
//           <Box
//             sx={{
//               position: 'relative',
//               zIndex: 2,
//               px: 6,
//               py: 8
//             }}
//           >
//             <TextBlock
//               heading='Browse by popularity'
//               headingProps={{
//                 color: 'white',
//                 withLine: true,
//                 line: {
//                   align: 'top',
//                   space: '2'
//                 }
//               }}
//             />
//             {!BBPopen && <Flex
//               sx={{
//                 flexWrap: 'wrap',
//                 gap: 2,
//                 mt: 5
//               }}
//             >
//               {badges.map(badge => (
//                 <Badge
//                   variant='rounded'
//                   bg='rgba(255, 255, 255, 0.12)'
//                 >
//                   {badge}
//                 </Badge>
//               ))}
//             </Flex>}
//           </Box>
//           <GatsbyImage
//             image={redCarImage}
//             objectFit={BBPopen ? 'cover' : 'contain'}
//             objectPosition={BBPopen ? 'center' : 'bottom'}
//             alt='test'
//             sx={{
//               position: 'absolute',
//               inset: 0
//             }}
//           />
//         </Box>
//         <Box
//           sx={{
//             px: 6,
//             py: 8,
//             animation: `${slideUp} 300ms`,
//             overflow: 'auto'
//           }}
//         >
//           {BBPopen && (
//             <ListDivided>
//               {[...badges, ...badges].map(badge => (
//                 <ImageWithLabel alt={badge} image={redCarImage} label={badge} imageVariant='rounded' imageWidth='100px' />
//               ))}
//             </ListDivided>
//           )}
//         </Box>

//         {/* <Box
//           sx={{
//             p: 6,
//             opacity: 0,
//             animation: `${slideUp} 500ms 200ms forwards`
//           }}
//         >
//           <ListDivided>
//             {Array(10)
//               .fill(null)
//               .map((item, idx) => (
//                 <Link to='/' key={idx}>
//                   <ImageWithLabel
//                     imageVariant="rounded"
//                     image={redCarImage}
//                     label="Electric Cars"
//                     alt="test"
//                   />
//                 </Link>
//               ))}
//           </ListDivided>
//         </Box> */}
//       </CardWithOverlay>
//       <Slider
//         itemsToShow={1.1}
//         spacing={16}
//         options={{
//           loop: false,
//           slides: {
//             origin: 'center'
//           }
//         }}
//       >
//         <Card
//           bgImage={twoPeople.childImageSharp.gatsbyImageData.images.fallback.src}
//           variant='rounded'
//           sx={{
//             height: '479px',
//             p: 6,
//             backgroundSize: 'cover',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'end'
//           }}
//         >
//           <Box>
//             <Typography color='white' as='h4'>
//               Automotive Advisor
//             </Typography>
//             <Typography color='white' sx={{ width: '95%', mt: 2 }}>
//               Need help? Our experts are here to make sure your car buying experience is a breeze.
//             </Typography>
//           </Box>

//         </Card>
//       </Slider>
//       <Card
//         bgImage={
//           servicesBg.childImageSharp.gatsbyImageData.images.fallback.src
//         }
//         variant='rounded'
//         shadow='full-md'
//         sx={{
//           padding: 6,
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//           width: ['90%', '366px'],
//           mx: 'auto',
//         }}
//       >
//         <TextBlock
//           heading='Koons Service'
//           text='Review all the numbers and finalize everything without needing to visit our dealership.'
//           headingProps={{
//             as: 'h3',
//             withLine: true,
//             line: {
//               align: 'top',
//               width: '120%',
//               space: '2'
//             }
//           }}
//           textProps={{
//             sx: {
//               mt: 1
//             }
//           }}
//         />
//         <Button
//           bg='primaryBlue'
//           sx={{
//             fontSize: 16,
//             fontWeight: 'medium',
//             width: '100%',
//             mt: '266px'
//           }}
//         >
//           Book Service Appointment
//         </Button>
//       </Card>
//       <CardWithImage
//         image={tradeIn}
//         alt='test'
//         variant='rounded'
//         shadow='full-md'
//         sx={{
//           width: ['90%', '366px'],
//           mx: 'auto',
//         }}
//       >
//         <Box
//           sx={{
//             p: 6
//           }}
//         >
//           <TextBlock
//             heading='Trade-In Your Car'
//             text=' Review all the numbers and finalize everything without needing to visit our dealership.'
//             headingProps={{
//               as: 'h3',
//               withLine: true,
//               line: {
//                 align: 'top',
//                 width: '85%',
//                 space: '2'
//               },
//               sx: { fontWeight: 'semiBold' }
//             }}
//             textProps={{
//               sx: {
//                 mt: 1
//               }
//             }}
//           />
//           <Button
//             color='primaryBlue'
//             Icon={SlimArrow}
//             space='2'
//             sx={{
//               fontSize: 18,
//               fontWeight: 'semiBold',
//               mt: '40px',
//               p: 0
//             }}
//           >
//             Learn more
//           </Button>
//         </Box>
//       </CardWithImage>
//     </Box>
//   );
// };

// export default Index;

// export const IndexQuery = graphql`
// {
//   brands: allSanityBrand(filter: {tags: {in: "vehicle"}}, sort: {fields: _updatedAt}) {
//     nodes {
//       logo {
//         svg {
//           asset {
//             id
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
//   image: file(absolutePath: { regex: "/red-car/" }) {
//     childImageSharp {
//       gatsbyImageData(placeholder: BLURRED)
//     }
//   }
//   homeHeroBg: file(absolutePath: { regex: "/home-hero-bg/" }) {
//     childImageSharp {
//       gatsbyImageData(placeholder: BLURRED)
//     }
//   }
//   servicesBg: file(absolutePath: { regex: "/services-bg/" }) {
//     childImageSharp {
//       gatsbyImageData(placeholder: BLURRED)
//     }
//   }
//   twoPeople: file(absolutePath: { regex: "/two-people/" }) {
//     childImageSharp {
//       gatsbyImageData(placeholder: BLURRED)
//     }
//   }
//   tradeIn: file(absolutePath: { regex: "/trade-in/" }) {
//     childImageSharp {
//       gatsbyImageData(placeholder: BLURRED)
//     }
//   }
// }
// `
