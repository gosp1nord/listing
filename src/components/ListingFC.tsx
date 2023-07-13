import { ProductCard } from './models';

type TCards = {
  items: ProductCard[]
};
type TCard = {
  item: ProductCard
};

export const Listing = ({items}: TCards) => {
  const arrProducts = items;
  const arrResult: React.ReactElement[] = [];
  
  arrProducts.forEach(element => {
    arrResult.push(<Card key={element.listing_id} item={element} />)
  });
  
  return (
    <div className="item-list">
      {arrResult}
    </div>
  )
}

const Card = ({item}: TCard) => {
  let title = item.title || '';
  if (item.title && item.title.length > 50) {
    title = item.title.slice(0, 49) + '...';
  }
  let price = item.price || '';
  if (item.price && item.currency_code) {
    if (item.currency_code === 'USD') {
      price = `$${item.price}`
    } else if (item.currency_code === 'EUR') {
      price = `€${item.price}`
    } else {
      price = `${item.price}${item.currency_code}`
    }
  }
  let quantity = item.quantity || 0;
  let quantityClass = '';
  if (quantity < 11) {
    quantityClass = 'level-low';
  } else if (quantity < 21) {
    quantityClass = 'level-medium';
  } else {
    quantityClass = 'level-high';
  }
  let urlImage = '';
  if (item.MainImage && item.MainImage.url_570xN) {
    urlImage = item.MainImage.url_570xN
  }
  let urlCard = '#'
  if (item.url) {
    urlCard = item.url
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={urlCard}>
          <img src={urlImage} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{price}</p>
        <p className={"item-quantity " + quantityClass}>{quantity} left</p>
      </div>
    </div>
  )
}
