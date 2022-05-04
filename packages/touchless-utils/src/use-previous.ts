import * as React from 'react'

function usePrevious<T>(value: T) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const reference = React.useRef<T>(value)

  // Store current value in ref
  React.useEffect(() => {
    reference.current = value
  }, [value]) // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return reference.current
}

export { usePrevious }
