# Welcome this is your Quiz guide

------ ------ ------ ------ PROFILE ------ ------ ------ ------

this quiz example router is **/profile/!1NMGhCcD3!**

1. url: `${current url}/profile/${profileId}`.
2. Refer to API ＆ Resources, fetch API.
3. Watch design and implement RWD. [Porofile](https://www.figma.com/file/WrUZc59Z3arDWynIQqUaXI/Front-end-profile?node-id=2%3A3)
4. You can use `/util/numberFormat` to convert number to format string.
   (ex: 1000 => 1k)
5. Implement infinite scrolling for post list, like [this](https://scrollmagic.io/examples/advanced/infinite_scrolling.html):
   - You will take token to get the next post list.
   - You can use component of spinner in `/component/block/spinner`.
   - Maybe [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) will help you.
6. There are some component is available to use.

# API

### 1. PROFILE_HOST_API

#### Request info:

##### POST {base_url}/web5.0.0/post/get_user_post_list

**_BaseUrl_**
| Name | Url |
| -------- | ---------------------------------------------------- |
| base_url | https://srv2api-dev-v2-framy-stage.uc.app.playsee.co |

**_Header_**
| Name | Type | Description |
| ------------- | ------ | ----------------------------------------------------------- |
| Authorization | string | You can get **PROFILE_HOST_ENDPOINT** in `/asset/constant`. |

**_Body_**
| Name | Required | Type |
| -------------- | :------: | -------- |
| user_id | V | string |

**Example**

```
curl --request POST \
  --url 'https://srv2api-dev-v2-framy-stage.uc.app.playsee.co/web5.0.0/users/get_user_profile' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: ad52e3866ee135ff5d92545349414868#0#web' \
  --data '{
	"user_id": "!1NMGhCcD3!"
}'
```

#### Response info:

- **userId:** data.user.user_id `string`
- **userName:** data.user.name `string`
- **uid:** data.user.uid `string`
- **level:** data.user.level `number`
- **followers:** data.count.follower `number`
- **following:** data.count.following + data.count.following_hashtag + data.count.following_location `number`
- **videos:** data.count.post `number`
- **description:** data.profile.public_info.about `string`

### 2. PROFILE_LIST_HOST_API

#### Request info:

##### POST {base_url}/web5.0.0/post/get_user_post_list

**_BaseUrl_**
| Name | Url |
| -------- | ---------------------------------------------------- |
| base_url | https://srv2api-dev-v2-framy-stage.uc.app.playsee.co |

**_Header_**
| Name | Type | Description |
| ------------- | ------ | ----------------------------------------------------------- |
| Authorization | string | You can get **PROFILE_HOST_ENDPOINT** in `/asset/constant`. |

**_Body_**
| Name | Required | Type |
| ---------- | :------: | ------ |
| user_id | V | string |
| page_token | X | string |

**Example**

```
curl --request POST \
  --url 'https://srv2api-dev-v2-framy-stage.uc.app.playsee.co/web5.0.0/post/get_user_post_list' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: ad52e3866ee135ff5d92545349414868#0#web' \
  --data '{
    "user_id": "!1NMGhCcD3!",
    "page_token": ""
}'
```

#### Response info:

- **pageToken:** data.page_token `string` (you will use this to fetch next post list, if token is **"NO_MORE_DATA"** means no data more)
- **postList:** data.post_list `array`
- **coverUrl:** data.post_list[index].display_resources.cover_url `string`
- **locationName:** data.post_list[index].geo.poi.name `string`

# Resources

**userAvatar** -> https://g-usr.playsee.co/headshot/{userId}.jpg
**videoThumbnail** -> data.post_list[index].display_resources.cover_url
