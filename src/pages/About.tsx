import { Button } from "@/ui"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks"
import { RootState } from "@/app/redux/store"
import {
  fetchData,
  increment,
  decrement,
} from "@/features/counter/counterSlice"
import { useEffect } from "react"

export const About: React.FC = () => {
  const dispatch = useAppDispatch()
  const { data, value, error, loading } = useAppSelector(
    (state: RootState) => state.counter,
  )

  console.log("counterValue", data, value, error, loading)

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div>
      <p>Counter Value: {value}</p>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
  )
}
