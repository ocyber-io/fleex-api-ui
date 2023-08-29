import LOGO from '../assets/Images/Images.svg'
import { Link } from 'react-router-dom'

const Header = (): JSX.Element => {
  return (
    <>
      <div className="bg-white">
        <div className="w-container m-auto">
          <div className="flex items-center justify-between py-2.5">
            <div className="flex items-center gap-2.5">
              <img src={LOGO} alt="logo" />
              <h1 className="text-2xl font-bold leading-7 text-black">
                <span className="text-2xl font-bold leading-7 text-pink">FLEEX</span> STREAMER{' '}
              </h1>
            </div>
            <div className="flex items-center gap-8">
              <Link to="/home" className="text-base font-medium text-black">
                Create Input
              </Link>
              <Link to="/create-output" className="text-base font-medium text-black">
                Create Output
              </Link>
              <Link to="/" className="text-base font-medium text-black">
                Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
