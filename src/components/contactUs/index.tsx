import { SelectedPage } from '@/shared/types'
import React from 'react'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const index = ({ setSelectedPage }: Props) => {
  return (
    <div>index</div>
  )
}

export default index