import { classNames } from '../../utils/classNames'

export function Container({ as: Component = 'div', className, children }) {
  return (
    <Component className={classNames('container', className)}>
      {children}
    </Component>
  )
}
