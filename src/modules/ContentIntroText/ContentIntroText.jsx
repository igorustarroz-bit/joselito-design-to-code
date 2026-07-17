import './content-intro-text.css'
import { Button } from '../../components/Button/Button'

/**
 * Content / Intro text — node 58153:32094 en Figma (COMPONENT_SET con una
 * única variante `Property 1=Default`, capturada en dos anchos: 1440px
 * desktop / 390px mobile). Bloque centrado de introducción: label pequeño
 * en mayúsculas + título grande + botón terciario opcional.
 *
 * Es el primer módulo del sistema cuya instancia de botón SÍ está
 * correctamente conectada al design system (`UI02-Button` real, tipo
 * `Terciary`) — a diferencia de los botones placeholder detectados en
 * Content / Text only y Content / Text + Image.
 *
 * El tamaño del botón cambia de verdad entre breakpoints (M/56px en
 * desktop, S/48px en mobile) — como `size` de `Button` es una prop discreta
 * (no un valor CSS fluido), se renderizan las dos instancias y se oculta la
 * que no corresponde por CSS (`display:none`), mismo criterio ya usado en
 * Content / Title para su botón condicional.
 */
export function ContentIntroText({
  label = 'UN LEGADO ÚNICO',
  title = 'Seis generaciones y más de 150 años de historia han convertido el tiempo en el mayor valor de Joselito. En la misma dehesa, tradición y saber hacer dan vida a un jamón único, fruto de aquello que nunca puede acelerarse.',
  showButton = true,
  buttonText = 'NUESTRA HISTORIA',
  href,
  onClick,
  className,
  ...rest
}) {
  const classes = ['content-intro-text', className].filter(Boolean).join(' ')

  return (
    <section className={classes} {...rest}>
      <p className="content-intro-text__label">{label}</p>
      <p className="content-intro-text__title">{title}</p>
      {showButton && (
        <>
          <Button
            className="content-intro-text__button content-intro-text__button--m"
            type="terciary"
            size="m"
            text={buttonText}
            href={href}
            onClick={onClick}
          />
          <Button
            className="content-intro-text__button content-intro-text__button--s"
            type="terciary"
            size="s"
            text={buttonText}
            href={href}
            onClick={onClick}
          />
        </>
      )}
    </section>
  )
}

export default ContentIntroText
