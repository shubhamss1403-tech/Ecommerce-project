import React from 'react'
import Hero from '../Components/Hero.jsx'
import LatestCollection from '../Components/LatestCollection.jsx'
import BestSellers from '../Components/BestSeller.jsx'
import OurPolicies from '../Components/OurPolicies.jsx'
import NewsLetter from '../Components/NewsLetter.jsx'


function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSellers></BestSellers>
       <OurPolicies></OurPolicies>
       <NewsLetter></NewsLetter>
    </div>
  )
}

export default Home