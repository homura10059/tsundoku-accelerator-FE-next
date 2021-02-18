import React from 'react'
import SideBar from './SideBar'

export default {
  title: 'Design System/organisms/SideBar',
}

export const showOpen = () => <SideBar isOpen={true} setIsOpen={() => {}} />

export const showClose = () => <SideBar isOpen={false} setIsOpen={() => {}} />
