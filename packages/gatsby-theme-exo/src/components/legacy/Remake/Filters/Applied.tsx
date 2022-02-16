import { Text } from "theme-ui"

const Applied: React.FC = ({ children }) => {
  return (
    <Text
      sx={{
        fontSize: ['1rem', ".84rem"],
        lineHeight: "1.525rem",
        fontWeight: "400",
        color: "#727272",
        pb: '1rem',
        display: 'block',
        borderBottom: '1px solid rgb(224, 224, 224)'
      }}
    >
      {children}
    </Text >
  )
}
export default Applied