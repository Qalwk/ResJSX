import { data } from "../data"
import WayToTeach from "./WayToTeach"

export default function TeachSection() {
    return(
        <section>
          <h3>LOL</h3>
          <ul>
            {data.map(data => <WayToTeach key={data.title} {...data}/>)}
          </ul>
        </section>
    ) 
}