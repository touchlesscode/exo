import { Chevron } from '@components/Header/style';
import Modal from '@components/Modal';
import { CardsDataType } from '@hooks/filters/types';
import useFocusTrap from '@hooks/useTrapFocusInside';
import useWindowSize from '@hooks/useWindowSize';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import {
  Box,
  Heading as ThemeUiHeading,
  Button,
  Paragraph,
  ThemeUIStyleObject,
  Spinner,
  Close,
  Label,
  Input,
  Textarea,
} from 'theme-ui';
import Card from './Card';
import ItemsGrid from './ItemsGrid';
import useOnClickOutside from '@hooks/useOnClickOutside'
import useLockedBody from '@hooks/useLockBodyScroll';
interface NoItemsFoundProps {
  search?: string;
  suggestions: CardsDataType[]
}

const NoItemsFound: React.FC<NoItemsFoundProps> = ({
  search,
  suggestions = []
}) => {
  const { placeholder } = useStaticQuery(graphql`
  {
    placeholder: file(absolutePath: { regex: "/comingSoonCar/" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED,
          aspectRatio: 1.5,
          layout: CONSTRAINED,
          formats: [WEBP, AUTO]
        )
      }
    }
  }
  `)
  const gatsbyPlaceholder = getImage(placeholder)
  const { type } = useWindowSize();
  const [isOpen, setIsOpen] = React.useState(false)
  const [showDropdown, setShowDropdown] = React.useState(false)
  const ref = useFocusTrap(isOpen)
  const dropdownRef = React.useRef<HTMLDivElement>()
  const btnRef = React.useRef<HTMLButtonElement>()
  const [timeline, setTimeline] = React.useState('')

  useOnClickOutside([dropdownRef, btnRef], () => setShowDropdown(false))
  useLockedBody(isOpen)

  const handleOnSubmit = (e: React.FormEventHandler<HTMLFormElement>) => {
    e.preventDefault()
    alert('submitted')
  }

  return (
    <>
      <Box
        sx={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr',
          placeContent: 'center',
          gap: 80
        }}
      >
        <Box
          sx={{
            maxWidth: '500px',
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          <Heading>No matches found</Heading>
          <Paragraph
            sx={{
              mt: 2,
              mb: 6
            }}
          >
            We buy hundreds of cars all the time, and can help you acquire the {search || 'one'} you're looking for.
          </Paragraph>
          <Button
            onClick={() => setIsOpen(true)}
            sx={{
              bg: '#3A5F96',
              py: 3,
              px: 8
            }}
          >
            Contact Koons
          </Button>
        </Box>
        <Box
          sx={{
            minHeight: '50vh'
          }}
        >
          <Heading
            sx={{
              textAlign: 'center',
              mb: 5,
            }}
          >
            Other cars you may like
          </Heading>
          {suggestions.length ? (
            <ItemsGrid>
              {suggestions.map(item => (
                <Card item={item} key={item.id} placeholderImage={gatsbyPlaceholder} />
              ))}
            </ItemsGrid>
          ) : (
            <div style={{ textAlign: "center" }}>
              <Spinner color="rgba(36, 42, 82, 0.75)" sx={{ mt: 8 }} />
            </div>
          )}
        </Box>
      </Box>
      <Modal
        show={isOpen}
        width={type === 'sm' ? '100%' : '50%'}
        height={type === 'sm' ? '100%' : !timeline ? '50%' : 'max-content'}
      >
        <Box
          ref={ref}
        >
          <Close
            onClick={() => setIsOpen(false)}
            sx={{
              p: 0,
              position: 'absolute',
              right: 6,
              top: 6,
              color: '#828282'
            }}
          />
          <Box
            sx={{
              p: '5%',
              pt: '5%',
            }}
          >
            <ThemeUiHeading
              as='h1'
              sx={{
                textAlign: 'center'
              }}
            >
              Email sales team at
            </ThemeUiHeading>
            <Box
              onSubmit={handleOnSubmit}
              as='form'
              sx={{
                mt: '80px',
                maxWidth: '567px',
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 32,
              }}
            >
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Button
                  type='button'
                  ref={btnRef}
                  onClick={() => setShowDropdown(!showDropdown)}
                  sx={{
                    color: 'inherit',
                    textAlign: 'left',
                    border: '1px solid #eee',
                    bg: '#eee',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>
                    {timeline || 'Timeline For Purchase'}
                  </span>
                  <Chevron aria-hidden={true} />
                </Button>
                {showDropdown ? (
                  <Box
                    ref={dropdownRef}
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      width: '100%',
                      bg: 'white',
                      boxShadow: '0 12px 32px 0 rgba(26, 26, 26, 0.24)',
                      borderBottomRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      zIndex: 10,
                      borderBottomLeftRadius: '8px',
                      borderBottomRightRadius: '8px',
                      overflow: 'hidden',
                      button: {
                        textAlign: 'left',
                        cursor: 'pointer',
                        py: '.8rem',
                        '&:hover': {
                          bg: '#eee',
                        }
                      }
                    }}
                  >
                    {timelines.map(({ label, id }) => (
                      <button
                        type='button'
                        onClick={() => {
                          setTimeline(id)
                          setShowDropdown(false)
                        }}
                      >
                        {label}
                      </button>
                    ))}
                  </Box>
                ) : null}
              </Box>
              {timeline ? formData.map(({ id, label, type }) => (
                <Box>
                  <Label
                    key={id}
                    htmlFor={id}
                    sx={{
                      fontWeight: 500,
                      textTransform: 'capitalize',
                      mb: 1
                    }}
                  >
                    {label}
                  </Label>
                  {type !== 'textarea' ? (
                    <Input
                      type={type || 'text'}
                      name={id}
                      id={id}
                      mb={3}
                      sx={{
                        borderRadius: 10,
                        borderColor: '#E4E4E4',
                      }}
                    />
                  ) : (
                    <Textarea
                      name={id}
                      id={id}
                        rows={2}
                      sx={{
                        borderRadius: 10,
                        borderColor: '#E4E4E4',
                        resize: 'none',
                        width: '100%',
                        boxSizing: 'border-box'
                      }}
                    />
                  )}
                </Box>
              )) : null}
              {timeline ? <Button
                sx={{
                  py: 2,
                  px: 6,
                  background: '#242A52',
                  alignSelf: 'flex-end',
                  width: 'max-content',
                  '&:hover': {
                    bg: '#2f3875'
                  }
                }}
                type='submit'
              >
                Send email
              </Button> : null}
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default NoItemsFound;

const Heading: React.FC<{ sx?: ThemeUIStyleObject }> = ({ children, sx }) => (
  <ThemeUiHeading
    as='h3'
    sx={{
      fontWeight: 600,
      ...sx
    }}
  >
    {children}
  </ThemeUiHeading>
)

const formData = [
  {
    label: 'First name',
    id: 'firstName',
  },
  {
    label: 'Last name',
    id: 'lastName',
  },
  {
    label: 'Cell Phone',
    id: 'cellPhone',
    type: 'tele'
  },
  {
    label: 'email',
    id: 'email',
    type: 'email'
  },
  {
    label: 'Anything else we should know?',
    id: 'message',
    type: 'textarea'
  },
]

const timelines = [
  {
    label: 'Within a month',
    id: 'Within a month'
  },
  {
    label: '2-6 months',
    id: '2-6 months'
  },
  {
    label: '6+ months',
    id: '6+ months'
  },
]