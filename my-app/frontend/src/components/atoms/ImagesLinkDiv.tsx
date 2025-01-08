import { ImageWithTooltipInfo } from '@/features/utils/ImageWithTooltipInfo'
import type { Picture } from '../../types'

interface Props {
	data: Picture[]
	onDivClick: (item: Picture) => void
}

export function ImagesLinkDiv({
	data,
	onDivClick
}: Props): JSX.Element {
	return (
		<>
			{data.map((item) => (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<div
					key={item.id}
					onClick={() => onDivClick(item)}
					style={{ cursor: 'pointer' }}
				>
					{ImageWithTooltipInfo(item)}
				</div>
			))}
		</>
	)
}
