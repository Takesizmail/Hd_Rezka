import React from 'react'
import './item-details.css'
import iconDownload from './icon.png'
const ItemDetails = ({itemData}) =>{
    const {title,image,text} = itemData;

    return(
        <div className='main-item-details'>
            <div className='about-items'>
                <div className='item-image'>
                    <img src={image} alt="ing"/>
                </div>
                <div className='item-text'>
                    <div >
                    <h1>{title}</h1>
                    <div className='season-data-upload'>
                        <span className='numberSeason'>S09</span>
                        <span> <i className="fas fa-calendar-week">

                        </i> Добавлено 16 ноября 2019</span>
                    </div>
                    </div>
                    <div className='name-production-movie'>
                    <div className='title-name'>
                        <p>{title}</p>
                    </div>
                    <div className='country-production'>
                        USA
                    </div>
                    <div className='king-movie'>
                        <p>{text}</p>
                    </div>
                    <div className='danger'>
                        <strong>Внимание!</strong> В переводе присутствует <span className='lower-underscore'>ненормативная лексика</span>!
                    </div>
                    </div>
                </div>
            </div>
            <div className='item-download'>
                <div className='title-download'>{title} - скачать через торрент : </div>
                <div className='pixels-movie'>
                    <div className='pixels-movie-icon'>
                        <img src={iconDownload} alt="icon"/>
                    </div>

                        <span>1080p</span>
                    <div className='moon'></div>
                    <span>720</span>
                    <div className='moon'></div>
                    <span>SD</span>

                </div>
            </div>

        </div>
    )
};
export default ItemDetails