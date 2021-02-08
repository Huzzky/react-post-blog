import { LogoHeader } from './LogoHeader'
import ProfileHeader from './ProfileHeader'

export default function Header() {
  return (
    <div>
      <div className="header__logo">
        <LogoHeader />
      </div>
      <div className="header__profile profile">
        <ProfileHeader />
      </div>
    </div>
  )
}
