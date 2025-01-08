import { ImagesInDiv } from '@/components/atoms/ImagesInDiv'
import { ImagesLinkDiv } from '@/components/atoms/ImagesLinkDiv'
import { ImageModal } from '@/components/image-modal/image-modal'
import { Modal } from '@/components/modal/modal'
import { useModal } from '@/hooks/useModal'
import type { Picture } from '@/types'
import { type FC, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import {
	ImageGrid,
	ImageGridAllWidth,
	type ImageGridProps
} from './pictureGalleria.style'

interface PictureMediaProps extends ImageGridProps {
	imageList: Picture[]
	isContent?: boolean
}

export const PictureGalleria: FC<PictureMediaProps> = (
	props
) => {
	const { imageList, $gridwidth, $imgheight, isContent } =
		props
	const { isShown, toggle } = useModal()
	const [img, setImg] = useState<Picture>()
	const { width: winWidth } = useWindowSize()

	const mobile = winWidth < 768

	const showMobile = mobile && (
		<ImagesInDiv data={imageList} />
	)

	const showTablet = !mobile && (
		<ImagesLinkDiv
			data={imageList}
			onDivClick={(item) => handleClick(item)}
		/>
	)

	const showModal = img && (
		<Modal
			isShown={isShown}
			hide={toggle}
			headerText={img.title}
			modalContent={<ImageModal pic={img} />}
		/>
	)

	const handleClick = (imgSrc: Picture): void => {
		setImg(imgSrc)
		toggle()
	}

	if (isContent) {
		return (
			<>
				<ImageGridAllWidth
					$gridwidth={$gridwidth}
					$imgheight={$imgheight}
				>
					{showMobile}
					{showTablet}
				</ImageGridAllWidth>

				{showModal}
			</>
		)
	}

	return (
		<>
			<ImageGrid
				$gridwidth={$gridwidth}
				$imgheight={$imgheight}
			>
				{showMobile}
				{showTablet}
			</ImageGrid>

			{showModal}
		</>
	)
}
