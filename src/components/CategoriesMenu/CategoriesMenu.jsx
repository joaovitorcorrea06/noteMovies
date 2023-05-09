import "./CategoriesMenu.css"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Slider from "react-slick"
import CardGeneroMenu from '../CardGeneroMenu/CardGeneroMenu'

const CategoriesMenu = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  }
  return (
    <div className="div-menu">
      <div className="categ-menu">
        {/* <h1>Categorias</h1> */}

        <Slider {...settings}>
          <div className="list-card">
            <h3>Ação</h3>
            
            <CardGeneroMenu nome={'teste'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>

          </div>
          <div className="list-card">
            <h3>Ficção</h3>

            <CardGeneroMenu nome={'teste'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
          </div>
          <div className="list-card">
            <h3>Suspense</h3>

            <CardGeneroMenu nome={'teste'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
          </div>
          <div className="list-card">
            <h3>Terror</h3>

            <CardGeneroMenu nome={'teste'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
          </div>
          <div className="list-card">
            <h3>Animação</h3>

            <CardGeneroMenu nome={'teste'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
          </div>
          <div className="list-card">
            <h3>Aventura</h3>
            
            <CardGeneroMenu nome={'teste'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
            <CardGeneroMenu nome={'teste 2'}/>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default CategoriesMenu
