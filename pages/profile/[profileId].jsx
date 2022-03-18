// api
import { ProfileApi } from 'asset/api'

// api url
import {
  PROFILE_HOST_ENDPOINT,
  PROFILE_HOST_API,
  PROFILE_LIST_HOST_API
} from 'asset/constant'

/* choose SCSS or Styled-components */
import classes from './profile.module.scss'
// import { ProfileContainer } from 'component/style/profile.style'

// component
// import Avatar from 'component/block/avatar'
// import FollowShare from 'component/block/followShare'

// constant
// const headShotSize = 104

const Profile = props => {
  // you can get all data from these props
  const { profileInfo, profileList } = props
  console.log('Profile', profileInfo, profileList)

  return (
    /* choose SCSS or Styled-components */
    <section className={classes.container}>
      Hi candidate, you can start from here.
      <br />
      Please check README.md to get more info.
    </section>
    // <ProfileContainer>
    //   Hi candidate, you can start from here
    //   <br />
    //   check README.md to get more info
    // </ProfileContainer>
  )
}

export const getServerSideProps = async context => {
  // call API here
  let profileInfo = {}
  let profileList = {}
  const { query } = context
  const { profileId } = query

  const headers = { Authorization: PROFILE_HOST_ENDPOINT }

  // info
  const infoParams = {
    user_id: decodeURIComponent(profileId)
  }

  try {
    const url = PROFILE_HOST_API
    const { data } = await ProfileApi.post(url, infoParams, { headers })
    if (!data.error && data) {
      profileInfo = data
    } else {
      throw console.log(`error: ${data.error?.code}`)
    }
  } catch (error) {
    console.log(`error`, error)
  }

  // list
  const listParams = {
    user_id: decodeURIComponent(profileId),
    page_token: '' // first page is empty
  }

  try {
    const url = PROFILE_LIST_HOST_API
    const { data } = await ProfileApi.post(url, listParams, { headers })
    if (!data.error && data) {
      profileList = data
    } else {
      throw console.log(`hashtagError: ${data.error?.code}`)
    }
  } catch (error) {
    console.log(`error`, error)
  }

  return {
    props: {
      // the response data
      profileInfo,
      profileList
    }
  }
}

export default Profile
