import Button from '../components/button'

interface IIndexProperties {
  source?: string
}

const Index = ({ source = 'exo theme' }: IIndexProperties): JSX.Element => {
  return (
    <div style={{ display: 'grid', gap: 20, justifyItems: 'start' }}>
      <Button size="sm">{source} Primary button</Button>
      <Button>{source} Primary button</Button>
      <Button size="lg">{source} Primary button</Button>
      <Button variant="ghost" isBlock={true}>
        {source} Primary block Button
      </Button>
    </div>
  )
}

export default Index
