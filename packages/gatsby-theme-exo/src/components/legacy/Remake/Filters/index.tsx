import * as React from 'react';
import { Box, Flex, Spinner, Close, Text, Button } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';

import Applied from './Applied';
import Switcher from './Switcher';
import List from './List';
import useLockedBody from '@hooks/useLockBodyScroll';



interface FiltersProps {
  options: {
    id: string,
    heading: string,
    values: any[]
  }[];
  total: number,
  totalSelected: number,
  onReset: () => void,
  loading: boolean
}

const Filters: React.FC<FiltersProps> = ({
  options,
  total,
  totalSelected,
  onReset,
  loading
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  useLockedBody(isOpen)
  return (
    <>
      <Box
        sx={{
          pt: '1.5rem',
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
          width: '100%',
          px: "1.25rem",
          '@media only screen and (min-width: 768px)': {
            display: 'none'
          }
        }}
      >
        <Text
          sx={{
            fontSize: "1.438rem",
            lineHeight: "2.25rem",
            fontWeight: 600,
            color: "#151F2A",
          }}
        >
          All Inventory
        </Text>
        <Button
          onClick={() => setIsOpen(true)}
          sx={{
            color: totalSelected ? 'white' : "#3A5F96",
            backgroundColor: totalSelected ? '#3A5F96' : "transparent",
            border: "2px solid #3A5F96",
            borderRadius: "44px",
            fontWeight: "500",
            fontSize: "17px",
            lineHeight: "24px",
            padding: "4px 16px",
          }}
        >
          Filters {totalSelected ? `(${totalSelected})` : null}
        </Button>
      </Box>
      <Box
        sx={{
          display: !isOpen && 'none',
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          zIndex: 100,
          inset: 0,
          bg: 'white',
          '@media (min-width: 768px)': {
            bg: 'unset',
            display: 'block',
            zIndex: 0,
            position: 'static',
            width: '100%',
            minWidth: '200px',
            maxWidth: '300px',
            minHeight: '100vh'
          }
        }}
      >
        <Box
          sx={{
            height: '100%',
            '@media (min-width: 768px)': {
              position: 'fixed',
              left: 0,
              bg: 'white',
              width: 'inherit',
              minWidth: 'inherit',
              maxWidth: 'inherit',
              padding: '0px',
              zIndex: 1,
              overflowY: 'hidden',
              height: '100%',
            }
          }}
        >
          <Box
            sx={{
              display: !isOpen && 'none',
              width: '100vw',
              height: '100vh',
              position: 'fixed',
              zIndex: 100,
              inset: 0,
              bg: 'white',
              '@media (min-width: 768px)': {
                bg: 'unset',
                display: 'block',
                zIndex: 0,
                position: 'static',
                width: '100%',
                minWidth: '200px',
                maxWidth: '300px',
                minHeight: '100vh'
              }
            }}
          >
            {isOpen && (
              <Flex
                sx={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontWeight: 600,
                  fontSize: 24,
                  p: '1.5rem'
                }}
              >
                <Text>Filters</Text>
                <Close
                  color='#A1A1A1'
                  sx={{ pr: 0 }}
                  onClick={() => setIsOpen(false)}
                />
              </Flex>)}
            <Box
              sx={{
                height: '100%',
                '@media (min-width: 768px)': {
                  position: 'fixed',
                  left: 0,
                  bg: 'white',
                  width: 'inherit',
                  minWidth: 'inherit',
                  maxWidth: 'inherit',
                  padding: '0px',
                  zIndex: 1,
                  overflowY: 'hidden',
                  height: '100%',
                }
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  bg: 'white',
                  '@media (min-width: 768px)': {
                    position: 'fixed',
                    width: '100%',
                    minWidth: '200px',
                    maxWidth: '300px',
                    left: 0,
                    padding: '0px',
                    zIndex: 1,
                    overflowY: 'hidden',
                    height: '100%',
                    pt: '1rem',
                    '@media (min-width: 768px)': {
                      paddingBottom: '0 !important'
                    }
                  }
                }}
                style={{
                  paddingBottom: 'calc(var(--header) * 2)',
                }}
              >
                <Scrollbars
                  autoHide
                  autoHideTimeout={1000}
                  autoHideDuration={200}
                >
                  <Box sx={{ p: ['1.5rem', '1rem'] }} style={{ paddingBottom: 'var(--header)' }}>
                    <Applied>
                      <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <span>{totalSelected} filters applied</span>
                        {!!totalSelected ? <Button
                          onClick={onReset}
                          sx={{
                            p: 0,
                            backgroundColor: "transparent",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontSize: "0.9rem",
                            lineHeight: "1.525rem",
                            fontWeight: "500",
                            display: "inline-flex",
                            alignItems: "center",
                            textAlign: "center",
                            color: "#3a5f96",
                            float: "right",
                            '@media (max-width: 768px)': {
                              display: 'none'
                            }
                          }}
                        >
                          Reset Filters
                        </Button> : null}
                      </Flex>
                    </Applied>
                    <Switcher option1='By Price' option2='By Payment' />
                    <List options={options} />
                  </Box>
                </Scrollbars>
              </Box >
              {!!totalSelected ? (
                <Box
                  sx={{
                    position: 'fixed',
                    zIndex: 10,
                    bottom: 0,
                    display: 'flex',
                    bg: 'white',
                    justifyContent: "space-between",
                    alignItems: 'center',
                    width: '100%',
                    p: '1rem',
                    boxShadow: '0 1px 12px 0 rgba(0, 0, 0, 0.03), 0 4px 80px 0 rgba(0, 0, 0, 0.08)',
                    '@media (min-width: 768px)': {
                      display: 'none'
                    }
                  }}
                >
                  <Button
                    onClick={onReset}
                    sx={{
                      p: 0,
                      border: "none",
                      backgroundColor: "transparent",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "1.0625rem",
                      lineHeight: "1.5rem",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      color: "#3a5f96"
                    }}
                  >
                    Reset Filters
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    sx={{
                      display: 'flex',
                      gap: '5px',
                      alignItems: 'center',
                      bg: '#3A5F96'
                    }}
                  >
                    See {" "}
                    {!loading
                      ? total
                      : (
                        <Spinner width='15px' height='15px' />
                      )}
                    {" "} cars
                  </Button>
                </Box>) : null}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Filters;

