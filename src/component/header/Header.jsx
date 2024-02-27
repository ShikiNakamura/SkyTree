import header_logo_lg from './../../img/header/header_logo_lg.png'
import header_logo_fixed from './../../img/header/header_logo_fixed.png'
import header_logo_sp from './../../img/header/header_logo_sp.jpg'
import ico_world from './../../img/header/ico_word.png'
import ico_search from './../../img/header/ico_search.png'
import tobu from './../../img/header/tobu.png'
import ico_pop from './../../img/header/ico_pop.png'
import './header.css'

function Header () {
	return <header className='header'>
		<div className='container'>
			<div className="header">
				<div className='header__control'>
				<div className='header__in1 header__in2'>
				<div className='header__logo'>
					<a href='https://www.tokyo-skytree.jp/en/' className='is-opacity'>Tokyo Skytree</a>
          <img src={header_logo_lg} alt='Sky Tree Logo'/>
					<div className='header__logo__fixed'>
						<img src={header_logo_fixed} alt='Sky Tree Logo'/>
					</div>
					<div className='header__logo__sp'>
					  <img src={header_logo_sp} alt='Sky Tree Logo'/>
					</div>
					<div className='header__tools'>
						<div className='language'>
							<img src={ico_world} alt='World' width={23} height={23}/>
              <div className='lang__menu'>
								<button className='lang'>
									<h1>LANGUAGE</h1>
								</button>
						</div>
							</div>
						<div className='search'>
							<img src={ico_search} alt='Search' width={23} height={23}/>
								<button className='search__btn'>
								<h1>Search this website</h1>
							</button>
						</div>
						<div className='tobu'>
							<img src={ico_pop} alt='Pop' width={23} height={23}/>
							<button className='tobu__bt'>
								<h1>TOBU RAILWAY</h1>
								</button>
							</div>	
							<div className="skytree__town">
								<button className='town__bt'>
									<h1>TOKYO SKYTREE TOWN</h1>
								</button>
							</div>
							<img src={tobu} alt='Tobu' width={77} height={45}/>
					</div>
					</div>
					<div className='nav'>

					</div>
					</div>
					</div>
					<div className='header__in2'>
						<div className='header__nav'>
							<ul>
								<li className='tickets'>
									<a href=""></a>
								</li>
								<li className='access'>
									<a href=""></a>
								</li>
								<li className='floor__guide'>
									<a href=""></a>
								</li>
								<li className='events'>
									<a href=""></a>
								</li>
								<li className='shop__info'>
									<a href=""></a>
								</li>
								<li className='experience'>
									<a href=""></a>
								</li>
								<li className='faq'>
									<a href=""></a>
								</li>
							</ul>
						</div>
					</div>
         </div>
				 </div>
				</header>
	
}

export default Header;
