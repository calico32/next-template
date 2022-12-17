import { Button, H1 } from '@blueprintjs/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import ActionBar from '../components/ActionBar'
import AppBar from '../components/AppBar'
import Hero from '../components/Hero'
import Wrapper from '../components/Wrapper'
import { useToaster } from '../util/context'

const Home: NextPage = () => {
  const toaster = useToaster()

  return (
    <>
      <Head>
        <title>App Name</title>
      </Head>
      <AppBar />
      <ActionBar />
      <Wrapper page>
        <Hero appBar actionBar>
          <H1 className="mb-4 font-medium">Super Cool App</H1>

          <Button
            className="mt-4"
            intent="success"
            text="Toast me"
            onClick={() => {
              toaster.show({
                message: 'Toasted.',
                intent: 'success',
                icon: 'tick',
              })
            }}
          />
        </Hero>
      </Wrapper>
      <footer></footer>
    </>
  )
}

export default Home
