import './tabs.css'

/**
 * UI05-Tabs — contenedor de pestañas (node 57943:45783 en Figma). En Figma es
 * un simple "slot" horizontal (gap 0) que aloja instancias de
 * `z_fragment_tab_primary` o `z_fragment_tab_secondary`; aquí se traduce como
 * un `role="tablist"` que envuelve varios `<Tab>`.
 */
export function Tabs({ children, 'aria-label': ariaLabel, className, ...rest }) {
  const classes = ['tabs', className].filter(Boolean).join(' ')
  return (
    <div className={classes} role="tablist" aria-label={ariaLabel} {...rest}>
      {children}
    </div>
  )
}

export default Tabs
