import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
// import TypeForm from '../components/TypeForm'

export default function crusher700ie() {
    return <>
        <h1 className='font-bakbak-one text-center text-4xl mx-4'>700ie</h1>
        <div className='relative mx-4'>
            <p className='font-bakbak-one text-white text-xl ml-2 absolute top-5'>Dimensiones de la machacadora: 1100 x 700 mm.</p>
            <p className='font-bakbak-one text-white text-xl absolute top-48 left-16'>Profundidad de la machacadora: 1550 mm.</p>
            <img className='' src="images/equipment/crushers/700i.jpeg"></img>
        </div>
        <div className='relative mx-4 my-10'>
            <p className='font-bakbak-one text-white text-l ml-2 absolute top-5'>Sistema de doble alimentador independiente.</p>
            <p className='font-bakbak-one text-white text-ll absolute top-40 left-8'> Motor diésel Caterpillar de 300 cv.</p>
            <img className='' src="images/equipment/crushers/700i/crusher700ie2.jpg"></img>
        </div>
        <div className='relative mx-4'>
            <p className='font-bakbak-one text-black text-xl absolute top-36 left-8'>Banda magnética y cinta lateral.</p>
            <img className='' src="images/equipment/crushers/700ie/crusher700i3.jpg"></img>
        </div>

        <ContactForm />

        {/* <TypeForm /> */}

        <Footer />
    </>
}