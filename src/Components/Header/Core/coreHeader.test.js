import { shallow, render } from 'enzyme'
import { AvatarProfile } from './AvatarProfile'
import ProfileHeader from './ProfileHeader'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

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
    const component2 = render(
      <Provider store={store}>
        <ProfileHeader />
      </Provider>,
    )
    const profile = component2.find('.profile__sign-in-non-auth')
    expect(profile.length).toBe(1)
  })
})
