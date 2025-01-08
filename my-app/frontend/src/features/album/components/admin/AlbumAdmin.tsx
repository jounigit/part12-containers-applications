import { Button } from '@/components/atoms/Button'
import {
	Col,
	Grid,
	Row
} from '@/components/dashboard/components/Dashboard.styles'
import { useGoBack } from '@/hooks/useGoBack'
import { DetailsContainer } from '@/styles/styles'
import { useParams } from 'react-router-dom'
import { useSuspenseAlbumBySlug } from '../../useAlbum'
import { AlbumDetails } from '../AlbumDetails'
import { ActionLinks } from './ActionLinks'

const AlbumAdmin = (): JSX.Element => {
	const { slug } = useParams() as { slug: string }
	console.log({ slug })
	const { data } = useSuspenseAlbumBySlug(slug)
	console.log({ data })
	const goBack = useGoBack()

	const { linkUpdate, linkPictures } = ActionLinks({
		id: data.id
	})
	return (
		<>
			<Button onClick={goBack}>...takaisin</Button>
			<Grid size={2}>
				<Row>
					<Col size={1} />
					<Col size={1}>
						{linkUpdate}
						{linkPictures}
					</Col>
				</Row>
			</Grid>

			<DetailsContainer data-cy='albumDetails'>
				<AlbumDetails album={data} />
			</DetailsContainer>
		</>
	)
}

export default AlbumAdmin
