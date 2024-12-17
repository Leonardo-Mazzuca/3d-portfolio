import clsx from "clsx"

type Props = {
    name: string
    isBeam?: boolean

} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({name,isBeam = false,className, ...props}: Props) => {
  return (
   <button {...props} className={clsx('btn',className)}>
            {isBeam && (
                <span className="relative flex h-3 w-3">
                    <span className="btn-ping" />
                    <span className="btn-ping_dot" />
                </span>
            )}
        {name}
   </button>
  )
}

export default Button