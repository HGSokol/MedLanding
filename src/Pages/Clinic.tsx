import Footer from '../Layouts/Home/Footer';
import Header from '../Layouts/Home/Header';
import History from '../Layouts/Clinic/History';
import ClinicPromo from '../Layouts/Clinic/ClinicPromo';
import Breadcrumbs from '../Components/Breadcrumbs';
import Title from '../Components/Titile';
import ClinicImage from '../Components/clinicImage';

export default function Clinic() {
	return (
		<div className="font-mont w-[100vw] bg-[#EDF0F4]">
			<Header />
			<Breadcrumbs />
			<Title
				title="Наша клиника “Клиника”"
				text="Здесь вы найдете полезную информацию о нашей клинике. Узнайте больше о том, как мы можем заботиться о вашем здоровье и благополучии"
			/>
			<div className="px-[16rem] md:px-[95rem] mb-[30rem] md:mb-[70rem]">
				<ClinicImage />
			</div>
			<History />
			<ClinicPromo />
			<Footer />
		</div>
	);
}
