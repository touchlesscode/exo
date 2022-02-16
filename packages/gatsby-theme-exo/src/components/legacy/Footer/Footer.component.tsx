/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from 'react';
import { Box, Divider, Flex, Grid, Text, Theme } from 'theme-ui'
import Link from '@components/Link';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { footerData } from './data';
import Logo from '../../assets/icons/logo-white.inline.svg'

interface Props {
  footerRef?: React.RefObject<HTMLDivElement>
}

const Footer: React.FC<Props> = ({footerRef}) => {
  const { logo } = useStaticQuery(graphql`
  {
    logo: file(absolutePath: {regex: "/Bug_and_Word_White/"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
  `)

  const logoImage = getImage(logo)

  return (
    <Box
      ref={footerRef}
      as='footer'
      bg='#242A52'
      sx={{
        px: [15, 20, 30, 40, 72],
        pt: 56,
        pb: 48,
        fontFamily: 'Poppins'
      }}
    >
      <Box
        sx={{
          maxWidth: (theme: Theme) => theme?.breakpoints?.[2],
          mx: 'auto'
        }}
      >
        <Grid
          columns={['1fr', '1fr', 'repeat(3, 1fr)', 'repeat(5, 1fr)']}
          sx={{
            gap: '40px 20px',
            pb: 40
          }}
        >
          {footerData.map(({ title, links }, index1) => {
            return (
              <Box key={title.replaceAll(' ', '_') + index1}>
                <Text
                  as='p'
                  color='rgba(255, 255, 255, 0.72)'
                  sx={{
                    fontWeight: '600',
                    fontSize: 20
                  }}
                >
                  {title}
                </Text>
                <Flex
                  sx={{
                    mt: 3,
                    gap: '12px',
                    flexDirection: 'column'
                  }}
                >
                  {links.map(({ label, to }, index2) => {
                    return (
                      <Link
                        key={label.replaceAll(' ', '_') + index2}
                        to={to} style={{ width: 'fit-content' }}
                      >
                        <Text
                          as='p'
                          color='white'
                          sx={{
                            fontWeight: '500',
                            fontSize: 16
                          }}
                        >
                          {label}
                        </Text>
                      </Link>
                    )
                  })}
                </Flex>
              </Box>
            )
          })}
        </Grid>
        <Divider sx={{ border: 0, height: '1px', bg: 'rgba(255, 255, 255, 0.2)' }} />
        <Flex
          sx={{
            mt: 37,
            flexDirection: ['column', 'column', 'row'],
            gap: [16, 16, 34],
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Link to='/'>
            <Box
              sx={{
                maxWidth: '150px',
                height: '34px'
              }}
            >
              <Logo />
            </Box>
          </Link>
          <Flex
            sx={{
              flexDirection: ['column', 'column', 'row'],
              gap: [34],
            }}
          >
            <Flex
              sx={{
                gap: 1
              }}
            >
              <Link to='#'>
                <Text color='white'>
                  Terms of Use
                </Text>
              </Link>
              <span aria-hidden={true} style={{ color: 'white' }}>{" "} / {" "}</span>
              <Link to='#'>
                <Text color='white'>
                  Privacy Policy
                </Text>
              </Link>
            </Flex>
            <Text color='white'>
              Copyright © 2000-2022 ABC Co.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;