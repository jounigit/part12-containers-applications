import { IKContext, IKImage } from 'imagekitio-react'

interface IKProps {
	url: string
}

export function ImageKitComponent({ url }: IKProps) {
	return (
		<IKContext urlEndpoint='https://ik.imagekit.io/vrojm7lqh'>
			<IKImage src={url} />
		</IKContext>
	)
}
