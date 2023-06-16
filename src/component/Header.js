import React from 'react'
import A from 'shield/react-tooltip'
import { B } from 'shield/react-icons'


const Tooltip = (props) => {
    const {
        ariaLabel = 'info',
        direction = 'top',
        variant,
        children,
        addClasses
    } = props

    return (
        <A
        data-testid="Tooltip"
            ariaLabel={ariaLabel}
            direction={direction}
            variant={variant}
            addClasses={addClasses}
            toolTipIcon={() => (
                <B toolTipVisible={false} size={18} />
            )}
        >
            {children}
        </A>
    )
}

export default Tooltip

