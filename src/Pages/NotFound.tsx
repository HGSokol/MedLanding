import { Link } from 'react-router-dom';
import Header from '../Layouts/Home/Header';
import Footer from '../Layouts/Home/Footer';

export default function NotFound() {
	return (
		<div className="relative flex flex-col justify-between min-h-[100dvh] font-mont bg-[#EDF0F4]">
			<Header />
			<main className="flex flex-col items-center md:items-start md:flex-row  mb-[30rem] md:mb-[58rem] mt-[30rem] md:mt-[92rem] px-[16rem] md:px-[102rem]">
				<div className="md:mr-[110rem]">
					<svg
						className="w-[270rem] h-[320rem] md:w-[467rem] md:h-[529rem]"
						width="467"
						height="529"
						viewBox="0 0 467 529"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_248_14246)">
							<path
								d="M251.281 392.385C156.741 392.385 80.1018 315.823 80.1018 221.38C80.1018 126.936 156.741 50.375 251.281 50.375C345.821 50.375 422.46 126.936 422.46 221.38C422.46 315.823 345.821 392.385 251.281 392.385Z"
								fill="#E1E8F2"
							/>
							<path
								d="M247.023 299.488V402.137C247.023 419.909 261.445 434.316 279.235 434.316H434.79C448.016 434.316 458.738 445.027 458.738 458.239V524.452C458.738 526.732 460.586 528.579 462.869 528.579C465.151 528.579 467 526.732 467 524.452V458.239C467 440.467 452.578 426.062 434.79 426.062H279.233C266.008 426.062 255.288 415.354 255.288 402.142V299.488H247.021H247.023Z"
								fill="#204AC3"
							/>
							<path
								d="M237.726 321.643V338.092C237.726 342.021 240.914 345.203 244.845 345.203H257.469C259.64 345.203 261.582 344.233 262.886 342.705C263.946 341.461 264.587 339.853 264.587 338.092V321.643H237.729H237.726Z"
								fill="#1A44BE"
							/>
							<path
								d="M223.695 283.297V316.155C223.695 321.23 227.813 325.344 232.895 325.344H269.418C274.498 325.344 278.617 321.23 278.617 316.155V283.297H223.695Z"
								fill="#3563E9"
							/>
							<path
								d="M281.888 283.301H220.426C219.759 283.301 219.219 282.761 219.219 282.095V277.271C219.219 276.605 219.759 276.065 220.426 276.065H281.888C282.555 276.065 283.095 276.605 283.095 277.271V282.095C283.095 282.761 282.555 283.301 281.888 283.301Z"
								fill="#254DC4"
							/>
							<path
								d="M259.399 276.062H268.759V253.7C268.759 251.118 266.664 249.025 264.08 249.025C261.496 249.025 259.401 251.118 259.401 253.7V276.062H259.399Z"
								fill="#173079"
							/>
							<path
								d="M238.233 249.025C235.649 249.025 233.555 251.121 233.555 253.7V276.062H242.915V253.7C242.915 251.118 240.818 249.025 238.236 249.025H238.233Z"
								fill="#173079"
							/>
							<path
								d="M223.695 283.297V316.155C223.695 321.23 227.813 325.344 232.895 325.344H269.418C274.498 325.344 278.617 321.23 278.617 316.155C239.179 313.419 235.558 283.297 235.558 283.297H223.697H223.695Z"
								fill="#2651D0"
							/>
							<path d="M223.695 283.297H278.617V285.947H223.695V283.297Z" fill="#2C3872" />
							<path
								d="M223.695 297.186V316.156C223.695 321.23 227.813 325.344 232.895 325.344H258.534C232.642 325.344 223.695 297.186 223.695 297.186Z"
								fill="#1A44BE"
							/>
							<path d="M237.726 325.344H264.585V327.061H237.726V325.344Z" fill="#2C3872" />
							<path d="M259.396 272.789H268.757V276.062H259.396V272.789Z" fill="#161E36" />
							<path d="M233.555 272.789H242.915V276.062H233.555V272.789Z" fill="#161E36" />
							<path
								d="M237.726 325.344V338.092C237.726 342.022 240.914 345.204 244.845 345.204H257.469C259.64 345.204 261.582 344.233 262.886 342.706C243.209 345.115 240.204 325.342 240.204 325.342H237.726V325.344Z"
								fill="#0E3299"
							/>
							<path
								d="M1.52588e-05 4.12692C1.52588e-05 6.40698 1.8513 8.25637 4.13368 8.25637H223.076C236.301 8.25637 247.023 18.9676 247.023 32.1793V140.657H255.288V32.1793C255.288 14.4075 240.868 0 223.076 0H4.13368C1.8513 0 1.52588e-05 1.84939 1.52588e-05 4.12692Z"
								fill="#204AC3"
							/>
							<path
								d="M237.726 131.367V114.918C237.726 110.989 240.914 107.807 244.845 107.807H257.469C259.64 107.807 261.582 108.777 262.886 110.305C263.946 111.548 264.587 113.157 264.587 114.918V131.367H237.729H237.726Z"
								fill="#1A44BE"
							/>
							<path
								d="M223.695 169.715V136.857C223.695 131.782 227.813 127.668 232.895 127.668H269.418C274.498 127.668 278.617 131.782 278.617 136.857V169.715H223.695Z"
								fill="#3563E9"
							/>
							<path
								d="M281.888 176.947H220.426C219.759 176.947 219.219 176.407 219.219 175.741V170.918C219.219 170.252 219.759 169.712 220.426 169.712H281.888C282.555 169.712 283.095 170.252 283.095 170.918V175.741C283.095 176.407 282.555 176.947 281.888 176.947Z"
								fill="#254DC4"
							/>
							<path
								d="M223.695 169.715V136.857C223.695 131.782 227.813 127.668 232.895 127.668H269.418C274.498 127.668 278.617 131.782 278.617 136.857C239.179 139.593 235.558 169.715 235.558 169.715H223.697H223.695Z"
								fill="#2651D0"
							/>
							<path d="M223.695 167.066H278.617V169.716H223.695V167.066Z" fill="#2C3872" />
							<path
								d="M223.695 155.827V136.857C223.695 131.782 227.813 127.668 232.895 127.668H258.534C232.642 127.668 223.695 155.827 223.695 155.827Z"
								fill="#1A44BE"
							/>
							<path d="M237.726 125.951H264.585V127.669H237.726V125.951Z" fill="#0C2878" />
							<path
								d="M237.726 127.666V114.918C237.726 110.989 240.914 107.807 244.845 107.807H257.469C259.64 107.807 261.582 108.777 262.886 110.305C243.209 107.895 240.204 127.669 240.204 127.669H237.726V127.666Z"
								fill="#0E3299"
							/>
							<path
								d="M323.194 205.642H340.201C341.494 205.642 342.541 204.595 342.541 203.303C342.541 202.011 341.494 200.965 340.201 200.965H323.194C321.901 200.965 320.853 202.011 320.853 203.303C320.853 204.595 321.901 205.642 323.194 205.642Z"
								fill="#3563E9"
							/>
							<path
								d="M301.61 184.08C302.904 184.08 303.951 183.033 303.951 181.741V164.752C303.951 163.46 302.904 162.414 301.61 162.414C300.317 162.414 299.27 163.46 299.27 164.752V181.741C299.27 183.033 300.317 184.08 301.61 184.08Z"
								fill="#3563E9"
							/>
							<path
								d="M317.214 190.054C317.813 190.054 318.411 189.826 318.87 189.37L330.551 177.701C331.464 176.786 331.464 175.307 330.551 174.395C329.638 173.483 328.155 173.483 327.242 174.395L315.561 186.064C314.645 186.976 314.645 188.458 315.561 189.37C316.017 189.826 316.616 190.054 317.217 190.054H317.214Z"
								fill="#3563E9"
							/>
							<path
								d="M179.12 258.256H162.113C160.82 258.256 159.772 259.302 159.772 260.594C159.772 261.886 160.82 262.933 162.113 262.933H179.12C180.413 262.933 181.46 261.886 181.46 260.594C181.46 259.302 180.413 258.256 179.12 258.256Z"
								fill="#3563E9"
							/>
							<path
								d="M200.701 279.814C199.407 279.814 198.36 280.861 198.36 282.153V299.142C198.36 300.434 199.407 301.48 200.701 301.48C201.994 301.48 203.042 300.434 203.042 299.142V282.153C203.042 280.861 201.994 279.814 200.701 279.814Z"
								fill="#3563E9"
							/>
							<path
								d="M185.097 273.844C184.498 273.844 183.9 274.072 183.441 274.528L171.76 286.197C170.847 287.109 170.847 288.591 171.76 289.503C172.673 290.415 174.157 290.415 175.07 289.503L186.75 277.834C187.663 276.919 187.666 275.44 186.75 274.528C186.294 274.072 185.695 273.844 185.094 273.844H185.097Z"
								fill="#3563E9"
							/>
						</g>
						<defs>
							<clipPath id="clip0_248_14246">
								<rect
									width="467"
									height="528.582"
									fill="white"
									transform="matrix(-1 0 0 1 467 0)"
								/>
							</clipPath>
						</defs>
					</svg>
				</div>
				<div className="flex flex-col mt-[15rem] md:mt-[68rem] items-center md:items-start">
					<div className="mb-[15rem] md:mb-[30rem] text-[#242E49] text-center md:text-start text-[32rem] md:text-[56rem] font-bold leading-[160%]">
						Ошибка 404
					</div>
					<div className="w-full text-center md:text-start md:w-[570rem] mb-[25rem] md:mb-[50rem] text-[#242E49] text-[16rem] font-normal leading-[160%]">
						Запрашиваемая страница не существует, или мы временно не можем ее найти. Пожалуйста,
						проверьте введенный URL или воспользуйтесь навигацией по сайту, чтобы найти интересующую
						вас информацию.
					</div>
					<Link
						to="/"
						className="w-[201rem] h-[50rem] rounded-[8rem] bg-[#3563E9] flex items-center justify-center px-[20rem] text-[#FFF] text-[16rem] font-semibold leading-[150%] tracking-[-0.32rem]">
						На главную
					</Link>
				</div>
			</main>
			<Footer />
		</div>
	);
}
