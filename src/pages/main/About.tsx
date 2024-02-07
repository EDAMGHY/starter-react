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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        eligendi magnam expedita praesentium debitis tenetur modi quo totam
        quasi nesciunt. Cupiditate, laudantium aut assumenda modi vitae nemo,
        blanditiis consequuntur, doloribus velit debitis libero provident quidem
        inventore. Earum, voluptatibus officia? Eos, asperiores. At animi vero
        perferendis facilis dolorum blanditiis fuga, eum impedit illum sunt,
        consectetur odio eius magnam provident laborum quos laboriosam modi
        aliquid deserunt? Eius sunt tenetur nam obcaecati fugiat nisi nihil
        quibusdam excepturi exercitationem! Quia iusto nobis aperiam saepe
        beatae. Aperiam ducimus, id omnis nobis velit assumenda sapiente impedit
        iste hic vitae repellendus quam reiciendis eius rem dolores libero
        provident unde, magni, totam voluptatum fuga amet? Recusandae cumque
        earum ex! Vitae minus, aspernatur explicabo cupiditate beatae
        consequatur et esse odio at, ea cumque error velit amet maxime sunt
        tempore doloribus natus dicta fugiat animi. Laboriosam, velit odit! Nisi
        nulla ex, nobis animi perferendis facilis aut porro doloremque fugiat,
        voluptatum non, nesciunt tenetur assumenda praesentium maxime dolores
        officia laudantium consequatur. Consequuntur iste est natus eaque
        necessitatibus. Temporibus quibusdam consequatur ea, libero corrupti
        fugit ipsam magni repellat dolore at, dolorem minus ipsum quasi est
        neque mollitia, ratione aperiam magnam sed ex sapiente porro. Dolorum
        dolore ex enim ipsa eligendi, sequi aut vitae corporis illo officiis id
        molestias aliquid dolores iusto est voluptas, reprehenderit eaque
        repellendus provident esse unde! Officiis, sed nisi eveniet cum fugit
        nihil expedita, eaque hic qui doloremque eos ut! Expedita eius non
        eligendi eveniet ipsum blanditiis, illo mollitia iure odio sunt
        accusantium corrupti. Possimus blanditiis beatae quidem sint ab enim
        deleniti necessitatibus nesciunt omnis asperiores quasi, ratione
        deserunt fugit architecto molestias obcaecati incidunt, quo maxime
        accusamus quisquam ex pariatur! Voluptatum est quod atque vero ipsam
        quasi possimus, quibusdam cupiditate non dolorum magnam nemo harum
        perferendis minima autem consequatur quia deserunt illo qui voluptatem
        delectus eos neque alias? Dolorem qui ullam laborum, hic magni
        exercitationem facere placeat, earum consequuntur optio, consequatur
        iure accusamus voluptates porro corrupti! Obcaecati nobis velit aperiam
        ea! Veniam alias vel facere error. Minima, qui labore distinctio tempore
        omnis iste libero sed inventore nisi quo, ducimus vitae voluptas cum
        cupiditate, fugit aliquid reprehenderit voluptatem deleniti obcaecati
        laudantium. Maiores fugit quo iste numquam architecto harum rem, cum
        laboriosam culpa, optio similique porro ullam tempore eaque ad, quos
        amet magni esse ducimus aliquid quidem assumenda ipsum consequuntur
        consectetur. Inventore itaque neque consequatur vel. Voluptate
        necessitatibus cum dignissimos amet. Commodi, placeat? Dolor, suscipit
        voluptates nobis aliquid facilis quos illum quisquam quibusdam soluta
        veritatis dolore laboriosam sit dolorum a itaque accusamus nemo
        repellendus molestiae, animi aut quasi! Dolor, veniam necessitatibus?
        Illum natus aliquam velit, vel sequi nulla nisi soluta, cum reiciendis
        libero blanditiis pariatur dolorum sed laborum minima temporibus.
        Nostrum assumenda adipisci sed, odio autem enim, tempore earum
        perspiciatis quis consequatur aspernatur id illum debitis asperiores
        sequi. Corrupti consectetur officia tempore doloribus perferendis ex
        deserunt optio accusamus, architecto temporibus distinctio, illum
        pariatur natus. Officia, sint nostrum corrupti a possimus ad consectetur
        laboriosam molestias minus perspiciatis at in temporibus voluptatem et
        quos repellat quo molestiae dolorem praesentium voluptatum odit eum
        nesciunt.
      </p>
    </div>
  )
}
