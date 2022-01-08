import { Button, Classes, Menu, MenuItem, Navbar } from '@blueprintjs/core'
import { Popover2 } from '@blueprintjs/popover2'
import React from 'react'
import { useToaster } from '../util/context'
import Wrapper from './Wrapper'

const ActionBar: React.VFC = () => {
  const toaster = useToaster()

  return (
    <Navbar className="!bg-darkgray-4 h-[30px]">
      <Wrapper childClassName="ml-2">
        <Popover2
          position="bottom"
          minimal
          content={
            <Menu className={Classes.DARK}>
              <MenuItem icon="document" text="Spook" onClick={() => alert('Boo!')} />
              <MenuItem
                icon="document"
                text="Toast me"
                onClick={() => {
                  toaster.show({
                    message: 'Toasted.',
                    intent: 'success',
                    icon: 'tick',
                  })
                }}
              />
            </Menu>
          }
        >
          <Button minimal className="py-0">
            File
          </Button>
        </Popover2>
      </Wrapper>
    </Navbar>
  )
}

export default ActionBar
