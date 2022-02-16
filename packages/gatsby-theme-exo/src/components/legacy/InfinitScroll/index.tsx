import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { FC, ReactNode, useEffect, useRef } from 'react'
import { Box } from 'theme-ui';

interface InfiniteScrollPropType {
  fetchMoreData: () => void;
  loader?: ReactNode;
  hasMore: boolean;
  loading: boolean;
}

const InfiniteScroll: FC<InfiniteScrollPropType> = ({
  fetchMoreData,
  children,
  loader,
  hasMore,
  loading
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { rootMargin: '0px 0px 300px 0px' })
  const isVisible = !!entry?.isIntersecting

  useEffect(() => {
    if (!isVisible || !hasMore || loading) return
    fetchMoreData()
  }, [isVisible, loading, hasMore])

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%'
      }}
    >
      {children}
      <div ref={ref}>
        {(hasMore || loading) && loader}
      </div>
    </Box>
  )
}

export default InfiniteScroll
