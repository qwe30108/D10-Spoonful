function BlacklistFavoriteItem({ item }) {
  const { title, shopName, images } = item;

  return (
    <div className='card mb-3 border-0'>
      <div className='row g-0 py-32 border-bottom'>
        <div className='col-md-4'>
          <div className='img-container rounded' style={{ backgroundImage: `url(${images})` }}></div>
        </div>
        <div className='col-md-8 d-flex flex-row justify-content-between align-items-center'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>
              <img src='../src/assets/images/icon/shop.png' alt='shop icon' />
              <small className='text-muted ms-1'>{shopName}</small>
            </p>
          </div>
          <div className='col-md-1 d-flex align-items-center'>
            <button type='button' className='all-unset'>
              <div className='delete-button'>
                <img src='../src/assets/images/icon/delete.png' alt='delete icon' />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlacklistFavoriteItem;
