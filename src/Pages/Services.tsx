import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../App'
import Breadcrumbs from '../Components/Breadcrumbs'
import Tab from '../Components/Tab'
import Header from '../Layouts/Home/Header'
import Footer from '../Layouts/Home/Footer'
import PriceTitle from '../Layouts/Price/PriceTitle'
import PriceInfo from '../Layouts/Price/PriceInfo'
import useGoogleSheet, { ParseDataType } from '../hooks/useGoogleSheet'
import { dataTabs } from '../Components/data/DataTab'
import BackButton from '../Components/BackButton'
import { ServiceType } from '../@types/appType'

export default function Services() {
	const { currentTabService, setCurrentTabService } = useContext(AppContext)
	const [isInputFocus, setIsInputFocus] = useState(false)
	const [searchText, setSearchText] = useState('')
	const [visibleBackButton, setVisibleBackButton] = useState(false)

	const [data, loading, error] = useGoogleSheet()

	const filteredData = (data as ParseDataType[])
		.filter((e) => {
			const name = Object.keys(e)[0].toLowerCase()
			const wordPart = dataTabs[currentTabService]?.name.slice(0, 5)

			if (currentTabService === 0) return e
			if (name.includes(wordPart.toLowerCase())) {
				return e
			}
		})
		.map((e) => {
			const name = Object.keys(e)[0]
			const services = e[name] as ServiceType[]

			const serviceLength = services.filter((e) => {
				if (searchText.length > 0) {
					return e.serviceName
						.toLowerCase()
						.includes(searchText.toLowerCase())
				} else {
					return e
				}
			}).length

			return serviceLength > 0 && e
		})
		.filter((e) => e !== false)

	useEffect(() => {
		document.addEventListener('scroll', () => {
			window.scrollY > 1100
				? setVisibleBackButton(true)
				: setVisibleBackButton(false)
		})

		return () => {
			document.addEventListener('scroll', () => {
				window.scrollY > 1100
					? setVisibleBackButton(true)
					: setVisibleBackButton(false)
			})
		}
	}, [])

	return (
		<div className="relative font-mont flex flex-col min-h-[100dvh] w-full bg-[#EDF0F4]">
			{visibleBackButton && <BackButton />}
			<Header />
			<main className="grow-[3]">
				<Breadcrumbs />
				<PriceTitle />
				<div className="px-[16rem] mb-[40rem] md:mb-[0rem] md:px-[95rem] flex flex-col md:flex-row md:justify-between">
					<div className="mb-[10rem] min-h-[50rem] snap-mandatory snap-x md:mb-[60rem] flex flex-row overflow-scroll  gap-[10rem] ">
						{dataTabs.map((e, i) => {
							const current = currentTabService === i
							return (
								<div
									className="snap-center h-min"
									onClick={() => setCurrentTabService(i)}
									key={i}
								>
									<Tab text={e.name} current={current} />
								</div>
							)
						})}
					</div>
					<div className="relative">
						<label
							className={`absolute top-[12rem] left-[16rem] ${
								isInputFocus
									? 'stroke-[#3563E9] '
									: 'stroke-[#242E49] '
							} `}
						>
							<svg
								className="w-[20rem] h-[20rem]"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.63633 2.5C7.42268 2.5 6.23628 2.85989 5.22717 3.53416C4.21806 4.20843 3.43155 5.16679 2.9671 6.28806C2.50266 7.40932 2.38114 8.64314 2.61791 9.83347C2.85468 11.0238 3.43911 12.1172 4.29729 12.9754C5.15547 13.8335 6.24886 14.418 7.43919 14.6547C8.62952 14.8915 9.86334 14.77 10.9846 14.3056C12.1059 13.8411 13.0642 13.0546 13.7385 12.0455C14.4128 11.0364 14.7727 9.84998 14.7727 8.63633C14.7726 7.0089 14.126 5.44817 12.9753 4.2974C11.8245 3.14664 10.2638 2.5001 8.63633 2.5Z"
									strokeMiterlimit="10"
								/>
								<path
									d="M13.2144 13.2148L17.4999 17.5004"
									strokeMiterlimit="10"
									strokeLinecap="round"
								/>
							</svg>
						</label>
						<div
							onClick={() => {
								setSearchText('')
							}}
							className={`cursor-pointer absolute right-[16rem] top-[16rem] ${
								searchText ? '' : 'hidden'
							}`}
						>
							<svg
								className="w-[14rem] h-[14rem]"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="1.63818"
									y="11.6504"
									width="14"
									height="1.16667"
									transform="rotate(-45 1.63818 11.6504)"
									fill="#5D6A85"
								/>
								<rect
									width="14"
									height="1.16667"
									transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 12.3618 11.6504)"
									fill="#5D6A85"
								/>
							</svg>
						</div>
						<input
							onChange={(e) => {
								setSearchText(e.target.value)
							}}
							value={searchText}
							className="outline-none w-full md:w-[255rem] h-[46rem] pl-[45rem] pr-[38rem] py-[12rem] rounded-[100rem] text-[14rem] font-normal leading-[160%]"
							type="text"
							placeholder="Поиск"
							onFocus={() => setIsInputFocus(true)}
							onBlur={() => setIsInputFocus(false)}
						/>
					</div>
				</div>
				<div className="overflow-hidden flex flex-col ">
					{loading ? (
						<div className="text-center text-[14rem] leading-[160%] font-medium mb-[40rem] md:mb-[50rem]">
							Загрузка данных
						</div>
					) : error ? (
						<div className="text-center text-[14rem] leading-[160%] font-medium mb-[40rem] md:mb-[50rem]">
							Ошибка загрузки данных
						</div>
					) : filteredData.length === 0 && searchText.length > 0 ? (
						<div className="text-center text-[14rem] leading-[160%] font-medium mb-[40rem] md:mb-[50rem]">
							Нет данных
						</div>
					) : (
						(filteredData as ParseDataType[]).map((e, i) => {
							const name = Object.keys(e)[0]
							const services = e[name] as ServiceType[]

							return (
								<div
									key={i}
									className="gap-[40rem] md:gap-[50rem] mb-[40rem] md:mb-[50rem]"
								>
									<PriceInfo
										name={name}
										services={services}
										searchText={searchText}
									/>
								</div>
							)
						})
					)}
				</div>
			</main>
			<Footer />
		</div>
	)
}
