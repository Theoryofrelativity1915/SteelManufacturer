import React from 'react'
import Footer from '../components/Footer'
import sourcingHeaderImg from '../assets/projects/sourcing.jpg'
import installationHeaderImg from '../assets/projects/installation.jpg'
import sitePlanningImg from '../assets/projects/siteplanning.jpg'
import sourcingImg2 from '../assets/projects/sourcingimg2.jpg'
import planningImg2 from '../assets/projects/planningimg2.jpg'
import installationImg2 from '../assets/projects/installationimg2.jpg'
import Service from '../components/Service'

function Services() {
  const text = 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.'
  return (
    <div>
      <Service img1={sourcingHeaderImg} img2={sourcingImg2} header={"Sourcing"} txt={text} />
      <Service img1={sitePlanningImg} img2={planningImg2} header={"Site Planning"} txt={text} alternate={true} />
      <Service img1={installationHeaderImg} img2={installationImg2} header={"Installation"} txt={text} />
      <Footer />
    </div>
  )
}

export default Services
