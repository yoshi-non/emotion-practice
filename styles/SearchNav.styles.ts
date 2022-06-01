import { css } from '@emotion/react'

export const container = css`
  display: flex;
  align-items: flex-end;
  font-size: 1.1rem;
  font-weight: 600;
  gap: 40px;
  padding-top: 30px;
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
  box-shadow: inset 0 -1px 0 hsla(210,18%,87%,1);
`

export const navTitle = css`
  font-size: 1.4rem;
  font-weight: 800;
`

export const button = css`
  cursor: pointer;
  display: flex;
  gap: 20px;
  color: #24292f;
`

export const navSort = css`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const searchForm = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px 0 0 2px;
  height: 40px;
  width: 400px;
`

export const searchBox = css`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  padding: 2px 6px ;
  margin-right: 1px;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 2px #eee;
  &:focus-visible {
      outline: 1px solid #1c62b9;
  }
`

export const searchIcon = css`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid #d3d3d3;
  border-left: none;
`