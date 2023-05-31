import Image from 'next/image'

export default function Home() {
  return (
    <div className='container'>
      <nav className='menu'>
        <div className='menu-item menu-left'>
          <span>about</span>
          <span>contact</span>
        </div>
        <div className='menu-item menu-center'>
          <div className='brand-logo'>AP</div>
        </div>
        <div className='menu-item menu-right'>
          <div className='search-icon'>
            <i></i>
          </div>
        </div>
      </nav>
      <div className='images'>
        <div className='img-left'></div>
        <div className='img-right'></div>
      </div>
      <div className='hero-image'>
        <div className='wrapper-img'>
          <div className='box'></div>
          <div>
            <img src="" alt="" className='image' />
          </div>
        </div>
      </div>
      <div className='header'><p className='title'>AP</p></div>
      <div className='hero-container'>
        <div className='sidebar-text'>003</div>
        <div className='projects'>projects</div>
        <div className='img-nav'>
          <div className='prev'>prev</div>
          <div className='next'>next</div>
        </div>
      </div>
    </div>
  );
}
