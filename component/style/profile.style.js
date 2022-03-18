import styled from 'styled-components'
import {
  sty_labelLightL1,
  sty_labelLightL2,
  sty_labelStillL1
} from 'asset/style'

export const ProfileContainer = styled.section`
  position: absolute;
  top: 64px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${sty_labelLightL1};
  font-size: 16px;
  text-align: cneter;
`

export const ProfileUserName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: ${sty_labelLightL1};
  word-break: break-word;
  cursor: pointer;
`

export const ProfileUsernId = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${sty_labelLightL2};
  word-break: break-word;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
`

export const ProfileBlockNumber = styled.div`
  font-family: Ageo;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${sty_labelLightL1};
  margin-bottom: 2px;
`

export const ProfileBlockField = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: ${sty_labelLightL1};
`

export const ProfileDescription = styled.div`
  padding: 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  width: 100%;
  color: ${sty_labelLightL1};
  word-break: break-word;
  white-space: pre-wrap;
`

export const ProfileLocation = styled.div`
  width: 100%;
  padding: 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  width: 100%;
  color: ${sty_labelStillL1};
`
