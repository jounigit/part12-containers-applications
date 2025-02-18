import { ImagesInDiv } from '@/components/atoms/ImagesInDiv'
import type { Album } from '@/types'
import type { FC } from 'react'
import { Link } from 'react-router-dom'
import {
	ListImgBox,
	ListItemContainer,
	ListItemImageGrid,
	ListItemInfo,
	ListItemInfoText
} from '../../../styles/styles'

interface ListProps {
	album: Album
}

export const AlbumListItem: FC<ListProps> = (props) => {
	const { title, slug, pictures } = props.album

	// ******************************************************************* //
	const textForGalleria = <h4>{pictures.length} kuvaa</h4>

	const twoPics = pictures.slice(0, 2)

	const showPics =
		twoPics.length > 0 ? (
			<ImagesInDiv data={twoPics} showInfo={false} />
		) : (
			<h4>no images yet.</h4>
		)

	// **************** return ***************************************** //
	return (
		<ListItemContainer data-cy='albumListItem'>
			<Link
				data-cy='albumListItemLink'
				style={{ textDecoration: 'none' }}
				to={`/galleria/${slug}`}
			>
				<ListImgBox>
					<ListItemImageGrid width={200} height={200}>
						{showPics}
					</ListItemImageGrid>
				</ListImgBox>
			</Link>

			<Link
				style={{ textDecoration: 'none' }}
				to={`/album/${slug}`}
			>
				<ListItemInfo>
					<h3>{title}</h3>
					<ListItemInfoText>
						{textForGalleria}
					</ListItemInfoText>
				</ListItemInfo>
			</Link>
		</ListItemContainer>
	)
}
