import header_logo_lg from './../../img/header/header_logo_lg.png'
import header_logo_fixed from './../../img/header/header_logo_fixed.png'
import header_logo_sp from './../../img/header/header_logo_sp.jpg'
import ico_world from './../../img/header/ico_word.png'
import ico_search from './../../img/header/ico_search.png'
import './header.css'

function Header () {
	return <header className='header'>
		<div className='container'>
			<div className="header">
				<div className='header__control'>
				<div className='header__in1'>
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
							<img src='{ico__world}' alt='World'/>
							<h1>LANGUAGE</h1>
							<ul className='header__list__lang'>
								<li>
									<a className='日本語' href='https://www.tokyo-skytree.jp/'></a>
								</li>
								<li>
									<a className='English' href='https://www.tokyo-skytree.jp/en/'></a>
								</li>
							</ul>
						</div>
						<div className='search'>
							<img src='{ico__search}' alt='Search' width={48} height={44}/>
						</div>				
					</div>
					</div>
					</div>
					</div>
					
					<div className='header__nav'>
					<div className='header__in2'></div>
					</div>

				  </div>
					</div>
		</header>
	
}

export default Header;
