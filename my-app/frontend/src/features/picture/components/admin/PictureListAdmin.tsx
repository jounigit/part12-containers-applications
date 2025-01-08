import {
	ImgContainerDb,
	ImgGridDb
} from '@/components/dashboard/components/Dashboard.styles'
import { usePictures } from '../../usePicture'
import { PictureListItemAdmin } from './PictureListItemAdmin'

export const PictureListAdmin = () => {
	const { data } = usePictures()

	const showdata = data ? (
		data.map((p) => (
			<PictureListItemAdmin key={p.id} picture={p} />
		))
	) : (
		<h4>no images yet.</h4>
	)

	return (
		<ImgContainerDb>
			<ImgGridDb $width={200} $imgheight={200}>
				{showdata}
			</ImgGridDb>
		</ImgContainerDb>
	)
}
