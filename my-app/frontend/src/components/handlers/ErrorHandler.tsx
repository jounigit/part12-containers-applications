import { useGoBack } from '@/hooks/useGoBack'
import { FaTimes } from 'react-icons/fa'
import { HandlingWrapper } from '../../styles/styles'
import { Button } from '../atoms/Button'

interface Props {
	error?: Error
}

export function ErrorHandler({ error }: Props) {
	const goBack = useGoBack()

	return (
		<HandlingWrapper $brColor='red'>
			<FaTimes color='red' />
			<h4>An error occurred:</h4>
			<p>{error?.message}</p>
			<p>{error?.name}</p>
			<Button onClick={goBack}>...takaisin</Button>
		</HandlingWrapper>
	)
}
