import type { Picture } from '@/types'
import Tooltip from './Tooltip'
import { ImageKitComponent } from './ImageKitComponent'

export function ImageWithTooltipInfo(picture: Picture) {
	const { title, url, year, content } = picture
	const info = (
		<>
			<h4>{title}</h4>
			<p>{year}</p>
			<p>{content}</p>
		</>
	)
	return (
		<Tooltip tip={info}>
			<ImageKitComponent url={url} />
		</Tooltip>
	)
}
