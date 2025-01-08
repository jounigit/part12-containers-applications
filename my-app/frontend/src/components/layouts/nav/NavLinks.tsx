import { useAlbums } from '@/features/album/useAlbum'
import { Logout } from '@/features/login/components/Logout'
import { linkFormer } from '@/features/utils/LinkFormer'
import { useTokenStore } from '@/store/tokenStore'
import type { FC } from 'react'
import { FaAngleDown, FaHome } from 'react-icons/fa'
import { DropLink, LinkTo, Ul } from './NavLinks.styles'

type Props = {
	open: boolean
	toggle: () => void
}

function dropdownLinkFormer(
	toggle: () => void,
	link: string
) {
	const ltxt = `/galleria/${link}`
	return (
		<DropLink to={ltxt} onClick={toggle}>
			{link}
		</DropLink>
	)
}

export const NavLinks: FC<Props> = ({ open, toggle }) => {
	const token = useTokenStore(
		(state: { token: unknown }) => state.token
	)
	const { data: Albums } = useAlbums()

	// console.log('Navlinks token: ', token)
	const dropdownlinks = Albums?.map((a) =>
		dropdownLinkFormer(toggle, a.slug)
	)

	return (
		<Ul open={open}>
			<li>
				<LinkTo to='/' onClick={toggle}>
					<FaHome />
				</LinkTo>
			</li>
			{/* dropdown section */}
			<li className='dropdown'>
				<LinkTo to='#'>
					Galleria
					<span
						style={{ position: 'relative', top: '0.3rem' }}
					>
						<FaAngleDown />
					</span>
				</LinkTo>
				<div className='dropdown-content'>
					{dropdownlinks}
				</div>
			</li>

			{/* end section */}

			{token && (
				<li>
					{linkFormer(
						toggle,
						'/dashboard',
						'admin',
						'adminlink'
					)}
				</li>
			)}
			{token && (
				<li>
					<Logout />
				</li>
			)}
			{!token && (
				<li>
					{linkFormer(
						toggle,
						'/login',
						'login',
						'loginLink'
					)}
				</li>
			)}
		</Ul>
	)
}
