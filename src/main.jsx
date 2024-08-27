import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
import Men from './components/Men/Men.jsx'
import { Route, RouterProvider } from 'react-router-dom'
// import Women from './components/Women/Women.jsx'
import ExerciseChest from './components/Exercise/ExerciseChest.jsx'
import ExerciseAbs from './components/Exercise/ExerciseAbs.jsx'
import ExerciseAT from './components/Exercise/ExerciseAT.jsx'
import ExerciseBiceps from './components/Exercise/ExerciseBiceps.jsx'
import ExerciseCalfs from './components/Exercise/ExerciseCalfs.jsx'
import ExerciseForearms from './components/Exercise/ExerciseForearms.jsx'
import ExerciseInnerthigh from './components/Exercise/ExerciseInnerthigh.jsx'
import ExerciseObl from './components/Exercise/ExerciseObl.jsx'
import ExerciseQuad from './components/Exercise/ExerciseQuad.jsx'
import ExerciseRear from './components/Exercise/ExerciseRear.jsx'
import ExerciseShoulder from './components/Exercise/ExerciseShoulder.jsx'
import ExerciseTraps from './components/Exercise/ExerciseTraps.jsx'
import ExerciseTriceps from './components/Exercise/ExerciseTriceps.jsx'
import ExerciseLats from './components/Exercise/ExerciseLats.jsx'
import ExerciseLowerback from './components/Exercise/ExerciseLowerback.jsx'
import ExerciseHamstring from './components/Exercise/ExerciseHamstring.jsx'
import ExerciseHip from './components/Exercise/ExerciseHip.jsx'



const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Men/>} />
      <Route path='Men' element={<Men/>} />
      {/* <Route path='Women' element={<Women/>} /> */}
      <Route path='ExerciseChest'element={<ExerciseChest/>}/>
      <Route path='ExerciseAbs'element={<ExerciseAbs/>}/>
      <Route path='ExerciseAT'element={<ExerciseAT/>}/>
      <Route path='ExerciseBiceps'element={<ExerciseBiceps/>}/>
      <Route path='ExerciseCalfs'element={<ExerciseCalfs/>}/>
      <Route path='ExerciseForearms'element={<ExerciseForearms/>}/>
      <Route path='ExerciseInnerthigh'element={<ExerciseInnerthigh/>}/>
      <Route path='ExerciseObl'element={<ExerciseObl/>}/>
      <Route path='ExerciseQuad'element={<ExerciseQuad/>}/>
      <Route path='ExerciseRear'element={<ExerciseRear/>}/>
      <Route path='ExerciseShoulder'element={<ExerciseShoulder/>}/>
      <Route path='ExerciseTraps'element={<ExerciseTraps/>}/>
      <Route path='ExerciseTriceps'element={<ExerciseTriceps/>}/>
      <Route path='ExerciseLats'element={<ExerciseLats/>}/>
      <Route path='ExerciseHip'element={<ExerciseHip/>}/>
      <Route path='ExerciseHamstring'element={<ExerciseHamstring/>}/>
      <Route path='ExerciseLowerback'element={<ExerciseLowerback/>}/>
      {/* <Route path='User/:userid' element={<User/>} /> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
