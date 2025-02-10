import Header from "./components/Header/Header"
import WayToTeach from "./components/WayToTeach"
import TeachSection from "./components/TeachSection"
import PrimeSection from "./components/PrimeSection"
import IntroSection from "./components/introSection"
import TabsSection from "./components/TabsSection"
import FeedbackSection from "./components/FeedbackSection"
import Lesson from "./components/Lesson/Lesson"
import { useState } from "react"
import EffectSection from "./components/EffectSection"

export default function App() {
  const [visible, setVisible] = useState(true)
  const [tab, setTab] = useState('effect');
  
  // setTimeout(() => {
  //   setVisible(false)
  // }, 3000)

  return (
    <>
      {/* {visible && <Header/>} */}
      
      <Header/>
      <main> 
        <IntroSection/>
        
        <TabsSection active={tab} onChange={(current) => setTab(current)}/>
        
        {tab == 'main' && (
          <>
            <TeachSection/>
            <PrimeSection/>
          </>)}

        {tab == 'feedback' && <FeedbackSection/>}

        {tab == 'effect' && <EffectSection/>}

        {tab == 'teach' && <Lesson/>}

      </main>
    </>
  )
}