import { classNames } from '../../utils/classNames'

export function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={classNames('btn', `btn--${variant}`, `btn--${size}`, className)}
      {...props}
    >
      {children}
    </Component>
  )
}
