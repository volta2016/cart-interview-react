Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@volta2016 
midudev
/
aprendiendo-react
Public
Fork your own copy of midudev/aprendiendo-react
Code
Issues
2
Pull requests
Actions
Security
Insights
aprendiendo-react/projects/06-shopping-cart/src/components/Icons.jsx /
@midudev
midudev Init Project 06
Latest commit 0438614 3 weeks ago
 History
 1 contributor
51 lines (48 sloc)  2.1 KB

export function AddToCartIcon () {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 17h-11v-14h-2' />
      <path d='M6 5l6 .429m7.138 6.573l-.143 1h-13' />
      <path d='M15 6h6m-3 -3v6' />
    </svg>
  )
}

export function RemoveFromCartIcon () {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 17h-11v-14h-2' />
      <path d='M6 5l8 .571m5.43 4.43l-.429 3h-13' />
      <path d='M17 3l4 4' />
      <path d='M21 3l-4 4' />
    </svg>
  )
}

export function ClearCartIcon () {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 17a2 2 0 1 0 2 2' />
      <path d='M17 17h-11v-11' />
      <path d='M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7' />
      <path d='M3 3l18 18' />
    </svg>
  )
}

export function CartIcon () {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 17h-11v-14h-2' />
      <path d='M6 5l14 1l-1 7h-13' />
    </svg>
  )
}
