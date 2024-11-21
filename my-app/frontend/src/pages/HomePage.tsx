import type { FC } from 'react'
import styled from 'styled-components'
import { Info } from '../features/home/Info'
import { HomeAlbums } from '../features/home/HomeAlbums'
// import { Upload } from '../features/picture/components/admin/Upload'

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  padding-top: 100px;
`

const HomePage: FC = () => {

  return (
    <Wrapper>
      <Info />
      <HomeAlbums />
    </Wrapper>
  )
}

export default HomePage