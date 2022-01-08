import { Navbar, Tag } from '@blueprintjs/core'
import React from 'react'
import Wrapper from './Wrapper'

const AppBar: React.VFC = () => {
  return (
    <Navbar className="!shadow-none">
      <Wrapper className="mx-auto">
        <Navbar.Group align="left">
          <Navbar.Heading className="text-lg font-semibold">App Name</Navbar.Heading>
          <Tag intent="danger" round minimal>
            Cool Stuff
          </Tag>
        </Navbar.Group>
        <Navbar.Group align="right" className="-mr-3">
          <Navbar.Heading>Example text</Navbar.Heading>
        </Navbar.Group>
      </Wrapper>
    </Navbar>
  )
}

export default AppBar
