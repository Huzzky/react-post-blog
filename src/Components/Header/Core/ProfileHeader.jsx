import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AvatarProfile } from './AvatarProfile.jsx'
import React from 'react'

const ProfileHeader = ({ authUserBoolean }) => {
  return authUserBoolean ? (
    <div className="profile">
      <div className="profile__avatar-user avatar-user">
        <AvatarProfile />
      </div>
      <div className="profile__card-user card-user">
        <p className="card-user__name">User12345</p>
      </div>
    </div>
  ) : (
    <div className="profile">
      <p className="profile__sign-in-non-auth">
        <Link to="/sign-in">Войти</Link>
      </p>
    </div>
  )
}

const mapStateToProps = ({ profileReducer }) => ({
  authUserBoolean: profileReducer.authUserBoolean,
})

export default connect(mapStateToProps, null)(ProfileHeader)
