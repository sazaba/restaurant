import axios from 'axios'
import Head from 'next/head'
import PizzaList from '../components/PizzaList'


export default function Home({ pizzaList }) {

  return (
    <div >
      <Head>
        <title>Pizza Restaurant in New York</title>
        <meta name="description" content="Restaurante de alta calidad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PizzaList pizzaList={pizzaList} />

    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://restaurant-pearl-phi.vercel.app/api/products');
  return {
    props: {
      pizzaList: res.data
    }
  }
}