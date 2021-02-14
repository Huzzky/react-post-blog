import { shallow, render } from 'enzyme'
import { AvatarProfile } from './AvatarProfile'
import ProfileHeader from './ProfileHeader'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { BrowserRouter as Router } from 'react-router-dom'

const mockStore = configureStore()

describe('test Core Header', () => {
  it('should img', () => {
    const component = shallow(<AvatarProfile />)
    const img = component.find('.avatar-user__img')
    expect(img.length).toBe(1)
  })

  it('load unAuth user', () => {
    const initState = {
      profileReducer: { authUserBoolean: false },
    }
    const store = mockStore(initState)
    const componentUnAuthUser = render(
      <Provider store={store}>
        <Router>
          <ProfileHeader />
        </Router>
      </Provider>,
    )
    const profile = componentUnAuthUser.find('.profile__sign-in-non-auth')
    expect(profile.length).toBe(1)
  })
  it('load Auth user', () => {
    const initState = {
      profileReducer: { authUserBoolean: true },
    }
    const store = mockStore(initState)
    const componentAuthUser = render(
      <Provider store={store}>
        <Router>
          <ProfileHeader />
        </Router>
      </Provider>,
    )
    const profile = componentAuthUser.find('.profile__avatar-user')
    expect(profile.length).toBe(1)
  })
})
