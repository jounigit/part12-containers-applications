import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { TransButton } from '../../../components/atoms/Button'
import { injectTokenToHeaders } from '../../../services/http-common'
import { useTokenStore } from '../../../store/tokenStore'
import { useUserStore } from '../../../store/userStore'
import { useLogout } from '../useLogin'

export const Logout = (): JSX.Element => {
	const navigate = useNavigate()
	const { mutate, isSuccess, data } = useLogout()
	const deleteToken = useTokenStore(
		(state) => state.deleteToken
	)
	const deleteUser = useUserStore(
		(state) => state.deleteUser
	)

	const token = useTokenStore((state) => state.token)

	injectTokenToHeaders(token)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (isSuccess) {
			toast.success('Successfully logged out.')
			deleteToken()
			deleteUser()
			navigate('/')
		}
	}, [data, deleteToken, deleteUser, isSuccess, navigate])

	const handleClick = () => {
		mutate(null)
	}

	return (
		<>
			<TransButton onClick={handleClick}>
				Logout
			</TransButton>
		</>
	)
}
