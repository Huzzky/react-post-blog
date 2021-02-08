import { connect } from 'react-redux'

const ProfileHeader = ({ authUserBoolean }) => {
  return authUserBoolean ? (
    <div className="profile">
      <div className="profile__avatar-user avatar-user">
        <img src="" alt="avatar" className="avatar-user__img" />
        {/* TODO сделать отдельное ядро  */}
      </div>
      <div className="profile__card-user card-user">
        <p className="card-user__name">User12345</p>
      </div>
    </div>
  ) : (
    <div className="profile">
      <p className="profile__sign-in-non-auth">
        <a href="sign-in">Войти</a>
        {/* TODO сделать ссылку в виде Link через router на Sign-In,а также сделать страницу SignIn */}
      </p>
    </div>
  )
}

const mapStateToProps = ({ profileReducer }) => ({
  authUserBoolean: profileReducer.authUserBoolean,
})

export default connect(mapStateToProps, null)(ProfileHeader)
