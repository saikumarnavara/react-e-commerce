import React from 'react'
import { SortTitle } from '../../../Utils/Utils'
const MenCards = (props) => {
    console.log('eee', props.data)
    return (
        <div style={{ marginTop: '140px' }}>
            <h1 class='text-center text-success '>Men's Fashion</h1>
            <div class='container'>
                <div class='row'>

                    {props?.data?.map((item) => (
                        <div key={item.id} class='col md-4 '>
                            <div class='card mb-3 d-flex align-items-center justify-content-center shadow' >
                                <img src={item.thumbnail} class="card-img-top" alt={item.title} style={{ height: '200px', width: '200px' }} />
                                <div class='card-body text-center'>
                                    <h6 class='card-title'>
                                        {item.brand}</h6>
                                    <h6 class='card-text'>{SortTitle(item.title)}</h6>
                                    <p class='card-text'>
                                        ${item.price}
                                    </p>
                                    <p class='card-text'>

                                        {item.rating}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>


            </div>
        </div>
    )
}

export default MenCards
