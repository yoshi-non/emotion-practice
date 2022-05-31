import { css } from '@emotion/react'

export const container = css`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 100%;
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
  background-color: white;
  z-index: 150;
`
export const logo = css`
  display: flex;
  align-items: center;
  height: 3rem;
  background-color: white;
`
export const settingBox = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const settingMine = css`
  display: flex;
  align-items: center;
  padding-left: 0.3rem;
  border-left: 1px solid #ddd;
`
export const navIconImg = css`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  background-color: white;
`
export const bell = css`
  height: 2.5rem;
  width: 2.5rem;
  border-left: 1px solid #ddd;
  background-color: white;
`


