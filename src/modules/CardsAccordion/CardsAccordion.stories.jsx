import { useState } from 'react'
import { CardsAccordion } from './CardsAccordion'

export default {
  title: 'Modules/Cards Accordion',
}

const ITEMS = [
  {
    collapsedTitle: 'Años de curación',
    linkLabel: 'Ver añadas',
    label: 'AÑOS DE CURACIÓN',
    titleLines: [
      { text: 'Reserva', accent: true },
      { text: 'Millésime', accent: false },
      { text: 'Vintage', accent: true },
    ],
    body: 'Los jamones Gran Reserva expresan el sabor Joselito en su forma más armoniosa: jugosos, suaves y de aromas delicados.',
    tags: ['COMPLEJIDAD', 'EQUILIBRIO', 'DULZURA'],
    duration: '4 A 6 AÑOS DE CURACIÓN',
    buttonLabel: 'Descubrir',
  },
  {
    collapsedTitle: 'Años de curación',
    linkLabel: 'Ver añadas',
    label: 'AÑOS DE CURACIÓN',
    titleLines: [
      { text: 'Gran', accent: false },
      { text: 'Reserva', accent: true },
    ],
    body: 'Piezas seleccionadas con una curación excepcionalmente larga, de sabor intenso y textura untuosa.',
    tags: ['INTENSIDAD', 'PERSISTENCIA'],
    duration: '6 A 8 AÑOS DE CURACIÓN',
    buttonLabel: 'Descubrir',
    open: false,
  },
]

function Interactive() {
  const [items, setItems] = useState(() => ITEMS.map((item, i) => ({ ...item, open: i === 0 })))

  const handleToggle = (index) => {
    setItems((prev) => prev.map((item, i) => (i === index ? { ...item, open: !item.open } : item)))
  }

  return <CardsAccordion items={items} onToggle={handleToggle} />
}

export const Default = {
  render: () => <Interactive />,
}
