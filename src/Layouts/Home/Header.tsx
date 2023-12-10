import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import PortalModal from '../../Components/PortalBurgerMenu'
import PortalForm from '../../Components/PortalForm'

import logo from '../../assets/logo.svg'

export default function Header() {
	const { activePopup, setActivePopup, setFixedHeader } =
		useContext(AppContext)
	const [isOpen, setIsOpen] = useState(false)
	const headerRef = useRef<HTMLDivElement | null>(null)

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		document.addEventListener('scroll', () => {
			if (window.pageYOffset > 2) {
				setFixedHeader(true)

				if (headerRef.current) {
					headerRef.current.style.background = '#fff'
				}
			} else {
				setFixedHeader(false)

				if (headerRef.current) {
					headerRef.current.style.background = 'none'
				}
			}
		})

		return () => {
			document.addEventListener('scroll', () => {
				if (window.pageYOffset > 2) {
					setFixedHeader(true)

					if (headerRef.current) {
						headerRef.current.style.background = '#fff'
					}
				} else {
					setFixedHeader(false)

					if (headerRef.current) {
						headerRef.current.style.background = 'none'
					}
				}
			})
		}
	})

	useEffect(() => {
		isOpen || activePopup
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'visible')
	}, [isOpen, activePopup])

	return (
		<>
			<header
				ref={headerRef}
				className="duration-[200rem] fixed z-[100] flex flex-row px-[16rem] md:px-[95rem] h-[78rem] md:h-[102rem] justify-between items-center w-full"
			>
				<div
					onClick={() => setIsOpen((prev) => !prev)}
					className="mr-[20rem] md:mr-[0rem] hamburger md:hidden"
				>
					<div
						className="burger burger1"
						style={{
							transform: `${
								isOpen ? 'rotate(45deg)' : 'rotate(0)'
							}`,
						}}
					/>
					<div
						className="burger burger2"
						style={{
							transform: `${
								isOpen ? 'translateY(100%)' : 'translateY(0)'
							}`,
							opacity: `${isOpen ? 0 : 1}`,
						}}
					/>
					<div
						className="burger burger3"
						style={{
							transform: `${
								isOpen ? 'rotate(-45deg)' : 'rotate(0)'
							}`,
						}}
					/>
				</div>
				<div className="mr-[auto] md:mr-[0rem] flex flex-row items-center">
					<Link
						to="/"
						className="text-[19rem] font-semibold leading-[140%] text-[#242E49] md:text-[28rem] md:font-semibold md:leading-[160%] md:text-[#242E49] md:mr-[55rem]"
					>
						<div className="flex justify-center items-center w-[105rem] min-h-[inherit] md:w-[160rem] md:h-[51rem] ">
							<img src={logo} alt="logo" />
						</div>
					</Link>
					<div className="hidden md:flex flex-row gap-[40rem] text-[16rem] font-medium leading-[160%] text-[#242E49] duration-200">
						<Link
							to="/services"
							className={`${
								window.location.pathname.includes(
									'/services'
								) && 'text-[#3563E9]'
							} z-[10] cursor-pointer hover:text-[#3563E9]  duration-200`}
						>
							Услуги и цены
						</Link>
						<Link
							to="/doctors"
							className={`${
								window.location.pathname.includes('/doctors') &&
								'text-[#3563E9]'
							} z-[10] cursor-pointer hover:text-[#3563E9] duration-200`}
						>
							Врачи
						</Link>
						<Link
							to="/clinic"
							className={`${
								window.location.pathname.includes('/clinic') &&
								'text-[#3563E9]'
							} z-[10] cursor-pointer hover:text-[#3563E9] duration-200`}
						>
							Клиника
						</Link>
						<Link
							to="/contacts"
							className={`${
								window.location.pathname.includes(
									'/contacts'
								) && 'text-[#3563E9]'
							} z-[10] cursor-pointer hover:text-[#3563E9] duration-200`}
						>
							Контакты
						</Link>
					</div>
				</div>
				<div className="flex flex-row gap-[36rem] font-semibold leading-[160%] items-center">
					<div className="hidden md:block z-[10] text-[18rem] text-[#242E49]">
						+8 (903) 799-30-30
					</div>
					<div
						onClick={() => setActivePopup(true)}
						className="z-[10] text-[16rem] text-[white] flex items-center justify-center md:w-[230rem] h-[46rem] px-[20rem] duration-200 bg-[#3563E9] hover:bg-[#1941B9] rounded-[8rem] cursor-pointer"
					>
						<span className="hidden md:block">
							Записаться на прием
						</span>
						<span className="md:hidden">Записаться</span>
					</div>
				</div>
				<PortalModal setIsOpen={setIsOpen} isOpen={isOpen} />
				{activePopup && <PortalForm />}
			</header>
			<div
				className={`relative flex flex-row px-[16rem] md:px-[95rem] h-[78rem] md:h-[102rem] justify-between items-center w-[100%]`}
			></div>
		</>
	)
}
