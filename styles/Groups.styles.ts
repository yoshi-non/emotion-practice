import { css } from '@emotion/react'

export const container = css`
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 15px;
  place-items: center;
  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`
export const groupItem = css`
  height: 250px;
  width: 304px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
  padding: 2px;
  border-radius: 5px;
  cursor: pointer;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  @media (min-width: 640px) {
    &:hover {
      transform: scale(1.05);
      z-index: 50;
    }
  }
`

export const groupItemIconImg = css`
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
  height: 150px;
`

export const groupItemInformations = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-box-pack: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  width: 100%;
  height: 80px;
  font-size: 0.8rem;
  padding: 0 16px;
  z-index: 100;
`

export const groupItemInformationName = css`
`

export const groupItemInformationStatus = css`
  display: flex;
  align-items: center;
  gap: 5px;
`
