import React from 'react';
import Head from 'next/head'
import Banner from "../components/Banner"
import SelectRole from "../components/SelectRole"
import FeaturedMentor from "../components/FeaturedMentor"
import Blog from "../components/Blog"
import FAQ from "../components/FAQ"
import Contact from "../components/Contact"
import FormUpdate from '../components/formUpdate'
import MentoringDashboard from '../components/mentoringDashboard/metoringDashboard';

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>eMentorHub - A powerful platform for growth and mentorship at your fingertips</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main>
        {/* <Banner/>
        <SelectRole/>
        <FeaturedMentor/>
        <Blog/>
        <div className="terms-and-contact p-top-80 p-bottom-80">
          <div className="container">
            <div className="row">
              <FAQ/>
              <Contact/>
            </div>
          </div>
        </div> */}
        {/* <FormUpdate/> */}
        <MentoringDashboard/>
      </main>
    </div>
  )
}
