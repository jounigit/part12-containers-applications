import { ListHomeContainer } from '@/styles/styles'
import { useAlbums } from '../album/useAlbum'
import { ListHomeItem } from './ListHomeItem'
import { isAlbumArray } from '@/types'

export const HomeAlbums = () => {
	const { data: Albums } = useAlbums()

	if (Albums === undefined || !isAlbumArray(Albums)) {
		return <div>No albums yet.</div>
	}

	const threeAlbums = Albums.slice(0, 3)

	const showAlbums = threeAlbums.map((a, i) => (
		<ListHomeItem key={a.id} album={a} order={i} />
	))
	return <ListHomeContainer>{showAlbums}</ListHomeContainer>
}
