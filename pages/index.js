import Head from 'next/head';
import Image from 'next/image';
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Numbers from '../components/Numbers';
import Predict from '../components/Predict';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Navbar */}
      <Nav />

      {/* Header */}
      <Header />

      {/* Form */}
      <Form />

      {/* Predict */}
      <Predict />

      {/* Numbers */}
      <Numbers />

      {/* FAQs */}
      <Faqs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
