import Button from '../components/button'

interface IIndexProperties {
  source?: string
}

const Index = ({ source = 'exo theme' }: IIndexProperties): JSX.Element => {
  return (
    <div style={{ display: 'grid', gap: 20, justifyItems: 'start' }}>
      <Button size="sm">{source} - A small primary button</Button>
      <Button>{source} - A primary button</Button>
      <Button size="lg">{source} - A large primary button</Button>
      <Button variant="ghost" isBlock={true}>
        {source} - A ghost variant primary Button
      </Button>
    </div>
  )
}

export default Index
