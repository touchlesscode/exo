import styled, { css } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import GridTitle from '@components/GridTitle'

import useWindowSize from '@hooks/useWindowSize'

const BlockVideos = (props: any) => {
    const { title, videos } = props;
    const windowSize = useWindowSize()

    const slidesPerView = () => {
      switch (windowSize.type) {
        case 'sm':
          return 1
        case 'md':
          return 2
        case 'lg':
          return 3
        default:
          return 4
      }
    }

    return (
        <Container type={windowSize.type}>
          {/* <div style={{ paddingTop: windowSize.type === 'sm' ? '0rem' : '2.5rem' }}>
            <GridTitle text={title} />
          </div> */}
          <div>
          <Swiper
            spaceBetween={20}
            slidesPerView={slidesPerView()}
            onSlideChange={() => {}}
            onSwiper={(swiper) => console.log(swiper)}
          >
              {videos?.map((item:any, index:number) => (
                    <SwiperSlide key={index}>
                        <VideoComp videoSrcURL={item} videoTitle={item?.label} />
                    </SwiperSlide>
              ))}
            {/* <SwiperSlide>
              <VideoComp videoTitle="Video Title" />
            </SwiperSlide>
            <SwiperSlide>
              <VideoComp videoTitle="Video Title" />
            </SwiperSlide>
            <SwiperSlide>
              <VideoComp videoTitle="Video Title" />
            </SwiperSlide>
            <SwiperSlide>
              <VideoComp videoTitle="Video Title" />
            </SwiperSlide> */}
          </Swiper>
          </div>
        </Container>
    )
}


// interface IVideoCompProps {
//   videoTitle: string;
//   source: string;
// }

// const VideoComp = ({ videoTitle, source }: IVideoCompProps) => {
//   const [play, setPlay] = useState(false)
//   const videoRef = useRef<null | HTMLVideoElement>(null)

//   useEffect(() => {
//     if(play) {
//       videoRef.current?.play()
//     } else {
//       videoRef.current?.pause()
//     }
//   }, [play])

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLVideoElement>) => {
//     if(e.code === 'Enter') {
//       setPlay(state => !state)
//     }
//   }

//     return (
//       <VideoWrapper>
//         <Video tabIndex={0} onBlur={() => setPlay(false)} ref={videoRef} onKeyDown={e => handleKeyDown(e)} onClick={() => setPlay(state => !state)} loop>
//           <source src={source} type="video/mp4" />
//           Your browser does not support HTML video.
//         </Video>  
//         <PlayButton play={play} src={playbutton} alt="play button" />
//         <VideoTitle play={play}>{videoTitle}</VideoTitle>
//       </VideoWrapper>
//     )
// }

const VideoComp = ({ videoSrcURL, videoTitle }:any) => (
    <div>
      <iframe
        src={videoSrcURL}
        title={videoTitle || "HEy"}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        // webkitallowfullscreen="true"
        // mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  )

const Video = styled.video`
  border-radius: 16px;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  cursor: pointer;
`
const VideoTitle = styled.h3<{ play: boolean }>`
  margin: 0;
  color: ${props => props.theme.colors.white};
  position: absolute;
  z-index: 2;
  bottom: 15px;
  left: 15px;
  pointer-events: none;
  ${props => props.play && css`
    opacity: 0;
  `}
`
const Container = styled.div<{ type: string }>`
    width: 100%;
    max-width: ${props => props.theme.sizes.container};
    margin: 0 auto;
    padding: 0 24px;

    margin-bottom: ${props => {
    switch (props.type) {
      case 'sm':
        return '56px'
      default: 
        return '72px'
    }
  }};
`
const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`

const PlayButton = styled.img<{ play: boolean }>`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  ${props => props.play && css`
    opacity: 0;
  `}
`

export default BlockVideos