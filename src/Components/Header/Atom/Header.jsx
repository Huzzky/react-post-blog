import { LogoHeader } from '../Core/LogoHeader'
import ProfileHeader from '../Core/ProfileHeader'

export default function Header() {
  return (
    <div>
      <div className="header__logo">
        <LogoHeader />
      </div>
      <div className="header__profile">
        <ProfileHeader />
      </div>
    </div>
  )
}
