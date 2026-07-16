import { PlaceholderText } from './PlaceholderText'

export default {
  title: 'Components/Placeholder Text',
}

export const Default = {
  render: () => <PlaceholderText />,
}

export const CustomText = {
  render: () => (
    <PlaceholderText text="Joselito ofrece, a través de sus Entidades Emisoras, una amplia gama de tarjetas que van acompañadas de las marcas internacionales de mayor aceptación." />
  ),
}

export const AsSpan = {
  render: () => <PlaceholderText as="span" text="Texto como span en línea" />,
}
