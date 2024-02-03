import { Checkbox, Input } from "@/ui"
import { useState } from "react"

export const Home = () => {
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <h1>Input</h1>
      <div className="p-4 flex flex-wrap gap-4">
        <Input name="Name" placeholder={"Enter Name"} />
        <Input name="Name" placeholder={"Enter Name"} variant="transparent" />
        <Input name="Name" placeholder={"Enter Name"} variant="underline" />
        <Checkbox
          checked={checked}
          setChecked={val => {
            setChecked(val.target?.checked)
            console.log("val", val.target?.checked)
          }}
          label={"Gender"}
          variant="default"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odit
        cumque praesentium enim? Eum harum ea, sequi esse neque, perspiciatis
        consequatur sunt excepturi vero voluptatum officiis. Asperiores placeat
        eaque voluptatum aliquam voluptatem blanditiis. Quis voluptate adipisci
        nam officia dolorum voluptatum, quibusdam earum molestias saepe, id
        reiciendis temporibus mollitia quasi explicabo amet esse. Dolore rerum
        facere, debitis veritatis vel quia aliquid deserunt quis natus ut
        eligendi eos error obcaecati, porro eaque repellat perspiciatis nam
        quidem temporibus sit, in cum nobis quo incidunt! Dolores mollitia amet
        nam tempore debitis. Nemo nihil quod ipsa harum non tenetur delectus
        rerum consequatur distinctio ex, enim placeat at. Temporibus ullam eaque
        mollitia dolore porro culpa, assumenda sit accusantium similique. In
        minima dolores excepturi libero voluptate aliquam temporibus?
        Consequatur doloribus vitae sed maxime repellat architecto molestiae
        officia temporibus, quos tenetur labore inventore non est sint dicta
        amet quidem? Animi earum, necessitatibus ullam consequuntur dolores,
        quas nobis totam perferendis cupiditate ab cum sunt vitae, sapiente odio
        pariatur? A, asperiores inventore velit eaque dolorum ipsa quibusdam
        facere quia. Eveniet laborum eos inventore magnam ab temporibus sequi
        rem ea, eius animi illum consequatur veniam corporis quos impedit
        similique. Expedita, dolore odio asperiores non ullam tempore molestiae
        vel enim quasi illum velit inventore voluptatum hic accusantium, esse
        repudiandae et quae. Incidunt suscipit accusamus error odio ullam.
        Velit, laboriosam voluptatem. Sunt enim voluptas facilis ab libero
        dolores dolorem? Harum laboriosam fugiat ea doloribus tempore nostrum
        voluptatibus quos, ipsam architecto id repellendus? Blanditiis quod
        dolores alias ducimus. Numquam quidem, saepe tempore obcaecati rerum
        placeat vero. Quos, consequuntur! Harum maxime sint expedita quo
        provident, dicta rerum animi assumenda perspiciatis dolore numquam odio
        quaerat sit commodi nisi quos! Hic facere expedita illo molestias quod
        minima animi dignissimos minus doloremque. Officiis, veniam sit magni
        neque nemo cumque exercitationem nihil, voluptatum id vero provident
        nisi similique. Earum assumenda ab dicta quisquam facere deleniti
        tempora quibusdam quis ea est, placeat laudantium quo? Atque a odio
        exercitationem. Molestias adipisci quae est ex accusamus distinctio
        facilis ut? Est odio provident quaerat quas beatae, quos ipsa ipsum
        eaque non, quae ex repellat maxime harum eum vero, architecto
        laudantium. Fugiat eius vitae quidem saepe enim! At id suscipit unde
        corrupti necessitatibus accusamus placeat, porro rem ut ducimus
        temporibus aspernatur, facilis nesciunt laboriosam sapiente? Voluptatem
        repellendus vel qui culpa a ratione corporis non dignissimos eveniet
        voluptatum assumenda enim nesciunt nemo libero doloremque quae, eligendi
        fuga odit in cupiditate numquam asperiores beatae. Maxime inventore
        rerum repellat alias molestiae perspiciatis tenetur, facilis eos sed,
        magnam, similique voluptatibus expedita iste eum placeat amet sequi vel?
        Sint sit qui fugiat, a quas quisquam fuga earum. Ipsum adipisci aperiam
        culpa exercitationem illo distinctio, molestiae ex voluptas veniam
        deserunt expedita dolores ducimus? Aliquid vel eius dolorem obcaecati
        molestiae, beatae eveniet vitae esse officia quisquam repellendus libero
        fuga, sint laudantium reiciendis ipsum non dolores nulla blanditiis
        earum a eligendi assumenda quam odio. Reiciendis adipisci debitis
        nostrum voluptatum vero commodi in consectetur porro, velit, illo nulla
        aliquid aperiam est ullam amet ipsum at ipsa nam delectus ut dolorem
        laboriosam architecto. Possimus.
      </p>
    </div>
  )
}
