import './placeholder-text.css'

/**
 * UI14-Placeholder-Text — node 57961:792 en Figma. Párrafo de texto
 * genérico (Body/02), pensado como contenido "de relleno" reutilizable
 * dentro de módulos y plantillas (p. ej. texto de introducción, descripción
 * corta) donde no hace falta un componente de texto más específico.
 *
 * `as` permite renderizar un elemento distinto de `<p>` (p. ej. `span`)
 * cuando el contexto semántico del módulo que lo use lo requiera.
 */
export function PlaceholderText({ text = 'Text', as: Component = 'p', className, ...rest }) {
  const classes = ['placeholder-text', className].filter(Boolean).join(' ')
  return (
    <Component className={classes} {...rest}>
      {text}
    </Component>
  )
}

export default PlaceholderText
