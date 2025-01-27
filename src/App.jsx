/* eslint-disable react/jsx-no-undef */
 
import { AlertClock } from "./AlertClock"
import { MouseClicker } from "./MouseClicker"
 
import { MyForm } from "./MyForm"
import { MyList } from "./MyList"
import { MyUncontrolledForm } from "./MyUncontrolledForm"
import { Welcome } from "./Welcome"

//compongo piu componenti, creo un componente che utilizza jsx 
//per eseguire il rendering di un altro componente 
//creo quindi un albero di componenti
export function App() {
    return (
        <div>
            <h1>My Awesome Application</h1>
            <hr/>
        <Welcome name="Jimmy" age = {40}/>
        <Welcome name="Kate" age = {20}/>

        <Counter initialVAlue = {42}/>

        <AlertClock ></AlertClock>

        <Clock />

        <MouseClicker />
      
        <MyForm />

        <MyList items= {[
            {id: 1, name: 'Jane', age:33},
            {id: 2, name: 'Kate', age:20},
            {id: 3, name: 'Jhon',age:40},
            {id: 4, name: 'Billy', age:55},
            {id: 5, name: 'Jane', age:42},
        ]}></MyList>

        <Color></Color>



        </div>
    )
}