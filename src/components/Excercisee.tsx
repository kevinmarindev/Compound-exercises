import { ReactNode } from 'react';
import Table from '../components/Table'
import Input from '../components/Input';



interface IExcerProps {
    excercise?: string,
    children?: ReactNode
}

const Excercisee = ({excercise} : IExcerProps) => {
  return (
    <>
        <Input></Input>
        <Table></Table>
    </>
  )
}

export default Excercisee