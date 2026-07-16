import { useState } from 'react'
import { Accordion } from './Accordion'
import { AccordionItem } from './AccordionItem'

export default {
  title: 'Components/Accordion',
}

const ITEMS = [
  {
    text: 'Item uno',
    content:
      'Joselito ofrece, a través de sus Entidades Emisoras, una amplia gama de tarjetas que van acompañadas de las marcas internacionales de mayor aceptación.',
  },
  {
    text: 'Item dos',
    content: 'Los beneficios añadidos a las tarjetas Joselito las convierten en uno de los medios de pago más útiles del mercado.',
  },
  {
    text: 'Item tres',
    content: 'Contenido de ejemplo para el tercer elemento del acordeón.',
  },
]

function DemoAccordion() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <Accordion aria-label="Preguntas frecuentes">
      {ITEMS.map((item, i) => (
        <AccordionItem
          key={i}
          text={item.text}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export const Default = {
  render: () => <DemoAccordion />,
}

export const ItemClosed = {
  render: () => <AccordionItem text="Item">Contenido oculto</AccordionItem>,
}

export const ItemOpen = {
  render: () => (
    <AccordionItem text="Item" open onToggle={() => {}}>
      Joselito ofrece, a través de sus Entidades Emisoras, una amplia gama de tarjetas que van acompañadas de las marcas internacionales de mayor aceptación.
    </AccordionItem>
  ),
}
