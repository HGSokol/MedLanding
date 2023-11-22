import Breadcrumbs from '../Components/Breadcrumbs';
import Title from '../Components/Titile';
import Address from '../Components/Address';
import Footer from '../Layouts/Home/Footer';
import Header from '../Layouts/Home/Header';

export default function Contacts() {
	return (
		<div className="font-mont w-[100vw] bg-[#EDF0F4]">
			<Header />
			<main className="md:min-h-[calc(100dvh-102rem-340rem)]">
				<Breadcrumbs />
				<Title
					title="Контактные данные"
					text="Вы всегда можете нас найти и связаться с нами. Мы готовы ответить на ваши вопросы, поделиться информацией и оказать медицинскую помощь"
				/>
				<Address height={window.innerWidth >= 786 ? '573' : '300'} />
			</main>
			<Footer />
		</div>
	);
}
