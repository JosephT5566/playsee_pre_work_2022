// api
import { ProfileApi } from 'asset/api'

// api url
import {
  PROFILE_HOST_ENDPOINT,
  PROFILE_HOST_API,
  PROFILE_LIST_HOST_API,
} from 'asset/constant'

/* choose SCSS or Styled-components */
import classes from './profile.module.scss'
// import
import {
  ProfileContainer,
  ProfileUserName,
  ProfileUsernId,
  ProfileDescription,
} from 'component/style/profile.style'
import Spinner from 'component/block/spinner'

// component
import Avatar from 'component/block/avatar'
import FollowShare from 'component/block/followShare'

import { VERIFIED_STATUS } from 'asset/constant/constant'

// constant
const headShotSize = 104

const Profile = (props) => {
  // you can get all data from these props
  const { profileInfo, profileList } = props
  console.log('Profile info', profileInfo)
  console.log('Profile list', profileList)

  const { user, profile, count } = profileInfo
  const { page_token, post_list } = profileList

  return (
    /* choose SCSS or Styled-components */
    // <section className={classes.container}>
    //   Hi candidate, you can start from here.
    //   <br />
    //   Please check README.md to get more info.
    // </section>
    <ProfileContainer>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <Avatar
          level={user.level}
          width={headShotSize}
          height={headShotSize}
          isVerified={VERIFIED_STATUS.isVerified}
          url={`https://g-usr.playsee.co/headshot/${user.user_id}.jpg`}
        />
        <ProfileUsernId>
          <ProfileUserName>{user.name}</ProfileUserName>
          <div>{user.uid}</div>
        </ProfileUsernId>
      </div>
      <FollowShare
        handleFollowClick={() => {
          console.log('share')
        }}
      />
      <ProfileDescription>{profile.public_info.about}</ProfileDescription>
      <div
        style={{
          width: '100%',
          // display: 'flex',
          // flexWrap: 'wrap',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1px',
        }}
      >
        {post_list.map((post) => (
          <div
            style={{
              // width: '200px',
              // minWidth: '300px',
              flexGrow: 1,
              height: '400px',
              overflow: 'hidden',
            }}
          >
            <img
              style={{
                width: '100%',
                height: 'inherit',
                objectPosition: 'center',
                objectFit: 'cover',
              }}
              src={post.display_resources.cover_url}
              url={'post'}
            />
          </div>
        ))}
      </div>

      <div style={{ position: 'relative' }}>
        <Spinner />
      </div>
    </ProfileContainer>
  )
}

export const getServerSideProps = async (context) => {
  // call API here
  let profileInfo = {}
  let profileList = {}
  const { query } = context
  const { profileId } = query

  const headers = { Authorization: PROFILE_HOST_ENDPOINT }

  // info
  const infoParams = {
    user_id: decodeURIComponent(profileId),
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
    page_token: '', // first page is empty
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
      profileList,
    },
  }
}

export default Profile
