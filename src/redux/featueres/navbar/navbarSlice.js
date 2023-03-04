import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  isDropdownMenuOpen: false,
  isImageResized: false,
  isSearchOpen: false,
  isMenuOpen: false,
  isLinksOpen: false,
}

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    openMenu: (state) => {
      state.isMenuOpen = true
    },
    closeMenu: (state) => {
      state.isMenuOpen = false
    },
    openLink: (state) => {
      state.isLinksOpen = true
    },
    closeLink: (state) => {
      state.isLinksOpen = false
    },
    resizeImage: (state) => {
      state.isImageResized = true
    },
    notResizeImage: (state) => {
      state.isImageResized = false
    },
    openDropdownMenu: (state) => {
      state.isDropdownMenuOpen = true
    },
    closeDropdownMenu: (state) => {
      state.isDropdownMenuOpen = false
    },
    toggleDropdownMenu: (state) => {
      state.isDropdownMenuOpen = !state.isDropdownMenuOpen
    },
    openSearch: (state) => {
      state.isSearchOpen = true
    },
    closeSearch: (state) => {
      state.isSearchOpen = false
    },
  },
})

console.log(navbarSlice)

export const {
  openMenu,
  closeMenu,
  toggleMenu,
  openLink,
  resizeImage,
  notResizeImage,
  isImageResized,
  isDropdownMenuOpen,
  openDropdownMenu,
  closeDropdownMenu,
  isSearchOpen,
  openSearch,
  closeSearch,
  toggleDropdownMenu,
} = navbarSlice.actions
export default navbarSlice.reducer
