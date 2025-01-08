import type { Picture } from '@/types'
import type { FC } from 'react'
import { Image } from './image-modal.style'
import { ImageKitComponent } from '@/features/utils/ImageKitComponent'

interface ImageModal {
	pic: Picture
}

export const ImageModal: FC<ImageModal> = ({ pic }) => {
	return (
		<>
			<Image>
				<ImageKitComponent url={pic.url} />
			</Image>
		</>
	)
}
