import './navigation-previous-next.css'
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon'
import { Icon } from '../../components/Icon/Icon'

/**
 * Navigation / PreviousNext — node 58084:30111 en Figma (COMPONENT_SET:
 * Device=desktop/mobile). Barra de paginación anterior/siguiente a todo el
 * ancho. Reutiliza `ButtonIcon` (UI03, `secondary`/`l`) tal cual, instancia
 * real de Figma en ambas variantes. Ver navigation-previous-next.css para el
 * detalle de tokens/grid.
 */
export function NavigationPreviousNext({
  previousLabel = 'Anterior',
  nextLabel = 'Siguiente',
  previousHref,
  nextHref,
  onPrevious,
  onNext,
  disablePrevious = false,
  disableNext = false,
  className,
  ...rest
}) {
  const classes = ['navigation-previous-next', className].filter(Boolean).join(' ')

  return (
    <nav className={classes} aria-label="Paginación" {...rest}>
      <div className="navigation-previous-next__side navigation-previous-next__side--previous">
        <ButtonIcon
          type="secondary"
          size="l"
          icon={<Icon name="ArrowLeft" size="m" />}
          aria-label={previousLabel}
          href={previousHref}
          onClick={onPrevious}
          disabled={disablePrevious}
        />
        <span className="navigation-previous-next__label">{previousLabel}</span>
      </div>

      <div className="navigation-previous-next__side navigation-previous-next__side--next">
        <span className="navigation-previous-next__label">{nextLabel}</span>
        <ButtonIcon
          type="secondary"
          size="l"
          icon={<Icon name="ArrowRight" size="m" />}
          aria-label={nextLabel}
          href={nextHref}
          onClick={onNext}
          disabled={disableNext}
        />
      </div>
    </nav>
  )
}

export default NavigationPreviousNext
