import './App.css';
import Card from './components/Card'
import  Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import HeadBar from './components/HeadBar';
import Excercisee from './components/Excercisee';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router >

      <HeadBar/>

      <Routes>
        <Route path='/' element={
          <Container sx={{ borderRadius: '10px', backgroundColor:'RGB(34,34,34)'}}>
            <Grid container spacing={2} rowSpacing={{xs: 0, sm: 5}}>
              <Card excercise={'Deadlift'}/>
              <Card excercise={'Squat'}/>
              <Card excercise={'Bench Press'}/>
              <Card excercise={'Overhead Press'}/>
            </Grid>
          </Container>
        }>
        </Route>
        <Route path='/deadlift' element={<Excercisee excercise={'Deadlift'}/>}></Route>
        <Route path='/squat' element={<Excercisee excercise={'squat'}/>}></Route>
        <Route path='/benchpress' element={<Excercisee excercise={'bench press'}/>}></Route>
        <Route path='/overheadpress' element={<Excercisee excercise={'overhead press'}/>}></Route>

        <Route path='*' element={<Navigate to={'/'}/>}></Route>
       
      </Routes>

    </Router>
  );
}

export default App;
