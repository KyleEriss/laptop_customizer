import React from 'react'
import slugify from 'slugify'

import CustomizeItem from './CustomizeItem'

function CustomizeOptions(props){

    const feature= props.options.map(item=>{
            const itemHash=slugify(JSON.stringify(item))
            return(
                <CustomizeItem
                key={itemHash}
                id={itemHash}
                feature={props.name}
                itemHash={itemHash}
                item={item}
                updateFeature={props.updateFeature}
                selected={props.selected}
              />
            )
        })
    
    const {name, featureHash} = props
    return(
        <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
            <h3>{name}</h3>
        </legend>
        {feature}
        </fieldset>
    )    
}

export default CustomizeOptions