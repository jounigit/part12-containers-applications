import type { UseMutateFunction } from '@tanstack/react-query'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { LoadingHandler } from '../../../components/handlers'
import { injectTokenToHeaders } from '../../../services/http-common'
import { useTokenStore } from '../../../store/tokenStore'
import { useUserStore } from '../../../store/userStore'
import type {
	LoginResponse,
	Login as LoginType
} from '../../../types'
import { useLogin } from '../useLogin'
import LoginForm from './LoginForm'

interface Params {
	email: string
	password: string
}

export const Login = (): JSX.Element => {
	const { mutate, isPending, isSuccess, data } = useLogin()
	const navigate = useNavigate()
	const updateToken = useTokenStore(
		(state) => state.updateToken
	)
	const updateUser = useUserStore(
		(state) => state.updateUser
	)

	useEffect(() => {
		if (isSuccess) {
			console.log('LOGIN DATA: ', data)
			const logRes = data as LoginResponse
			toast.success('Login successfully.', {
				className: 'success'
			})

			console.log('LOGIN DATA TOKEN: ')
			updateToken(logRes.data.token)
			tokenToHeaders(logRes.data.token)
			updateUser(logRes.data.user)
			navigate('/dashboard')
		}
	}, [data, isSuccess, navigate, updateToken, updateUser])

	if (isPending) return <LoadingHandler />

	const handleData = addTokenAndUser(mutate)

	return (
		<LoginForm handleData={handleData} formName='LOGIN' />
	)
}

function tokenToHeaders(token: string): void {
	injectTokenToHeaders(token)
}

function addTokenAndUser(
	mutate: UseMutateFunction<
		unknown,
		unknown,
		Params,
		unknown
	>
) {
	const handleData = (data: LoginType) => {
		mutate(data)
	}

	return handleData
}
