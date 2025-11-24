import { MaxSizeContainer } from "../max-size-container/max-size-container"
import { SafeContainer } from "../safe-container/safe-container"
import { ContainerProps } from "./props"

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  outsideClassName,
  ...rest
}) => {
  return (
    <SafeContainer className="bg-white">
      <MaxSizeContainer outsideClassName={outsideClassName} className={className} {...rest}>
        {children}
      </MaxSizeContainer>
    </SafeContainer>
  )
}
