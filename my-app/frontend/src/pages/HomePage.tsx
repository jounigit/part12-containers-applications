import type { FC } from 'react'
import styled from 'styled-components'
import { HomeAlbums } from '../features/home/HomeAlbums'
import { Info } from '../features/home/Info'

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
